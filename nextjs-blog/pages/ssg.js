import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  console.log("하이하이");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
    </>
  );
}
