import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import bg from '../../images/appointment-bg.png'
import doctor from '../../images/doctor.png'
import { Button, Container, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(50, 70, 108,0.9 )',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: '110px',

}

const Appointmentbg = () => {
    return (
        <div>
            <Container>
                <Box style={appointmentBg} sx={{ flexGrow: 1, }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img
                                style={{ width: '500px', marginTop: '-127px' }}
                                src={doctor} alt="" />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                            <Box>
                                <Typography sx={{ mb: 5 }} variant='h6' style={{ color: "rgb(64, 244, 236)" }} >
                                    APPOINTMENT
                                </Typography>
                                <Typography variant='h4' style={{ color: "white" }} >
                                    MAKE AN APPOINTMENT TODAY
                                </Typography>
                                <Typography sx={{ my: 5 }} variant='h6' style={{ color: "white", fontSize: '14', fontWeight: '300' }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit sit quibusdam culpa ipsa inventore nemo.
                                </Typography>
                                <Button style={{ backgroundColor: "rgb(11, 173, 165)" }} variant="contained">Learn More</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container >

        </div >
    );
};

export default Appointmentbg;