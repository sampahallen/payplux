const Table = () => {
  return (
    <section className="px-3">
      <div className="min-w-[340px] min-h-[450px]  xs:min-w-[470px]  xs:min-h-[500px] md:min-w-[730px] md:min-h-[500px] lg:min-w-[850px] xl:min-w-[1100px]   shadow-[0px_0px_6px_2px_rgba(100,100,111,0.2)] rounded-lg mb-10">
        <div className="flex flex-row justify-between bg-gray-50 py-6">
          <p className="text-[12px] text-gray-300 font-medium font-latin ml-4 md:ml-0 md:px-8  lg:mr-40">
            PRODUCT
          </p>
          <div className="hidden md:flex flex-row gap-10 ">
            <p className="text-[12px] text-gray-300 font-medium font-latin">
              PRICE
            </p>
            <p className="text-[12px] text-gray-300 font-medium font-latin">
              CHANGE
            </p>
          </div>
          <p className="text-[12px] text-gray-300 font-medium font-latin hidden lg:flex">
            CHART
          </p>
          <p className="text-[12px] text-gray-300 font-medium font-latin mr-35 md:mr-40">
            ACTIONS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Table;
