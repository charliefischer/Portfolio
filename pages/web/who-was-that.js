import Banner from "../../components/banner";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";

export default function whoWasThat({ preview }) {
  return (
    <>
      <Navigation />
      <Layout preview={preview} classes="overflow-x-hidden">
        <h1 className="mx-auto text-center">Who Was That?</h1>
        <h3 className="max-w-[80%] mx-auto">
          From attending tech meetups, I began to realise that when you add 20
          people on LinkedIn, by the next week you are struggling to remember
          who they were if you hadn't reached out the them already!
        </h3>
        <h3 className="max-w-[80%] mx-auto my-4">
          This is what my chrome plugin fixes. When turned on, it gives you an option
          to add a note about who the person was which then gets stored in your
          local storage. Adding a note just for your own personal use means you
          can make it easy for yourself to identify in a week, month or a
          year's time after you first connected.
        </h3>
        <div className="max-w-[80%] mx-auto flex flex-col gap-4 mb-4">
          <video src="/web-images/john-doe.mov" controls/>
        </div>
        <p className="mb-4 max-w-[80%] mx-auto">Now when you return, you can turn the plugin on again and see your note!</p>
        <div className="max-w-[80%] mx-auto flex flex-col gap-4 mb-4">
          <video src="/web-images/john-doe2.mov" controls/>
        </div>
        <a href="https://github.com/charliefischer/Who-was-that" target="_blank" className="mx-auto block text-center">Github</a>
        <div className="w-[100%] min-h-[64px]"></div>
        <Banner />
      </Layout>
    </>
  );
}
