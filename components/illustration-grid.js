import Link from "next/link";

export default function IllustrationGrid({ contents }) {
  return (
    <div className="flex flex-wrap justify-center">
      {contents.map(illo => {
       return (
          <Link href={`/${illo.urlPath}`} key={illo.urlPath} className="flex w-[max(300px,33%)]">
            <img src={illo.navigationImage.url} className="pointer-events-none width-[100%]" />
          </Link>
       ) 
      })}
    </div>
  );
}

