// Not done - Needs improvement

function fraudulentTransactions(inputs) {
    return inputs.map(transactions => {
        return isTransactionEligible(transactions) ? 'Eligible' : 'Ineligible';
    });
}

function isTransactionEligible(transfers) {
    const graph = buildGraph(transfers);

    for (const client of Object.keys(graph)) {
        const visited = new Set();
        if (hasCycle(client, client, visited, graph)) {
            return false;
        }
    }

    return true;
}

function refineInput(inputData) {
    return inputData.slice(1).map(pair => {
        const [a, b] = pair.split(" ").map(Number);
        return [a, b];
    });
}

function buildGraph(transfers) {
    const graph = {};

    transfers = refineInput(transfers);

    for (const [from, to] of transfers) {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    console.log(graph);

    return graph;
}

function hasCycle(start, current, visited, graph) {
    visited.add(current);

    if (graph[current]) {
        for (const neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                if (hasCycle(start, neighbor, visited, graph)) {
                    return true;
                }
            } else if (neighbor === start) {
                return true;
            }
        }
    }

    visited.delete(current);
    return false;
}

module.exports = {
    fraudulentTransactions
}