import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
import { useRouter } from "next/router";
export default function CategorySlog() {
  const router = useRouter();
  const { slug, event } = router.query;

  return (
    <>
      <h1>
              CategorySlog {"->"} {slug} {event}
      </h1>
    </>
  );
}

CategorySlog.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
