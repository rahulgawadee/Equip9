
function processLogs(a, queries) {
    let costs = {};
    a.forEach(([_, date, cost]) => costs[date] = (costs[date] || 0) + cost);
    let dates = Object.keys(costs).sort();
    let prefixSum = {};
    let sum = 0;
    dates.forEach(date => prefixSum[date] = sum += costs[date]);
    return queries.map(([start, end]) => 
    (prefixSum[end] || 0) - (prefixSum[start] ? prefixSum[start] -costs[start] : 0)
    );
    }
    console.log(processLogs(
    [[101, "2024-01-01", 500], [102, "2024-01-10", 300], [101, "2024-01-15", 700]],
    [["2024-01-01", "2024-01-10"], ["2024-01-01", "2024-01-15"]]
    ));