"use client"
import { useEffect, useState } from "react";
import { fetchUsers, fetchUserDetails } from "../app/actions/getUsers";
import { IUser, IUserDetails } from "./types/User";
import UserList from "./components/UserList";
import UserDetailsComponent from "./components/UserDetails";
import ActionPanel from "./components/ActionPanel";


const Home = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [selectedUser, setSelectedUser] = useState<IUserDetails | null>(null);

  useEffect(() => {
    fetchUsers().then((data) => setUsers(data));
  }, []);

  const handleUserSelection = async (id: number) => {
    const details = await fetchUserDetails(id);
    setSelectedUser(details);
  };

  return (
    <div className="flex h-screen text-black">
      <div className="w-1/4 border-r">
        <UserList users={users} onSelectUser={handleUserSelection} />
      </div>
      <div className="flex-1 p-4 text-black">
        {selectedUser ? (
          <UserDetailsComponent userDetails={selectedUser} />
        ) : (
          <div className="text-center mt-20 text-gray-500">
            Select a user to see details.
          </div>
        )}
      </div>

      {/* Action Panel */}
      <div className="w-1/4 border-l text-black">
        <ActionPanel />
      </div>
    </div>
  );
};

export default Home;
