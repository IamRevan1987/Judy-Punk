import { ipcMain } from 'electron';

export function setupIPC() {
    console.log("Setting up IPC handlers...");

    ipcMain.handle('run-diagnostics', async () => {
        console.log("IPC: run-diagnostics called");
        // Mock diagnostics delay
        await new Promise(resolve => setTimeout(resolve, 800));
        return {
            status: 'nominal',
            checks: [
                'Network Encryption: ACTIVE',
                'Vault Status: LOCKED',
                'File System Integrity: VERIFIED',
                'Provider Connection: LOCAL (Ollama)'
            ]
        };
    });

    ipcMain.on('log-message', (event, msg) => {
        console.log(`[RENDERER]: ${msg}`);
    });
}
