import Banner from "../../components/banner";
import IllustrationGrid from "../../components/illustration-grid";
import Layout from "../../components/layout";
import { getIllustrationNavigationContent } from "../../lib/api";
import Navigation from "../../components/navigation";
export default function Illustration({ cmsContent }) {
  return (
    <>
      <Navigation />
      <Layout>
        <h1 className="text-center">Illustration</h1>
        <IllustrationGrid contents={cmsContent} />
      </Layout>
      <Banner />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const cmsContent = await getIllustrationNavigationContent(preview);
  return {
    props: { preview, cmsContent: cmsContent?.content ?? null },
  };
}
