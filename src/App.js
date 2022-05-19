import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddNewList from "./Components/Pages/AddNewList";
import MyList from "./Components/Pages/MyList";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/Signup";
import RequireAuth from "./Hooks/RequireAuth";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App px-12">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/addnewlist"
          element={
            <RequireAuth>
              <AddNewList />
            </RequireAuth>
          }
        />
        {/* <Route
          path="/mylist"
          element={
            <RequireAuth>
              <MyList />
            </RequireAuth>
          }
        /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
