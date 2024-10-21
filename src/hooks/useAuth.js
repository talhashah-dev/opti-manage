import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

export default function useAuth(requiredRole = null) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userRole = docSnap.data().role;
          setRole(userRole);

          // agar is page ka lya user ka role or required match nhi ho to redirect karo
          if (requiredRole && userRole !== requiredRole) {
            router.push("/unauthorized");
          }
        } else {
          console.log("No user document found");
          router.push("/login");
        }
      } else {
        // user bina login ka access karna cha ha to redirect karo login page pa
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [requiredRole, router]);

  return { user, role, loading };
}
