import React from "react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const email = useSelector(state => state.datosStateGlobal.email)
  return (
    <nav className="bg-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg font-semibold">
          <a href="#">Mi Empresa</a>
        </div>
        <div className="space-x-4">
          {email}
        </div>
      </div>
    </nav>
  );
}
