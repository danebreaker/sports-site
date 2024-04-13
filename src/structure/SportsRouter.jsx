import { BrowserRouter, Route, Routes } from "react-router-dom";

import FavoriteTeams from "./pages/FavoriteTeams";
import AllLeagues from "./pages/AllLeagues";
import PremierLeague from "./pages/PremierLeague";
import HomePage from "./pages/HomePage";

export default function SportsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route index element={<FavoriteTeams />} />
                <Route path="/AllLeagues" element={<AllLeagues />} />
                <Route path="/PremierLeague" element={<PremierLeague />} />
            </Route>
        </Routes>
    </BrowserRouter>
}