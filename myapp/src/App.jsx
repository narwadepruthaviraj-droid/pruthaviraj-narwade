// class1 

import { UNSAFE_RSCDefaultRootErrorBoundary } from "react-router-dom";

// function TT() {
//   return <h1>Hello World</h1>;
// }
//  function Button(){
//   return <button>clickme</button>
//  }

// function Hello() {
//   return <h2>Hello Component</h2>;
// }

// function App() {
//   return (
//     <>
//      <Button/>________________
//       <TT/>
//       <Hello />
//       <Hello />
//       <Hello />
//     </>
//   );
// }

// export default App;


// class 2
// ex of props pass karna
// function Parent() {
//   return ( < Child name="Pruthaviraj ram narwade" age={20} />);

// }
// function Child(props) {
//   return (<h1> 
//     my name is {props.name}and my age is {props.age}
//   </h1>);
// }

// function App() {
//   return ( <Parent />);
// }
// export default App;
 
//ex  of props destructuring
// function Parent() {
//   return ( < Child name="Pruthaviraj ram narwade" age={20} />);

// }
// function Child({name,age}) {
//   return (<h1> 
//     my name is {name}and my age is {age}
//   </h1>);
// }

// function App() {
//   return ( <Parent />);
// }
// export default App;



//class 3
//ex statte and use satate 
// import { useState } from "react";

// function BatteryWarning() {
//   const [battery, setBattery] = useState(100);

//   return (
//     <div>
//       <h2>Battery: {battery}%</h2>

//       <button onClick={() => setBattery(battery - 10)}>
//         Use Phone
//       </button>

//       {battery <= 20 && (
//         <p style={{ color: "red" }}>
//           ⚠️ Battery Low! Please charge your phone
//         </p>
//       )}
//     </div>
//   );
// }
// export default BatteryWarning;

//Ex 2
// import { useState } from "react";
// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>
//     </div>
//   );
// }
// export default Counter;


//class 4 Event and foms
//event ex onClick / on change
// function App() {

//   function handleClick() {     // handleclick is a event handler 
//     alert("Hello React!");     // onclick is a event
//   }

//   return (
//     <button onClick={handleClick}>
//       Click Me
//     </button>
//   );
// }

// export default App;
//event example onChange
// function App() {
//   function handleChange(e) {
//     console.log(e.target.value);
//   }

//   return (
//     <input type="text" onChange={handleChange} />
//   );
// }
// export default App;

//event handling
//event example onSubmit
// function App() {
//   function handleSubmit(e) {
//     e.preventDefault(); // page reload rokne ke liye
//     alert("Form submit ho gaya");
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default App;

//event example omMouseEnter
//  function App() {
//   function handleEnter() {
//     console.log("Mouse andar aaya");
//   }

//   return (
//     <div
//       onMouseEnter={handleEnter}
//       style={{ width: "200px", height: "100px", border: "1px solid black" }}
//     >
//       Mouse yaha lao
//     </div>
//   );
// }
// export default App;

//event example ONMouseleave
// function App() {
//   function handleLeave() {
//     console.log("Mouse bahar gaya");
//   }

//   return (
//     <div
//       onMouseLeave={handleLeave}
//       style={{ width: "2000px", height: "1000px", border: "1px solid black" }}
//     >
//       Mouse yaha se hatao
//     </div>
//   );
// }
// export default App();  // ye chal nahi raha hai pata nahi kyu 

//input controll wxample 3
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   function handleChange(e) {
//     setName(e.target.value);
//   }

//   return (
//     <>
//       <input value={name} onChange={handleChange} />
//       <p>{name}</p>
//     </>
//   );
// }

// export default App;

//form handling
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();
//     alert(name);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
// export default App;


// basic validation 
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");
//   const [error, setError] = useState("");

//   function handleSubmit(e) {
//     e.preventDefault();

//     if (name === "") {
//       setError("Name required hai");
//     } else {
//       setError("");
//       alert(name);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button type="submit">Submit</button>

//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </form>
//   );
// }

// export default App;

// 5 class 
//condition rendering
//ex of if/else
// function App() {
//   const isLoggedIn = false ;

//   if (isLoggedIn) {
//     return <h1>Welcome User</h1>;
//   } else {
//     return <h1>Please Login</h1>;
//   }
// }
// export default App;

// ex terminal operator 
// function App() {
//   const isLoggedIn = false;

//   return (
//     <h1>
//       {isLoggedIn ? "Welcome User" : "Please Login"}
//     </h1>
//   );
// }
// export default App;

//ex of && operator  
// function App() {
//   const isAdmin = true;

//   return (
//     <div>
//       {isAdmin && <h2>Admin Panel</h2>}
//     </div>
//   );
// }
// export default App;

// ex of Dynamic UI status text
// function App() {
//   const isOnline = true;

//   return (
//     <h1>
//       Status: {isOnline ? "Online 🟢" : "Offline 🔴"}
//     </h1>
//   );
// }
// export default App;

//ex 2 color change
// function App() {
//   const hasError = true;

//   return (
//     <p style={{ color: hasError ? "red" : "green" }}>
//       {hasError ? "Error Occurred" : "Success"}
//     </p>
//   );
// }
// export default App;

//ex of dynamic ui   ex 3 
// import { useState } from "react";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   return (
//     <div>
//       <h1>{isLoggedIn ? "Welcome" : "Login"}</h1>

//       <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
//         Toggle
//       </button>
//     </div>
//   );
// }
// export default App;


// List & keys
//ex 1
// function App() {
//   const fruits = ["Apple", "Banana", "Mango"];

//   return (
//     <ul>
//       {fruits.map((fruit, index) => {
//         return <li key={index}>{fruit}</li>;
//       })}
//     </ul>
//   );
// }
// export default App;


//  import React, { useState } from "react";

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 101, text: "Learn React" },
//     { id: 102, text: "Practice map()" },
//     { id: 103, text: "Understand key" },
//   ]);

