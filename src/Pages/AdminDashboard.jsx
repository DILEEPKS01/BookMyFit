
import React from 'react';
import HeroPages from "../components/hero-pages/HeroPages";

function AdminDashboard() {
  return (
    <>
      <HeroPages page="Admin Dashboard" />
      <section className="my-20">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">Users</h3>
            <p className="text-gray-300">Total Users: 150</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              Manage Users
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">Classes</h3>
            <p className="text-gray-300">Active Classes: 12</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              Manage Classes
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">Subscriptions</h3>
            <p className="text-gray-300">Active Subscriptions: 89</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              View Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
