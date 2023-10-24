import React from "react";
import TopMenu from "./TopMenu";
import MenuLinks from "./MenuLinks";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import GenrePicker from "./GenrePicker";
import AlbumList from "./AlbumList";
import Search from "./Search";

function App() {
  return <div className="app-container">
    <Logo />
    <SideMenu />
    <GenrePicker /> 
    <TopMenu />       
    <MenuLinks />
    <MainContent />
    <AlbumList />
    <Search />
        
  </div>;
}

export default App;
