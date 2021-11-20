import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import fluoride from '../../../../images/fluoride.png';
import cavity from '../../../../images/cavity.png';
import whitening from '../../../../images/whitening.png';
import Service from '../Service/Service';
import { Container, Grid, Typography } from '@mui/material';

const services = [
    {
        id: 1, img: fluoride, name: "fluoride treatment", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, veritatis! "
    },
    {
        id: 2, img: cavity, name: "Cavity Filling", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, veritatis! "
    },
    {
        id: 3, img: whitening, name: "Teath whiting  ", description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, veritatis! "
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: 'info.main', m: 2, fontWeight: 500 }} variant="h5" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h5" component="div">
                    SERVICES WE PROVIDE
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            service={service}
                        ></Service>)
                    }
                </Grid >
            </Container>


        </Box>
    );
};

export default Services;