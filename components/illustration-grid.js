import Link from "next/link";

export default function IllustrationGrid({ contents=[{url: "a"}, {url: "a"}], styleObj, isHorizontal=false }) {
  let wrapperClasses = "flex flex-wrap justify-center h-min"
  if(isHorizontal) {
    wrapperClasses = "flex overflow-scroll illo-grid-horizontal h-min"
  }
  return (
    <div className={wrapperClasses}>
      {contents?.map((illo) => {
        return (
          <Link
            href={`/illustration/${illo.urlPath}`}
            key={illo.urlPath}
            className="flex w-[max(300px,33%)] hover:scale-110 transition-transform duration-400 mb-8"
          >
            <img
              src={illo.navigationImage.url}
              className="pointer-events-none width-[100%]"
            />
          </Link>
        );
      })}
    </div>
  );
}
