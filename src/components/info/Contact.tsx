import wa from "../../assets/whatsapp.png"
import lc from "../../assets/livechat.png"
import messenger from "../../assets/messenger.png"

const Contact = () => {
  return (
    <section>
        <div className="bg-[#1c8aff] flex flex-col items-center gap-13 py-20 px-7">
            <div className="flex flex-col item-center text-center gap-3">
                <h1 className="text-white text-[28px] md:text-[30px] font-semibold">Need more information?</h1>
                <p className="text-white text-[18px] font-normal ">Contact us directly on WhatsApp, Messenger, Live Chat</p>
            </div>
            <div className="flex flex-row items-center gap-13">
                <img src={wa} alt=""className="w-[50px] cursor-pointer"/>
                <img src={lc} alt=""className="w-[80px] cursor-pointer"/>
                <img src={messenger} alt=""className="w-[50px] cursor-pointer"/>
            </div>
        </div>
    </section>
  )
}

export default Contact