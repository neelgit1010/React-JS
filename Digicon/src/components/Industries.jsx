const Industries = () => {
    const info = [
      "2000+ Content Writing Completed",
      "1200+ Satisfied Clients all over India",
      "120+  Completed Projects all over India",
      "200+ Complete Design all over India",
      "100+  Complete Website Dev all over India",
    ];
  return (
    <div className="p-8">
      <div>
        <h1 className="text-3xl font-semibold">Industries We Are</h1>
        <div className="flex gap-4 items-center justify-around mt-4 overflow-x-auto">
          {info.map((item, index) => (
            <div
              key={index}
              className="w-[220px] h-[220px] shadow-md flex justify-center items-center text-center text-blue-600 font-semibold bg-slate-300 rounded-md p-4 text-xl hover:bg-blue-600 hover:text-white transition-all duration-500 min-w-[220px]"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-3xl font-semibold mt-8">Industries We Are</h1>
          <div className="flex flex-col flex-1 sm:flex-row gap-4 items-center justify-between mt-4 ">
            <div className="w-[50%] shadow-md">
              <form method="post">
                <div className="flex flex-col gap-4 justify-center">
                  <input
                    type="text"
                    className="border outline-none p-4 w-full"
                    placeholder=" Name"
                  />
                  <input
                    type="email"
                    className="border outline-none p-4 w-full"
                    placeholder=" Email"
                  />
                  <input
                    type="number"
                    className="border outline-none p-4 w-full"
                    placeholder=" Phone number"
                  />
                  <select
                    id="service"
                    name="service"
                    className="border outline-none p-4"
                  >
                    <option value="Dev">Dev</option>
                    <option value="Design">Design</option>
                    <option value="Android">Android</option>
                  </select>

                  <textarea name="message" id="" placeholder="Message" rows={5} className="p-4"></textarea>
                </div>
              </form>
            </div>
            <div>
               <img src="/services/bulb.png" className="max-w-xl hover:opacity-50 hover:bg-blend-darken" alt="bulb" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Industries