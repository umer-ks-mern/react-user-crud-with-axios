import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DeleteUser = ({ onDeleteUser, findUser }) => {
  const [user_id, setUser_id] = useState("");

  const handleDelete = () => {
    const resultentUser = findUser(user_id);
    if (resultentUser != null) {
      onDeleteUser(user_id);
      setUser_id("");
      toast.success("User Deleted!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else
      toast.error("User not Found!!", {
        position: toast.POSITION.TOP_RIGHT,
      });
  };
  return (
    <>
      <ToastContainer />
      <div className="header-container">
        <h2 className="header">Find User with _id to be Deleted</h2>
      </div>
      <div className="form-container">
        <div className="form-card">
          <label htmlFor="user_id">Enter User _id: </label>
          <input
            type="text"
            name="user_id"
            value={user_id}
            onChange={(e) => setUser_id(e.target.value)}
          />
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
};

export default DeleteUser;
