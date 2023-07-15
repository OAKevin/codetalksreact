import React from 'react';

function MyButton(props) {
  return (
    <button>
      {props.title}
    </button>
  );
}

export default function MyApp(){
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton title="Add to cart" />
      <MyButton title="Find out more" />
    </div>
  );
}
//Props (short for properties) are used to pass data from a parent component to a child component. 
//State is used to manage component-specific data that can change over time.
// Unlike props, state is mutable and can be modified within the component itself. 
import React from “react”;
function Avatar() {
  const user = {
    name: “Christopher Robin”,
    imageUrl:
      “https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV6YMQLTJQKHu_ptClOW3VNFTP1KRLYSuTAmCe8JN1bKRL42b2AemxD_jp-b8s7cl3r_o&usqp=CAU”,
    imageSize: 90,
  };
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <img src={user.imageUrl} alt=“christopher-robin” width={user.imageSize} />
    </div>
  );
}
export default Avatar;

// Diagram Explained
//Because both buttons share the same state, they update at the same time. In the version prior, each button has their own instances of state so they update separately.
// Hooks
//Hooks offer the advantage of enabling functional components to handle states without relying on classes. This approach provides a simpler and more concise syntax, leading to improved code organization and reusability.
