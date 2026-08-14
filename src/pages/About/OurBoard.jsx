import React from "react";

export default function OurBoard() {
  const boardMembers = [
    {
      name: "Victor Ameh",
      title: "Chief Executive Officer / Chairman",
      description:
        "Over 15 years of youth-focused work and a staunch advocate for sick kids.",
      photo: "/images/board1.png"
    },
    {
      name: "Mercy Ameh",
      title: "Board Secretary",
      description:
        "Versatile Human Resource professional and trainer.",
      photo: "/images/board2.png",
    },
    {
      name: "Dr. Adejobi Adeloye",
      title: "Board Member",
      description:
        "Prominent leader in AI, telemedicine, emergency response, and humanitarian work. Founder of NovaDOC and trainer of over 12,000 frontline responders.",
      photo: "/images/board3.png",
    },
    {
      name: "Philip Ejeikwu",
      title: "Board Member",
      description:
        "Monitoring & Evaluation expert with versatile experience in non-profit work.",
      photo: "/images/board4.png",
    },
  ];

  return (
    <div className="w-full py-12 px-6 text-[#0D1B2A]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Board
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {boardMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md border border-slate-200 p-6 flex flex-col items-center text-center"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mb-4 border-4 border-[#0D1B2A]"
            />

            <h2 className="text-xl font-bold mb-1">{member.name}</h2>
            <p className="text-sm font-semibold text-red-600 mb-3">
              {member.title}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              {member.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
