import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
import ThreeText from "../../components/three/text";

export default function Three({}) {
  return (
    <>
      <Navigation />
      <Layout>
        <ThreeText />
      </Layout>
      <Banner />
    </>
  );
}
