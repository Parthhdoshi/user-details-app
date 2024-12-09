"use server";

export const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
};

export const fetchUserDetails = async (id: number) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) throw new Error("Failed to fetch user details");

  const data = await res.json();
  return {
    ...data,
    skypeId: `live:${data.username}`, // Dummy skype ID
  };
};
