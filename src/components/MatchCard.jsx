import { Card } from "react-bootstrap";

export default function MatchCard(props) {
    const time = new Date(props.strTimestamp)

    return <Card style={{ backgroundColor: "#383838", color: "white", margin: 10, alignContent: 'center' }}>
        <h5>{props.strEvent}</h5>
        <h6>{props.strSport === "Soccer" ? props.strLeague : ""}</h6>
        <h6>{time.toDateString() != "Invalid Date" ? time.toDateString() : ""}</h6>
        {props.strStatus === "Match Finished" || props.strStatus === "FT" ? <></> : <h6>{time.toLocaleTimeString()}</h6>}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={props.strHomeTeamBadge + '/tiny'}></img>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>{props.intHomeScore ? props.intHomeScore : "0"}</h4>
            {/* <h4>{props.strHomeTeam}</h4> */}
            <h4 style={{ marginTop: 9, marginLeft: 10, marginRight: 10 }}>-</h4>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>{props.intAwayScore ? props.intAwayScore : "0"}</h4>
            {/* <h4>{props.strAwayTeam}</h4> */}
            <img src={props.strAwayTeamBadge + '/tiny'}></img>
        </div>
        <h6>{props.strStatus === "1H" ? "1st Half" : props.strStatus === "2H" ? "2nd Half" : props.strStatus === "FT" ? "Final" : props.strStatus === "Match Finished" ? "Full Time" : props.strStatus}</h6>
        {(props.strStatus === "Match Finished" || props.strStatus === "FT") && props.strVideo ? <a href={props.strVideo} target="_blank" style={{ textDecoration: "none" }}>Highlights</a> : <></>}
    </Card>
}