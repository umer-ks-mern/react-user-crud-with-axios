import "../../App.css";
const User = ({ _id, name, email }) => {
  return (
    <>
      <div className="user-card">
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
