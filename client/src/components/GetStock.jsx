import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ExportRequestForm from "./Export_Request";

const GetStock = () => {
  const { stockData, setStockData } = useContext(AppContext);
  console.log(stockData);
  return (
    <div className="px-6 sm:px-[10%] mx-auto ml-10 grid grid-cols-1 md:grid-cols-1 gap-10 ">
      <div>
        <p>All Stock</p>
        <p>Total No.of. Stocks : {stockData.length}</p>
      </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5"> 
      {stockData.map((e) => {
        return (
          <>
            <div className="flex flex-col gap-5 border border-black p-3 rounded-lg">
                <div>
                    <img src={e.images} alt=""  className="w-[350px]"/>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="grid grid-cols-2">
                        <p>Name:</p>
                        <p>{e.name}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Category:</p>
                        <p>{e.category}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Condition</p>
                        <p>{e.condition}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Quantity</p>
                        <p>{e.quantity?.amount} {e.quantity.unit}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Value:</p>
                        <p>{e.value.amount} {e.value.currency}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p>Storage:</p>
                        <p>{e.warehouseLocation}</p>
                    </div>
                    <ExportRequestForm stockId={e._id} ></ExportRequestForm>
                </div>
              
            </div>
          </>
        );
      })}

        </div>
    </div>
  );
};

export default GetStock;
