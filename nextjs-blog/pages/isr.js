import styles from "../styles/Home.module.css";
import SubLayout from "../components/SubLayout";

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
      <h1 className={styles.title}>{time}</h1>
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
