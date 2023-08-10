import Banner from "../../components/banner";
import IllustrationGrid from "../../components/illustration-grid";
import Layout from "../../components/layout";
import { getIllustrationNavigationContent } from "../../lib/api";
import Navigation from "../../components/navigation";
export default function Illustration({ illoCmsContent }) {
  return (
    <>
      <Navigation />
      <Layout>
        <h1 className="text-center">Illustration</h1>
        <IllustrationGrid contents={illoCmsContent} />
      </Layout>
      <Banner />
    </>
  );
}

export async function getStaticProps({ preview = false }) {
  const illoCmsContent = await getIllustrationNavigationContent(preview);
  return {
    props: { preview, cmsContent: illoCmsContent?.content ?? null },
  };
}
