function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  // Create and style the main window button
  let openBtn = createButton("The Useless Game");
  openBtn.style("position", "absolute");
  openBtn.style("top", "50%");
  openBtn.style("left", "50%");
  openBtn.style("transform", "translate(-50%, -50%)");
  // Attach event listener for opening a new window
  openBtn.mousePressed(openNewWindow);
}

function openNewWindow() {
  let newWin = window.open("", "NewWindow", "width=600,height=800");
  
  newWin.document.body.style.backgroundColor = '#D3D3D3';
  newWin.document.body.style.margin = "0";
  newWin.document.body.style.height = "100vh";
  newWin.document.body.style.display = "flex";
  newWin.document.body.style.flexDirection = "column";
  newWin.document.body.style.alignItems = "center";
  newWin.document.body.style.justifyContent = "center";
  let closeBtn = newWin.document.createElement("button");
  closeBtn.textContent = "START";
  closeBtn.style.padding = "30px 60px";
  closeBtn.style.fontSize = "24px";
  closeBtn.style.marginBottom = "20px";
  closeBtn.style.cursor = "pointer";
  newWin.document.body.appendChild(closeBtn);

  let codeLines = [
    "newWin.document.body.appendChild(closeBtn);",
    "closeBtn.onclick = function() {",
    "codeLines.forEach((line, index) => {",
    "setTimeout(() => {",
    "let p = newWin.document.createElement('p');",
    "p.textContent = line;",
    "newWin.document.body.appendChild(p);",
    "}, 500 * index);",
    "});",
    "setTimeout(() => {",

    "newWin.close();",
    "newWin.document.body.appendChild(p);",
    "}, 500 * index);",
    "});",
    " }, 500 * (codeLines.length + 1));",
    " };",
    " } ",
  ];

  closeBtn.onclick = function () {
    codeLines.forEach((line, index) => {
      setTimeout(() => {
        let p = newWin.document.createElement("p");
        p.textContent = line;
        newWin.document.body.appendChild(p);
      }, 300 * index);
    });

    // Schedule the window to close after the last line has been displayed
    setTimeout(() => {
      newWin.close();
    }, 300 * (codeLines.length + 1)); // +1 ensures the window closes after the last line is displayed
  };
}
