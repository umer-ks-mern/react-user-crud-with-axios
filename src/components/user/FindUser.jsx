import { useState } from "react";
import "../../App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import User from "./User";

const FindUser = ({ findUser }) => {
  const [userData, setUserData] = useState({
    _id: "",
    name: "",
    email: "",
  });
  const [user_id, setUser_id] = useState("");
  const [userFound, setUserFound] = useState(false);

  const handleFind = () => {
    const resultentUser = findUser(user_id);
    if (resultentUser != null) {
      setUserFound(!userFound);
      setUserData({
        _id: resultentUser._id,
        name: resultentUser.name,
        email: resultentUser.email,
      });
    } else
      toast.error("User not Found!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };

  return userFound ? (
    <User _id={userData._id} name={userData.name} email={userData.email} />
  ) : (
    <>
      <ToastContainer />
      <div className="header-container">
        <h2 className="header">Find User with ID</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="user_id">Enter User id: </label>
          <input
            type="text"
            name="user_id"
            onChange={(e) => setUser_id(e.target.value)}
          />
          <button onClick={handleFind}>Find</button>
        </div>
      </div>
    </>
  );
};

export default FindUser;
