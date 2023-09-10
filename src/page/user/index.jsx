import "../../App.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import CreateUser from "../../components/user/CreateUser.jsx";
import UserList from "../../components/user/UserList";
import UpdateUser from "../../components/user/UpdateUser";
import FindUser from "../../components/user/FindUser";
import DeleteUser from "../../components/user/DeleteUser";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const navBar = [
  {
    name: "All Users",
    path: "users",
  },
  {
    name: "User Create",
    path: "user/create",
  },
  {
    name: "Find User",
    path: "user/find",
  },
  {
    name: "Update User",
    path: "user/update",
  },
  {
    name: "Delete User",
    path: "user/delete",
  },
];

const Layout = () => (
  <>
    <body>
      <div class="sidenav">
        {navBar.map((ele) => (
          <Link to={ele.path}>{ele.name}</Link>
        ))}
      </div>

      <div class="main">
        <Outlet />
      </div>
    </body>
  </>
);

const UserWrapper = () => {
  const [users, setUsers] = useState([]);
  const [usersChange, setUsersChange] = useState(0); // for useEffect to trigger data load from server

  useEffect(() => {
    axios
      .get("http://127.0.0.1:3300/users")
      .then((response) => {
        const storedUsers = response.data;
        if (storedUsers) {
          setUsers(storedUsers);
        }
        console.log("Data Loaded:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [usersChange]);

  const addUser = (newUser) => {
    axios
      .post("http://127.0.0.1:3300/user", newUser)
      .then(() => {
        console.log("user Created!");
        setUsersChange(usersChange + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const deleteHistory = () => {
  //   localStorage.setItem("users", JSON.stringify([]));
  //   setUsers([]);
  //   alert("History Cleared!");
  // };

  const deleteOne = (_id) => {
    axios
      .get(`http://127.0.0.1:3300/user-delete/${_id}`)
      .then(() => {
        console.log("user Deleted!");
        setUsersChange(usersChange + 1);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const findUser = (_id) => {
    const indexToFind = users.findIndex((user) => user._id === _id);
    if (indexToFind !== -1) return users[indexToFind];
    return null;
  };

  const updateUser = (userToBeUpdated) => {
    axios
      .put(`http://127.0.0.1:3300/user/${userToBeUpdated._id}`, userToBeUpdated)
      .then((response) => {
        console.log("PUT Request Successful:", response.data);
        setUsersChange(usersChange + 1);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const layoutRoutes = [
    {
      path: "/",
      element: (
        <>
          <div className="header-container">
            <h2 className="header">Welcome to User CRUD App with axios</h2>
          </div>
        </>
      ),
    },
    {
      path: "/users",
      element: <UserList users={users} />,
    },
    {
      path: "user/create",
      element: <CreateUser onCreateUser={addUser} />,
    },
    {
      path: "user/update",
      element: <UpdateUser onUpdateUser={updateUser} findUser={findUser} />,
    },
    {
      path: "user/find",
      element: <FindUser findUser={findUser} />,
    },
    {
      path: "user/delete",
      element: <DeleteUser onDeleteUser={deleteOne} findUser={findUser} />,
    },
  ];

  return (
    <Routes>
      <Route path="*" element={<h1>404</h1>} />

      <Route element={<Layout />}>
        {layoutRoutes.map((ele) => (
          <Route path={ele.path} element={ele.element} />
        ))}
      </Route>
    </Routes>
  );
};

export default UserWrapper;
