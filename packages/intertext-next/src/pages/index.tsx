import Head from "next/head"
import "../components/Hero"
import { Hero } from "../components/Hero"
import { getLayoutProps } from '@intertext/engine'

export default function Home() {
  console.log('>>>', getLayoutProps({}))
  return (
    <>
    <Head>
      <title>Home Page | Created with ❤️ by Elitizon Ltd</title>
    </Head>
      <Hero />
    </>
  )
}
