import Link from "next/link";

export default function IllustrationGrid({ contents, styleObj }) {
  return (
    <div className="flex flex-wrap justify-center fixed transition-all duration-[400ms] min-w-[100%]" style={styleObj}>
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
      {!contents && (
        <div>conttents</div>
      )}
    </div>
  );
}
