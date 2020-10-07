import { GetStaticProps } from "next";
import Layout from "../components/Layout";

const IndexPage = () => {
  return <Layout title="Home | Next.js + TypeScript Example"></Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default IndexPage;
