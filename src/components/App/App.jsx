import { Routes, Route } from "react-router-dom";

export const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    getBreeds().then(setBreeds).catch(err => {
            console.log(err.message);
            toast("🙀 Ooops, something went wrong! Try again.");
        })
  }, []);
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
