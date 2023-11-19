const fraudulentTransactions = (inputs) => {
    const results = inputs.map((inp) => {
        const [n, l] = inp[0].split(' ').map(Number);
        const transfers = inp.slice(1).map((str) => str.split(' ').map(Number));
    
        return isEligibleTransaction(n, transfers);
    });
    return results;
}

function isEligibleTransaction(n, transfers) {
    const graph = new Array(n).fill().map(() => new Set());

    for (const [sender, receiver] of transfers) {
        graph[sender].add(receiver);
    }

    function dfs(node, visited, path) {
        visited[node] = true;
        path.add(node);

        for (const neighbor of graph[node]) {
            if (!path.has(neighbor)) {
                if (visited[neighbor] || dfs(neighbor, visited, path)) {
                    return true;
                }
            }
        }

        path.delete(node);
        return false;
    }

    for (let client = 0; client < n; client++) {
        const visited = new Array(n).fill(false);
        const path = new Set();

        if (dfs(client, visited, path)) {
            return 'Ineligible';
        }
    }

    return 'Eligible';
}

module.exports = {
    fraudulentTransactions
}