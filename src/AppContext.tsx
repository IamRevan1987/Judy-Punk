import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LogEntry {
    id: number;
    text: string;
    type?: 'info' | 'success' | 'warning' | 'error';
}

interface AppContextType {
    logs: LogEntry[];
    addLog: (text: string, type?: LogEntry['type']) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [logs, setLogs] = useState<LogEntry[]>([
        { id: 1, text: '> System initialized.', type: 'info' },
        { id: 2, text: '> Waiting for operator command...', type: 'info' }
    ]);

    const addLog = (text: string, type: LogEntry['type'] = 'info') => {
        setLogs(prev => [...prev, { id: Date.now(), text, type }]);
    };

    return (
        <AppContext.Provider value={{ logs, addLog }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
