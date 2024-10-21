import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, setDoc, doc } from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import Layout from "../components/Layout";

export default function ManageGroups() {
  const { user, role, loading } = useAuth("admin");
  const [groupName, setGroupName] = useState("");
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Fetch all users for group selection
  useEffect(() => {
    const fetchUsers = async () => {
      const usersSnapshot = await getDocs(collection(db, "users"));
      const usersList = usersSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMembers(usersList);
    };

    fetchUsers();
  }, []);

  // Handle Group Creation
  const handleCreateGroup = async () => {
    if (groupName && selectedMembers.length) {
      await setDoc(doc(db, "groups", groupName), {
        groupName,
        members: selectedMembers,
      });
      alert("Group created successfully.");
    }
  };

  if (loading) return <p>Loading...</p>;

  if (!user || role !== "admin") return null;

  return (
    <Layout title="Manage Groups">
      <h1 className="text-2xl font-bold mb-4">Create a Group</h1>

      <div className="mb-4">
        <label className="block mb-2">Group Name:</label>
        <input
          type="text"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Select Members:</label>
        <select
          multiple
          value={selectedMembers}
          onChange={(e) =>
            setSelectedMembers(
              [...e.target.selectedOptions].map((o) => o.value)
            )
          }
          className="w-full p-2 border border-gray-300 rounded text-black"
        >
          {members.map((member) => (
            <option key={member.id} value={member.id}>
              {member.name} ({member.email})
            </option>
          ))}
        </select>
      </div>

      <button
        onClick={handleCreateGroup}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Create Group
      </button>
    </Layout>
  );
}
