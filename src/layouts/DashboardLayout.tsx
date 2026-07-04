// import React from 'react'
import DashboardPage from "../pages/DashboardPage"
import Header from "../pages/Header"
import Modal from "../components/common/Modal"
import { useState } from "react"

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Header />
      <DashboardPage />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="py-2">این پیام خیلی طولانی هست</div>

      </Modal>
    </>
  )
}

export default DashboardLayout