const Story = () => {
  return (
    <section className="flex items-center justify-center md:px-5 md:min-h-screen pt-[130px] md:py-35">
        <div className="flex flex-col md:flex-row md:items-center w-[500px] md:w-[750px] lg:w-[920px] xl:w-[1300px] gap-15 md:gap-10 lg:gap-20">
            <h1 className="font-latin px-4 text-[120px] xl:text-[240px] xl:pb-30 md:w-[50%] lg:w-[30%] xl:w-[50%] font-semibold leading-[100px] xl:leading-[200px]">Our <br /><span className="text-blue-500">Story</span></h1>
            <div className="flex flex-col md:w-[50%] lg:w-[65%] xl:w-[50%] gap-10 text-[17.5px] md:text-[15.5px] lg:text-[18.5px] md:leading-[30px] lg:leading-[40px] text-slate-500 font-latin px-4">
                <p className="">PayPlux is one of the oldest digital currency service providers in Ghana. Established over 15 years ago, our focus hasn't changed. Our mission and focus is to make digital currencies (both cryptos & non-cryptos) accessible, especially in the African regions. We want to empower you to participate in the ever growing and evolving digital currency landscape.</p>
                <p>Our digital currency services allow users in Ghana and beyond to buy and sell various digital currencies such as Bitcoin and Perfect Money. Our diverse payment methods allow you to carry out your buy and sell transactions using Mobile Money, which is one of the most used payment systems in our part of the world.</p>
            </div>
        </div>
    </section>
  )
}

export default Story