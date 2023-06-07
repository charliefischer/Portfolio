import { useEffect } from "react";
import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";

export default function Index({ preview, cmsContent }) {
  useEffect(() => {
    const h1 = document.querySelector('#title')
    const tween = document.querySelector('.tween')
    window.addEventListener('scroll', e => {
      const pixels = window.pageYOffset
      const fontWeight = pixels * 0.4 + 150
      const fontWidth = pixels * 0.05 + 25
      
      h1.style.fontVariationSettings = `"wght" ${ fontWeight }`
      tween.style.fontVariationSettings = `"wght" ${ fontWeight }, "wdth" ${ fontWidth }`
      // , "wdth" ${fontWidth}
    })
  })
  return (
    <>
      <Layout preview={preview}>
        <div className='empty' />
        <div className="wrapper">
          <h1 id='title'>Ch<span className='tween'>a</span>rlie Fischer</h1>
          <p>Website currently under construction</p>
        </div>
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
