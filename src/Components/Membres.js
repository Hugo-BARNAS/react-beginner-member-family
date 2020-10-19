import React from 'react'

const Membre = ({ nom, auteur, age }) => {
  return (
    <div>
      <h2 style={{
        backgroundColor: age < 10 ? 'purple' : 'blue',
        color: 'white',
        padding: '20px'
      }}
      >
          Membre de ma famille DUPOND : {nom.toUpperCase()}
      </h2>
      <h3>{age} ans</h3>
      <h3>{auteur}</h3>
    </div>
  )
}
export default Membre
