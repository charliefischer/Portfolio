import Link from "next/link";
import Crazy from "./creative-coding/crazy";
// import esotericEnsembles from "/web-images/esoteric-ensembles.png"

export default function WebDevGrid({ styleObj, isHorizontal = false }) {
  let wrapperClasses =
    "flex flex-wrap justify-center gap-[12px] web-dev-grid h-min";
  if (isHorizontal) {
    wrapperClasses =
      "flex gap-[12px] web-dev-grid horizontal h-min overflow-scroll";
  }
  return (
    <div className={wrapperClasses} style={styleObj}>
      <Link
        target="_blank"
        href={`https://stupendous-pavlova-557b79.netlify.app/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img
          src="/web-images/sship.png"
          className="pointer-events-none floating-ud"
        />
      </Link>
      <Link
        target="_blank"
        href={`https://food-from-4.vercel.app/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/ff4.png" className="pointer-events-none" />
      </Link>
      <Link
        href={`/web/SGNL`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img src="/web-images/SGNL/home.png" className="pointer-events-none" />
      </Link>
      <Link
        href={`/web/hulla-proto`}
        className="my-auto"
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 484 57"
          fill="none"
          className="header-logo"
          width="100%"
          height="100%"
        >
          <path
            fill="#000"
            d="M24.573 55.66c-.84 0-1.51-.728-1.51-1.537V33.251c0-.81-.671-1.538-1.51-1.538H10.986c-.838 0-1.51.728-1.51 1.538v20.872c0 .81-.754 1.537-1.593 1.537H1.51c-.84 0-1.51-.728-1.51-1.537V2.184C0 1.375.67.647 1.51.647h6.373c.839 0 1.594.728 1.594 1.537v19.983c0 .809.755 1.537 1.593 1.537h10.4c.838 0 1.593-.728 1.593-1.537V2.184c0-.809.67-1.537 1.51-1.537h6.373c.839 0 1.594.728 1.594 1.537v51.94c0 .808-.755 1.536-1.594 1.536h-6.373ZM71.704 2.184c0-.809.671-1.537 1.51-1.537h6.374c.839 0 1.593.728 1.593 1.537v39.318c0 8.98-6.96 14.805-16.353 14.805s-16.186-5.825-16.186-14.805V2.184c0-.809.67-1.537 1.51-1.537h6.373c.839 0 1.593.728 1.593 1.537v38.752c0 4.045 2.6 7.281 6.71 7.281 4.109 0 6.876-3.236 6.876-7.28V2.183ZM99.632 55.66c-.839 0-1.51-.728-1.51-1.537V2.184c0-.809.671-1.537 1.51-1.537h6.373c.839 0 1.594.728 1.594 1.537v44.01c0 .81.755 1.457 1.593 1.457h14.006c.838 0 1.593.728 1.593 1.537v5.016c0 .809-.755 1.456-1.593 1.456H99.632ZM139.887 55.66c-.839 0-1.51-.728-1.51-1.537V2.184c0-.809.671-1.537 1.51-1.537h6.374c.838 0 1.593.728 1.593 1.537v44.01c0 .81.755 1.457 1.593 1.457h14.006c.838 0 1.593.728 1.593 1.537v5.016c0 .809-.755 1.456-1.593 1.456h-23.566ZM201.612 55.66c-.839 0-1.342-.566-1.51-1.213l-1.342-6.634c-.168-.89-.671-1.214-1.509-1.214h-10.232c-.839 0-1.342.324-1.51 1.214l-1.425 6.634c-.168.647-.671 1.213-1.51 1.213h-6.206c-1.006 0-1.677-.647-1.426-1.86l12.412-51.858c.168-.728.671-1.295 1.51-1.295h7.38c.839 0 1.342.567 1.51 1.295L209.746 53.8c.252 1.132-.419 1.86-1.509 1.86h-6.625Zm-9.058-40.531c-.084-.243-.335-.243-.419 0l-4.781 23.137c-.167.729.252 1.133.923 1.133h7.799c.755 0 1.175-.324 1.007-1.133l-4.529-23.137ZM226.268 55.66c-.839 0-1.51-.728-1.51-1.537V2.184c0-.809.671-1.537 1.51-1.537h14.425c9.309 0 16.605 5.987 16.605 14.967 0 5.178-2.6 8.98-5.703 11.326-.419.324-.419.728 0 .971 3.606 2.265 6.374 6.472 6.374 11.812 0 8.818-7.045 15.937-17.444 15.937h-14.257Zm13.921-31.551c5.2 0 7.8-3.64 7.8-8.01 0-4.773-2.852-7.685-8.303-7.685h-3.941c-.923 0-1.51.566-1.51 1.375v12.944c0 .81.587 1.376 1.51 1.376h4.444Zm-.251 23.785c5.032 0 8.638-3.48 8.638-8.333 0-3.964-2.6-7.928-8.47-7.928h-4.361c-.923 0-1.51.566-1.51 1.375v13.51c0 .81.587 1.376 1.51 1.376h4.193ZM297.218 55.66c-.839 0-1.342-.566-1.51-1.213l-1.342-6.634c-.167-.89-.671-1.214-1.509-1.214h-10.232c-.838 0-1.342.324-1.509 1.214l-1.426 6.634c-.168.647-.671 1.213-1.51 1.213h-6.206c-1.006 0-1.677-.647-1.425-1.86l12.412-51.858c.167-.728.671-1.295 1.509-1.295h7.38c.839 0 1.342.567 1.51 1.295L305.353 53.8c.251 1.132-.42 1.86-1.51 1.86h-6.625ZM288.16 15.13c-.084-.243-.335-.243-.419 0l-4.78 23.137c-.168.729.251 1.133.922 1.133h7.8c.754 0 1.174-.324 1.006-1.133L288.16 15.13ZM321.866 55.66c-.839 0-1.51-.728-1.51-1.537V2.184c0-.809.671-1.537 1.51-1.537h6.373c.839 0 1.594.728 1.594 1.537v44.01c0 .81.755 1.457 1.593 1.457h14.006c.838 0 1.593.728 1.593 1.537v5.016c0 .809-.755 1.456-1.593 1.456h-23.566ZM388.958 16.261v24.837c0 9.142-7.297 15.21-16.27 15.21-8.974 0-16.27-6.068-16.27-15.21V16.261c0-8.899 5.954-16.261 16.27-16.261 10.315 0 16.27 7.362 16.27 16.261Zm-9.477 23.947V16.18c0-4.935-2.684-8.09-6.793-8.09-4.11 0-6.877 3.155-6.877 8.09v24.028c0 4.854 2.684 8.01 6.877 8.01s6.793-3.156 6.793-8.01ZM435.083 16.261v24.837c0 9.142-7.296 15.21-16.269 15.21-8.974 0-16.27-6.068-16.27-15.21V16.261c0-8.899 5.954-16.261 16.27-16.261 10.315 0 16.269 7.362 16.269 16.261Zm-9.476 23.947V16.18c0-4.935-2.684-8.09-6.793-8.09-4.11 0-6.877 3.155-6.877 8.09v24.028c0 4.854 2.683 8.01 6.877 8.01 4.193 0 6.793-3.156 6.793-8.01ZM474.164 55.66c-.67 0-1.006-.323-1.341-.809l-14.174-22.49c-.335-.486-.503-.324-.503 0v21.762c0 .81-.671 1.537-1.509 1.537h-6.458c-.839 0-1.51-.728-1.51-1.537V2.184c0-.809.671-1.537 1.51-1.537h6.374c.838 0 1.593.728 1.593 1.537v21.358c0 .324.336.405.503.081l13.503-22.086c.419-.647.671-.89 1.258-.89h6.457c1.174 0 2.097 1.214 1.342 2.427l-14.676 23.138c-.168.324-.252.647 0 1.052l16.186 26.05c.754 1.214-.084 2.346-1.258 2.346h-7.297Z"
          ></path>
        </svg>
        {/* <img src="/web-images/SGNL/home.png" className="pointer-events-none" /> */}
      </Link>
      <Link href={`/web/creative-coding`}>
        <Crazy gridMode={true} />
      </Link>
      <Link
        target="_blank"
        href={`https://github.com/charliefischer/esoteric-ensembles/`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img
          src="/web-images/teaser.gif"
          className="pointer-events-none"
          loading="lazy"
        />
      </Link>
      <Link
        target="_blank"
        href={`https://cf-brux-editor.superhi.hosting/index.html`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img
          src="/web-images/brux.gif"
          className="pointer-events-none"
          loading="lazy"
        />
      </Link>
      <Link
        target="_blank"
        href={`https://cf-svg-test-site-editor.superhi.hosting/index.html`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img
          src="/web-images/super-shapes.gif"
          className="pointer-events-none"
          loading="lazy"
        />
      </Link>
      <Link
        href={`/web/three-text`}
        style={{ maxWidth: "min(80%, 400px)", height: "min-content" }}
      >
        <img
          src="/web-images/three-text.png"
          className="pointer-events-none"
          loading="lazy"
        />
      </Link>
    </div>
  );
}
//
