import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";
import Crazy from "../components/creative-coding/crazy";
import Zipper from "../components/creative-coding/zipper";
import Whirl from "../components/creative-coding/whirl";
import Delay from "../components/creative-coding/delay";
import Sticks from "../components/creative-coding/sticks";
import Grid from "../components/creative-coding/grid";

export default function CreativeCoding({ preview, cmsContent }) {
  return (
    <>
      <Layout preview={preview} classes="overflow-x-hidden">
        <h1>Creative Coding</h1>
        <h3>
          These are all examples based on the learning fromm a creative coding
          course I enrolled in with SuperHi. It utilises the Two.js library to
          allow for svg/canvas drawing
        </h3>
        <Grid />
        {/* <section className="creative-coding-wrappers flex flex-nowrap overflow-auto snap-x">
          <div className="mr-[24px]">
            <Crazy />
          </div>
          <div className="mr-[24px]">
            <Zipper />
          </div>
          <div className="mr-[24px]">
            <Whirl />
          </div>
          <div className="mr-[24px]">
            <Sticks />
          </div>
          <div className="mr-[24px]">
            <Delay />
          </div>
        </section> */}
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
