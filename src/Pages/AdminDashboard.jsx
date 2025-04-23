
import React, { useState } from 'react';
import { FiUsers, FiCalendar, FiDollarSign, FiSettings } from 'react-icons/fi';
import HeroPages from "../components/hero-pages/HeroPages";
import AdminStats from "../components/admin-dashboard/AdminStats";
import MembershipManagement from "../components/admin-dashboard/MembershipManagement";
import BookingManagement from "../components/admin-dashboard/BookingManagement";
import AdminSettings from "../components/admin-dashboard/AdminSettings";

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <>
      <HeroPages page="Admin Dashboard" />
      <section className="my-20">
        <div className="container">
          <div className="mb-8 flex gap-4">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded ${activeTab === 'overview' ? 'bg-red text-white' : 'bg-gray-200'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('membership')}
              className={`px-4 py-2 rounded ${activeTab === 'membership' ? 'bg-red text-white' : 'bg-gray-200'}`}
            >
              Membership
            </button>
            <button 
              onClick={() => setActiveTab('bookings')}
              className={`px-4 py-2 rounded ${activeTab === 'bookings' ? 'bg-red text-white' : 'bg-gray-200'}`}
            >
              Bookings
            </button>
            <button 
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 rounded ${activeTab === 'settings' ? 'bg-red text-white' : 'bg-gray-200'}`}
            >
              Settings
            </button>
          </div>

          {activeTab === 'overview' && (
            <div className="grid gap-8 lg:grid-cols-4">
              <AdminStats title="Total Members" count="150" icon={<FiUsers />} />
              <AdminStats title="Total Bookings" count="89" icon={<FiCalendar />} />
              <AdminStats title="Upcoming Bookings" count="12" icon={<FiCalendar />} />
              <AdminStats title="Revenue" count="₹52,500" icon={<FiDollarSign />} />
            </div>
          )}

          {activeTab === 'membership' && <MembershipManagement />}
          {activeTab === 'bookings' && <BookingManagement />}
          {activeTab === 'settings' && <AdminSettings />}
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
