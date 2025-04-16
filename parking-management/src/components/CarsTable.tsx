// src/components/CarsTable.tsx
import React from "react";
import { Car } from "../types/car";

interface CarsTableProps {
  cars: Car[];
}

const CarsTable: React.FC<CarsTableProps> = ({ cars }) => {
  return (
    <table className="w-full border text-right">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 border">شماره پلاک</th>
          <th className="p-2 border">تاریخ و زمان ورود</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => (
          <tr key={index} className="border">
            <td className="p-2 border">{car.plate}</td>
            <td className="p-2 border">{car.datetime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CarsTable;
