import '../styles/globals.css'

import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return <div className="hBase bgGray">
    <Header />
    <Component {...pageProps} />
  </div>
}

export default MyApp
