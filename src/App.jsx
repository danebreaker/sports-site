import SportsRouter from './structure/SportsRouter';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return <>
    <SportsRouter />
    <SpeedInsights />
    <Analytics />
  </>
}

export default App