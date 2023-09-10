import User from "./User";
import "../../App.css";

const UserList = ({ users }) => {
  return (
    <>
      <div className="header-container">
        <h2 className="header">List of All User</h2>
      </div>
      <div className="header-container">
        {users.map((user, index) => (
          <User
            key={index + 1}
            _id={user._id}
            name={user.name}
            age={user.age}
            email={user.email}
          />
        ))}
      </div>
    </>
  );
};

export default UserList;
