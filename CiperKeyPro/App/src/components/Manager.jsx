import { useEffect, useState } from "react";

const Manager = () => {
  const [show, setShow] = useState(false);
  const [saveUser, setSaveUser] = useState({
    webName: "",
    username: "",
    password: "",
  });
  const [allUsers, setAllUsers] = useState([]);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setSaveUser({ ...saveUser, [name]: value });
  };

  const saveUserData = () => {
    if (!saveUser.webName || !saveUser.username || !saveUser.password) {
      alert("Please fill all the fields");
      return;
    }
    const updatedUsers = [...allUsers, saveUser];
    setAllUsers(updatedUsers);
    // Save to local storage
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    console.log("User data saved:", localStorage.getItem("users"));

    // Clear the form after save
    setSaveUser({ webName: "", username: "", password: "" });
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers) {
      setAllUsers(storedUsers);
    }
  }, []);

  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="text-white mycontainer text-center">
        <span className="text-green-500">&lt;</span>
        CiperKey
        <span className="text-green-500">Pro/&gt;</span>
        <p className="text-sm">Your own Password Managing tool</p>
        <div className="text-white py-0 text-center gap-8 flex flex-col items-center">
          <input
            type="text"
            name="webName" // Corrected name attribute
            placeholder="Enter Website Name"
            className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-full md:w-full"
            onChange={handleInput}
            value={saveUser.webName} // Bind input to state
          />
          <input
            type="text"
            name="username" // Corrected name attribute
            placeholder="Enter Username"
            className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-full md:w-full"
            onChange={handleInput}
            value={saveUser.username} // Bind input to state
          />
          <input
            type={show ? "text" : "password"}
            name="password" // Corrected name attribute
            placeholder="Enter Password"
            className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-full md:w-full"
            onChange={handleInput}
            value={saveUser.password} // Bind input to state
          />
          <span
            className="absolute top-[51.5%] right-[5%] cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
            ></lord-icon>
          </span>

          <button
            className="text-white gap-1 p-4 bg-green-600 hover:bg-green-700 rounded-full px-4 py-2 mt-5 flex items-center justify-center w-fit"
            onClick={saveUserData}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              stroke="bold"
            ></lord-icon>
            Add Data
          </button>
        </div>
        <table class="table-auto w-full mt-10">
          <thead className="bg-green-600">
            <tr>
              <th className=" text-center w-32 p-1 ">Website</th>
              <th className=" text-center w-32 p-1 ">Username</th>
              <th className=" text-center w-32 p-1 ">Password</th>
            </tr>
          </thead>
          <tbody className="font-bold">
            {allUsers.length > 0 ? (
              allUsers.map((user, index) => (
                <tr key={index}>
                  <td className=" text-center w-32 p-1 ">{user.webName}</td>
                  <td className=" text-center w-32 p-1 ">
                    {user.username}
                  </td>
                  <td className=" text-center w-32 p-1 ">
                    {user.password}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center w-full p-1 text-2xl" colSpan="3">
                  No Data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Manager;
