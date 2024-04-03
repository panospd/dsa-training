function timeToInform(headId, managers, informTime) {
    return inform(createGraph(managers), headId, informTime);
}

function inform(graph, manager, informTime) {
    const subordinates = graph[manager];
    if (!subordinates) return 0;

    let max = 0;
    for (let i = 0; i < subordinates.length; i++) {
        max = Math.max(max, inform(graph, subordinates[i], informTime));
    }

    return max + informTime[manager];
}

function createGraph(managers) {
    var graph = {};

    for (let e = 0; e < managers.length; e++) {
        var manager = managers[e];

        if (!graph[manager]) {
            graph[manager] = [];
        }

        graph[manager].push(e);
    }

    return graph;
}

console.log(
    timeToInform(4, [2, 2, 4, 6, -1, 4, 4, 5], [0, 0, 4, 0, 7, 8, 6, 0])
);
