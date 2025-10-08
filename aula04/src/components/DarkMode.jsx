import React from 'react'

const DarkMode = ({ isDarkMode }) => {

  const modo = isDarkMode ? 'dark-mode' : 'light-mode'
  
  return (
    <div className={modo}>
      <p>{modo}</p>
    </div>
  )
}

export default DarkMode