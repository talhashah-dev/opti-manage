import { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Layout from "../components/Layout";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    age: "",
    department: "",
    email: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = auth.currentUser.uid;
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProfileData(docSnap.data());
      }
    };

    fetchProfile();
  }, []);

  const handleUpdateProfile = async () => {
    const userId = auth.currentUser.uid;
    await updateDoc(doc(db, "users", userId), profileData);
    alert("Profile updated successfully.");
  };

  return (
    <Layout title="Edit Profile">
      <h1 className="text-2xl font-bold mb-4">Edit Your Profile</h1>

      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={profileData.name}
          onChange={(e) =>
            setProfileData({ ...profileData, name: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Age:</label>
        <input
          type="number"
          value={profileData.age}
          onChange={(e) =>
            setProfileData({ ...profileData, age: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Department:</label>
        <input
          type="text"
          value={profileData.department}
          onChange={(e) =>
            setProfileData({ ...profileData, department: e.target.value })
          }
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>

      <button
        onClick={handleUpdateProfile}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Update Profile
      </button>
    </Layout>
  );
};

export default Profile;
