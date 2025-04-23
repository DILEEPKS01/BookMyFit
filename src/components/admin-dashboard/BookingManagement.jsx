
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function BookingManagement() {
  const bookings = [
    { id: 1, title: 'Yoga Class', start: '2024-01-20', className: 'bg-blue-500' },
    { id: 2, title: 'CrossFit', start: '2024-01-22', className: 'bg-green-500' },
  ];

  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Manage Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Class</th>
                <th className="p-2 text-left">Member</th>
                <th className="p-2 text-left">Date</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">Yoga Class</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">2024-01-20</td>
                <td className="p-2">
                  <span className="rounded bg-yellow-100 px-2 py-1 text-sm text-yellow-800">
                    Pending
                  </span>
                </td>
                <td className="p-2">
                  <button className="mr-2 rounded bg-green-500 px-3 py-1 text-white">Approve</button>
                  <button className="rounded bg-red px-3 py-1 text-white">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Calendar View</h2>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={bookings}
          height="auto"
        />
      </div>
    </div>
  );
}

export default BookingManagement;
