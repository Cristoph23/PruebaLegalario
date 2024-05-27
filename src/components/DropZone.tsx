import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { PiCloudArrowUpBold } from "react-icons/pi";
import { Notification } from "./Notificaction";
import Button from "./Button";

export default function DropZone() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const router = useRouter();

  const handleRegresar = () => {
    router.push("/");
  };

  const handleContinue = () => {
    router.push("/screenPhoto");
    Notification("Se guardo correctamente el documento.", "success");
  };

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    acceptedFiles,
    fileRejections,
  } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    multiple: false,
  });

  return (
    <div>
      <label
        {...getRootProps()}
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-full border-2 border-blue-500 border-dashed rounded-lg cursor-pointer bg-blue-50/80 hover:bg-blue-50 mt-8"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <div className="text-4xl text-blue-600">
            <PiCloudArrowUpBold />
          </div>
          {isDragActive ? (
            <div>
              <div className="mb-2 font-bold">Suelta tus archivos aquí.</div>
              <div className="text-xs text-center font-bold text-blue-400">
                PNG, JPEG (MAX 1024Kb)
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-2 font-bold">
                Selecciona el archivo o arrastra y suelta.
              </div>
              <div className="text-xs text-center font-bold text-blue-400">
                PNG, JPEG (MAX 1024Kb)
              </div>
            </div>
          )}
        </div>
        <input {...getInputProps()} type="file" className="hidden" />
      </label>
      {isDragReject && <div className="text-red-500">Archivo no soportado</div>}
      {preview && (
        <div className="flex justify-center mt-8">
          <img
            src={preview}
            alt="Preview"
            className="max-w-full max-h-[300px]"
          />
        </div>
      )}

      <Button
        onClick={handleContinue}
        disabled={preview ? false : true}
      >
        Guardar Foto
      </Button>
      <Button
        onClick={handleRegresar}
        type="error"
      >
        Regresar
      </Button>
    </div>
  );
}
