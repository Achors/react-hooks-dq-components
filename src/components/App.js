import React from "react";
import TopMenu from "./TopMenu";
import MenuLinks from "./MenuLinks";
import MainContent from "./MainContent";
import SideMenu from "./SideMenu";
import Logo from "./Logo";
import GenrePicker from "./GenrePicker";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";
import Search from "./Search";

function App() {
  return <div className="app-container">
    <TopMenu />
    <SideMenu />
    <MenuLinks />
    <MainContent />
    <Search />
    <AlbumCard />
    <AlbumList />
    <GenrePicker />
    <Logo />
  </div>;
}

export default App;
