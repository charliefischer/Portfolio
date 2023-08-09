import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";
import JobsBoard from "../components/jobs-board";
import Banner from "../components/banner";
import SiteSelector from "../components/site-selector";
import { useEffect } from "react";

export default function Index({ preview, cmsContent }) {
  useEffect(() => {
    const h1 = document.querySelector("#title");
    const tween = document.querySelector(".tween");
    window.addEventListener("scroll", (e) => {
      const pixels = window.pageYOffset ?? window.scrollY;
      const fontWeight = pixels * 0.4 + 150;
      // const fontWidth = pixels * 0.05 + 25
      h1.style.fontVariationSettings = `"wdth" ${fontWeight}`;
      // tween.style.fontVariationSettings = `"wght" ${ fontWeight }, "wdth" ${ fontWidth }`
      // , "wdth" ${fontWidth}
    });
  });
  return (
    <>
      <Layout preview={preview} colour="orange-main">
        <Banner />
        <h2 className="text-center fixed left-[50%] translate-x-[-50%] z-[1]" id="#title">
          Charlie Fischer
        </h2>
        <SiteSelector />
        {/* <JobsBoard /> */}
        {/* {cmsContent} */}
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const cmsContent = await getHomePageContent(preview);
  return {
    props: { preview, cmsContent: cmsContent?.content?.[0] ?? null },
  };
}
