
import React from 'react';
import Navigation from '../../Sheared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoitnmet from '../AvailableAppoitnment/AvailableAppoinmet';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppoitnmet date={date}  ></AvailableAppoitnmet>
        </div>
    );
};

export default Appointment;