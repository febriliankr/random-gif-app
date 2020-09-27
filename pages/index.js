import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Random from '../components/Random'
import Tag from '../components/Tag'


export default function Home() {
  return (
    <>
      <h1>Random Gif Generator</h1>
      <Random/>
      <Tag/>
    </>
  )
}
