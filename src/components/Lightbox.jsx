import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { PlaceholderImage } from "./primitives.jsx";

export function Lightbox({ item, onClose }) {
  const frameRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const frame = frameRef.current;
      if (!frame) return;
      const focusable = frame.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable.length) {
        e.preventDefault();
        frame.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const focusIsOutside = !frame.contains(document.activeElement);
      if (e.shiftKey && (document.activeElement === first || focusIsOutside)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (document.activeElement === last || focusIsOutside)) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused instanceof HTMLElement && previouslyFocused.isConnected) previouslyFocused.focus();
    };
  }, [onClose]);

  return (
    <div className="modal-backdrop lightbox-backdrop" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="lightbox-frame" role="dialog" aria-modal="true" aria-label={item.label} tabIndex={-1} ref={frameRef}>
        <button ref={closeButtonRef} className="modal-close" onClick={onClose} aria-label="Close image"><X size={20} /></button>
        <PlaceholderImage label={item.label} tone={item.tone || "sand"} ratio="16 / 10" className="lightbox-media" />
      </div>
    </div>
  );
}

/* ----------------------------------------------------------------------------
   10. PAGE: EXPERIENCES (listing + detail)
---------------------------------------------------------------------------- */
