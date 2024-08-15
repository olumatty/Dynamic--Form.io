import "./App.css";

function App() {
  const handleInput = (e) => {
  };

  return (
    <div className="App">
      <h1 className="text-3xl text-center my-4 py-2"> React Form</h1>
      <form className="w-5/6 max-w-md mx-auto">
        <fieldset className="flex flex-col border py-1 px-4">
          <legend className="text-3xl font-semibold"> About You </legend>
            <label className="text-1xl font-semibold">What's Your Name</label>

            <input 
              id="firstName"
              type="text"
              placeholder="firstName" 
              name="firstName" 
              onClick={handleInput} 
              className="border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-purple-200" 
              />

            <input 
              id="LastName"
              type="text"
              placeholder="LastName"
              name="LastName" 
              onClick={handleInput} 
              className="border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
              />

            <label className="text-1xl font-semibold"> Whats your email?</label>
            <input
              id ="email"
              type="email"
              placeholder="example@email.com"
              name="email"
              onClick={handleInput}
              className="border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />

            <label className="text-1xl font-semibold"> Whats your date of birth?</label>
            <input
              id ="dob"
              type="date"
              placeholder="Enter your date of birth"
              name="dob"
              onClick={handleInput}
              className="border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-purple-200"
            />
        </fieldset>
      </form>
    </div>
  );
}

export default App;
