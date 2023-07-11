import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import {
  getIllustrationContent,
  getIllustrationNavigationContent,
} from "../../lib/api";
export default function IllustrationPage({ cmsContent }) {
  return (
    <>
      <Navigation />
      <Layout>
        <h1 className="text-center">{cmsContent.title}</h1>
        <div className="flex justify-center">
          <div className="flex justify-center max-w-[min(780px,100%)] max-h-[90vh]">
            <img
              src={cmsContent.mainImage.url}
              className="w-[100%] object-contain"
            />
          </div>
        </div>
      </Layout>
      <Banner />
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getIllustrationContent(params.urlPath);
  return {
    props: {
      cmsContent: data?.content?.[0] ?? {},
    },
  };
}

export async function getStaticPaths() {
  const illustrations = (await getIllustrationNavigationContent()) ?? [];
  return {
    paths:
      illustrations?.content?.map(
        ({ urlPath }) => `/illustration/${urlPath}`
      ) ?? [],
    fallback: true,
  };
}
