import React from 'react'
import styles from './Campanha.module.css'

const Campanha = ({mes}) => {

  function definirMensagem(mes) {
    if (mes === "setembro") {
      return "Prevenção ao suicídio"
    }else if (mes === "outubro") {
      return "Consicientização sobre o câncer de mama"
    }else if (mes === "novembro") {
      return "Prevenção e combate ao câncer de próstata"
    }
  }

  function definirCor(mes) {
    if (mes === "setembro") {
      return styles.setembro
    }else if (mes === "outubro") {
      return styles.outubro
    }else if (mes === "novembro") {
      return styles.novembro
    }
  }
  return (
    <div>
      <h2>Campanha:</h2>
      <p className={definirCor(mes)}>{mes}: {definirMensagem(mes)}</p>
    </div>
  )
}

export default Campanha