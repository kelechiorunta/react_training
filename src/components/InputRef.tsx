import React, { useRef } from "react";

export default function InputRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  // Here is an illustration on how to use useRef to reference a DOM element
  return (
    <div>
      <input ref={inputRef} placeholder="Click on the button" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
