"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import Dashboard from "@/components/Dashboard"
import ReferralRegistration from "@/components/ReferralRegistration"
import ReferralLinkGenerator from "@/components/ReferralLinkGenerator"
import TransferHistory from "@/components/TransferHistory"
import TransferForm from "@/components/TransferForm"
import Navbar from "@/components/Navbar"

export default function Home() {
  const pathname = usePathname()
  const [currentPage, setCurrentPage] = useState("dashboard")

  const renderContent = () => {
    if (pathname?.startsWith("/referral-registration/")) {
      return null // La redirección se maneja en el componente RedirectPage
    }

    switch (pathname) {
      case "/":
        return <Dashboard />
      case "/referral-registration":
        return <ReferralRegistration />
      case "/referral-link":
        return <ReferralLinkGenerator />
      case "/history":
        return <TransferHistory />
      case "/transactions":
        return <TransferForm />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <header className="bg-[#1f1f1f] p-4 text-center">
        <h1 className="text-[#00ffcc] text-2xl md:text-3xl">Sistema de Transferencias y Referidos</h1>
      </header>
      <main className="p-4 mb-16">{renderContent()}</main>
      <Navbar />
    </div>
  )
}

