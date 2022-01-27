import GlobalStyle from './styles/GlobalStyle';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainLayout>{/* Some content */}</MainLayout>
    </>
  );
};

export default App;
