import { BrowserRouter, Route, Routes } from "react-router-dom";

import FavoriteTeams from "./FavoriteTeams";
import AllLeagues from "./AllLeagues";
import PremierLeague from "./PremierLeague";
import HomePage from "./HomePage";

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