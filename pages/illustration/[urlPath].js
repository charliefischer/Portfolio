import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import {
  getIllustrationContent,
  getIllustrationNavigationContent,
} from "../../lib/api";
export default function IllustrationPage({ cmsContent }) {
  const supportingImages = cmsContent?.supportingFullImagesCollection?.items;
  return (
    <>
      <Navigation />
      <Layout>
        <h1 className="text-center">{cmsContent?.title}</h1>
        <div className="flex flex-col justify-center items-center">
          <p className="max-w-[90%] mb-8">{cmsContent?.description}</p>
          <div className="flex justify-center max-w-[min(780px,100%)] max-h-[90vh] mb-8">
            <img
              src={cmsContent?.mainImage.url}
              className="w-[100%] object-contain"
            />
          </div>
          {supportingImages?.map((img) => (
            <div className="flex justify-center max-w-[min(780px,100%)] max-h-[90vh] mb-8">
              <img
                src={img.url}
                loading="lazy"
                className="w-[100%] object-contain"
              />
            </div>
          ))}
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
