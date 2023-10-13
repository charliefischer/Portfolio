import Link from "next/link";

export default function AboutModal() {
  return (
    <div className="fixed w-[max(240px,30%)] right-4 top-12 p-4 border z-[12] bg-[#FFF] z-1">
      <p className="text-left">
        I'm Charlie, a software engineer and humorous illustrator with a love
        for social commentary.
      </p>
      <p className="text-left">
        Reach me at charlie.a.fischer@gmail.com for a chat or to buy me a beer.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link href="https://www.linkedin.com/in/charlie-fischer/" className="underline">
          LinkedIn
        </Link>
        <Link href="https://github.com/charliefischer" className="underline">Github</Link>
      </div>
    </div>
  );
}
