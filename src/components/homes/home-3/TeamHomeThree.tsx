import { Link } from "react-router-dom"
 

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  link: string
}

const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Adrew Smith",
    role: "Senior SEO Manager",
    image: "assets/img/images/th-3/team-img-1.jpg",
    link: "/team-details",
  },
  {
    id: 2,
    name: "Jones Jack",
    role: "Strategy Director",
    image: "assets/img/images/th-3/team-img-2.jpg",
    link: "/team-details",
  },
  {
    id: 3,
    name: "Marsal Straw",
    role: "SEO Content Writer",
    image: "assets/img/images/th-3/team-img-3.jpg",
    link: "/team-details",
  },
]

export default function TeamHomeThree() {
  return (
    <section className="section-team">
      <div className="section-space">
        <div className="container">
          <div className="mb-10 flex flex-wrap items-center justify-between md:mb-[60px] lg:mb-20">
            <div className="section-block max-w-2xl">
              <h2 className="jos mb-6 font-familjenGrotesk text-4xl font-bold leading-none text-black md:text-5xl lg:text-6xl xl:text-7xl xxl:text-[85px]">
                We're a team of professionals
              </h2>
            </div>
            <Link
              to="/team"
              className="jos inline-flex items-center justify-center rounded-[50px] bg-[#FFE757] px-11 py-4 text-base font-bold hover:bg-black hover:text-[#FFE757]"
            >
              Meet our team
            </Link>
          </div>

          {/* Team List */}
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {teamData.map((member) => (
              <li
                key={member.id}
                className="jos rounded-[10px] border border-black p-5"
                data-jos_animation="flip-left"
              >
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={376}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 text-center">
                  <Link
                    to={member.link}
                    className="mb-[10px] block font-familjenGrotesk text-2xl font-bold"
                  >
                    {member.name}
                  </Link>
                  <span className="para-lg">{member.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
