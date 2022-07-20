import Loader from "components/Loader";
import { useState, useEffect,lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import { getBreeds } from "services/catsApi";

import Layout from "components/Layout";
const BreedsPage = lazy(() => import("pages/BreedsPage"));
const GalleryPage = lazy(() => import("pages/GalleryPage"));
const HomePage = lazy(() => import("pages/HomePage"));
const RatingPage = lazy(() => import("pages/RatingPage"));
const SearchPage = lazy(() => import("pages/SearchPage"));
const VotingPage = lazy(() => import("pages/VotingPage"));
const BreedInfoPage = lazy(() => import("pages/BreedInfoPage"));


export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then(setBreeds).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        })
  }, []);

  return (<>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Layout setSearchQuery={setSearchQuery} />}>
        <Route index element={<HomePage />} />
        <Route path="voting" element={<VotingPage />} />
        <Route path="breeds" element={<BreedsPage breeds={breeds} />}>
          <Route path=":breedId" element={<BreedInfoPage/>} />
          </Route>
        <Route path="gallery" element={<GalleryPage breeds={breeds} />} />
        <Route path="likes" element={<RatingPage />}  />
        <Route path="dislikes" element={<RatingPage />} />
        <Route path="favourites" element={<RatingPage />} />
        <Route path="search" element={<SearchPage searchQuery={searchQuery} breeds={breeds} />} />
      </Route>
      </Routes>
      </Suspense>
    <ToastContainer/>
    </>
  );
};



