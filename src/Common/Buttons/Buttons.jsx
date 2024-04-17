import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../GlobalContext/GlobalContext'
const Buttons = () => {
  const { setShowModal } = useGlobal(); // State for managing modal visibility
  return (
    <div className="centered">
      {/* Button to open the modal */}
      <Link className="btn btn-warning" onClick={() => { setShowModal(true) }}>Get Started</Link>
    </div>
  )
}

export default Buttons