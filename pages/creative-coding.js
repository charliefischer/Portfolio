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
      <Layout preview={preview} classes="overflow-x-hidden" colour="red-500">
        <h1>Creative Coding</h1>
        <h3>
          These are all examples based on the learning fromm a creative coding
          course I enrolled in with SuperHi. It utilises the Two.js library to
          allow for svg/canvas drawing
        </h3>
        <Grid />
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
