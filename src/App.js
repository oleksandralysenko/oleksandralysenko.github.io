import './App.css';
import Header from './components/header/Header';
import { useEffect, React } from 'react';
import 'rsuite/dist/rsuite.min.css';


const App = () => {
  // const authUser = JSON.parse(localStorage.getItem("authUser"));
const admin = JSON.parse(localStorage.getItem("user"));
console.log(admin?.user?.uid)
useEffect(()=>{
  localStorage.setItem("authUser", JSON.stringify({user: "Ihor"}))
}, [])

  return (
    <div>
    <Header/>
    </div>
  );
}

export default App;
