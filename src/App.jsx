import React from "react";

function App() {
  const [formData, setFormData] = React.useState(
    JSON.parse(localStorage.getItem("data")) || {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }
  );

  React.useEffect(() => {
    localStorage.setItem("data", JSON.stringify(formData));
  }, [formData]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    console.log(formData);
  }

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="sm:w-3/4 md:w-1/2 shadow-md rounded-md p-6 bg-white">
        <form onSubmit={handleSubmit}>
          <label className="block my-2">
            <span className="block text-sm font-medium text-slate-700">
              Firstname
            </span>
            <input
              type="text"
              name="firstName"
              onChange={handleChange}
              value={formData.firstName}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block my-2">
            <span className="block text-sm font-medium text-slate-700">
              Lastname
            </span>
            <input
              type="text"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block my-2">
            <span className="block text-sm font-medium text-slate-700">
              Email
            </span>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <div className="flex justify-between my-2">
            <label className="block w-full mr-1">
              <span className="block text-sm font-medium text-slate-700">
                Password
              </span>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>

            <label className="block w-full ml-1">
              <span className="block text-sm font-medium text-slate-700">
                Confirm Password
              </span>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
          </div>

          <div className="flex justify-end my-2">
            <button className="bg-sky-500 hover:bg-sky-700 p-2 rounded-md text-white shadow-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
