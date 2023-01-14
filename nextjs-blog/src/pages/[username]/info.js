import SubLayout from "components/SubLayout";
import Layout from "components/Layout";
export default function UserNameInfo() {
  return (
    <>
      <h1>UserNameInfo</h1>
    </>
  );
}

UserNameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
