import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DpoLgpd = () => {
  
  const [dpo, setdpo] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/dpolgpd")
      .then(response => {
        setdpo(response.data)
      })
      .catch(error => {
        console.error("Deu erro ao buscar os dados do DPO:", error)
      })
  }, [])

  return (
    <div>
        <main>
            <h1>DPO LGPD</h1>
            <p>Esta é a página do DPO (Data Protection Officer) da nossa aplicação.</p>
            <ul>
              {dpo.map(dpo => (
                <li key={dpo.id}>
                  {dpo.texto}
                </li>
              ))}
            </ul>
        </main>
    </div>
  )
}

export default DpoLgpd