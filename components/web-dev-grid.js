import Link from "next/link";
import Crazy from "./creative-coding/crazy";
// import esotericEnsembles from "/web-images/esoteric-ensembles.png"

export default function WebDevGrid({ styleObj, isHorizontal=false }) {
  let wrapperClasses = "flex flex-wrap justify-center gap-[12px] web-dev-grid h-min"
  if(isHorizontal) {
    wrapperClasses = "flex gap-[12px] web-dev-grid horizontal h-min overflow-scroll"
  }
  return (
    <div className={wrapperClasses} style={styleObj}>
      <Link href={`/web/creative-coding`}>
        <Crazy gridMode={true} />
      </Link>
      <Link
        target="_blank"
        href={`https://github.com/charliefischer/esoteric-ensembles/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/teaser.gif" className="pointer-events-none" />
      </Link>
      <Link
        target="_blank"
        href={`https://cf-brux-editor.superhi.hosting/index.html`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/brux.gif" className="pointer-events-none" />
      </Link>
      <Link
        target="_blank"
        href={`https://food-from-4.vercel.app/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/ff4.png" className="pointer-events-none" />
      </Link>
      <Link
        target="_blank"
        href={`https://cf-svg-test-site-editor.superhi.hosting/index.html`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/super-shapes.gif" className="pointer-events-none" />
      </Link>
      <Link
        target="_blank"
        href={`/web/three-text`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/three-text.png" className="pointer-events-none" />
      </Link>
    </div>
  );
}
//