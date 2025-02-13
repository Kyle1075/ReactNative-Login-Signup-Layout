import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/login");
    }, 0); // Small delay to ensure navigation happens after mounting
  }, []);

  return null; // No UI since it's redirecting
}
