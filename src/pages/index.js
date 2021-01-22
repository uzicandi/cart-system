/**
 * @description 첫페이지 products로
 */
export const getServerSideProps = async ({ res }) => {
  res.setHeader('location', `/products`);

  res.statusCode = 302;
  res.end();

  return { props: {} };
};

const Index = () => <>Index</>;

export default Index;
