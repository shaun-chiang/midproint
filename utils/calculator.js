import { mrtStationsAdjacencyList } from './mrtStationsData'

function isTransfer(prevPath) {
    return prevPath?.type === "transfer"
}

export function findMidpointCandidates(originIds) {
    const djikstraObjects = originIds.map(originId => {
        return djikstra(originId)
    })
    const stationTimings = Object.keys(mrtStationsAdjacencyList).map(stationId => {
        return {
            stationId,
            timings: djikstraObjects.map(djikstraObject => {
                if (isTransfer(djikstraObject.prevPaths[stationId])) {
                    return djikstraObject.distanceMap[stationId] - 5;
                }
                return djikstraObject.distanceMap[stationId]
            }),
            prevPaths: djikstraObjects.map(djikstraObject => {
                return djikstraObject.prevPaths[stationId]
            })
        }
    })
    return stationTimings.map((stationTiming) => {
        return {
            stationId: stationTiming.stationId,
            standardDeviation: getStandardDeviation(stationTiming.timings),
            mean: getMean(stationTiming.timings),
            stationTimings: stationTiming.timings,
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
    let prevPaths = {}
    let distanceMap = {}
    let queue = []
    Object.keys(mrtStationsAdjacencyList).forEach(stationId => {
        distanceMap[stationId] = Infinity;
        queue.push(stationId);
    })
    distanceMap[originId] = 0

    while (queue.length !== 0) {
        const smallestStationId = queue.reduce((key, v) => distanceMap[v] < distanceMap[key] ? v : key);
        queue = queue.filter(item => item !== smallestStationId)
        mrtStationsAdjacencyList[smallestStationId].forEach(vertex => {
            const newCost = distanceMap[smallestStationId] + vertex.cost
            if (newCost < distanceMap[vertex.id]) {
                distanceMap[vertex.id] = newCost
                prevPaths[vertex.id] = vertex 
            }
        })
    }
    return {distanceMap, prevPaths}
}
