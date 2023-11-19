function Sign({ title, children }) {
  return (
    <>
      <div className="flex flex-col p-8 gap-2 shadow-xl m-4 rounded">
        <h1 className="text-xl uppercase text-gray-600 font-medium">{title}</h1>
        {children}
        <label htmlFor="email">Email</label>
        <input
          className="shadow-gray-300 shadow-md rounded p-2"
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          className="shadow-gray-300 shadow-md rounded p-2"
          name="password"
          id="password"
        />
        <input
          className="p-4 rounded text-white font-medium bg-green-500"
          type="submit"
          value={title}
        />
      </div>
    </>
  );
}

export default Sign;
