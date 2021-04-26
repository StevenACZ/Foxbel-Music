// React
import React from 'react';

// Styles
import GlobalStyle from './theme/globalStyle';

// Components
import Layout from './components/layout/Layout';
import HomeScreen from './pages/HomeScreen';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <HomeScreen />
      </Layout>
    </>
  );
};

export default App;
