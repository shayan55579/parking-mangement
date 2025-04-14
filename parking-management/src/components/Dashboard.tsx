// src/components/Dashboard.tsx
import React, { useState, useEffect } from "react";
import { Car } from "../types/car";
import { getPersianDate } from "../utils/date";
import PlateForm from "./PlateForm";
import CarsTable from "./CarsTable";

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Car[]>([]);

  // Load cars from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("parkedCars");
    if (stored) setCars(JSON.parse(stored));
  }, []);

  // Update localStorage when cars array changes
  useEffect(() => {
    localStorage.setItem("parkedCars", JSON.stringify(cars));
  }, [cars]);

  const addCar = (plate: string) => {
    const newCar: Car = {
      plate,
      datetime: getPersianDate(),
    };
    setCars([newCar, ...cars]);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">سامانه مدیریت پارکینگ</h1>
      <PlateForm onAddCar={addCar} />
      <CarsTable cars={cars} />
    </div>
  );
};

export default Dashboard;
