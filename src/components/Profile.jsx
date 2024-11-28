import { useState, useEffect } from "react";
import { db, auth } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  const [profileData, setProfileData] = useState({});

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

  console.log(profileData);

  // const handleUpdateProfile = async () => {
  //   const userId = auth.currentUser.uid;
  //   await updateDoc(doc(db, "users", userId), profileData);
  //   alert("Profile updated successfully.");
  // };

  return (
    null
  );
};

export default Profile;
