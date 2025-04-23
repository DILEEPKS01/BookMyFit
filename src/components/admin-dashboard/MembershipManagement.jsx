
import React, { useState } from 'react';

function MembershipManagement() {
  const [membershipPlans, setMembershipPlans] = useState([
    { id: 1, name: 'Basic', price: '5,000', duration: '1 Month' },
    { id: 2, name: 'Standard', price: '8,000', duration: '3 Months' },
    { id: 3, name: 'Premium', price: '10,000', duration: '6 Months' },
  ]);

  const [members, setMembers] = useState([
    { id: 1, name: 'John Doe', plan: 'Premium', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Jane Smith', plan: 'Basic', status: 'Expired', joinDate: '2023-12-10' },
  ]);

  const [filter, setFilter] = useState('all');

  return (
    <div className="space-y-8">
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-bold">Membership Plans</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Plan Name</th>
                <th className="p-2 text-left">Price (₹)</th>
                <th className="p-2 text-left">Duration</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {membershipPlans.map((plan) => (
                <tr key={plan.id} className="border-b">
                  <td className="p-2">{plan.name}</td>
                  <td className="p-2">{plan.price}</td>
                  <td className="p-2">{plan.duration}</td>
                  <td className="p-2">
                    <button className="mr-2 rounded bg-red px-3 py-1 text-white">Edit</button>
                    <button className="rounded bg-gray-300 px-3 py-1 text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-xl">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Members</h2>
          <select 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)}
            className="rounded border p-2"
          >
            <option value="all">All Members</option>
            <option value="active">Active Members</option>
            <option value="expired">Expired Members</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Plan</th>
                <th className="p-2 text-left">Status</th>
                <th className="p-2 text-left">Join Date</th>
                <th className="p-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-b">
                  <td className="p-2">{member.name}</td>
                  <td className="p-2">{member.plan}</td>
                  <td className="p-2">
                    <span className={`rounded px-2 py-1 text-sm ${
                      member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="p-2">{member.joinDate}</td>
                  <td className="p-2">
                    <button className="mr-2 rounded bg-red px-3 py-1 text-white">Edit</button>
                    <button className="rounded bg-gray-300 px-3 py-1 text-white">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MembershipManagement;
