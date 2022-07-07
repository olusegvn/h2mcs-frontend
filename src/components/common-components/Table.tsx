import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {MonserratTableData, MonserratTableHeader} from "../mini-components/Typography";
import {Avatar} from "../mini-components/Avatar";
import avatar from '../../assets/images/avatar.png';
import {RowStack} from "../mini-components/Stack";
import InfiniteScroll from 'react-infinite-scroll-component';
import {useState} from "react";
import Placeholder from "./PlaceHolder";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#F8F8FB',
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows: Array<object> = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function CustomizedTables() {
  const [items, setItems] = useState(rows)
  return (
      rows.length !== 0?
    <TableContainer component={'div'}>
      <InfiniteScroll
          dataLength={items.length}
          next={() => setItems((prev: any) => [...prev, ...rows])}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollDiv"
          endMessage={
              <b>Yay! You have seen it all</b>
          }
        >
        <StyledTable  aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell style={{paddingLeft: '4%'}}><MonserratTableHeader>Name</MonserratTableHeader></StyledTableCell>
                <StyledTableCell align={'center'}><MonserratTableHeader>Patient ID</MonserratTableHeader></StyledTableCell>
                <StyledTableCell align={'center'}><MonserratTableHeader>Patient ID</MonserratTableHeader></StyledTableCell>
                <StyledTableCell align={'center'}><MonserratTableHeader>Patient ID</MonserratTableHeader></StyledTableCell>
                <StyledTableCell align={'center'}><MonserratTableHeader>Patient ID</MonserratTableHeader></StyledTableCell>
                <StyledTableCell align={'center'}><MonserratTableHeader> </MonserratTableHeader></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                  {items.map((item: any) => (
                    <StyledTableRow key={item.name}>
                      <StyledTableCell component="th" scope="row">
                        <StyledRowStack>
                          <Avatar src={avatar} small/>
                          <MonserratTableData>{item.name}</MonserratTableData>
                        </StyledRowStack>
                      </StyledTableCell>
                      <StyledTableCell align="center"><MonserratTableData>{item.calories}</MonserratTableData></StyledTableCell>
                      <StyledTableCell align="center"><MonserratTableData>{item.fat}</MonserratTableData></StyledTableCell>
                      <StyledTableCell align="center"><MonserratTableData>{item.carbs}</MonserratTableData></StyledTableCell>
                      <StyledTableCell align="center"><MonserratTableData>{item.protein}</MonserratTableData></StyledTableCell>
                      <StyledTableCell align="center"><MonserratTableData>{item.protein}</MonserratTableData></StyledTableCell>
                    </StyledTableRow>
                  ))}
            </TableBody>
        </StyledTable>
      </InfiniteScroll>
    </TableContainer> : <Placeholder />
  );
}

const StyledRowStack = styled(RowStack)(({theme}) => ({
  alignItems: 'center',
  boxShadow: 'none',
}));
const StyledTable = styled(Table)(({theme}) => ({
  margin: '0rem 1rem',
  width: '95%',
}));
