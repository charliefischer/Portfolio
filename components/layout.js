import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children, classes }) {
  const  classNames = classes + ` min-h-screen`
  return (
    <>
      <Meta />
      <div className={classNames}>
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      {/* <Footer /> */}
    </>
  )
}
