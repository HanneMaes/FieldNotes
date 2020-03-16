var debugMode = false;

//****************************************************************************************************************************************************
// electron base functions
//****************************************************************************************************************************************************

const { app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron')
const path = require('path');

//****************************************************************************************************************************************************
// window function
//****************************************************************************************************************************************************

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1300,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    },
    vibrancy: 'light',
    // titleBarStyle: 'hidden',
    frame: false,
    fullscreenable: false,
    show: false, // start hidden
  })

  // and load the first page of the app.
  // win.loadFile('mac.html')
  win.loadURL(`file://${__dirname}/mac.html`)

  // Open the DevTools.
  if (debugMode) win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

//****************************************************************************************************************************************************

var windowVisible = false;

function toggleWindow() {

  console.log("toggleWindow -> windowVisible:", windowVisible);

  if(windowVisible) win.hide()
  else              win.show()

  windowVisible = !windowVisible
}

//****************************************************************************************************************************************************
// system tray
//****************************************************************************************************************************************************

let tray = null
app.on('ready', () => {

  // launch on shortcut
  globalShortcut.register('Control+N', toggleWindow)

  // create tray icon
  tray = new Tray(path.join(__dirname, 'icons/tray-32x32.png'))
  const contextMenu = Menu.buildFromTemplate([
  { 
    // open
    label: 'Toggle: Cmd+?', 
    click: toggleWindow,
  },{ 
    // quit
    label: 'Quit',
    click: app.quit,
  }
  ])
  tray.setToolTip('This is my application.')
  tray.setContextMenu(contextMenu)
})

//**************************************************************************************************************************************************** 