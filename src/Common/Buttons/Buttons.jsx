import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobal } from '../GlobalContext/GlobalContext'
import Modals from "../Modals/Modals"
const Buttons = () => {
  const { showModal, setShowModal } = useGlobal(); // State for managing modal visibility
  return (
    <>
    <div className="centered">
      {/* Button to open the modal */}
      <Link className="btn btn-warning" onClick={() => { setShowModal(true) }}>Start Consultation</Link>
    </div>
    {showModal && <Modals showModal={showModal} setShowModal={setShowModal} />}
    </>
  )
}

export default Buttons