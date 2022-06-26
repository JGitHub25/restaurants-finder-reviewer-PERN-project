import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RestaurantRow } from './RestaurantRow';

function createData(id, name, location, price) {
    return { id, name, location, price };
}

const restaurants = [
    createData(0, 'cheesecake factory', 'dallas', '$$'),
    createData(1, 'mcDonalds', 'miami', '$'),
    createData(2, 'red lobster', 'seattle', '$$$'),
    createData(3, 'city wok', 'south park', '$$'),
    createData(4, 'pizza hut', 'new york', '$'),
];

export default function RestaurantsTable() {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Restaurant</TableCell>
                        <TableCell align="right">Location</TableCell>
                        <TableCell align="right">Price range</TableCell>
                        <TableCell align="right">Ratings</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {restaurants.map((restaurant) => (
                        <RestaurantRow
                            key={restaurant.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            {...restaurant} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
