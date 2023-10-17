import { useEffect } from "react";
import Navigation from "../../components/navigation";
export default function HullaProto() {
  useEffect(() => {
    const iFrame = document.querySelector(".hulla-iframe");
    const iFrame2 = document.querySelector(".hulla-iframe-2");
    if (!iFrame) return;
    iFrame.src =
      "https://content.hulla-cdn.com/apps/1190/20220825-100310/?hulla_origin=https%3A%2F%2Fcontent.hulla-cdn.com%2Fapps%2F1190%2Fpreview%2Findex.html&hulla_session=8db6a295-fe97-4e9d-aa6b-5a040e48b79c&hullaAppId=hulla&hulla_experience=1190&hulla_timestamp=1697578342863&hulla_now=1697578343479&hulla_originType=hulla%2Fdev";
    if (!iFrame2) return;
    iFrame2.src =
      "https://customer-prototypes.hulla-cdn.com/sketchfab-proto/1284/20230207-162810/";
  }, []);
  return (
    <div>
      <Navigation />
      <h1 className="mx-auto text-center">Prototypes</h1>
      <h2 className="text-center mt-4">Lamp Builder</h2>
      <p>They are desktop only and not optimised for North America so please be patient</p>
      <p>
        Just using CSS you can seamlessly build your own lamp from a retailers
        independent lamp stands and lampshades.
      </p>
      <iframe className="h-[90vh] w-[90vw] p-2 mx-auto hulla-iframe border-2" />
      <h2 className="text-center mt-4">3D Room Builder</h2>
      <p>
        This was taking a current packaged app and rendering 2D images of 3D
        models
      </p>
      <iframe className="h-[90vh] w-[90vw] mx-auto p-2 hulla-iframe-2 mb-4 border-2" />
    </div>
  );
}
