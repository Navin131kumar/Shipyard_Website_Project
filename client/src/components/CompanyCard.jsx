import {
  Plus,
  Blocks,
  Boxes,
  BadgeIndianRupee,
  TabletSmartphone,
} from "lucide-react";

const CompanyCard = () => {
  return (
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8 gap-4 ">
        <div
          className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl"
          id="cardbg"
        >
          <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg1">
            <div className=" flex justify-center">
              <Boxes className=" group-hover:stroke-white stroke-[#ff6600] h-10 w-[60px]" />
            </div>
            <h2 className=" font-[poppins] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">
              Ship Building
            </h2>
            <p className=" font-[poppins] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">
              Ship Building focuses on designing and constructing commercial,
              military, and specialized ships using advanced materials for
              durability and efficiency.
            </p>
          </div>
        </div>
        <div
          className="mb-10 z-10 group rounded-xl bg-white shadow-2xl"
          id="cardbg"
        >
          <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg1">
            <div className=" flex justify-center">
              <Blocks className=" group-hover:stroke-white stroke-[#ff6600] h-10 w-[60px]" />
            </div>
            <h2 className=" font-[poppins] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">
              Ship Repairing
            </h2>
            <p className=" font-[poppins] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">
              Ship Repair ensures vessels remain operational and safe through
              routine maintenance, hull restoration, and propulsion system
              overhauls.
            </p>
          </div>
        </div>
        <div
          className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl"
          id="cardbg"
        >
          <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg1">
            <div className=" flex justify-center">
              <BadgeIndianRupee className=" group-hover:stroke-white stroke-[#ff6600] h-10 w-[60px]" />
            </div>
            <h2 className=" font-[poppins] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">
              Marine Engineering
            </h2>
            <p className=" font-[poppins] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">
              Marine Engineering specializes in propulsion system design, fuel
              efficiency optimization, and integrating automated control and
              navigation systems.
            </p>
          </div>
        </div>
        <div
          className="mb-10 z-10 group rounded-2xl bg-white shadow-2xl"
          id="cardbg"
        >
          <div className="rounded-2xl text-center px-6 py-10  z-0" id="bg1">
            <div className=" flex justify-center">
              <TabletSmartphone className=" group-hover:stroke-white stroke-[#ff6600] h-10 w-[60px]" />
            </div>
            <h2 className=" font-[poppins] font-bold text-[22px] pt-9 pb-5 group-hover:text-white text-center">
              Financial Services
            </h2>
            <p className=" font-[poppins] text-[16px] text-[#6e6d6d] font-medium p-0 group-hover:text-white text-center">
              Financial Services provide ship leasing, financing, and marine
              insurance to ensure smooth maritime operations.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyCard;
