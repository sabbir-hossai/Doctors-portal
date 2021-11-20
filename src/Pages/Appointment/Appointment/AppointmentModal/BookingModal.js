import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import useAuth from '../../../Hooks/UseAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const BookingModal = ({ openBookingModal, handleBookingModalClose, booking, date }) => {
    const { name, time, space } = booking;
    const { user } = useAuth();

    const defaultBookingInFo = { name: user.displayName, email: user.email, phoneNumber: '' }
    const [bookingInFo, setBookingInFo] = useState(defaultBookingInFo)

    const handelOnBlur = e => {
        const name = e.target.name;
        const value = e.target.value;
        const newBookingInFo = { ...bookingInFo };
        newBookingInFo[name] = value;
        setBookingInFo(newBookingInFo);
    }


    const handelBookingSubmit = e => {
        // collect data 
        const appointment = {
            ...bookingInFo,
            time,
            serviceName: name,
            date: date.toDateString()


        }
        console.log(appointment)
        // send data to server 
        fetch('http://localhost:5000/appointments', {
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('appointment successfully complete')
                }
                console.log(data)
                handleBookingModalClose()
            })


        e.preventDefault()
    }

    return (
        <Modal
            open={openBookingModal}
            onClose={handleBookingModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <form>
                    <TextField
                        sx={{ width: "90%" }}
                        disabled
                        id="outlined-size-small"
                        defaultValue={time}
                        size="small"
                    />
                    <TextField
                        onBlur={handelOnBlur}
                        sx={{ width: "90%", py: 2 }}
                        id="outlined-size-small"
                        defaultValue={user.displayName}
                        name='name'
                        size="small"
                    />
                    <TextField
                        onBlur={handelOnBlur}
                        sx={{ width: "90%" }}
                        id="outlined-size-small"
                        defaultValue={user.email}
                        name='email'
                        size="small"
                    />
                    <TextField
                        onBlur={handelOnBlur}
                        sx={{ width: "90%", py: 2 }}
                        name='phoneNumber'
                        id="outlined-size-small"
                        defaultValue=" phone number"
                        size="small"
                    />
                    <TextField
                        sx={{ width: "90%" }}
                        disabled
                        id="outlined-size-small"
                        defaultValue={date.toDateString()}
                        size="small"
                    />
                    <Button sx={{ mt: 2 }} onClick={handelBookingSubmit} type="submit" variant="contained">Contained</Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BookingModal;