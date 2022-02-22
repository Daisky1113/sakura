import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Card from '../components/Card'
import jpg from '../public/Sakura.jpg'

import {useState, useEffect } from 'react'
import { db } from '../src/firebase'
import { collection, getDocs } from "firebase/firestore";



export default function Home() {
    const [posts, setPosts] = useState([])
  useEffect(() => {
    const postsCollectionRef = collection(db, 'posts')
    getDocs(postsCollectionRef).then(querySnapshot => {
      setPosts(querySnapshot.docs.map(doc => doc.data()))
    })
  }, [])
  return (
    <div className={styles.container}>
      <Layout title="ホームのページです">
        {posts.map((post, index) => {
          return (
            <Card
              key={index}
              date={post.date}
              src={post.imageUrl}
              title={post.title}
              text={post.text}
              url={post.url}
            />
          )
        })}
      </Layout>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
