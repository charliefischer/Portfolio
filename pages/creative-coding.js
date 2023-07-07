import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";
import Crazy from "../components/creative-coding/crazy";

export default function CreativeCoding({ preview, cmsContent }) {
  return (
    <>
      <Layout preview={preview}>
        <h1>Creative Coding</h1>
        <h3>These are all examples based on a creative coding course I enrolled in with SuperHi</h3>
        <Crazy />
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
