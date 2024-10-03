'use client'
import Link from "next/link"
import { useState } from "react"


export default function Home() {
   const [name, setName]= useState('cho')
  
  return (
    <div>
      <h4 className="title">Apple Fresh</h4>
      <p className="title-sub">by dev {name}</p>
    </div>
  )
}