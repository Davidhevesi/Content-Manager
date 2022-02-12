import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';
import Layout from 'components/Layout';

function Home () {
  return (
    <Layout>
      <ResourceHighlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </Layout>
  );
}

export default Home;
