import React from 'react'
import ReactDOM from 'react-dom/client'

function App() {
  return (
    <div style={{ fontFamily: 'Inter, sans-serif', padding: '40px', textAlign: 'center', backgroundColor: '#fdfbf7', minHeight: '100vh' }}>
      <h1 style={{ fontFamily: 'Playfair Display, serif', color: '#2c4a3e', fontSize: '2.5rem' }}>
        Círculo Sagrado 7 Encruzilhadas
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '20px auto' }}>
        Vivências de Espiritualidade, Autoconhecimento e Xamanismo Universalista em Santa Cruz, Rio de Janeiro.
      </p>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
