/**
 * App — Root Application Component
 * 
 * TODO: Wrap with PlayerProvider when player state management is implemented
 * TODO: Add React Router BrowserRouter when routing is added
 * TODO: Add error boundary
 * TODO: Add auth provider
 */

import Layout from './components/Layout/Layout';
import { PlayerProvider } from './context/PlayerContext';

function App() {
  return (
    <PlayerProvider>
      <Layout />
    </PlayerProvider>
  );
}

export default App;
