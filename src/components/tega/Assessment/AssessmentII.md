🧪 Assessment: Mastering the useRef Hook
🎯 Objective

Evaluate your ability to use the useRef hook for:

DOM manipulation
Persisting values across renders
Managing timers and mutable values without re-renders

🧩 Section A: Conceptual Questions (Short Answer)
What is the purpose of the useRef hook in React?
persist data that is not rendered

What does the .current property represent?
it's an object property that contains the current value of useref

How is useRef different from useState?
useref values do not cause a re render unlike useState

Does updating a useRef value trigger a re-render? Why or why not?
no it does not. because it does not trigger re-render like useState. React can't track the current property.

When should you use useRef instead of useState?
referencing dom elements
storing timer ids from javascript setTimeut object and setInterval object

🧠 Section B: Code Understanding
Question 6

What will happen when the button is clicked?

it will increase the value of the countRef.current by 1
const countRef = useRef(0);

const handleClick = () => {
countRef.current += 1;
console.log(countRef.current);
};
Will the UI update?
no
Why?
it does not trigger a re-render like useState
because react cannot track the current property of the ref object to render a ui update
Question 7

Explain what this code does:

const inputRef = useRef<HTMLInputElement | null>(null);

useEffect(() => {
inputRef.current?.focus();
}, []);

we're referencing a dom element to activate it's focus state by calling the focus method
