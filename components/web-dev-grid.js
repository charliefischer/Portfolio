import Link from "next/link";
import Crazy from "./creative-coding/crazy";
// import esotericEnsembles from "/web-images/esoteric-ensembles.png"

export default function WebDevGrid({ contents, styleObj }) {
  return (
    <div className="flex flex-wrap justify-center gap-[12px]" style={styleObj}>
      <Link href={`/web/creative-coding`}>
        <Crazy />
      </Link>
      <Link href={`https://github.com/charliefischer/esoteric-ensembles/`} style={{maxWidth: "min(80%, 400px)"}}>
        <img src="/web-images/esoteric-ensembles.png"  />
      </Link>
    </div>
  );
}
