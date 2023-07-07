import Link from "next/link";

export default function Navigation(){
  return (
    <nav className="text-center mt-[12px]">
      <Link href='/'>
        Return Home
      </Link>
    </nav>
  )
}