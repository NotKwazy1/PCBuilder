const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 1100,
    height: 820,
    minWidth: 700,
    minHeight: 600,
    backgroundColor: '#10151d',
    title: 'PC Builder Simulator',
    autoHideMenuBar: true
  });
  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
