import { PRODUCTS_LIST_PATH } from '../pages/const';

/**
 * @description 첫페이지 products로
 */

export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', PRODUCTS_LIST_PATH);

  res.statusCode = 302;
  res.end();

  return { props: {} };
};

const Index = () => <>Index</>;

export default Index;
