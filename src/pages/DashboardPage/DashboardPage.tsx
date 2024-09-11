// src/pages/DashboardPage.tsx
import { Typography, Container, Button } from '@mui/material';
import CustomDataTable from '~/components/CustomTable';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAppDispatch } from '~/hooks/useStore';
import { logout } from '~/store/features/auth/authSlice';

const DashboardPage = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h4">Dashboard</Typography>
      <Typography variant="body1">Welcome to your dashboard!</Typography>
      <CustomDataTable />
      <Button onClick={handleLogout} aria-label="logout" startIcon={<PowerSettingsNewIcon />}>
        Logout
      </Button>
    </Container>
  );
};

export default DashboardPage;
