import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
