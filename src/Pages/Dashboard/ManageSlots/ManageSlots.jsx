import { useState } from "react";
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { Button, Grid, Paper, Typography } from '@mui/material'; // Import Material-UI components

import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ManageSlots = () => {
  const [slots, setSlots] = useState([
    { id: 1, time: '9:00 AM', status: 'available' },
    { id: 2, time: '10:00 AM', status: 'booked', booked_by: 'User' },
    { id: 3, time: '5:00 PM', status: 'available' },
    { id: 4, time: '7:00 PM', status: 'booked', booked_by: 'User' },
  ]);

  const handleRejectBooking = (slotId, bookedBy) => {
    const updatedSlots = slots.map((slot) =>
      slot.id === slotId ? { ...slot, status: 'available' } : slot
    );

    sendRejectionEmail(bookedBy);
    showSuccessToast();

    setSlots(updatedSlots);
  };

  const sendRejectionEmail = (userEmail) => {
    emailjs.send('service_khj8eai', 'template_o4zwkcq', { to_email: userEmail, message: 'Your booking has been rejected.' }, 'FOkhzyqNBrWXCKfZ7');
  };

  const showSuccessToast = () => {
    Swal.fire({
      icon: 'success',
      title: 'Email Sent',
      text: 'Rejection email has been sent successfully!',
    });
  };

  return (
    <div className="container mx-auto mt-8">
      <SectionTitle
        subHeading="trainer choose slot "
        heading=" Slots"
      ></SectionTitle>
      <Grid container spacing={2}>
        {slots.map((slot) => (
          <Grid item key={slot.id} xs={6} md={3}>
            <Paper
              className={`p-4 ${
                slot.status === 'booked' ? 'bg-red-200' : 'bg-green-200'
              }`}
            >
              <Typography variant="h6" gutterBottom>
                Time: {slot.time}
              </Typography>
              <Typography variant="body1">Status: {slot.status}</Typography>
              {slot.status === 'booked' && (
                <Typography variant="body1">Booked by: {slot.booked_by}</Typography>
              )}
              {slot.status === 'booked' && (
                <Button
                  onClick={() => handleRejectBooking(slot.id, slot.booked_by)}
                  variant="contained"
                  color="secondary"
                  className="mt-2"
                >
                  Reject Booking
                </Button>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ManageSlots;
