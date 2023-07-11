import IllustrationGrid from "../../components/illustration-grid";
import Layout from "../../components/layout";
import { getIllustrationContent } from "../../lib/api";
export default function Illustration({cmsContent}){
  console.log(cmsContent)
  return (
    <Layout>
      <h1 className="text-center">Illustration</h1>
      <IllustrationGrid contents={cmsContent} />
    </Layout>
  )
}

export async function getStaticProps({ preview = false }) {
  const cmsContent = await getIllustrationContent(preview);
  return {
    props: { preview, cmsContent: cmsContent?.content ?? null },
  };
}