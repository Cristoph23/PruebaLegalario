"use client";
import Signature from '@/components/Signature'

export default function SignatureDocument() {
  return (
    <div className="h-full md:w-1/3 w-2/3">
      <h1 className="text-2xl font-bold text-center">Ingresa Tu firma.</h1>
      <Signature/>
    </div>
  )
}
