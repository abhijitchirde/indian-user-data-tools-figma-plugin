//finding a number in range (incl low and high)
export function numBetween(low, high) {
  return Math.floor(Math.random() * (high - low + 1)) + low;
}

// Loading fonts from the nodes
export function loadUserFont() {
  if (figma.currentPage.selection.length !== 0) {
    for (const node of figma.currentPage.selection) {
      if (node.type === "TEXT") {
        const family = node.fontName["family"];
        const style = node.fontName["style"];
        figma.loadFontAsync({
          family: `${family}`,
          style: `${style}`,
        });
      }
    }
  }
}

//Setting fontname of selected node
export function setFont(currentNode) {
  //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
  if (currentNode.type === "TEXT") {
    currentNode.fontName = { family: "Roboto", style: "Regular" };
  }
}

export function setFontLight(currentNode) {
  //Checking if node is text for defining the new font (for putting text). Need to check node type as fontName is not available on Scenenode etc (error)
  if (currentNode.type === "TEXT") {
    currentNode.fontName = { family: "Roboto", style: "Light" };
  }
}

// Set font equal to existing value
export async function setUserFont(currentNode) {
  loadUserFont();
  const font = currentNode.fontName;
  if (currentNode.type === "TEXT") {
    currentNode.fontName = { family: `${font.family}`, style: `${font.style}` };
  }
}
