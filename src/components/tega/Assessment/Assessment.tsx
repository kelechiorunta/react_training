import React, { useState, useEffect, useCallback, useMemo } from 'react';


export  function ChildForm() {
  return (
    <div>ChildForm</div>
  )
}

function UserProfileForm() {
  // Task 1: Structuring state with a single useState object
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: ""
  });

  // Task 2: useEffect for side effects (log on change, simulation on mount)
  useEffect(() => {
    console.log("User data updated:", user);
    localStorage.setItem("user",JSON.stringify(user))
    // Simulate fetching data on mount
    console.log("Component mounted - simulating API fetch");
  }, [user]); // Runs when 'user' changes

  // Update individual fields correctly
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Task 3: Optimizing function with useCallback
  const handleSubmit = useCallback(() => {
    console.log("Submitted User Profile:", user);
    alert(`Submitted: ${user.name}`);
  }, [user]); // Only recreate if user data changes

  // Task 4: Memoizing expensive calculations with useMemo
  const ageCategory = useMemo(() => {
    console.log("Calculating age category...");
    if (!user.age) return "Unknown";
    return parseInt(user.age) >= 18 ? "Adult" : "Child";
  }, [user.age]); // Only recompute when age changes


  return (
    <div style={{ padding: '20px' }}>
    
      <h2>User Profile</h2>
      <input
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      /><br />
      <input
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
      /><br />
      <input
        name="age"
        type="number"
        value={user.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <p>Category: {ageCategory}</p>
      
      {/* Passing function to a button (can be passed to child) */}
      <button onClick={handleSubmit}>Submit Profile</button>
    </div>
  );
}

export default UserProfileForm;
