import { useEffect } from "react";
import { getIllustrationContent } from "../lib/api";
import Link from "next/link";

export default function IllustrationGrid({ preview, contents }) {
  // useEffect(() => {
  // });
  return (
    <div>
      {contents.map(illo => {
       return (
          <Link href={`/${illo.urlPath}`} key={illo.urlPath}>
            <img src={illo.navigationImage.url} className="pointer-events-none" />
          </Link>
       ) 
      })}
      {/* <div>{cmsContent.items[0]}</div> */}
    </div>
  );
}

// export async function getStaticProps({ preview = false }) {
//   console.log(1)
//   const cmsContent = await getIllustrationContent(preview);
//   return {
//     props: { preview, cmsContent: cmsContent ?? null },
//   };
// }

