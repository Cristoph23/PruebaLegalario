import toast from "react-hot-toast";

interface ToastTypes {
  [key: string]: { background: string; color: string };
}

const types: ToastTypes = {
  success: { background: "rgba(113, 247, 128, 0.62)", color: "#8D8D8D" },
  error: { background: "rgba(255, 41, 70, 0.62)", color: "#8D8D8D" },
};

export const Notification = (title: string, type: keyof ToastTypes) => {
  if (type === "error") {
    return toast.error(title);
  }
  return toast.success(title,{
    duration:3000,
  });
};
