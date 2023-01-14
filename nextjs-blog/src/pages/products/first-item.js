import { useEffect, useState } from "react";
import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
export default function FirstItem() {
  return (
    <>
      <h1>FirstItem</h1>
    </>
  );
}

FirstItem.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
