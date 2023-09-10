import "../../App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = ({ onCreateUser }) => {
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
  });

  const addClick = () => {
    if (
      userData.name === "" ||
      userData.email === ""
    ) {
      toast.error("All Fields are Required!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    onCreateUser(userData);
    setUserData({
      name: "",
      email: "",
    });
    toast.success("User Created", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <div>
      <ToastContainer />
      <div className="header-container">
        <h2 className="header">Create User</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => {
              setUserData({ ...userData, name: e.target.value });
            }}
            type="text"
            _id="userName"
            name="name"
            value={userData.name}
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="userEmail"
            value={userData.email}
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
          <button onClick={addClick}>Create User</button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
