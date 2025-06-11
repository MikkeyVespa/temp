import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

//зарегистрируем метод getPartners для возврата партнеров в представление
const api = {
  foo: (data) => ipcRenderer.invoke('sendSignal', data),
  getPartners: () => ipcRenderer.invoke('getPartners')
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
