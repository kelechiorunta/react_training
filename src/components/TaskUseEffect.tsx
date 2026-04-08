// 🧪 Assessment Task: Mouse Tracker with Cleanup
// 🎯 Objective

// Build a React component that tracks the user’s mouse position and
// displays it on the screen.

// 📋 Requirements
// Track the mouse X and Y position
// Update the UI in real time as the mouse moves
// Use useEffect to:
// Add a mousemove event listener when the component mounts
// Remove the event listener when the component unmounts (cleanup function)
// Prevent memory leaks
// Ensure the event listener is not recreated unnecessarily

// Please fix the bug in this code using the following requirements
// ✅ Expected Outcome (What you should implement)
// A properly defined handler function
// Correct addEventListener / removeEventListener pairing
// No unnecessary re-renders
// Clean unmount behavior

// Questions to Answer
// Why does the cleanup function not work correctly?
// What problem can this cause in a real app?
// How do you fix it?
// Why should the handler function be defined outside addEventListener?

// Bonus Challenges
// Add a toggle button to start/stop tracking the position

import { useEffect, useState } from "react";

export default function TaskUseEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsToggled(e.target.checked);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isToggled) {
        setPosition((prev) => ({ ...prev, x: e.clientX, y: e.clientY }));
      }
    };
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isToggled]);

  return (
    <div>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
      <label htmlFor="toggle">
        <input
          type="checkbox"
          name="toggle"
          id=""
          checked={isToggled}
          onChange={handleToggle}
        />
        Toggle
      </label>
    </div>
  );
}

// 🧠 What this tests
// useEffect lifecycle understanding
// Cleanup functions
// Function reference equality
// Event listener management
// Real-world React patterns
