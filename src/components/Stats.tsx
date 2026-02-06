const StatsSection = () => {
  const stats = [
    {
      value: "20M+",
      label: "Student engagements powered annually",
    },
    {
      value: "4L+",
      label: "Applications managed annually",
    },
    {
      value: "4M+",
      label: "Inquiries processed annually",
    },
    {
      value: "2000+",
      label: "Business users across departments",
    },
  ];

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-[-100px] left-[-100px] w-[420px] h-[420px] bg-blue-600/20 rounded-full blur-[130px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-purple-600/20 rounded-full blur-[140px]" />

      <div className="relative w-11/12 mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 leading-tight">
          We are a global enrollment platform
          <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            designed to equip you for growth
          </span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition shadow-xl"
            >
              <p className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </p>

              <p className="mt-3 text-gray-400 text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}

          {/* Highlight Card */}
          <div className="sm:col-span-2 lg:col-span-4 flex justify-center">
            <div className="relative max-w-2xl w-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 blur-3xl rounded-3xl" />

              <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
                <p className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  100+
                </p>

                <p className="mt-4 text-gray-400 text-lg">
                  Education organizations trust Unify
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
