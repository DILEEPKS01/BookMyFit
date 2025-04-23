
import { useState } from 'react';

export default function Profile() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '1234567890',
    address: '123 Main St'
  });

  const [membership, setMembership] = useState({
    plan: 'Premium',
    status: 'Active',
    expiryDate: '2024-12-31'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // Here you would typically update the backend
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Personal Details</h2>
          <button 
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 bg-red text-white rounded hover:bg-red-600"
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">First Name</label>
              <input
                type="text"
                value={personalDetails.firstName}
                onChange={(e) => setPersonalDetails({...personalDetails, firstName: e.target.value})}
                disabled={!isEditing}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">Last Name</label>
              <input
                type="text"
                value={personalDetails.lastName}
                onChange={(e) => setPersonalDetails({...personalDetails, lastName: e.target.value})}
                disabled={!isEditing}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              value={personalDetails.email}
              onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
              disabled={!isEditing}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            <input
              type="tel"
              value={personalDetails.phone}
              onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
              disabled={!isEditing}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Address</label>
            <textarea
              value={personalDetails.address}
              onChange={(e) => setPersonalDetails({...personalDetails, address: e.target.value})}
              disabled={!isEditing}
              className="mt-1 p-2 w-full border rounded"
            />
          </div>
          {isEditing && (
            <button type="submit" className="w-full bg-red text-white py-2 rounded hover:bg-red-600">
              Save Changes
            </button>
          )}
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Membership Status</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Current Plan</label>
            <p className="mt-1 text-lg">{membership.plan}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Status</label>
            <p className="mt-1 text-lg">
              <span className={`inline-block px-2 py-1 rounded ${
                membership.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {membership.status}
              </span>
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Expiry Date</label>
            <p className="mt-1 text-lg">{new Date(membership.expiryDate).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
