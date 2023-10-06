import Layout from "../components/layout";
import { getHomePageContent, getIllustrationNavigationContent } from "../lib/api";
import JobsBoard from "../components/jobs-board";
import Banner from "../components/banner";
import SiteSelector from "../components/site-selector";
import { useEffect } from "react";

export default function Index({ preview, cmsContent, illoCmsContent }) {
  useEffect(() => {
    const h1 = document.querySelector("#title");
    const tween = document.querySelector(".tween");
  
    const scrollHandler = (e) => {
      return
      const pixels = window.pageYOffset ?? window.scrollY;
      const fontWeight = pixels * 0.4 + 150;
      h1.style.fontVariationSettings = `"wdth" ${fontWeight}`;
    };
  
    window.addEventListener("scroll", scrollHandler);
  
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <>
      <Layout preview={preview} colour="orange-main">
        <Banner />
        <h2
          className="fixed left-4 z-[1]"
          id="#title"
        >
          Charlie Fischer
        </h2>
      <SiteSelector illoCmsContent={illoCmsContent} />
      </Layout>
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const cmsContent = await getHomePageContent(preview);
  const illoCmsContent = await getIllustrationNavigationContent(preview);

  return {
    props: {
      preview,
      cmsContent: cmsContent?.content?.[0] ?? null,
      illoCmsContent: illoCmsContent?.content ?? null,
    },
  };
}
