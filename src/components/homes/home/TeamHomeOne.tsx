 
import { Link } from "react-router-dom";
import team_data from "../../../data/team_data";
 


const TeamHomeOne: React.FC = () => {
  return (
    <section className="section-team">
      <div className="section-space">
        <div className="container">
          <div className="section-block mx-auto mb-10 max-w-[650px] text-center md:mb-[60px] xl:mb-20 xl:max-w-[856px]">
            <h2 className="jos">
              We have a team of creative {' '}
              <span>
                people
                <img
                  src="assets/img/elemnts/shape-light-lime-5-arms-star.svg"
                  alt="shape-star"
                  width="74"
                  height="70"
                  className="relative inline-block h-auto w-8 after:bg-black md:w-10 lg:w-[57px]"
                />
              </span>
            </h2>
          </div>

          <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team_data.map((member) => (
              <li
                key={member.id}
                className="jos group/team-item"
                data-jos_delay={member.delay}
                data-jos_animation="flip-left"
              >
                <div className="relative overflow-hidden rounded-[20px] border-[5px] border-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    width={296}
                    height={300}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-300 group-hover/team-item:scale-110"
                  />
                  <div className="absolute top-full flex w-full justify-center gap-3 transition-all duration-300 group-hover/team-item:-translate-y-14">
                    {member.socials?.map((social, index) => (
                      <Link
                        key={index}
                        to={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link relative inline-flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-colorButteryWhite bg-black transition-all duration-300 hover:border-black hover:bg-colorLightLime hover:shadow-[0_1.5px_0_0] hover:shadow-colorButteryWhite"
                      >
                        <img
                          src={social.iconWhite}
                          alt={`${social.name}-white`}
                          width={18}
                          height={18}
                          className="opacity-100 transition-all duration-300 group-hover/link:opacity-0"
                        />
                        <img
                          src={social.iconBlack}
                          alt={`${social.name}-black`}
                          width={18}
                          height={18}
                          className="absolute opacity-0 transition-all duration-300 group-hover/link:opacity-100"
                        />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-5 text-center">
                  <Link
                    to="/team-details"
                    className="display-heading display-heading-4 mb-4 block"
                  >
                    {member.name}
                  </Link>
                  <span className="text-lg md:text-[21px]">{member.title}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TeamHomeOne;
