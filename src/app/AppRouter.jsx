import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CollectionPage from '../pages/CollectionPage/CollectionPage.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import LibraryPage from '../pages/LibraryPage/LibraryPage.jsx'
import SearchPage from '../pages/SearchPage/SearchPage.jsx'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/collection/:type/:id" element={<CollectionPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
