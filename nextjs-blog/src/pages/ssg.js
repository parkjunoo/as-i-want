import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getStaticProps() {
  console.log("하이하이");
  return {
    props: { time: new Date().toISOString() },
  };
}

export default function SSG({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}
