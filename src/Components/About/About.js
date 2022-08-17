import {
  Box,
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function About() {
  return (
    <>
      <Box>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: "100%" }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left">Massage</TableCell>
                <TableCell align="left">Massage</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell scope="left">fata</TableCell>
                <TableCell align="left">fata</TableCell>
                <TableCell align="left">fata</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
}

export default About;
