import Head from 'next/head'
import Slideshow from '../components/slideshow'

export default function Home() {
  return (
    <>
      <Head>
        <title>Slideshow | Martin Hofmann</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main className="rz-layout__main">
        <div className="rz-layout__container">
          <h1 className="rz-layout__level-1">Slideshow Exercise</h1>
          <p className="rz-layout__p">By Martin Hofmann</p>
        </div>
        <Slideshow
          slides={[
            {
              name: 'Coffee',
              image: 'coffee-777612_640.jpg',
              count: 0
            },
            {
              name: 'Coins',
              image: 'coins-1523383_1920.jpg',
              count: 0
            },
            {
              name: 'Posing',
              image: 'posing-999199_1920.jpg',
              count: 0
            },
            {
              name: 'Raspberries',
              image: 'raspberries-1426859_1920.jpg',
              count: 0
            }
          ]}
        />
      </main>
    </>
  )
}
