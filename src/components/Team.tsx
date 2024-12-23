import React from "react";

const Team: React.FC = () => {
  // Sample data for team members
  const teamMembers = [
    { name: "John Doe", position: "Developer", img: "team1.jpg" },
    { name: "Jane Smith", position: "Designer", img: "team2.jpg" },
    { name: "Tom Johnson", position: "Marketing Lead", img: "team3.jpg" },
    { name: "Alice Brown", position: "Product Manager", img: "team4.jpg" },
  ];

  return (
    <section className="container mx-auto py-12 px-4 lg:px-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-4 text-center">Our Team</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* CEO Section */}
        <div className="lg:w-1/3 bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src="ceo.jpg" // Replace with your CEO image
            alt="CEO"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Alex Johnson</h3>
          <p className="text-blue-600 text-center mb-2">CEO & Founder</p>
          <p className="text-gray-600 text-center">
            Alex is the visionary leader behind our success, bringing over 15
            years of experience in the industry.
          </p>
        </div>

        {/* Other Team Members */}
        <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center bg-white p-4 rounded-lg shadow-md"
            >
              <img
                src={member.img} // Replace with team member image
                alt={member.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h4 className="text-lg font-semibold">{member.name}</h4>
                <p className="text-blue-500">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
