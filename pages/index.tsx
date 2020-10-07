import { GetStaticProps } from "next";
import Layout from "../components/Layout";

const IndexPage = () => {
  return <Layout />;
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default IndexPage;
