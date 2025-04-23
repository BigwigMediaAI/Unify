const StatsSection = () => {
  return (
    <div className="bg-black text-white ">
      <h2 className="text-3xl font-semibold text-center mb-8 text-white py-4">
        We are a global enrollment platform designed to equip you for growth
      </h2>

      <div className="bg-gray-800 text-white py-8 px-2 w-11/12 mx-auto rounded-lg mb-10">
        <div className="grid grid-cols-1 md:flex md:justify-around gap-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10">
            {/* Stat 1 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                20 <span className="text-2xl">Million +</span>
              </p>
              <p className="mt-2 text-lg text-gray-300">
                Student engagements powered on average annually
              </p>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                4 <span className="text-2xl">Lacs +</span>
              </p>
              <p className="mt-2 text-lg text-gray-300">
                Applications managed on average annually
              </p>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">
                4 <span className="text-2xl">Million +</span>
              </p>
              <p className="mt-2 text-lg text-gray-300">
                Inquiries processed on average annually
              </p>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col md:text-left">
              <p className="text-3xl font-bold">2000+</p>
              <p className="mt-2 text-lg text-gray-300">
                Business users across departments and job functions
              </p>
            </div>
          </div>

          {/* Highlighted Stat */}
          <div className="col-span-1 md:col-span-4 flex md:justify-center md:items-center">
            <div className="bg-gray-700 rounded-md p-6 w-full md:w-auto md:p-16">
              <p className="text-3xl font-bold text-white">100+</p>
              <p className="mt-2 text-lg text-gray-300">
                Education organizations trust Unify
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
