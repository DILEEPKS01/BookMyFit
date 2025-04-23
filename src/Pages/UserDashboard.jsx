
import { useState } from 'react';
import { FiActivity, FiCalendar, FiClock, FiTrendingUp } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Sidebar from '../components/user-dashboard/Sidebar';
import StatsCard from '../components/user-dashboard/StatsCard';

export default function UserDashboard() {
  // Mock data for the chart
  const workoutData = [
    { name: 'Mon', sessions: 2 },
    { name: 'Tue', sessions: 3 },
    { name: 'Wed', sessions: 1 },
    { name: 'Thu', sessions: 4 },
    { name: 'Fri', sessions: 2 },
    { name: 'Sat', sessions: 3 },
    { name: 'Sun', sessions: 2 },
  ];

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back, User!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard title="Total Workouts" value="28" icon={<FiActivity />} />
          <StatsCard title="Upcoming Sessions" value="3" icon={<FiCalendar />} />
          <StatsCard title="Hours Trained" value="42" icon={<FiClock />} />
          <StatsCard title="Progress" value="85%" icon={<FiTrendingUp />} />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Weekly Workout Sessions</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={workoutData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sessions" stroke="#FF0336" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
