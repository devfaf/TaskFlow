// import React from 'react'
import DashboardPage from "../pages/DashboardPage"
import Header from "../pages/Header"
import Modal from "../components/common/Modal"
import { useState } from "react"

const DashboardLayout = () => {

  return (
    <>
      <Header />
      <DashboardPage />
    </>
  )
}

export default DashboardLayout