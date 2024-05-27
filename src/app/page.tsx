"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveEmail } from "../redux/reducers/sliceDatos";
import { useRouter } from "next/navigation";
import { Notification } from "@/components/Notificaction";
import Button from "@/components/Button";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const dispatch = useDispatch();
  function handleInputChange(e: any) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(saveEmail(inputValue));
    router.push("uploadDocument");
    Notification("Se guardo correctamente el correo.", "success");
  }
  return (
    <div className="h-full md:w-1/3 w-2/3">
      <h1 className="text-2xl font-bold text-center">Ingresa tu correo para comenzar.</h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <label htmlFor="">Correo Electrónico</label>
        <input
          onChange={handleInputChange}
          className="w-full h-10 p-2 border border-gray-300 rounded-md bg-white text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:shadow-outline"
        />
        <Button disabled={inputValue != "" ? false : true} typeButton="submit">
          Ingresar
        </Button>
      </form>
    </div>
  );
}
