"use client";
import DropZone from "@/components/DropZone";

export default function UploadDocument() {
  return (
    <div className="h-full md:w-1/3 w-2/3">
      <h1 className="text-2xl font-bold text-center">Cargar Documento de Identificación.</h1>

      <DropZone/>
    </div>
  )
}
