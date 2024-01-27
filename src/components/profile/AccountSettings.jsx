import { useState } from "react";

import axios from "axios";
import { useAuthStore } from "../../hooks/AuthStore";

function AccountSettings() {
  const { user } = useAuthStore();

  const [isEditMode, setIsEditMode] = useState(false);
  const [fullName, setFullName] = useState(user.fullName);
  const [email, setEmail] = useState(user.email);
  const [tel, setTel] = useState(user.tel);
  const [gender, setGender] = useState(user.gender);

  function handleData() {
    console.log("data");
    axios
      .patch(`https://fastserve.onrender.com/api/users/${user.UserId}`, {
        fullName: fullName,
        email: email,
        tel: tel,
        gender: gender,
      })
      .then((response) => {
        return alert(response.data.message);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <main className="p-2 space-y-2 border">
      <h1 className="text-center my-4 text-4xl underline"> Account Settings</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="User Card">User Card</label>
          <input
            className="p-2 w-full rounded-md border"
            type="text"
            placeholder="UserId"
            autoComplete="off"
            disabled
            defaultValue={user.UserId}
          />
        </div>
        <div>
          <label htmlFor="Full Name">Full Name</label>
          <input
            className={`p-2 w-full rounded-md border ${
              isEditMode ? "bg-white" : "bg-gray-100"
            }`}
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            readOnly={!isEditMode}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={`p-2 w-full rounded-md border ${
              isEditMode ? "bg-white" : "bg-gray-100"
            }`}
            type="email"
            placeholder="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditMode}
          />
        </div>
        <div>
          <label htmlFor="Phone Number">Phone Number</label>
          <input
            className={`p-2 w-full rounded-md border ${
              isEditMode ? "bg-white" : "bg-gray-100"
            }`}
            type="text"
            placeholder="tel"
            autoComplete="off"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            readOnly={!isEditMode}
          />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="Gender">Gender</label>
          <select
            className={`p-2 w-full rounded-md border ${
              isEditMode ? "bg-white" : "bg-gray-100"
            }`}
            id="Gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            disabled={!isEditMode}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div className="p-4 flex">
        {!isEditMode ? (
          <button
            onClick={() => setIsEditMode(true)}
            className="border rounded-md p-2 px-4 mx-auto"
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleData}
            className="border rounded-md p-2 px-4 mx-auto"
          >
            Update
          </button>
        )}
      </div>
    </main>
  );
}

export default AccountSettings;
