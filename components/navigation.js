import Link from "next/link";
import AboutModal from "./about-modal";
import { useState } from "react";

export default function Navigation(){
  const [showModal, setModal] = useState(false)
  return (
    <nav className="mx-4 flex justify-between items-center sticky top-0">
      <Link href='/'>
        <h2>Charlie Fischer</h2>
      </Link>
      <a onClick={() => {
        setModal(!showModal)
      }}>info</a>
      { showModal && 
        <AboutModal />
      }
    </nav>
  )
}