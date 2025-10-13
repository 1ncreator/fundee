import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer/footer.jsx'


ReactDOM.createRoot(document.getElementById("main")).render(<App />)
ReactDOM.createRoot(document.getElementById("footer")).render(<Footer />)