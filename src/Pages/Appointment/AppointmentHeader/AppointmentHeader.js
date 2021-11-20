import React from 'react';
import Box from '@mui/material/Box';
import bg from '../../../images/bg.png'
import chair from '../../../images/chair.png';
import { Button, Container, Grid, Typography } from '@mui/material';
import Calendar from '../../Sheared/calendar/Calendar';


const bannerBg = {
    background: `url(${bg})`,
    height: 450,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}

const AppointmentHeader = ({ date, setDate }) => {
    return (
        <div>
            <Container>
                <Box style={bannerBg} sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} columns={16}>
                        <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={8}>
                            <Calendar date={date} setDate={setDate}></Calendar>
                        </Grid>
                        <Grid style={verticalCenter} item xs={8}>
                            <img style={{ width: '400px' }} src={chair} alt="" />
                        </Grid>
                    </Grid>
                </Box >
            </Container>
        </div>
    );
};

export default AppointmentHeader;