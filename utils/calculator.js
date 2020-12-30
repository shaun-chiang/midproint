import { mrtStationsAdjacencyList } from './mrtStationsData'

export function findMidpointCandidates(originIds) {
    const djikstraObjects = originIds.map(originId => {
        return djikstra(originId)
    })
    const stationTimings = Object.keys(mrtStationsAdjacencyList).map(stationId => {
        return {
            stationId,
            timings: djikstraObjects.map(djikstraObject => {
                return djikstraObject[stationId]
            }
            )
        }
    })
    return stationTimings.map((stationTiming) => {
        return {
            stationId: stationTiming.stationId,
            standardDeviation: getStandardDeviation(stationTiming.timings),
            mean: getMean(stationTiming.timings),
            stationTimings: stationTiming.timings
        }
    })
        .sort((a, b) => a.mean - b.mean)
        .sort((a, b) => a.standardDeviation - b.standardDeviation)
}

function getMean(array) {
    const n = array.length
    return (array.reduce((a, b) => a + b) / n).toFixed(2)
}

function getStandardDeviation(array) {
    const n = array.length
    const mean = array.reduce((a, b) => a + b) / n
    return Math.sqrt(array.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)
}

function djikstra(originId) {
    let distance = {}
    let queue = []
    Object.keys(mrtStationsAdjacencyList).forEach(stationId => {
        distance[stationId] = Infinity;
        queue.push(stationId);
    })
    distance[originId] = 0

    while (queue.length !== 0) {
        const smallestStationId = queue.reduce((key, v) => distance[v] < distance[key] ? v : key);
        queue = queue.filter(item => item !== smallestStationId)
        mrtStationsAdjacencyList[smallestStationId].forEach(vertex => {
            const alt = distance[smallestStationId] + vertex.cost
            if (alt < distance[vertex.id]) {
                distance[vertex.id] = alt
            }
        })
    }
    return distance
}
