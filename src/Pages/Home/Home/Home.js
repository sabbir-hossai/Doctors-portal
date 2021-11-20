import React from 'react';
import Appointmentbg from '../../Appoinmentbg/Appointmentbg';
import Banner from '../../Banner/Banner';
import Navigation from '../../Sheared/Navigation/Navigation';
import Services from '../Services/Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <Appointmentbg></Appointmentbg>
        </div>
    );
};

export default Home;