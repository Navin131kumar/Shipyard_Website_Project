import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyExports = () => {
  const { exportData } = useContext(AppContext);
  console.log(exportData);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <p>The Exports </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {exportData.map((e) => {
          return (
            <>
              <div className="flex flex-col  border border-black p-3 rounded-lg gap-3">
                <div>
                  <img src={e.images} alt="" className="w-[350px]" />
                </div>
                <div>
                  <div className="grid grid-cols-2">
                    <p>Name:</p>
                    <p>{e.stockId.name}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Status</p>
                    <p>{e.status}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Destination</p>
                    <p>{e.destination.country}</p>
                  </div>
                  <div className="grid grid-cols-2">
                    <p>Transport Mode</p>
                    <p>{e.transportMode}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MyExports;
