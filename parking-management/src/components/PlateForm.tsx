// src/components/PlateForm.tsx
import React, { useState } from "react";

interface PlateFormProps {
  onAddCar: (plate: string) => void;
}

const PlateForm: React.FC<PlateFormProps> = ({ onAddCar }) => {
  const [plate, setPlate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (plate.trim()) {
      onAddCar(plate);
      setPlate("");
    }
  };

  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        value={plate}
        onChange={(e) => setPlate(e.target.value)}
        placeholder="شماره پلاک"
        className="flex-1 p-2 border rounded"
      />
      <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
        ثبت
      </button>
    </div>
  );
};

export default PlateForm;
