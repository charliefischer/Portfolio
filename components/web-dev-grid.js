import Link from "next/link";
import Crazy from "./creative-coding/crazy";
// import esotericEnsembles from "/web-images/esoteric-ensembles.png"

export default function WebDevGrid({ contents, styleObj }) {
  return (
    <div className="flex flex-wrap justify-center gap-[12px] web-dev-grid" style={styleObj} web-dev-grid>
      <Link href={`/web/creative-coding`}>
        <Crazy gridMode={true} />
      </Link>
      <Link
        target="_blank"
        href={`https://github.com/charliefischer/esoteric-ensembles/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/esoteric-ensembles.png" className="pointer-events-none" />
      </Link>
      <Link
        target="_blank"
        href={`https://cf-brux-editor.superhi.hosting/index.html`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/brux.png" className="pointer-events-none" />
      </Link>
    </div>
  );
}
