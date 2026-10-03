"use client";

import { useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
}

export default function FilterUsers({ users }: { users: User[] }) {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <input
                className="border border-gray-300 rounded-md p-2 mb-4"
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredUsers.map((user: User) => (
                    <li key={user.id}>
                        <h2>{user.name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
  }
 