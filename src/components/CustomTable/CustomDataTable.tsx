import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

// can be queried through API or graphql then store in redux.
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Movie Name', width: 130 },
  { field: 'genre', headerName: 'Genre', width: 130 },
  { field: 'rating', headerName: 'Rating', width: 180 },
];

const rows = [
  { id: 1, name: 'Movie1', genre: 'genre1', rating: 4 },
  { id: 2, name: 'Movie2', genre: 'genre2', rating: 5 },
  { id: 3, name: 'Movie3', genre: 'genre3', rating: 5 },
  { id: 4, name: 'Movie4', genre: 'genre4', rating: 3.5 },
];

const CustomDataTable = () => {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((data) => {
                return (
                  <TableCell align="center" key={data.field} sx={{ fontWeight: 700 }}>
                    {data.headerName}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="center" component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.genre}</TableCell>
                <TableCell align="center">{row.rating}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomDataTable;
