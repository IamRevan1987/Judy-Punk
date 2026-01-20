import React from 'react';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';
import TerminalPanel from './TerminalPanel';

const Layout: React.FC = () => {
    return (
        <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
            <Sidebar />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <ChatWindow />
                <TerminalPanel />
            </div>
        </div>
    );
};

export default Layout;
