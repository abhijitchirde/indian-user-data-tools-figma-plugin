//Show UI on figma canvas
figma.showUI(__html__, { width: 420, height: 455 });
//Receiving the button inputs from UI
figma.ui.onmessage = msg => {
    console.log(msg.type);
};
