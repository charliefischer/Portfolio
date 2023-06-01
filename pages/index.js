import Layout from "../components/layout";
import { getHomePageContent } from "../lib/api";

export default function Index({ preview, cmsContent }) {
  return (
    <>
      <Layout preview={preview}>
        <h1>{cmsContent.text}</h1>
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
