import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Materi from "./pages/Materi";
import DetailMateri from "./pages/DetailMateri";
import Aktivitas from "./pages/Aktivitas";
import Evaluasi from "./pages/Evaluasi";
import Referensi from "./pages/Referensi";
import Tentang from "./pages/Tentang";

function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/materi" element={<Materi />} />
                <Route path="/materi/:id" element={<DetailMateri />} />
                <Route path="/aktivitas" element={<Aktivitas />} />
                <Route path="/evaluasi" element={<Evaluasi />} />
                <Route path="/referensi" element={<Referensi />} />
                <Route path="/tentang" element={<Tentang />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
