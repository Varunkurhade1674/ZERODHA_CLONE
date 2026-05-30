import React, { useState, useCallback } from "react";
import "./Toast.css";

/* ─────────────────────────────────────────────
   ToastContainer — renders all active toasts
───────────────────────────────────────────── */
export const ToastContainer = ({ toasts, onRemove }) => (
  <div className="toast-wrapper">
    {toasts.map((t) => (
      <ToastItem key={t.id} toast={t} onRemove={onRemove} />
    ))}
  </div>
);

/* ─────────────────────────────────────────────
   ToastItem — individual toast card
───────────────────────────────────────────── */
const ICONS = {
  success: "✅",
  error:   "❌",
  warning: "⚠️",
  info:    "ℹ️",
};

const TITLES = {
  success: "Success",
  error:   "Error",
  warning: "Warning",
  info:    "Info",
};

const ToastItem = ({ toast, onRemove }) => {
  const [exiting, setExiting] = useState(false);

  const dismiss = useCallback(() => {
    setExiting(true);
    setTimeout(() => onRemove(toast.id), 280);
  }, [toast.id, onRemove]);

  /* auto-dismiss after 3 s */
  React.useEffect(() => {
    const timer = setTimeout(dismiss, 3000);
    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <div className={`toast toast-${toast.type} ${exiting ? "toast-exit" : ""}`}>
      <div className="toast-icon">{ICONS[toast.type]}</div>

      <div className="toast-content">
        <div className="toast-title">{toast.title || TITLES[toast.type]}</div>
        {toast.message && (
          <div className="toast-message">{toast.message}</div>
        )}
      </div>

      <button className="toast-close" onClick={dismiss}>✕</button>

      <div className="toast-progress" />
    </div>
  );
};

/* ─────────────────────────────────────────────
   useToast hook — returns { toasts, addToast, removeToast }
───────────────────────────────────────────── */
export const useToast = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback(({ type = "success", title, message }) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, type, title, message }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return { toasts, addToast, removeToast };
};
