import { Button, Container, Grid, } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../Appointment/AppointmentModal/BookingModal';
import useAuth from '../../Hooks/UseAuth';

const Booking = ({ booking, date }) => {
    const { user } = useAuth();
    const { name, time, space } = booking;

    const [openBookingModal, setOpenBookingModal] = React.useState(false);
    const handleBookingModalOpen = () => setOpenBookingModal(true);
    const handleBookingModalClose = () => setOpenBookingModal(false);
    return (


        <><Grid item xs={12} sm={6} md={4} lg={4}>
            <Paper elevation={3} sx={{ py: 5 }} >

                <Typography sx={{ color: 'info.main', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>
                <Typography sx={{ fontWeight: 600 }} variant="h6" gutterBottom component="div">
                    {time}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {space} Space available
                </Typography>
                <Button onClick={handleBookingModalOpen} variant="contained">Book appointment</Button>
            </Paper>
        </Grid>
            <BookingModal
                date={date}
                openBookingModal={openBookingModal}
                handleBookingModalClose={handleBookingModalClose}
                booking={booking}

            ></BookingModal>
        </>
    );
};

export default Booking;