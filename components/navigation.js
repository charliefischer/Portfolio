import Link from "next/link";

export default function Navigation(){
  return (
    <nav className="ml-4">
      <Link href='/'>
        <h2>Charlie Fischer</h2>
      </Link>
    </nav>
  )
}