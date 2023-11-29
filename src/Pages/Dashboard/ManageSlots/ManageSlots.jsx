import { useState } from "react";
import emailjs from 'emailjs-com';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const ManageSlots = () => {
 // Sample slots state
 const [slots, setSlots] = useState([
    { id: 1, time: '9:00 AM', status: 'available' },
    { id: 2, time: '10:00 AM', status: 'booked', booked_by: 'User' },
    { id: 3, time: '5:00 PM', status: 'available' },
    { id: 4, time: '7:00 PM', status: 'booked', booked_by: 'User' },
    // ... other slots
  ]);

  const handleRejectBooking = (slotId, bookedBy) => {
    // Logic to reject booking
    const updatedSlots = slots.map((slot) =>
      slot.id === slotId ? { ...slot, status: 'available' } : slot
    );

    sendRejectionEmail(bookedBy);

    setSlots(updatedSlots);
  };

  const sendRejectionEmail = (userEmail) => {
    // Use emailJS to send rejection email
    // Include relevant information in the email template
    // Ensure you have configured emailJS with the correct service ID, template ID, and user ID
    emailjs.send('service_khj8eai', 'template_o4zwkcq', { to_email: userEmail, message: 'Your booking has been rejected.' }, 'FOkhzyqNBrWXCKfZ7');
  };

  return (
    <div className="container mx-auto mt-8">
      <SectionTitle
      subHeading="trainer choose slot "
      heading=" Slots"
    ></SectionTitle>
      <div className="grid grid-cols-2 gap-4">
        {slots.map((slot) => (
          <div
            key={slot.id}
            className={`p-4 border ${
              slot.status === 'booked' ? 'bg-red-200' : 'bg-green-200'
            }`}
          >
            <p className="text-lg font-bold mb-2">Time: {slot.time}</p>
            <p>Status: {slot.status}</p>
            {slot.status === 'booked' && (
              <p>Booked by: {slot.booked_by}</p>
            )}
            {slot.status === 'booked' && (
              <button
                onClick={() => handleRejectBooking(slot.id, slot.booked_by)}
                className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              >
                Reject Booking
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};


export default ManageSlots;