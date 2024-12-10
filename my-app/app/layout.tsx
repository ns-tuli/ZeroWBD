"use client"

import { useState } from "react"
import { Inter } from 'next/font/google'
import "./globals.css"
import Header from "@/components/header"
import Navbar from "@/components/Navbar" // Keep the Navbar
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          {/* Header */}
          <Header onMenuClick={function (): void {
            throw new Error("Function not implemented.")
          } } totalEarnings={0} />
          
          {/* Navbar */}
          <Navbar open={true} /> {/* Only Navbar will remain */}

          <div className="flex flex-1">
            <main className="flex-1 p-4 lg:p-8 ml-16 transition-all duration-300">
              {children}
            </main>
          </div>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
