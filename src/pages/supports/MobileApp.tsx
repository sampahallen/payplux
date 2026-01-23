import React from 'react'
import Navbar from '../../components/support/Navbar'
import Nav from '../../components/support/inner/Nav'
import Footer from '../../components/support/Footer'
import { mobile } from '../../constants/support'
import { NavLink } from 'react-router'
import { FaChevronRight } from "react-icons/fa6";

const MobileApp = () => {
  return (
    <div>
        <Navbar />
        <Nav title='Mobile App' link='/support/mobile-app'/>
              <div className="bg-[#FAFBFC] flex flex-col items-center justify-center pt-10 lg:pt-15 ">
        <div className="bg-[#F2F3F5] rounded-lg pt-10 pb-5 lg:pb-10 h-full w-full max-w-[530px] lg:max-w-[750px]  mb-15">
          <p className=" px-3 lg:px-10 text-[#061f3c] tracking-tight font-medium text-[24.5px]">
            Bitcoin Wallet: How it Works
          </p>
          <div className="flex justify-center">
            <div className="flex flex-col bg-[#FAFBFC] rounded-lg w-full lg:max-w-[680px] shadow-[0px_12px_6px_2px_rgba(0,0,0,0.1)]">
              {mobile.map((card, idx) => (
                <div className="">
                  <div className="flex flex-row items-center justify-between py-10 px-3 lg:px-5">
                    <NavLink to={card.link} className="text-[#061f3c]">
                      {card.text}
                    </NavLink>
                    <FaChevronRight className="text-slate-300" />
                  </div>
                  {idx !== mobile.length - 1 && (
                    <div className={`border-b border-slate-300`}> </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}

export default MobileApp