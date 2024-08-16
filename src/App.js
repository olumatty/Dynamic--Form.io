import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: ""
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-center my-4 py-2"> React Form</h1>
      <form className="w-5/6 max-w-xl mx-auto py-4">
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold"> About You </legend>
          <div>
            <label for ="firstName,lastName" className="text-3xl font-semibold mb-2 ">What's your name</label>
            <input
              id="firstName"
              type="text"
              placeholder="firstName"
              name="firstName"
              onChange={handleInput}
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 text-gray-500 focus:outline-purple-200"
            />
            <input
              id="lastName"
              type="text"
              placeholder="lastName"
              name="lastName"
              onChange={handleInput}
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />
          </div>

          <div>
            <label htmlFor="email" className="text-3xl font-semibold">What's your email? </label>
            <input
              id="email"
              type="email"
              placeholder="example@email.com"
              name="email"
              onChange={handleInput}
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />
          </div>

          <div>
            <label htmlFor="dob" className="text-3xl font-semibold"> What's your date of birth?</label>
            <input
              id="dob"
              type="date"
              placeholder="Enter your date of birth"
              name="dob"
              onChange={handleInput}
              className=" w-3/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />
          </div>
          <div htmlFor ="gender" className="flex flex-col">
            <label className="text-3xl font-semibold"> Whats your Gender</label>
            <select
              id="gender"
              name="gender"
              className=" w-3/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
              onChange={handleInput}
            >
              <option> Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
