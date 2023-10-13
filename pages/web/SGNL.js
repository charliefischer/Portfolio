import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";

export default function SGNL({ preview }) {
  return (
    <>
      <Navigation />
      <Layout preview={preview} classes="overflow-x-hidden">
        <h1 className="mx-auto text-center">SGNL</h1>
        <h3 className="max-w-[80%] mx-auto">
          I developed a fully integrated Shopify site for a start up called
          SGNL, creating fashion items with a focus on making women feel safe
          when out.
        </h3>
        <h3 className="max-w-[80%] mx-auto">
          Using a free default template, I created liquid components and custom
          layouts to match their desired designs. The videos use placeholder
          images as waiting on product shots to be completed.
        </h3>
        {/* to amend */}
        <video src="/web-images/SGNL_home.mov" />
        <video src="/web-images/SGNL_variants.mov" />
        <Banner />
      </Layout>
    </>
  );
}
