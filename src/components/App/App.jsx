import Loader from "components/Loader";
import { useState, useEffect,lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import { nanoid } from 'nanoid';
import { ThemeProvider } from "styled-components";

import 'react-toastify/dist/ReactToastify.css';

import { getBreeds } from "services/catsApi";

import Layout from "components/Layout";
import BreedsPage from "pages/BreedsPage";
import GalleryPage from "pages/GalleryPage";
import HomePage from "pages/HomePage";
import RatingPage from "pages/RatingPage";
import SearchPage from "pages/SearchPage";
import VotingPage from "pages/VotingPage";
import BreedInfoPage from "pages/BreedInfoPage";

import { themeLight, themeDark } from "helper/theme";
import { StyledApp } from "./App.styled";

export const App = () => {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user_id'));
    const theme = JSON.parse(localStorage.getItem('theme'));

    if (userId === null) {
      const id = nanoid();
      localStorage.setItem('user_id', JSON.stringify(id));
      setUserId(id);
    } else {
      setUserId(userId);
    }
    if (theme === null) {
      localStorage.setItem('theme', JSON.stringify(isDarkTheme ? "dark" : "light"));
    } else {
      theme === "dark" ? setDarkTheme(true) : setDarkTheme(false);
    }
    getBreeds().then(setBreeds).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        })
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkTheme ? "dark" : "light"));
  },[isDarkTheme]);


  return (
    <ThemeProvider theme={isDarkTheme ? themeDark : themeLight}>
    <StyledApp>
    <Routes>
            <Route path="/" element={<Layout setSearchQuery={setSearchQuery} setDarkTheme={setDarkTheme} isDarkTheme={isDarkTheme} />}>
        <Route index element={<HomePage />} />
          <Route path="voting" element={<VotingPage userId={userId} />} />
        <Route path="breeds" element={<BreedsPage breeds={breeds} />}>
              <Route path=":breedId" element={<BreedInfoPage isDarkTheme={isDarkTheme} />} />
          </Route>
              <Route path="gallery" element={<GalleryPage breeds={breeds} userId={userId} isDarkTheme={isDarkTheme} />} />
        <Route path="likes" element={<RatingPage userId={userId}/>}  />
        <Route path="dislikes" element={<RatingPage userId={userId}/>} />
        <Route path="favourites" element={<RatingPage userId={userId}/>} />
        <Route path="search" element={<SearchPage searchQuery={searchQuery} breeds={breeds} />} />
      </Route>
      </Routes>
      <ToastContainer />
      </StyledApp>
      </ThemeProvider>
  );
};



