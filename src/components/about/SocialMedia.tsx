import facebook from "../../assets/facebook.png"
import twitter from "../../assets/twitter.png"
import insta from "../../assets/instagram.png"

const SocialMedia = () => {
  return (
    <section className="flex flex-col md:items-center md:justify-center pb-30 md:py-20 xl:py-0 xl:pb-30 font-latin overflow-x-hidden">
        <div className="flex flex-col px-4 md:min-w-[600px] md:max-w-[1300px] gap-5 md:gap-10 xl:gap-15">
            <h1 className="text-[28px] xl:text-[30px] md:text-center font-medium"><span className="text-blue-500">Connect</span> with us on Social Media</h1>
            <div className="flex flex-col md:flex-row w-full gap-10  lg:gap-15 xl:gap-20  md:items-center md:justify-around">
                <div className="flex flex-row gap-5 items-center h-[60px] px-4 rounded-lg w-[230px] bg-blue-500">
                    <img src={facebook} alt="" className="w-[38px]"/>
                    <p className="text-white hover:underline">Facebook</p>
                </div>
                <div className="flex flex-row gap-5 items-center h-[60px] px-4 rounded-lg w-[230px] bg-sky-500">
                    <img src={twitter} alt="" className="w-[38px]"/>
                    <p className="text-white hover:underline">Twitter</p>
                </div>
                <div className="flex flex-row gap-5 items-center h-[60px] px-4 rounded-lg w-[230px] bg-linear-to-r from-fuchsia-700 to-red-500">
                    <img src={insta} alt="" className="w-[38px]"/>
                    <p className="text-white hover:underline">Instagram</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SocialMedia