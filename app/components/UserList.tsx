import React from "react";
import { IUser } from "../types/User";

interface Props {
  users: IUser[];
  onSelectUser: (id: number) => void;
}

const UserList: React.FC<Props> = ({ users, onSelectUser }) => {
  return (
    <div className="p-4 bg-gray-100 h-full rounded-l-lg text-black">
      <h3 className="text-xl font-semibold mb-4">User List</h3>
      {users.map((user) => (
        <div
          key={user.id}
          className="cursor-pointer hover:bg-blue-200 p-2 rounded-md"
          onClick={() => onSelectUser(user.id)}
        >
          {user.name}
        </div>
      ))}
    </div>
  );
};

export default UserList;
