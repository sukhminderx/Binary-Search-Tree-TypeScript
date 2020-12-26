import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BinarySearchTree } from "./BinarySearchTree";


function App() {
  const tree = new BinarySearchTree();
  

  // start inserting
  tree.startInsert(tree._root, 10);
  tree.startInsert(tree._root, 6);
  tree.startInsert(tree._root, 56);
  tree.startInsert(tree._root, 3);

  console.log(tree)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Binary Search Tree ADTS in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
