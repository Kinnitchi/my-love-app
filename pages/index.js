import Layout from './components/Layout';
import SpecialMessage from './components/SpecialMessage';

function Home() {
  const igor = "Igor Oliveira";
  const giovanna = "Giovanna Delibi";
  const love = "❤️";
  const isInLove = igor + love + giovanna;
  console.log(isInLove);

  // return true;
  return (
    <Layout>
      <SpecialMessage />
    </Layout>
  );
}

export default Home;