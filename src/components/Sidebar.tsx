import React, { useState } from 'react';
import { useApp } from '../AppContext';

const Sidebar: React.FC = () => {
    const [voiceEnabled, setVoiceEnabled] = useState(true);
    const [speed, setSpeed] = useState(1.0);
    const [operatorId, setOperatorId] = useState('Dave');
    const { addLog } = useApp();

    const handleDiagnostics = async () => {
        addLog('> Requesting system diagnostics...', 'info');
        try {
            const result = await window.ipcRenderer.invoke('run-diagnostics');
            addLog(`> Diagnostics complete. Status: ${result.status}`, 'success');
            result.checks.forEach((check: string) => {
                addLog(`  + ${check}`, 'info');
            });
        } catch (error) {
            addLog(`> Error running diagnostics: ${error}`, 'error');
        }
    };

    return (
        <div style={{
            width: '280px',
            backgroundColor: 'var(--bg-panel)',
            borderRight: '1px solid var(--border-color)',
            display: 'flex',
            flexDirection: 'column',
            padding: '1rem',
            gap: '1.5rem'
        }}>
            {/* Header / Config */}
            <div>
                <h2 style={{ color: 'var(--text-primary)', margin: '0 0 1rem 0', fontSize: '1.2rem' }}>Control Panel</h2>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>OPERATOR ID</label>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ color: 'var(--accent-green)', fontWeight: 'bold' }}>{operatorId}</span>
                        <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', fontSize: '0.8rem' }}>Edit</button>
                    </div>
                </div>
            </div>

            {/* Voice Controls */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>Voice (Beta)</span>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                        <input
                            type="checkbox"
                            checked={voiceEnabled}
                            onChange={(e) => setVoiceEnabled(e.target.checked)}
                            style={{ accentColor: 'var(--accent-green)' }}
                        />
                        <span style={{ marginLeft: '0.5rem', color: voiceEnabled ? 'var(--accent-green)' : 'var(--text-secondary)', fontSize: '0.8rem' }}>ON</span>
                    </label>
                </div>

                <select style={{
                    width: '100%',
                    background: 'var(--bg-input)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--border-color)',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    marginBottom: '0.5rem'
                }}>
                    <option>en_GB-jenny_dioco-medium</option>
                </select>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span>Speed: {speed}x</span>
                    <input
                        type="range"
                        min="0.5"
                        max="2.0"
                        step="0.1"
                        value={speed}
                        onChange={(e) => setSpeed(parseFloat(e.target.value))}
                        style={{ width: '80px', accentColor: 'var(--accent-green)' }}
                    />
                </div>
            </div>

            <div style={{ flex: 1 }}></div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <button style={{
                    background: 'rgba(255, 59, 48, 0.1)',
                    color: '#ff3b30',
                    border: '1px solid #ff3b30',
                    padding: '0.75rem',
                    borderRadius: '4px',
                    cursor: 'not-allowed',
                    fontWeight: 'bold'
                }}>
                    VAULT LOCKED
                </button>

                <button
                    onClick={handleDiagnostics}
                    style={{
                        background: 'var(--bg-input)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        padding: '0.75rem',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        transition: 'border-color 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                    onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}
                >
                    Run Diagnostics
                </button>
            </div>

            {/* Provider/Model */}
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Provider:</label>
                <select style={{ width: '100%', background: 'var(--bg-input)', color: 'var(--text-primary)', border: 'none', marginBottom: '0.5rem' }}>
                    <option>Local (Ollama)</option>
                </select>

                <label style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.25rem' }}>Model:</label>
                <select style={{ width: '100%', background: 'var(--bg-input)', color: 'var(--text-primary)', border: 'none' }}>
                    <option>gemma3:latest</option>
                </select>
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1rem' }}>
                Judy Punk 0.2.1
            </div>
        </div>
    );
};

export default Sidebar;
