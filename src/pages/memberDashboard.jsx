import React from "react";
import useAuth from "../hooks/useAuth";
import { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
} from "firebase/firestore";
import LogoutButton from "../components/LogoutButton";
import Layout from "@/components/Layout";

const MemberDashboard = () => {
  const { user, role, loading } = useAuth("member");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const userId = auth.currentUser.uid;
      const q = query(collection(db, 'tasks'), where('assignedTo', '==', userId));
      const tasksSnapshot = await getDocs(q);
      setTasks(tasksSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchTasks();
  }, []);

  const handleCompleteTask = async (taskId) => {
    await updateDoc(doc(db, 'tasks', taskId), { status: 'Completed' });
    alert('Task marked as completed.');
  };

  if (loading) return <p>Loading...</p>;

  if (!user || role !== "member") return null;

  return (
    <Layout title="Your Tasks">
      <h1 className="text-2xl font-bold mb-4">Assigned Tasks</h1>

      {tasks.length === 0 ? (
        <p>No tasks assigned.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id} className="mb-4 p-4 border border-gray-300 rounded">
              <h2 className="font-bold text-lg">{task.taskName}</h2>
              <p>{task.description}</p>
              {task.status === 'Pending' ? (
                <button
                  onClick={() => handleCompleteTask(task.id)}
                  className="bg-green-500 text-white p-2 rounded mt-2"
                >
                  Mark as Complete
                </button>
              ) : (
                <p className="text-green-500 mt-2">Task Completed</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </Layout>

  );
};

export default MemberDashboard;
