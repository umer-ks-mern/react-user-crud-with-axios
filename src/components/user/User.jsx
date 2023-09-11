import "../../App.css";
import userImage from "../../../src/user.png";
const User = ({ _id, name, email }) => {
  return (
    <>
      <div className="user-card">
        <img src={userImage} alt=""/>
        <h3>{_id}</h3>
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </>
  );
};
export default User;
