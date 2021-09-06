import Head from 'next/head'
import Header from './Header'
// import Footer from './Footer'
// import Search from './Search'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/images/logo.png' />
      </Head>

      <Header />
      {/* <Search /> */}
      <main className='container mx-auto my-7'>{children}</main>

      {/* <Footer/> */}
    </div>
  )
}

Layout.defaultProps = {
  title: 'Welcome to Event finder',
  keywords: 'Gospel, game, others',
  description: 'The best info and news in event',
}
