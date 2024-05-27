"use client";
import CapturaWebcam from "@/components/CapturaWebcam";
import DropZone from "@/components/DropZone";

export default function ScreenPhoto() {
  return (
    <div className="h-full md:w-1/3 w-2/3">
      <h1 className="text-2xl font-bold text-center">Ajusta tu cara dentro del cuadro.</h1>
      <CapturaWebcam/>
    </div>
  )
}
