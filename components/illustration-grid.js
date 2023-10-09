import Link from "next/link";

export default function IllustrationGrid({ contents=[{url: "a"}, {url: "a"}], styleObj, isHorizontal=false }) {
  let wrapperClasses = "flex flex-wrap justify-center h-min"
  let linkClasses = "flex w-[max(300px,33%)] hover:scale-110 transition-transform duration-400 mb-8"
  if(isHorizontal) {
    wrapperClasses = "flex overflow-scroll illo-grid-horizontal h-min"
    linkClasses = "flex h-[min-content] w-[min(400px, 80%)] hover:scale-110 transition-transform duration-400 mb-8 shrink-0"
  }
  
  return (
    <div className={wrapperClasses}>
      {contents?.map((illo) => {
        return (
          <Link
            href={`/illustration/${illo.urlPath}`}
            key={illo.urlPath}
            className={linkClasses}
          >
            <img
              src={illo.navigationImage.url}
              className="pointer-events-none max-h-[200px]"
            />
          </Link>
        );
      })}
    </div>
  );
}
