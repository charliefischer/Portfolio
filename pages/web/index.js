import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import WebDevGrid from "../../components/web-dev-grid";
export default function Illustration({  }) {
  return (
    <>
      <Navigation />
      <Layout>
        <h1 className="text-center">Web Developer</h1>
        <WebDevGrid />
      </Layout>
      <Banner />
    </>
  );
}

// export async function getStaticProps({ preview = false }) {
//   const illoCmsContent = await getIllustrationNavigationContent(preview);
//   return {
//     props: { preview, cmsContent: illoCmsContent?.content ?? null },
//   };
// }
