import React from 'react';
import Box from '@mui/material/Box';
import bg from '../../images/bg.png';
import chair from '../../images/chair.png';
import { Button, Container, Grid, Typography } from '@mui/material';


const bannerBg = {
    background: `url(${bg})`,
    height: 450,
}
const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}

const Banner = () => {
    return (
        <Container>
            <Box style={bannerBg} sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} columns={16}>
                    <Grid style={{ ...verticalCenter, textAlign: 'left' }} item xs={8}>
                        <Box>
                            <Typography variant='h3'>
                                Your New Smile <br />
                                Start Here
                            </Typography>
                            <Typography variant="body2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eaque neque, ut quod odit sunt vero nulla.
                            </Typography>
                            <Button style={{ backgroundColor: "rgb(11, 173, 165)" }} variant="contained">Learn More</Button>
                        </Box>
                    </Grid>
                    <Grid style={verticalCenter} item xs={8}>
                        <img style={{ width: '400px' }} src={chair} alt="" />
                    </Grid>
                </Grid>
            </Box >
        </Container>

    );
};

export default Banner;