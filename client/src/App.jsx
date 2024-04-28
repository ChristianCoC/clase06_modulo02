import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/register" element={<h1>Register</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/profile" element={<h1>Profile</h1>} />
        <Route path="/movies" element={<h1>Movies</h1>} />
        <Route path="/movies/:id" element={<h1>Search Movie by ID</h1>} />
        <Route path="/add-movie" element={<h1>Add Movie</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;