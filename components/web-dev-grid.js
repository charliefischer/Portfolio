import Link from "next/link";
import Crazy from "./creative-coding/crazy";

export default function WebDevGrid({ contents, styleObj }) {
  return (
    <div className="flex flex-wrap justify-center" style={styleObj}>
      <Link href={`/web/creative-coding`}>
        <Crazy />
      </Link>
    </div>
  );
}
