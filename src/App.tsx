import { Container, CssBaseline } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import PrivateRoute from './routes/PrivateRoute';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route index element={<DashboardPage />} />
          </Route>
          <Route path="*" element={<LoginPage />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
