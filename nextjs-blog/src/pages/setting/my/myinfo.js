import { useEffect, useState } from "react";
import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
import { useRouter } from "next/router";
export default function MyInfo() {
  const [clicked, setClicked] = useState(false);
  const { status = "install" } = router.query;
  return (
    <>
      <h1>MyInfo</h1>
      <h1>Clicked: {String(clicked)} </h1>
      <h1>Status: {status}</h1>
      <button>edit{replace}</button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
