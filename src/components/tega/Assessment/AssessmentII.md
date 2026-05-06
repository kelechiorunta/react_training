🧪 Assessment: Mastering the useRef Hook
🎯 Objective

Evaluate your ability to use the useRef hook for:

DOM manipulation
Persisting values across renders
Managing timers and mutable values without re-renders

🧩 Section A: Conceptual Questions (Short Answer)
What is the purpose of the useRef hook in React?
What does the .current property represent?
How is useRef different from useState?
Does updating a useRef value trigger a re-render? Why or why not?
When should you use useRef instead of useState?

🧠 Section B: Code Understanding
Question 6

What will happen when the button is clicked?

const countRef = useRef(0);

const handleClick = () => {
  countRef.current += 1;
  console.log(countRef.current);
};
Will the UI update?
Why?

Question 7

Explain what this code does:

const inputRef = useRef<HTMLInputElement | null>(null);

useEffect(() => {
  inputRef.current?.focus();
}, []);


