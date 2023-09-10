import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateUser = ({ onUpdateUser, findUser }) => {
  const [userData, setuserData] = useState({
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
      setuserData({
        _id: resultentUser._id,
        name: resultentUser.name,
        email: resultentUser.email,
      });
    } else
      toast.error("User not Found!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  const updateClick = () => {
    if (userData.name === "" || userData.email === "") {
      toast.error("All Feilds are Required!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    onUpdateUser(userData);
    setUserFound(!userFound);
    setuserData({
      _id: "",
      name: "",
      email: "",
    });
    toast.success("User Details Updated", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  return (
    <>
      <ToastContainer />
      {userFound ? (
        <div>
          <div className="header-container">
            <h2 className="header">Update User</h2>
          </div>
          <div className="form-container">
            <div className="form-card">
              <label htmlFor="name">Name:</label>
              <input
                onChange={(e) => {
                  setuserData({ ...userData, name: e.target.value });
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
                  setuserData({ ...userData, email: e.target.value });
                }}
              />
              <button onClick={updateClick}>Update</button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="header-container">
            <h2 className="header">Find User with _id to be Updated</h2>
          </div>
          <div className="form-container">
            <div className="form-card">
              <label htmlFor="user_id">Enter User _id: </label>
              <input
                type="text"
                name="user_id"
                onChange={(e) => setUser_id(e.target.value)}
              />
              <button onClick={handleFind}>Find</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CreateUser;
