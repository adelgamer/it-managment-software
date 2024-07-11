const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    // The lines below solved the issue
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  win.loadFile("loading.html");
};

app.whenReady().then(() => {
  createWindow();
});

//Quitting the app after all the windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//Opening a window if no window is open
// app.whenReady().then(() => {
//   createWindow();

//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });
