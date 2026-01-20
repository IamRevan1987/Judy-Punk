import React, { useState } from 'react';

interface Message {
    id: number;
    sender: 'JUDY' | 'YOU';
    text: string;
    timestamp: string;
}

const ChatWindow: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            sender: 'JUDY',
            text: 'Cyber Assist Agent Active. Welcome, Dave. System secure.',
            timestamp: '3:44:54 PM'
        },
        {
            id: 2,
            sender: 'YOU',
            text: 'Tell me about your capabilities',
            timestamp: '3:45:14 PM'
        },
        {
            id: 3,
            sender: 'JUDY',
            text: "Okay, Dave, let's talk about what I can do. I'm Judy, a specialized Cyber Security Assistant designed to support you. Here's a breakdown of my capabilities:\n\n**Core Functionality:**\n\n* **Log Analysis:** I can read and analyze logs from the `/var/log` directory...\n* **Network Scanning:** I can perform network scans...",
            timestamp: '3:45:50 PM'
        }
    ]);

    const handleSend = () => {
        if (!input.trim()) return;
        const newMessage: Message = {
            id: Date.now(),
            sender: 'YOU',
            text: input,
            timestamp: new Date().toLocaleTimeString()
        };
        setMessages([...messages, newMessage]);
        setInput('');

        // Mock reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: 'JUDY',
                text: "I received your message. I am running in baseline mode and cannot process complex queries yet.",
                timestamp: new Date().toLocaleTimeString()
            }]);
        }, 1000);
    };

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-dark)', position: 'relative' }}>
            {/* Header (Optional, maybe just a spacer or status) */}

            {/* Messages Area */}
            <div style={{ flex: 1, padding: '2rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {messages.map(msg => (
                    <div key={msg.id} style={{
                        alignSelf: msg.sender === 'YOU' ? 'flex-end' : 'flex-start',
                        maxWidth: '80%'
                    }}>
                        <div style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                            marginBottom: '0.25rem',
                            textAlign: msg.sender === 'YOU' ? 'right' : 'left'
                        }}>
                            {msg.sender} • {msg.timestamp}
                        </div>
                        <div style={{
                            backgroundColor: msg.sender === 'YOU' ? 'var(--bg-panel)' : 'transparent',
                            border: msg.sender === 'JUDY' ? '1px solid var(--accent-green)' : '1px solid var(--border-color)',
                            borderRadius: '8px',
                            padding: '1rem',
                            color: 'var(--text-primary)',
                            lineHeight: '1.5',
                            whiteSpace: 'pre-wrap',
                            boxShadow: msg.sender === 'JUDY' ? '0 0 10px var(--accent-green-dim)' : 'none'
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div style={{ padding: '1rem 2rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask system status..."
                        style={{
                            flex: 1,
                            backgroundColor: 'var(--bg-input)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '4px',
                            padding: '0.75rem 1rem',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-sans)',
                            fontSize: '1rem'
                        }}
                    />
                    <button
                        onClick={handleSend}
                        style={{
                            backgroundColor: 'var(--bg-panel)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--text-secondary)',
                            borderRadius: '4px',
                            padding: '0 1.5rem',
                            cursor: 'pointer'
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
