import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import PlayerBar from '../components/Player/PlayerBar.jsx'
import Sidebar from '../components/sidebar/Sidebar.jsx'
import Topbar from '../components/topbar/Topbar.jsx'
import CollectionPage from '../pages/CollectionPage/CollectionPage.jsx'
import HomePage from '../pages/HomePage/HomePage.jsx'
import LibraryPage from '../pages/LibraryPage/LibraryPage.jsx'
import SearchPage from '../pages/SearchPage/SearchPage.jsx'

const AppShell = () => {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="app-shell__main">
        <Topbar />
        <div className="app-shell__content">
          <Outlet />
        </div>
      </main>

      <PlayerBar />
    </div>
  )
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppShell />}>
          <Route path="/"                        element={<HomePage />} />
          <Route path="/search"                  element={<SearchPage />} />
          <Route path="/library"                 element={<LibraryPage />} />
          <Route path="/collection/:type/:id"    element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
