import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
import { useRouter } from "next/router";

export default function CartDate() {
  const router = useRouter();
  const { date } = router.query;

  return (
    <>
      <h1>CartDate {JSON.stringify(date)}</h1>
      <button onClick={() => router.push("cart/1/2/3/4")}>오 라우터 똑같네</button>
    </>
  );
}

CartDate.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
