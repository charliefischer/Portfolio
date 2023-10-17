import Link from "next/link";
import AboutModal from "./about-modal";
import { useState } from "react";

export default function Navigation(){
  const [showModal, setModal] = useState(false)
  return (
    <nav className="px-4 flex justify-between items-center sticky top-0 bg-[#ffffff] z-[2]">
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