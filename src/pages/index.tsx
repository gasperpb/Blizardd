import { Banner } from 'Components/Banner'
import { GetStaticProps } from 'next'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>Blizzard</title>
      </Head>
      <Banner />
    </>
  )
}
