import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const RestaurantRow = ({ id, name, location, price }) => {
    return (
        <TableRow>
            <TableCell component="th" scope="row">
                {name}
            </TableCell>
            <TableCell align="right">{location}</TableCell>
            <TableCell align="right">{price}</TableCell>
        </TableRow>
    );
};
