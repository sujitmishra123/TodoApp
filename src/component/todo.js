import React, { useEffect, useState } from "react";
import loading from "../images/loading.png";
import "../App.css";

//to get the data from local storage

const getLocalItems=()=>{
  let list= localStorage.getItem('lists');
  console.log(list);
  if(list){
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());
  const [search, setSearch] = useState("");

console.log(search, 23)
  const addItem = () => {
    if (!inputData) {
    } else {
      setItems([...items, inputData]);
      setInputData("");
    }
  };

  // const searchItem = () => {
  //   console.log("sjkdfhdsjfh")
  //   console.log(filterItems, 35)
  // // if(filterItems){
  // // setItems(filterItems)

  // // }else{
  // //   setItems(items)
  // // }
  // }

  //delete the items
  const deleteItem=(id)=>{
    console.log(id);
    const updateditems =items.filter((elem,ind)=>{
        return ind !== id;

    })
    setItems(updateditems);
    
    

  }
  //remove all
  const removeAll=()=>{
    setItems([]);
}
//add data to localstorage
useEffect(()=>{
  localStorage.setItem('lists',JSON.stringify(items))
},[items]);

const filterItems = items.filter((elem)=> elem.toLowerCase().includes(search.toLowerCase()))


  return (
    <>
      <div className="main-div">
        <div className="child-div">
        <input
              type="text"
              placeholder="Search Items...."
              // value={inputData}
              onChange={(e) => setSearch(e.target.value)}
            />

    
          <figure>
            <img src={loading} alt="loading logo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍️Add Items...."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          
          <div className="showItems">
            {filterItems.map((elem, ind) => {
              return (
                <div className="eachItem"key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="fa fa-trash-alt add-btn"
                    title="Delete Item"onClick={()=>deleteItem(ind)}
                  ></i>
                  
                  
                </div>
              );
            })}
          </div>
          {/*clear all buttons*/}
          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All"onClick={removeAll}>
              <span> <b>CHECK LIST</b></span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
