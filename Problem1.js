const findShortestRoute = (nodeCount, connectionList, itemAvailability, startNode, desiredItem) => {
  const adjacencyMap = {};
  // Build adjacency list
  connectionList.forEach(([nodeA, nodeB]) => {
      if (!adjacencyMap[nodeA]) adjacencyMap[nodeA] = [];
      if (!adjacencyMap[nodeB]) adjacencyMap[nodeB] = [];
      adjacencyMap[nodeA].push(nodeB);
      adjacencyMap[nodeB].push(nodeA);
  });
  const explorationQueue = [{ current: startNode, route: [startNode] }];
  const visitedNodes = new Set([startNode]);
  while (explorationQueue.length > 0) {
      const { current: currentNode, route: currentRoute } = explorationQueue.shift();
      if (itemAvailability[currentNode] && itemAvailability[currentNode].includes(desiredItem)) {
          return currentRoute;
      }
      for (const neighborNode of (adjacencyMap[currentNode] || [])) {
          if (!visitedNodes.has(neighborNode)) {
              visitedNodes.add(neighborNode);
              explorationQueue.push({ current: neighborNode, route: [...currentRoute, neighborNode] });
          }
      }
  }
  return [-1]; 
};
// Test Case
const totalNodes = 5;
const nodeConnections = [[1, 2], [2, 3], [3, 4], [4, 5]];
const nodeInventory = {
  1: ["excavator"],
  2: [],
  3: ["bulldozer"],
  4: ["excavator"],
  5: ["crane"]
};
const startPoint = 2;
const targetItem = "bulldozer";
console.log(findShortestRoute(totalNodes, nodeConnections, nodeInventory, startPoint, targetItem));
