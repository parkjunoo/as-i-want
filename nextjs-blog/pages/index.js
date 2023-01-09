import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>
      <h1>
        <Link href="/csr"> crs 로 </Link>
      </h1>
      <h1>
        <Link href="/ssg"> ssg 로 </Link>
      </h1>
      <h1>
        <Link href="/isr"> isr 로 </Link>
      </h1>
    </>
  );
}
