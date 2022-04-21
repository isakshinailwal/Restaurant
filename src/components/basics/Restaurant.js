import React from "react";
import "./style.css";
import Menu from "./Menuapi";
import { useState } from "react";
import Menucard from "./Menucard";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Menu.map((i) => {
      return i.category;
    })
  ),"All"
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList,setMenuList] = useState(uniqueList)
  const filterItem = (category) => {
      if(category =="All")
      {
          setMenuData(Menu)
          return
      }
    const updatedMenu = Menu.filter((i) => {
      return i.category === category;
    });
    setMenuData(updatedMenu);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <Menucard menuData={menuData} />
    </>
  );
};

export default Restaurant;
