import { cards } from "../../constants/support";
import fb from "../../assets/facebook.png";
import tw from "../../assets/twitter.png";
import ig from "../../assets/instagram.png";
import { NavLink } from "react-router";

const Cards = () => {
  return (
    <div className="bg-[#fafbfc] flex justify-center items-center pt-10 px-5 pb-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] lg:max-w-[900px] xl:max-w-[1100px] gap-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white flex flex-col gap-3 pt-5 px-4 h-65 w-full max-w-[500px] rounded-lg self-start shadow-[0px_3px_9px_2px_rgba(0,0,0,0.1)]"
            >
              <div className="flex flex-col gap">
                <NavLink to={card.link} className="font-latin font-medium text-[18px] text-[#1c8aff]">
                  {card.title}
                </NavLink>
                <p className="font-latin text-[13px] text-slate-400 leading-2">
                  {card.articleNo}
                </p>
              </div>

              <div>
                {card.articleTitles.map((title) => (
                  <div key={title.text} className="flex flex-col">
                    <NavLink
                      to={title.link}
                      className="hover:underline mt-5 font-latin text-[14.3px] text-[#061f3c]"
                    >
                      {title.text}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f2f3f5] flex flex-col gap-15 font-latin rounded-xl w-full max-w-[500px] py-8 px-5 self-start">
          <div className="flex flex-col gap-4 text-slate-500">
            <h1 className="text-[25px] text-[#061f3c] font-medium">
              Contact Support
            </h1>
            <p className="text-[14px] max-w-[450px]">
              Didn't find what you were looking for in the Knowledge Base
              articles? Feel free to submit a case or contact our Support Service
              below for further help.
            </p>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-[18px] text-[#061f3c] font-medium">
              Support Service Hours
            </h2>
            <div className="text-[14px] text-slate-500 flex flex-col gap-5">
              <p className="font-medium">
                Monday-Sunday: <span className="font-normal">24 hours</span>
              </p>
              <div className="flex flex-col gap-1">
                <p className="font-medium">Contact Phone:</p>
                <p>(+233) 54 257 0075</p>
              </div>
            </div>
            <div className="flex flex-row gap-3 mt-5 text-3xl text-white">
              <div className="bg-[#1c8aff] rounded-full p-2">
                <a href="">
                  <img src={fb} alt="" className="w-[15px] h-[15px]" />
                </a>
              </div>
              <div className="bg-[#1c8aff] rounded-full p-2">
                <a href="">
                  <img src={tw} alt="" className="w-[15px] h-[15px]" />
                </a>
              </div>
              <div className="bg-[#1c8aff] rounded-full p-2">
                <a href="">
                  <img src={ig} alt="" className="w-[15px] h-[15px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cards;
