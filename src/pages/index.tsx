import Head from 'next/head'
import { Maze } from '@/features/Maze';

export default function Home() {
  return (
    <>
      <Head>
        <title>Игровой портал «Мир» | Лабиринт</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      <>
        <h1>Лабиринт</h1>

        <Maze />
      </>
    </>
  )
}
