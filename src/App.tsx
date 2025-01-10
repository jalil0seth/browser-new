import { MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { NichesPage } from './pages/NichesPage';
import { VideosPage } from './pages/VideosPage';
import { FavoritesPage } from './pages/FavoritesPage';
import '@mantine/core/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<NichesPage />} />
              <Route path="/videos/:nicheId" element={<VideosPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Layout>
        </Router>
      </MantineProvider>
    </QueryClientProvider>
  );
}

export default App;