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
        <h3 className="max-w-[80%] mx-auto mb-4">
          Using a free default template, I created liquid components and custom
          layouts to match their desired designs.
        </h3>
        <p className="text-left max-w-[80%] mx-auto mb-4">
          The images use placeholder images as awaiting product shots to be
          completed.
        </p>
        <div className="max-w-[80%] mx-auto flex flex-col gap-4">
          <img src="/web-images/SGNL/home.png" />
          <img src="/web-images/SGNL/toolbar.png" />
          <img src="/web-images/SGNL/product.png" />
          <img src="/web-images/SGNL/cart.png" />
          <a
            href="https://sgnl-8577.myshopify.com/cart"
            target="_blank"
            className="pb-[64px] text-underline mx-auto"
          >
            SGNL
          </a>
        </div>
        <Banner />
      </Layout>
    </>
  );
}
