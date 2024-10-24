const Manager = () => {
  return (
    <>
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="text-white mycontainer text-center">
        <span className="text-green-500">&lt;</span>
        CiperKey
        <span className="text-green-500">Pro/&gt;</span>
        <p className="text-sm">Your own Password Managing tool</p>
    

      <div className="text-white mycontainer py-0 text-center gap-8 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Password"
          className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-full"
        />
        <div className="flex gap-8">
          <input
            type="text"
            placeholder="Enter Password"
            className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-1/2"
          />
          <input
            type="text"
            placeholder="Enter Password"
            className="border-2 bg-transparent border-green-500 rounded-md px-4 py-2 mt-5 w-1/2"
          />
        </div>
        <button className="text-white gap-4 p-4 bg-green-600 hover:bg-green-700 rounded-full px-4 py-2 mt-5 flex items-center justify-center w-fit">
          <lord-icon
            src="https://cdn.lordicon.com/jgnvfzqg.json"
            trigger="hover"
            stroke="bold"
          ></lord-icon>
          Add Password
        </button>
      </div>
      </div>
    </>
  );
};

export default Manager;
