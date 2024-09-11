import { Box, CircularProgress, Dialog } from '@mui/material';

import { LoadingPageProps } from './LoadingPage.types';

const LoadingPage = ({ variant, ...props }: LoadingPageProps) => {
  if (variant === 'overlay') {
    return (
      <Dialog
        open
        PaperProps={{
          sx: {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            color: 'white',
          },
        }}
      >
        <CircularProgress size={38} color="inherit" />
      </Dialog>
    );
  }

  // inline variant
  return (
    <Box display="flex" width="100%" height="100vh" alignItems="center" justifyContent="center" {...props}>
      <CircularProgress size={38} color="inherit" />
    </Box>
  );
};

export default LoadingPage;
