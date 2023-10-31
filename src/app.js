import FileTree from "./fileTree";

export function createFileTree(input) {
  const fileTree = new FileTree();

  const rootNodeIndex = input.findIndex((node) => !node.parentId);
  // remove root node from input
  const rootNode = input.splice(rootNodeIndex, 1)[0];
  // sort input Id
  input.sort((obj1, obj2) => obj1.id - obj2.id);
  //Put the parent node back in the beginning of the array
  input.unshift(rootNode);

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;
}
