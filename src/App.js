import "./App.css";
import { useEffect, React } from "react";
import "rsuite/dist/rsuite.min.css";
import Header from "./components/header/Header.tsx";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify({ user: "Sasha", role: "" }));
  }, []);

  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
