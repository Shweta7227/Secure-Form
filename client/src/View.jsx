import React, { useEffect, useState } from "react";

function View({ user }) {
  // 🔹 Local state to hold user data (if fetching from backend, you can replace this)
  const [userData, setUserData] = useState(user || {});

  useEffect(() => {
    // If you want to fetch dynamically:
    // axios.get(`/users/${userId}`).then(res => setUserData(res.data));
  }, []);

  if (!userData) {
    return <p className="text-center text-gray-500">Loading user data...</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 flex items-center justify-center p-10">
      <div className="w-full max-w-4xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-8 space-y-6">
        {/* Profile Picture */}
        <div className="flex justify-center">
          <img
            src={userData.profilePhoto || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-400 object-cover"
          />
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold text-gray-700">Full Name:</p>
            <p className="text-gray-800">
              {userData.firstName} {userData.middleName} {userData.lastName}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Email:</p>
            <p className="text-gray-800">{userData.email}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Mobile Number:</p>
            <p className="text-gray-800">{userData.countryCode} {userData.mobileNumber}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Gender:</p>
            <p className="text-gray-800">{userData.gender}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Date of Birth:</p>
            <p className="text-gray-800">{userData.dob}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Age:</p>
            <p className="text-gray-800">{userData.age}</p>
          </div>
        </div>

        {/* Primary Address */}
        <div>
          <h3 className="text-green-600 font-semibold mb-2">Primary Address</h3>
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-semibold text-gray-700">Street:</span> {userData.street}</p>
            <p><span className="font-semibold text-gray-700">City:</span> {userData.city}</p>
            <p><span className="font-semibold text-gray-700">State:</span> {userData.state}</p>
            <p><span className="font-semibold text-gray-700">Pin Code:</span> {userData.pinCode}</p>
          </div>
        </div>

        {/* Secondary Address */}
        {userData.nstreet && (
          <div>
            <h3 className="text-gray-600 font-semibold mb-2">Secondary Address</h3>
            <div className="grid grid-cols-2 gap-4">
              <p><span className="font-semibold text-gray-700">Street:</span> {userData.nstreet}</p>
              <p><span className="font-semibold text-gray-700">City:</span> {userData.ncity}</p>
              <p><span className="font-semibold text-gray-700">State:</span> {userData.nstate}</p>
              <p><span className="font-semibold text-gray-700">Pin Code:</span> {userData.npinCode}</p>
            </div>
          </div>
        )}

        {/* Optional: Back Button */}
        <div className="flex justify-end">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default View;
