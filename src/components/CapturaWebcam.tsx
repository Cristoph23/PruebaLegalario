import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Notification } from "./Notificaction";
import Button from "./Button";

function CapturaWebcam() {
  const redCam = useRef(null);
  const [captura, setCaptura] = useState(null);
  const router = useRouter();

  const screenPhoto = () => {
    const imagenSrc = redCam.current?.getScreenshot();
    if (imagenSrc) {
      setCaptura(imagenSrc);
    }
  };

  const savePhoto = () => {
    if (captura) {
      const enlace = document.createElement("a");
      enlace.href = captura;
      enlace.download = "fotoCam.png";
      enlace.click();
    }
    router.push("/signatureDocument");
    Notification("Se guardo correctamente la foto.", "success");
  };

  const handleRegresar = () => {
    router.push("/uploadDocument");
  };

  return (
    <div className="mt-8">
      <Webcam
        audio={false}
        ref={redCam}
        screenshotFormat="image/png"
        className="w-full"
      />
      <Button onClick={screenPhoto}>Capturar Foto</Button>
      {captura && (
        <div className="mt-4">
          <div className="flex justify-center">
            <img src={captura} alt="Captura de Webcam" className="w-1/2" />
          </div>
          <div className="flex justify-center">
            <Button onClick={handleRegresar} type="error">
              Regresar
            </Button>
            <Button onClick={savePhoto}>Guardar Foto</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CapturaWebcam;
