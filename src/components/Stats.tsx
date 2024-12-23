

const StatsSection = () => {
  return (
    <div>
    <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-5 md:text-center">
        We are a global enrollment platform designed to equip you for growth
      </h2> 
    <div className="bg-[#0c1c40] text-white py-8 px-5 max-w-6xl mx-auto rounded-lg">
     
      <div className="grid grid-cols-1 md:flex md:justify-around gap-6 md:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 md:px-10">
            {/* Stat 1 */}
        <div className="flex flex-col md:text-left">
          <p className="text-3xl font-bold">
            1 <span className="text-2xl">Billion</span>
          </p>
          <p className="mt-2 text-lg">
            Student engagements powered on average annually
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col md:text-left">
          <p className="text-3xl font-bold">
            5 <span className="text-2xl">Million</span>
          </p>
          <p className="mt-2 text-lg">
            Applications managed on average annually
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col md:text-left">
          <p className="text-3xl font-bold">
            100 <span className="text-2xl">Million</span>
          </p>
          <p className="mt-2 text-lg">
            Inquiries processed on average annually
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col md:text-left">
          <p className="text-3xl font-bold">
            50,000
          </p>
          <p className="mt-2 text-lg">
            Business users across departments and job functions
          </p>
        </div>
        </div>
        

        {/* Highlighted Stat */}
        <div className="col-span-1 md:col-span-4 flex md:justify-center md:items-center ">
          <div className="bg-[#172850] rounded-md p-6 w-full md:w-auto md:p-16">
            <p className="text-3xl font-bold">1000+</p>
            <p className="mt-2 text-lg">
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
