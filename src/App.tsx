// React
import React from 'react';

// Styles
import GlobalStyle from './theme/globalStyle';

// Components
import Layout from './components/layout/Layout';
import RecentScreen from './pages/RecentScreen';

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <RecentScreen />
      </Layout>
    </>
  );
};

export default App;
