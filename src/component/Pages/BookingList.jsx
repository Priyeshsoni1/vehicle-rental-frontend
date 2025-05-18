import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { fetchBooking } from "../../api/Api";

// Example Booking data structure:
// [
//   {
//     id: 1,
//     firstName: "John",
//     lastName: "Doe",
//     startDate: "2023-05-01T00:00:00.000Z",
//     endDate: "2023-05-05T00:00:00.000Z",
//     vehicleId: 2,
//     vehicle: { id: 2, name: "Toyota Corolla" }
//   },
//   ...
// ]

export default function BookingList() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    fetchBooking()
      .then((res) => setBookings(res.data))
      .catch(console.error);
  }, []);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 900, mx: "auto", mt: 4 }}>
      <Typography variant="h6" sx={{ p: 2 }}>
        Bookings
      </Typography>
      <Table aria-label="bookings table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell>Vehicle</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>End Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell>{booking.id}</TableCell>
              <TableCell>{booking.firstName}</TableCell>
              <TableCell>{booking.lastName}</TableCell>
              <TableCell>{booking.vehicle?.model || "N/A"}</TableCell>
              <TableCell>
                {new Date(booking.startDate).toLocaleDateString()}
              </TableCell>
              <TableCell>
                {new Date(booking.endDate).toLocaleDateString()}
              </TableCell>
            </TableRow>
          ))}
          {bookings.length === 0 && (
            <TableRow>
              <TableCell colSpan={6} align="center">
                No bookings found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
