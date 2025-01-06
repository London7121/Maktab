import React from "react";
import { Table, Skeleton } from "antd"; // Importing Skeleton for loading state
import { tableColumns, tableData, qabulInfo } from "../fakeDatas/qabul";

const Qabul = () => {
  // Simulating loading state for the page
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds (simulating data fetching)
    }, 2000);
  }, []);

  if (loading) {
    return (
      <div className="text-center p-6 my-3 w-[85%] mx-auto">
        {/* Skeleton for main title */}
        <Skeleton.Input
          active
          paragraph={{ rows: 1 }}
          className="mb-6"
          width="60%"
        />

        {/* Skeleton for subtitle and description */}
        <Skeleton active paragraph={{ rows: 2 }} className="mb-6" width="80%" />

        {/* Skeleton for the document and directions sections */}
        <div className="grid grid-cols-2 gap-4 border-t border-green-300 mt-4">
          <div>
            <Skeleton active paragraph={{ rows: 3 }} width="100%" />
          </div>

          <div>
            <Skeleton active paragraph={{ rows: 3 }} width="100%" />
          </div>
        </div>

        {/* Skeleton for the specialties and table */}
        <div className="grid grid-cols-2 gap-4 border-t border-green-300 mt-4">
          <div>
            <Skeleton active paragraph={{ rows: 3 }} width="100%" />
          </div>

          <div>
            <Skeleton active paragraph={{ rows: 6 }} width="100%" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-4 font-afacad">
      <h1 className="text-3xl md:text-[50px] font-bold my-10 text-[#6e54d8] animate-plus">
        {qabulInfo.title}
      </h1>
      <h2 className="text-2xl font-semibold text-[#274a7b]">
        {qabulInfo.subtitle}
      </h2>
      <p className="my-4 text-xl">{qabulInfo.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 border-t-2  mt-4">
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-4 text-[#274a7b]">
            Topshiriladigan hujjatlar
          </h3>
          <ul className="mx-auto list- max-w-lg text-start text-md md:text-xl">
            {qabulInfo.documents.map((doc, index) => (
              <li key={index}>
                <span className="text-[25px] text-red-600 md:text-[35px]">{index + 1}. </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-4 text-[#274a7b]">
            2025-2026 o'quv yilida quyidagi yo'nalishlar bo'yicha o'quvchilar
            saralab olinadi
          </h3>
          <ul className="list-disc mx-auto max-w-lg text-start text-md md:text-xl">
            {qabulInfo.directions.map((direction, index) => (
              <li key={index}>{direction}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t-2 mt-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold my-4 text-[#274a7b]">
            Sanoat dizayneri
          </h3>
          <ul className="list-disc list-inside mx-auto max-w-lg text-[18px] text-start">
            {qabulInfo.specialties.map((specialty, index) => (
              <li key={index}>{specialty}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold my-4 text-[#274a7b]">
            Qabul kunlari
          </h3>
          <div className="overflow-x-auto">
            <Table
              columns={tableColumns}
              dataSource={tableData}
              pagination={false}
              bordered
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qabul;
