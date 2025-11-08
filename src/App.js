import React, { useEffect, useContext } from "react";
import Routing from "./Router.jsx";
import { Type } from "./Utility/action.type.js";
import { auth } from "./Utility/firebase.js";
import { DataContext } from "./components/DataProvider/DataProvider"; // Assuming context is defined here

function App() {
  const [, dispatch] = useContext(DataContext);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]);

  return <Routing />;
}

export default App;
