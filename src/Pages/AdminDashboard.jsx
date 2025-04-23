import React from 'react';
import { FiUsers, FiCalendar, FiDollarSign } from 'react-icons/fi';
import HeroPages from "../components/hero-pages/HeroPages";
import AdminStats from "../components/admin-dashboard/AdminStats";
import UsersList from "../components/admin-dashboard/UsersList";
import ClassesList from "../components/admin-dashboard/ClassesList";

function AdminDashboard() {
  return (
    <>
      <HeroPages page="Admin Dashboard" />
      <section className="my-20">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-3">
            <AdminStats title="Total Users" count="150" icon={<FiUsers />} />
            <AdminStats title="Active Classes" count="12" icon={<FiCalendar />} />
            <AdminStats title="Revenue" count="$8,500" icon={<FiDollarSign />} />
          </div>
          <UsersList />
          <ClassesList />
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;