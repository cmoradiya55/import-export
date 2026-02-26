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
        }
    ]

    return (
        <div>

            {/* Header */}
            <div className="text-center mb-8">
                <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                    <h2 className="text-4xl md:text-5xl font-bold text-gradient-to-t from-primary-50 to-white mb-4 font-serif">
                        TEAM
                    </h2>
                </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="animate__fadeInUp" delay="delay-1000ms">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
                    {teamMembers.map((member) => (
                        <div
                            key={member.name}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-400 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center"
                        >
                            <div className="h-80 w-full flex items-center justify-center overflow-hidden bg-primary-50 relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-primary-900 mb-1 mt-1.5 text-center">{member.name}</h3>
                            <p className="text-gray-600 font-semibold text-sm text-center mb-3">{member.role}</p>
                        </div>
                    ))}
                </div>
            </AnimateOnScroll>

        </div>
    );
};

export default TeamComponent;