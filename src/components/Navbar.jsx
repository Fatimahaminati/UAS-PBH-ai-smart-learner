import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar(){
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">
                <img src={logo} alt="AI Smart Learner logo" className="logo-icon" />
                <div className="logo-text">
                    <div className="logo-title">AI Smart Learner</div>
                    <div className="logo-subtitle">Belajar AI Secara Bijak</div>
                </div>
            </Link>

            <div className="navbar-actions">
                <ul className="navbar-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/materi">Materi</Link></li>
                    <li><Link to="/aktivitas">Aktivitas</Link></li>
                    <li><Link to="/evaluasi">Evaluasi</Link></li>
                    <li><Link to="/referensi">Referensi</Link></li>
                    <li><Link to="/tentang">Tentang</Link></li>
                </ul>
                <Link to="/materi" className="primary-btn">Mulai Belajar</Link>
            </div>
        </nav>
    )
}

export default Navbar;
