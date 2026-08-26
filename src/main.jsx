import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// StrictMode is intentionally omitted: its dev-only double-mount leaves
// framer-motion's useScroll bindings attached to the discarded first mount,
// freezing the hero's scroll-driven transforms.
createRoot(document.getElementById('root')).render(<App />)
