import { useEffect, useState } from "react";
import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log("settime");
    setTime(new Date().toISOString());
  });

  return (
    <>
      <h1>{time}</h1>
    </>
  );
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
