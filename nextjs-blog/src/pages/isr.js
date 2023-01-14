import SubLayout from "components/SubLayout";
import Layout from "components/Layout";

export async function getStaticProps() {
  console.log("하이하이");
  return {
    props: { time: new Date().toISOString() },
    revalidate: 10,
  };
}

export default function ISR({ time }) {
  return (
    <>
      <h1 className="title">{time}</h1>
    </>
  );
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
