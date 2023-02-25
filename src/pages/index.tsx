import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Item from '@/components/Item'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div>
          <div className={`${styles.center} ${styles.name}`}>
            DvirDEV
          </div>
        </div>

        {/* <div style={{maxWidth: `550px`}}> */}
        <div className={styles.grid2} style={{background: ``}}>
          <Item
            url='https://drive.google.com/file/d/1zOSgtPg2RsRdeDXJ27eF-8dGeU36SCTx/view?usp=sharing'
            icon='person_black_24dp.svg'
            iconWidth={30}
            title='Resume'
            // center={true}
            // paddingSide={40}
          />
          {/* <div style={{width: `30px`}}/> */}
          <Item
            url='https://github.com/DvirArazi'
            icon='github-mark.svg'
            iconWidth={25}
            iconHeight={24}
            title='GitHub'
            yOffset={1}
            // center={true}
            // paddingSide={40}
          />
        </div>
        {/* </div> */}

        <div className={styles.grid}>
          <Item
            url='https://neo-chess.herokuapp.com/'
            icon='neo-chess.svg'
            iconWidth={25}
            title='Neo-Chess'
            description='A web app for playing an original chess variant online and over the board'
          />

          <Item
            url='http://everybodysjimapp.herokuapp.com/'
            icon='everybodys-jim.svg'
            iconWidth={22}
            title="Everybody's Jim"
            description='A web app implementation of an original multiplayer role-playing game'
            yOffset={3}
          />

          <Item
            url='https://github.com/DvirArazi/Castlevania-Remake'
            icon='/bat.png'
            iconWidth={28}
            title={"Castlevania Remake"}
            description='A PC remake of the original Castlevania for the NES'
            yOffset={1}
          />

          <Item
            url='https://github.com/DvirArazi/advent_of_code'
            icon='aoc.svg'
            iconWidth={24}
            title={"Advent of Code"}
            description='Solutions for the puzzles of the yearly Advent of Code event'
            yOffset={4}
          />
        </div>
      </main>
    </>
  )
}
