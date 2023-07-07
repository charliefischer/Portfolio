import { useEffect } from "react";
import Alert from "../components/alert";
import Footer from "../components/footer";
import Meta from "../components/meta";
import CustomCursor from "./custom-cursor";

export default function Layout({ preview, children, classes, colour }) {
  const classNames = classes + ` min-h-screen`;
  return (
    <>
      <Meta />
      <CustomCursor colour={colour} />
      <div className={classNames}>
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  );
}
