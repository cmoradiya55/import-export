import AnimateOnScroll from "../../../Component/AnimateOnScroll/AnimateOnScroll";

const TeamComponent = () => {
  const teamMembers = [
    {
      name: "Rajesh Patel",
      role: "Founder & CEO",
      image: "/image/team1.webp",
    },
    {
      name: "Ajay Shah",
      role: "Head of Quality Assurance",
      image: "/image/team2.webp",
    },
    {
      name: "Nitya Mehta",
      role: "Supply Chain Director",
      image: "/image/team3.webp",
    },
    {
      name: "Naren Desai",
      role: "International Relations Manager",
      image: "/image/team4.webp",
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8 md:mb-12">
        <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6 shadow-xl">
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-[0.2em] uppercase">
              Our Team
            </h2>
          </div>
          <p className="text-primary-50/70 text-base md:text-lg max-w-2xl mx-auto font-medium px-6">
            Meet the experts behind our global trade excellence
          </p>
        </AnimateOnScroll>
      </div>

      <AnimateOnScroll animation="animate__fadeInUp" delay="delay-500ms">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col items-center border border-white/20"
            >
              <div className="h-50 sm:h-80 w-full overflow-hidden bg-primary-50 relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 sm:bg-primary-950/20 bg-primary-950/0 group-hover:bg-primary-950/0 transition-all duration-500" />
              </div>
              <div className="px-2 py-2 sm:p-4 w-full text-center">
                <h3 className="text-xl font-bold text-primary-950 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-500 font-bold text-xs uppercase tracking-normal">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimateOnScroll>
    </div>
  );
};

export default TeamComponent;
