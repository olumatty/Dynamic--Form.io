import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  });

  const [prompts, setPrompts] = useState([
    {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime(),
    },
  ]); 

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  console.log(userInfo)

  const handlePrompt = (e, i) => {
    const {name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt = (e) => {
    e.preventDefault();
    setPrompts([
      ...prompts,
      {
        prompt: "",
        answer: "",
        timestamp: new Date().getTime(),
      },
    ])}

    const handleDelete = (i) =>{
      let deletePrompt = [...prompts];
      deletePrompt.splice(i ,1)
      setPrompts(deletePrompt)
  }

  return (
    <div className="App">
      <h1 className="text-3xl text-center my-4 py-2"> React Form</h1>
      <form className="w-5/6 max-w-xl mx-auto pt-4 py-10">
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            About You
          </legend>
          <div>
            <label
              htmlFor="firstName,lastName"
              className="text-3xl font-semibold mb-2 "
            >
              What's your name
            </label>
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
            <label htmlFor="email" className="text-3xl font-semibold">
              What's your email?  
            </label>
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
            <label htmlFor="dob" className="text-3xl font-semibold">
              What's your date of birth?
            </label>
            <input
              id="dob"
              type="date"
              placeholder="Enter your date of birth"
              name="dob"
              onChange={handleInput}
              className=" w-3/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="gender" className="text-3xl font-semibold">
              Whats your Gender
            </label>
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
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">
            Prompts
          </legend>

          {prompts.map((prompt, i) => (
            <div key={prompt.timestamp} className="flex flex-col ">
              <label className="text-3xl font-semibold" htmlFor={`prompt-${i}`}>
                Select a prompt
              </label>
              <div className="flex flex-row items-center gap-2">
              <select
                id={`prompt-${i}`}
                name="prompt1"
                onChange={(e) => handlePrompt(e, i)}
                className="w-full border rounded text-lg leading-tight py-3 px-2 mt-4 mb-4 focus:outline-purple-200"
              >
                <option>Select Prompt </option>
                <option value="Dating me is like....">
                  Dating me is like .....
                </option>
                <option value="Fact about me that suprises people: ">
                  Fact about me that suprises people:
                </option>
                <option value="I want someone who ....">
                  I want some who ....
                </option>
                <option value=" I spend most of my money on:">
                  I spend most of my money on:
                </option>
                <option value=" The most spontaneous thing I've done:">
                  The most spontaneous thing I've done:
                </option>
                <option value=" We are the same kind of wierd if ...:">
                  We are the same kind of wierd if ...
                </option>
              </select>
              <button className="border bg-purple-400 py-2 px-4 rounded-lg text-white font-bold text-xl" type="button" onClick={() => handleDelete(i)}>
                -
              </button>
              </div>
              <textarea
                className="border border-dashed py-3 px-2 focus:outline-purple-200"
                rows={5}
                id={`answer-${i}`}
                name="answer1"
                placeholder="Let your true color shine through you"
                onChange={(e) => handlePrompt(e, i)}
              />
            </div>
          ) )}

          <div className="w-full flex justify-center">
            <button
            type="button"
              className="border bg-purple-500 py-1 px-2 rounded-lg text-white font-bold text-xl"
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  )
}
export default App;
