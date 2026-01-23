import { useState } from "react"; 
// import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
  const [users, setUsers] = useState([
    { _id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
    // { _id: "2", name: "Bob Smith", email: "bob@example.com", role: "User" },
    // { _id: "3", name: "Charlie Brown", email: "charlie@example.com", role: "User" },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200 flex items-center justify-center p-10">
      <div className="w-full max-w-6xl bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl p-10">
      <Link to="/" className="px-4 py-3 bg-indigo-700 text-white rounded hover:bg-purple-600 transition">
            Create + 
        </Link>
        <h1 className="text-2xl font-semibold text-center text-indigo-700 mb-8">
          Users Page
        </h1>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-100">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-indigo-600 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.length === 0 ? (
                <tr>
                  <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                    No users found.
                  </td>
                </tr>
              ) : (
                users.map((user, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap">{user._id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex gap-2">
                        
                        <button className="px-3 py-1 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition">
                          View
                        </button>
                        <button className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
                          Update
                        </button>
                        <button className="px-3 py-1 bg-violet-500 text-white rounded hover:bg-violet-600 transition">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
