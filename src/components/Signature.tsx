import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Notification } from "./Notificaction";
import Button from "./Button";

function Signature() {
  const sigCanvas = useRef({});

  const clear = () => {
    sigCanvas.current.clear();
  };

  const save = () => {
    const firma = sigCanvas.current.getTrimmedCanvas().toDataURL("image/png");
    const enlace = document.createElement("a");
    enlace.href = firma;
    enlace.download = "fotoFirma.png";
    enlace.click();
    Notification("Se guardo correctamente la firma.", "success");
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <SignatureCanvas
        ref={sigCanvas}
        canvasProps={{
          className:
            "signatureCanvas border-2 border-black border-dashed rounded-md w-full h-full",
        }}
        backgroundColor="rgba(255, 255, 255, 0)"
        penColor="black"
      />
      <div className="flex justify-center mt-4">
        <Button onClick={clear} type="error">
          Limpiar
        </Button>
        <Button onClick={save}>Guardar</Button>
      </div>
    </div>
  );
}

export default Signature;
