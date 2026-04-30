🚀 React Hooks Practice Tasks
🧩 Task 1: State Structuring with useState
🎯 Goal

Learn how to structure and manage state properly.

📝 Task

Build a simple user profile form:

Fields: name, email, age
Store them in one state object
💡 Requirements
Use a single useState object
Update individual fields correctly
🧠 Hint

`const [user, setUser] = useState({`
`name: "",`
`email: "",`
`age: "",`
`})`;

🔄 Task 2: Side Effects with useEffect
🎯 Goal

Understand how to handle side effects.

📝 Task
When the user types in the form:
Log the updated user data
Simulate fetching data on mount
💡 Requirements
Run effect on mount
Run effect when user changes
🧠 Hint

`useEffect(() => {`
`console.log(user);`
`}, [user])`;

🔁 Task 3: Optimizing Functions with useCallback
🎯 Goal

Prevent unnecessary function re-creation.

📝 Task
Add a button: “Submit Profile”
Wrap the submit function with useCallback
💡 Requirements
Prevent function from being recreated unnecessarily
Pass function to a child component
🧠 Hint

`const handleSubmit = useCallback(() => {`
`console.log("Submitted", user);`
`}, [user]);`

⚡ Task 4: Memoizing Values with useMemo
🎯 Goal

Avoid expensive recalculations.

📝 Task
Display a computed value:
Example: user’s age category (Child, Adult)
Use useMemo to compute it
💡 Requirements
Only recompute when age changes
🧠 Hint

`const category = useMemo(() => {`
`return user.age > 18 ? "Adult" : "Child";`
`}, [user.age])`;

🔗 Task 5: Combine Everything
🎯 Goal

Use all hooks together in a mini app.

📝 Task

Build a User Dashboard:

Form input (state structuring)
Auto-save to localStorage (useEffect)
Optimized submit button (useCallback)
Derived stats (e.g., profile completeness) using useMemo

🔥 Bonus Challenge
Add a child component that receives:
user
handleSubmit
Prevent unnecessary re-renders using:
React.memo
useCallback
