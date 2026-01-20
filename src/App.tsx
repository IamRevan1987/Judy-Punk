import { useState } from 'react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
            <h1>Judy-Punk</h1>
            <p>Reconstructed and Operational.</p>
            <div style={{ marginTop: '1rem' }}>
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </div>
    )
}

export default App
