import React, { useEffect, useState, useCallback } from "react";
import useAuth from "../hooks/useAuth";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import Layout from "@/components/Layout";
import { FaCheckCircle, FaTasks } from "react-icons/fa"; // Importing icons
import Sidebar from "@/components/Sidebar";

const MemberDashboard = () => {
  const { user, role, loading } = useAuth("member");
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchTasks = useCallback(async () => {
    if (user) {
      const userId = auth.currentUser.uid;
      const q = query(collection(db, 'tasks'), where('assignedTo', '==', userId));
      try {
        const tasksSnapshot = await getDocs(q);
        const fetchedTasks = tasksSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setTasks(fetchedTasks);
      } catch (error) {
        setError("Failed to load tasks.");
      }
    }
  }, [user]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const handleCompleteTask = async (taskId) => {
    try {
      await updateDoc(doc(db, 'tasks', taskId), { status: 'Completed' });
      setTasks((prevTasks) => prevTasks.map(task => 
        task.id === taskId ? { ...task, status: 'Completed' } : task
      ));
      alert('Task marked as completed.');
    } catch (error) {
      setError("Failed to complete task.");
    }
  };

  if (loading) return <p className="text-center">Loading...</p>;

  if (!user || role !== "member") return null;

  return (
    <Layout title="Your Tasks">
      <div className="flex bg-gray-100 h-screen">
      <Sidebar />
        {/* <h1 className="text-3xl font-bold mb-6 text-gray-800 bg-white p-4 rounded-lg shadow">
          Assigned Tasks
        </h1> */}

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="bg-black shadow-md p-6 w-full">
          {tasks.length === 0 ? (
            <p className="text-gray-600">No tasks assigned.</p>
          ) : (
            <ul className="grid grid-cols-1 gap-4">
              {tasks.map((task) => (
                <li key={task.id} className="p-4 border border-gray-300 rounded-lg shadow hover:shadow-md transition-shadow flex items-start">
                  <FaTasks className="text-blue-500 mr-3 text-xl" />
                  <div className="flex-1">
                    <h2 className="font-bold text-lg text-gray-900">{task.taskName}</h2>
                    <p className="text-gray-700">{task.description}</p>
                    {task.status === 'Pending' ? (
                      <button
                        onClick={() => handleCompleteTask(task.id)}
                        className="bg-green-500 text-white py-2 px-4 rounded-lg mt-2 hover:bg-green-400 transition-colors"
                      >
                        Mark as Complete
                      </button>
                    ) : (
                      <p className="text-green-500 mt-2 font-semibold flex items-center">
                        <FaCheckCircle className="mr-1" /> Task Completed
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default MemberDashboard;