//   const deleteTodo = (id) => {
//     const newTodos = todos.filter((todo) => todo.id !== id);
//     setTodos(newTodos);
//   };

//   return (
//     <div>
//       <h2>Todo List</h2>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}
//             <button onClick={() => deleteTodo(todo.id)}> ❌ </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
 
// class 7 useEffect and 
// import { useState, useEffect } from "react";

//   import React, { useEffect, useState } from "react";

// function FetchExample() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((result) => {
//         setData(result);
//       })
//       .catch((err) => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>Fetch Users</h1>
//       {data.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// export default FetchExample;
 

//class 8 ex 
// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function AxiosExample() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         setData(response.data);
//       })
//       .catch((err) => {
//         setError(err.message);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <h2>Loading...</h2>;
//   if (error) return <h2>Error: {error}</h2>;

//   return (
//     <div>
//       <h1>Axios Users</h1>
//       {data.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

//export default AxiosExample;

// function App (){
//   return (
//     <h2>my name is pruthaviraj ram </h2>
//   )
// }
// export default App; 

//class 9 component design 
//ex
//  import React from "react";

// function Button(props) {
//   return (
//     <button>
//       {props.text}
//     </button>
//   );
// }

// function App() {
//   return (
//     <div>
//       <h2>Reusable Button Example</h2>

//       <Button text="Click Me" />
//       <Button text="Submit" />
//       <Button text="Delete" />

//     </div>
//   );
// }

// export default App;


         
//context API
// import React, { createContext, useContext } from "react";

// const UserContext = createContext();

// function App() {
//   return (
// <UserContext.Provider value="Rahul" >
//       <GrandChild />
//     </UserContext.Provider>
//   );
// }

// function GrandChild() {
//   const user = useContext(UserContext);
//   return <h1>{user}</h1>;
// }

// export default App;

// import React, { createContext, useContext } from "react";

// const UserContext = createContext();

// function App() {
//   return (
//     <UserContext.Provider value="Rahul">
//       <Navbar />
//       <Profile />
//       <Footer />
//     </UserContext.Provider>
//   );
// }

// function Navbar() {
//   const user = useContext(UserContext);
//   return <h1> {user}</h1>;
// }

// function Profile() {
//   const user = useContext(UserContext);
//   return <h2>{user}</h2>;
// }

// function Footer() {
//   const user = useContext(UserContext);
//   return <h3> {user}</h3>;
// }

// export default App;

//3.lifting state 

// ex of different state 
//button button alag alag state 
// import React, { useState } from "react";

// function App() {
//   return (
//     <div>
//       <h2>Button + Button (Alag State)</h2>
//       <Child1 />
//       <Child2 />
//     </div>
//   );
// }

// function Child1() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Button1: {count}
//     </button>
//   );
// }

// function Child2() {
//   const [count, setCount] = useState(0);

//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Button2: {count}
//     </button>
//   );
// }

// export default App;

// leadli
// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Button + Button (Same State)</h2>
//       <Child1 count={count} setCount={setCount} />
//       <Child2 count={count} setCount={setCount} />
//     </div>
//   );
// }

// function Child1({ count, setCount }) {
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Button1: {count}
//     </button>
//   );
// }

// function Child2({ count, setCount }) {
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Button2: {count}
//     </button>
//   );
// }

// export default App;

//ex of lifting state button and display
//  import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <h2>Button + Display (Same State)</h2>
//       <Child1 count={count} setCount={setCount} />
//       <Child2 count={count} />
//     </div>
//   );
// }

// function Child1({ count, setCount }) {
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Button: {count}
//     </button>
//   );
// }

// function Child2({ count }) {
//   return <h1>Display: {count}</h1>;
// }

// export default App;
// import { useState } from "react";
// import Home from "./Pages/Home";
// import About from "./Pages/About";

// function App() {
//   const [page, setPage] = useState("home");

//   return (
//     <div>
//       {page === "home" && <Home setPage={setPage} />}
//       {page === "about" && <About setPage={setPage} />}
//     </div>
//   );
// }

// export default App;




// this for the router 
// import { Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home.jsx";
// import About from "./Pages/About.jsx";
// import Navbar from "./Components/Navbar.jsx";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </>
//   );
// }

// export default App;



// this is a practice 
//componnent practice 
// function Hello() {
//   return (
//     <h1>Print hello world </h1>
//   )
// }
//  function Print(){
//   return( 
//     <>
//     <Hello/>
//     <Hello/>
//     <h2> this is a print function </h2>
//     </>
  
//   )
//  }
//  export default Print;


 // props 
//  function Parent(){
//  const name= "pruthaviraj ram narwade" ;
// const age = 20;
// const city="Latur";

// return( 
//   <h1> name={name} age ={age} city={city} this is a data </h1> 
// );

//  }
//  export default Parent

function Parent(){
 const user =  {name:"pruthaviraj ram narwade" ,
 age : 20 ,
 city:"Latur"
} 

return  <Child

   name={user.name} age ={user.age} city={user.city} this is a data    />

}
function Child (props){
return <h1> {props.name} {props.age} {props.city}</h1>
}
 export default Parent;


 





//props disributio 
// function App(){
//   return  <  Parent    age ={20} name ="pruthaviraj ram narwade" state ="maharastra"
//   /> 
// }

// function Parent({age,name,state}) {
//   return <h1>
//     the age of player is {age} and the name of the player is {name} and he belongs to {state} state this is his full identity
//   </h1>
// }
// export default App;