import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";
import Grid from "../components/creative-coding/grid";
import Banner from "../components/banner";
import Navigation from "../components/navigation";

export default function CreativeCoding({ preview, cmsContent }) {
  return (
    <>
      <Navigation />
      <Layout preview={preview} classes="overflow-x-hidden">
        <h1 className="mx-auto text-center">Creative Coding</h1>
        <h3 className="max-w-[80%] mx-auto">
          These are all examples based on the learning fromm a creative coding
          course I enrolled in with SuperHi. It utilises the Two.js library to
          allow for svg/canvas drawing
        </h3>
        <Grid />
        <Banner />
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
