import React, { useState } from 'react';
import { mrtStations } from '../utils/mrtStationsData'
import { findMidpointCandidates } from '../utils/calculator'

function Home() {
  const initialOriginId = mrtStations[0].id
  const [originIds, setOriginIds] = useState([initialOriginId, initialOriginId])
  const [results, setResults] = useState([])
  const isBelowMaxOrigins = originIds.length < 8
  const isAboveMinOrigins = originIds.length > 2

  function handleChange(index, event) {
    const newOriginIds = originIds
    const newId = event.target.value
    newOriginIds[index] = newId
    setOriginIds(originIds)
  }

  function handleSubmit() {
    setResults(findMidpointCandidates(originIds))
    event.preventDefault()
  }

  function handleAddPerson() {
    if (isBelowMaxOrigins) {
      setOriginIds([...originIds, initialOriginId])
    }
  }

  function handleRemovePerson() {
    if (isAboveMinOrigins) {
      setOriginIds(originIds.slice(0, originIds.length - 1))
    }
  }

  function getStationName(stationId) {
    return mrtStations.find(mrtStation => mrtStation.id === stationId).name
  }

  return (
    <div className="home">
      <h1><font color="red">M</font>idp<font color="red">r</font>oin<font color="red">t</font> - Find Midpoint of MRT stations</h1>
      {originIds.map((originId, index) => {
        return (
          <label className="origin-label" key={index}>
            {`Person ${index + 1} Starting Station: `}
            <select onChange={(event) => handleChange(index, event)}>
              {mrtStations.map((mrtStation) => {
                const fullName = mrtStation.id + " " + mrtStation.name
                return <option key={fullName} value={mrtStation.id}>{fullName}</option>
              })}
            </select>
          </label>
        )
      })}
      {isBelowMaxOrigins && <button className="button" onClick={handleAddPerson}>Add Person</button>}
      {isAboveMinOrigins && <button className="button" onClick={handleRemovePerson}>Remove Person</button>}
      <button className="button" onClick={handleSubmit}>Find Midpoint!</button>
      <ol>
        {results.slice(0, 5).map(result => {
          return (<li>{
            `${result.stationId} ${getStationName(result.stationId)}`}
            <ul>
              <li>{`${result.stationTimings.map((timing, index) => `P${index + 1}: ${timing} mins`).join(', ')}`}</li>
            </ul>
          </li>)
        })}
      </ol>
    </div>
  )
}

export default Home;
