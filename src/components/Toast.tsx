// Toast.tsx
import React, { useState, useEffect } from "react";

interface ToastProps {
  message: string;
  type: "info" | "success";
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Auto-hide after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return isVisible ? (
    <div
      className={`toast toast-middle toast-end  ${
        type === "info" ? "alert-info" : "alert-success"
      }`}
    >
      <div className="alert bg-emerald-400">
        <span>{message}</span>
      </div>
    </div>
  ) : null;
};

export default Toast;
