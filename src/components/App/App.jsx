import { Routes, Route } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="voting" element={<VotingPage />} />
        <Route path="breeds" element={<BreedsPage />} />
        <Route path="gallery" element={<GalleryPage />} />
      </Route>
    </Routes>
  );
};
