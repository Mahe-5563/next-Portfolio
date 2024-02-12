import Image from 'next/image';
import Link from "next/link";
import { Amaranth } from "next/font/google";

import "./globals.css";
import HomePage from '@/components/home/homepage/index';

const font = Amaranth({
  subsets: ["latin"],
  weight: '400',
})

export default function Home() {
  return (
    <main className={font.className}>
      <head>
        <title>Home | Works by Mahe</title>
      </head>
      <HomePage />
    </main>
  )
}
