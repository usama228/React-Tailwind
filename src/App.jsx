// App.jsx
import { addUser, updateUser, deleteUser } from "./features/user/userSlice.js";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const [activeSection, setActiveSection] = useState("show");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [updateemail, setUpdateemail] = useState("");
  const [newname, setNewname] = useState("");
  const [newemail, setNewemail] = useState("");
  const [deletename, setDeletename] = useState("");

  const handleAdd = () => {
    dispatch(addUser({ name, email }));
    setName("");
    setEmail("");
  };

  const handleUpdate = () => {
    dispatch(updateUser({ oldEmail: updateemail, name: newname, email: newemail }));
    setUpdateemail("");
    setNewname("");
    setNewemail("");
  };

  const handleDelete = () => {
    dispatch(deleteUser({ name: deletename }));
    setDeletename("");
  };

  return (
    <div className=" h-screen w-screen big-hover big-cover bg-[url('./bj.jpg')] bg-center bg-no-repeat bg-[length:120%]">
      
      {/* Fullscreen Video Background */}
     { /*<video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-bottom"
      >
        <source src="/box.mp4" type="video/mp4" />
        
      </video>*/}

      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-screen">
        <h3 className="text-5xl font-montserrat font-bold text-transparent bg-clip-text bg-gradient-to-tr from-blue-100 to-white-900 text-center mb-10">
          USER MANAGER
        </h3>

        <div className="bg-blue/90 backdrop-blur-md rounded-xl shadow-2xl p-9 w-full max-w-2xl">
          {/* Section Selector Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveSection("add")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeSection === "add" ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg" : "bg-white text-green-700 border-2 border-green-500 hover:bg-green-50"}`}
            >
              Add User
            </button>
            <button
              onClick={() => setActiveSection("update")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeSection === "update" ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg" : "bg-white text-blue-700 border-2 border-blue-500 hover:bg-blue-50"}`}
            >
              Update User
            </button>
            <button
              onClick={() => setActiveSection("delete")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeSection === "delete" ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg" : "bg-white text-red-700 border-2 border-red-500 hover:bg-red-50"}`}
            >
              Delete User
            </button>
            <button
              onClick={() => setActiveSection("show")}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeSection === "show" ? "bg-gradient-to-r from-blue-700 to-indigo-900 text-white shadow-lg" : "bg-white text-gray-700 border-2 border-gray-500 hover:bg-gray-50"}`}
            >
              Show Users
            </button>
          </div>

          {/* Dynamic Sections */}
          <div className="bg-blue shadow-xl rounded-2xl p-8 transition-all duration-500 ">
            {activeSection === "add" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-100">Add New User</h2>
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    onClick={handleAdd}
                    className="bg-gradient-to-r from-blue-300 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105"
                  >
                    Add
                  </button>
                </div>
              </div>
            )}

            {activeSection === "update" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-300">Update User</h2>
                <div className="flex flex-col gap-5">
                  <input
                    type="email"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter previous email"
                    value={updateemail}
                    onChange={(e) => setUpdateemail(e.target.value)}
                  />
                  <input
                    type="text"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new name"
                    value={newname}
                    onChange={(e) => setNewname(e.target.value)}
                  />
                  <input
                    type="email"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter new email"
                    value={newemail}
                    onChange={(e) => setNewemail(e.target.value)}
                  />
                  <button
                    onClick={handleUpdate}
                    className="bg-gradient-to-r from-blue-300 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105"
                  >
                    Update
                  </button>
                </div>
              </div>
            )}

            {activeSection === "delete" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-300">Delete User</h2>
                <div className="flex flex-col gap-5">
                  <input
                    type="text"
                    className="border-2 border-blue-200 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter name to delete"
                    value={deletename}
                    onChange={(e) => setDeletename(e.target.value)}
                  />
                  <button
                    onClick={handleDelete}
                    className="bg-gradient-to-r from-blue-300 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}

            {activeSection === "show" && (
              <div>
                <h2 className="text-3xl font-bold mb-6 text-blue-200">All Users</h2>
                {users.length === 0 ? (
                  <p className="text-blue-200 text-lg">No users added yet.</p>
                ) : (
                  <ul className="space-y-3">
                    {users.map((user, index) => (
                      <li
                        key={index}
                        className="p-3 bg-gray-50 rounded-lg text-gray-800 text-lg hover:bg-gray-100"
                      >
                        {user.name} - {user.email}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
