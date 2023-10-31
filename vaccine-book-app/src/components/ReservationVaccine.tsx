import { useAppSelector } from "@/redux/store";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeReservation } from "@/redux/features/bookSlice";

import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  Divider,
} from "@mui/material";

export default function ReservationVaccine() {
  const vaccineItems = useAppSelector((state) => state.bookSlice.vaccineItems);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" color="textPrimary">
        Vaccine Reservations
      </Typography>
      <Divider />
      {vaccineItems.length === 0 ? (
        <Typography variant="h5" color="textSecondary">
          No Vaccine Reservations
        </Typography>
      ) : (
        vaccineItems.map((item) => (
          <Card key={item.id} elevation={3} sx={{ width: 400, my: 2 }}>
            <CardContent>
              <Typography variant="h6" color="textPrimary">
                {item.hospital}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Name: {item.name} {item.surname}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                ID: {item.id}
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Date: {item.date}
              </Typography>
            </CardContent>
            <Button
              variant="outlined"
              onClick={() => dispatch(removeReservation(item))}
              fullWidth
            >
              Remove Reservation
            </Button>
          </Card>
        ))
      )}
    </Box>
  );
}
