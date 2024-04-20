import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";

export default function MatchCard(props) {
    const time = new Date(props.strTimestamp);
    const date = new Date(props.dateEvent);
    const timeAlt = new Date(props.strEventTime);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <Card style={{ backgroundColor: "#383838", color: "white", margin: 10, alignContent: 'center' }}>
        {
            props.strEvent ? 
            <h5>{props.strEvent}</h5>
            :
            <h5>{props.strHomeTeam + " vs " + props.strAwayTeam}</h5>
        }
        <h6>{props.strSport === "Soccer" ? props.strLeague : ""}</h6>
        <h6>{time.toDateString() != "Invalid Date" ? time.toDateString() : date.toDateString()}</h6>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={props.strHomeTeamBadge + '/tiny'}></img>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>{props.intHomeScore ? props.intHomeScore : "0"}</h4>
            {/* <h4>{props.strHomeTeam}</h4> */}
            <h4 style={{ marginTop: 9, marginLeft: 10, marginRight: 10 }}>-</h4>
            <h4 style={{ marginTop: 10, marginLeft: 10, marginRight: 10 }}>{props.intAwayScore ? props.intAwayScore : "0"}</h4>
            {/* <h4>{props.strAwayTeam}</h4> */}
            <img src={props.strAwayTeamBadge + '/tiny'}></img>
        </div>
        <h6>{props.strStatus === "1H" ? "1st Half" : props.strStatus === "2H" ? "2nd Half" : props.strStatus === "FT" ? "Final" : props.strStatus === "Match Finished" ? "Full Time" : props.strStatus === "NS" ? "Not Started" : props.strStatus}</h6>
        {(props.strStatus === "Match Finished" || props.strStatus === "FT") && props.strVideo ? <a href={props.strVideo} target="_blank" style={{ textDecoration: "none" }}>Highlights</a> : <></>}
        
        <Button onClick={handleShow}>
            Match Info
        </Button>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{props.strEvent}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={props.strThumb} style={{ width: "100%" }} />
                <p>
                    {time.toDateString() != "Invalid Date" ? time.toDateString() : ""}<br />
                    {props.strStatus === "Match Finished" || props.strStatus === "FT" ? "" : time.toLocaleTimeString()}<br />
                    {props.strVenue ? props.strVenue : ""}<br />
                </p>
            </Modal.Body>
        </Modal>
    </Card>
}