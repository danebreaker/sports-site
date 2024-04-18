import { BrowserRouter, Route, Routes } from "react-router-dom";

import FavoriteTeams from "./pages/FavoriteTeams";
import AllLeagues from "./pages/AllLeagues";
import PremierLeague from "./pages/PremierLeague";
import NBA from "./pages/NBA";
import NFL from "./pages/NFL";
import MLB from "./pages/MLB";
import MLS from "./pages/MLS";
import ChampionsLeague from "./pages/ChampionsLeague";
import HomePage from "./pages/HomePage";
import USLLeagueOne from "./pages/USLLeagueOne";
import EnglishChampionship from "./pages/EnglishChampionship";
import EnglishLeagueOne from "./pages/EnglishLeagueOne";
import EnglishLeagueTwo from "./pages/EnglishLeagueTwo";
import SoccerLandingPage from "./pages/SoccerLandingPage";

export default function SportsRouter() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />}>
                <Route index element={<FavoriteTeams />} />
                <Route path="/AllLeagues" element={<AllLeagues />} />
                <Route path="/PremierLeague" element={<PremierLeague />} />
                <Route path="/NBA" element={<NBA />} />
                <Route path="/NFL" element={<NFL />} />
                <Route path="/MLB" element={<MLB />} />
                <Route path="/MLS" element={<MLS />} />
                <Route path="/ChampionsLeague" element={<ChampionsLeague />} />
                <Route path="/USLLeagueOne" element={<USLLeagueOne />} />
                <Route path="/EnglishChampionship" element={<EnglishChampionship />} />
                <Route path="/EnglishLeagueOne" element={<EnglishLeagueOne />} />
                <Route path="/EnglishLeagueTwo" element={<EnglishLeagueTwo />} />
                <Route path="/SoccerLandingPage" element={<SoccerLandingPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
}