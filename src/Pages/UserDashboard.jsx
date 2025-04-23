
import React from 'react';
import HeroPages from "../components/hero-pages/HeroPages";

function UserDashboard() {
  return (
    <>
      <HeroPages page="My Dashboard" />
      <section className="my-20">
        <div className="container grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">My Classes</h3>
            <p className="text-gray-300">Enrolled Classes: 3</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              View Schedule
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">My Subscription</h3>
            <p className="text-gray-300">Plan: Premium</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              Manage Plan
            </button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-2xl font-bold">My Progress</h3>
            <p className="text-gray-300">Workouts Completed: 25</p>
            <button className="mt-4 bg-red px-4 py-2 text-white hover:bg-red/90">
              View Details
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserDashboard;
