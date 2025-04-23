import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiCalendar, FiCreditCard, FiBell } from 'react-icons/fi';
import Logo from '../logo/Logo';

export default function Sidebar() {
  return (
    <div className="bg-white h-screen w-64 shadow-lg">
      <div className="p-6">
        <Logo type="black" />
        <h2 className="text-2xl font-bold text-red mt-4">Dashboard</h2>
      </div>
      <nav className="mt-8">
        <Link to="/user-dashboard" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiHome className="mr-3" /> Overview
        </Link>
        <Link to="/user-dashboard/profile" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiUser className="mr-3" /> Profile
        </Link>
        <Link to="/user-dashboard/bookings" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiCalendar className="mr-3" /> Bookings
        </Link>
        <Link to="/user-dashboard/payments" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiCreditCard className="mr-3" /> Payments
        </Link>
        <Link to="/user-dashboard/notifications" className="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100">
          <FiBell className="mr-3" /> Notifications
        </Link>
      </nav>
    </div>
  );
}