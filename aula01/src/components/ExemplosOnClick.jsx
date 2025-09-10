import React, { useState } from 'react'


const ExemplosOnClick = () => {
  const [contador, setContador] = useState(0)
  const [corFundo, setCorFundo] = useState('#f0f0f0')
  const [textoClicado, setTextoClicado] = useState('')

  const incrementar = () => {
    setContador(contador + 1)
  }

  const mudarCor = () => {
    const cores = ['#ffcccb', '#90ee90', '#add8e6', '#ffa07a', '#dda0dd']
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)]
    setCorFundo(corAleatoria)
  }

  const handleTextoClick = (elemento) => {
    setTextoClicado(`Você clicou no: ${elemento}`)
  }

  return (
    <div style={{ padding: '20px', backgroundColor: corFundo, minHeight: '400px' }}>
      <h2>Exemplos de onClick em diferentes elementos</h2>
      
      {/* Button (tradicional) */}
      <button onClick={incrementar} style={{ margin: '10px', padding: '10px' }}>
        🔘 Button: Contador = {contador}
      </button>
      
      {/* Div clicável */}
      <div 
        onClick={mudarCor}
        style={{ 
          border: '2px dashed #333', 
          padding: '15px', 
          margin: '10px 0', 
          cursor: 'pointer',
          backgroundColor: '#fff'
        }}
      >
        📦 DIV: Clique aqui para mudar a cor de fundo!
      </div>
      
      {/* Span clicável */}
      <p>
        Este é um parágrafo com um{' '}
        <span 
          onClick={() => handleTextoClick('SPAN')}
          style={{ 
            color: 'blue', 
            textDecoration: 'underline', 
            cursor: 'pointer' 
          }}
        >
          span clicável
        </span>
        {' '}no meio do texto.
      </p>
      
      {/* Heading clicável */}
      <h3 
        onClick={() => handleTextoClick('TÍTULO H3')}
        style={{ 
          color: 'green', 
          cursor: 'pointer',
          border: '1px solid green',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        📝 H3: Clique neste título!
      </h3>
      
      {/* Image clicável */}
      <img 
        src="https://via.placeholder.com/150x100/ff6b6b/ffffff?text=CLIQUE+EM+MIM"
        alt="Imagem clicável"
        onClick={() => handleTextoClick('IMAGEM')}
        style={{ 
          cursor: 'pointer', 
          border: '3px solid #ff6b6b',
          margin: '10px 0'
        }}
      />
      
      {/* Lista clicável */}
      <ul style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '5px' }}>
        <li 
          onClick={() => handleTextoClick('ITEM 1 DA LISTA')}
          style={{ cursor: 'pointer', padding: '5px' }}
        >
          📋 Item 1 - Clique aqui
        </li>
        <li 
          onClick={() => handleTextoClick('ITEM 2 DA LISTA')}
          style={{ cursor: 'pointer', padding: '5px' }}
        >
          📋 Item 2 - Clique aqui também
        </li>
      </ul>
      
      {/* Table row clicável */}
      <table style={{ backgroundColor: '#fff', width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Nome</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Ação</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            onClick={() => handleTextoClick('LINHA DA TABELA')}
            style={{ cursor: 'pointer' }}
          >
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>📊 Linha clicável</td>
            <td style={{ padding: '10px', border: '1px solid #ddd' }}>Clique em qualquer lugar desta linha</td>
          </tr>
        </tbody>
      </table>
      
      {/* Resultado dos cliques */}
      {textoClicado && (
        <div style={{ 
          marginTop: '20px', 
          padding: '10px', 
          backgroundColor: '#e8f5e8', 
          border: '1px solid #4caf50',
          borderRadius: '5px'
        }}>
          <strong>✅ {textoClicado}</strong>
        </div>
      )}
    </div>
  )
}

export default ExemplosOnClick
