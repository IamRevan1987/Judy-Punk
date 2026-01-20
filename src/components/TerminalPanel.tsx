import React, { useEffect, useRef } from 'react';
import { useApp } from '../AppContext';

const TerminalPanel: React.FC = () => {
    const { logs } = useApp();
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs]);

    return (
        <div style={{
            height: '200px',
            backgroundColor: 'var(--bg-input)',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                padding: '0.5rem 1rem',
                borderBottom: '1px solid var(--border-color)',
                fontSize: '0.8rem',
                color: 'var(--text-secondary)',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>
                Terminal / Work Log
            </div>
            <div style={{
                flex: 1,
                padding: '0.5rem 1rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                overflowY: 'auto'
            }}>
                {logs.map(log => (
                    <div key={log.id} style={{
                        color: log.type === 'success' ? 'var(--accent-green)' :
                            log.type === 'error' ? '#ff3b30' :
                                'inherit'
                    }}>
                        {log.text}
                    </div>
                ))}
                <div ref={bottomRef}></div>
            </div>
        </div>
    );
};

export default TerminalPanel;
