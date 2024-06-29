import { RouterProvider } from "react-router-dom";
import { toast, Toaster } from "react-hot-toast";
import router from "./routes";
import useOnlineStatus from "./hooks/useOnlineStatus";
import { useEffect } from "react";

function App() {
  const isOnline = useOnlineStatus();

  useEffect(() => {
    if (!isOnline) {
      toast("You don't have an internet connection!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 1000 * 10, // 10s
      });
    } else {
      toast.dismiss();
    }
  }, [isOnline]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
