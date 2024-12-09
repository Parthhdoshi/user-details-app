"use client"
import React, { useState } from "react";
import { IUserDetails } from "../types/User";

interface Props {
  userDetails: IUserDetails;
}

const UserDetailsComponent: React.FC<Props> = ({ userDetails }) => {
  const [tab, setTab] = useState<"profile" | "contact">("profile");

  return (
    <div className="p-6 bg-white h-full rounded-md shadow-md">
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => setTab("profile")}
          className={`px-4 py-2 rounded ${
            tab === "profile" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setTab("contact")}
          className={`px-4 py-2 rounded ${
            tab === "contact" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Contacts
        </button>
      </div>
      {tab === "profile" ? (
        <div>
          <p><strong>Name:</strong> {userDetails.name}</p>
          <p><strong>Address:</strong> {userDetails.address.city}</p>
        </div>
      ) : (
        <div>
          <p><strong>Phone:</strong> {userDetails.phone}</p>
          <p><strong>Skype ID:</strong> {userDetails.skypeId || "N/A"}</p>
          <p><strong>Email:</strong> {userDetails.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetailsComponent;
