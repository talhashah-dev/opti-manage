import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import Layout from "../components/Layout";
import useAuth from "../hooks/useAuth";
import LogoutButton from "../components/LogoutButton";

const AdminDashboard = () => {
  const { user, role, loading } = useAuth("admin");
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleAssignTask = async () => {
    if (selectedUser && task && description) {
      const taskData = {
        taskName: task,
        description,
        assignedTo: selectedUser.id,
        status: "Pending",
      };
      await setDoc(doc(db, "tasks", `${selectedUser.id}_${task}`), taskData);
      setTask("");
      setDescription("");
      alert("Task Assigned Successfully");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!user || role !== "admin") return null;
  return (
    <Layout title="Assign Tasks">
      <h1 className="text-2xl font-bold mb-4">Assign Tasks to Member</h1>

      <div className="mb-4">
        <label className="block mb-2">Select Member:</label>
        <select
          value={selectedUser?.id || ""}
          onChange={(e) =>
            setSelectedUser(users.find((user) => user.id === e.target.value))
          }
          className="w-full p-2 border border-gray-300 rounded text-black"
        >
          <option value="">Select a member</option>
          {users.map((user) => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>

      {/* Task Input */}
      <div className="mb-4">
        <label className="block mb-2">Task Name:</label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      {/* Task Description */}
      <div className="mb-4">
        <label className="block mb-2">Task Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      {/* Submit Task */}
      <button
        onClick={handleAssignTask}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Assign Task
      </button>

      <button className="bg-red-500 text-white p-2 rounded ml-3">
        <LogoutButton />
      </button>
    </Layout>
  );
};

export default AdminDashboard;
