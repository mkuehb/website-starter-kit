import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import { HeaderProps, FooterProps, ImageProps } from '../entities'
import { createClient } from '../prismicio'

// NOTE: You have to create your first prismic document to make this work
// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient(previewData)

//   const doc = (await client.getSingle('cases-distribution', {})) || null
//   const header = (await client.getSingle('header', {})) || null
//   const footer = (await client.getSingle('footer', {})) || null

//   return {
//     props: {
//       doc,
//       header,
//       footer,
//     },
//   }
// }

interface PageProps {
  doc: {
    uid: string
    metaTitle: string
    metaDescription: string
    thumbnail: ImageProps
  }
  header: HeaderProps
  footer: FooterProps
}

const Home: NextPage<PageProps> = ({ doc, header, footer }) => {
  return (
    <div className="page-container">
      <Head>
        <title>Website Starter kit</title>
        <meta name="description" content="Website Starter kit to kickstart new website projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header data={header?.data} />

      <main className="main-layout padding-x">
        <h1>Cases</h1>
        <p>Edit the cases.tsx /pages to change the content of this page.</p>
        <Image src="/wip.png" alt="Website Starter Kit" width={600} height={600} />
      </main>

      <Footer data={footer?.data} />
    </div>
  )
}

export default Home
