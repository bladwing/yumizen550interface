import { Routes, Route } from "react-router-dom";
import Main from "../pages/MainPage";
import Reagent from "../pages/Reagents"
import QualityAssurance from "../pages/QualityAssurance"
import Settings from "../pages/Settings";
import Maintenance from "../pages/Maintenance"
import Logs from "../pages/Logs";
import Lastrun from "../pages/Lastrun"

const Navigation = () =>  {
    return (
        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reagent" element={<Reagent />} />
        <Route path="/qualityAssurance" element={<QualityAssurance />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/lastrun" element={<Lastrun />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    )
}

export default Navigation;