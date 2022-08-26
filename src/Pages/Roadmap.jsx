import { TimeLine } from "../Components/Timeline/Timeline.style";
import Goal from "../Components/Timeline/Goal";

import classes from "./styles/Roadmap.module.css"

const Roadmap = () => {

    // To add any Checkpoint / Goal append it in the goals array
    // To mark any Checkpoint / Goal as completed or achieved => change the status to "completed"

    const goals = [
        {
            qid: "Q1",
            status: "completed",
            year: 2022,
            tag: "Concept",
            desc: [
                {type: 1 , text: "Concept Generation"},
                {type: 1 , text: "Team Assemble"}
            ]   
        },
        {
            qid: "Q2",
            status: "completed",
            year: 2022,
            tag: "Research",
            desc: [
                {type: 2 , text: "Proving the concept can work"},
                {type: 1 , text: "Strategic plan"},
                {type: 1 , text: "White paper completion"}
            ]   
        },
        {
            qid: "Q3",
            status: "pending",
            year: 2022,
            tag: "Design",
            desc: [
                {type: 2 , text: "Platform design and technical demonstration"},
                {type: 1 , text: "Building the MVP"}
            ]   
        },
        {
            qid: "Q1",
            status: "pending",
            year: 2023,
            tag: "Presale",
            desc: [
                {type: 2 , text: "Public financing & Seed funding raised"},
            ]   
        },
        {
            qid: "Q2",
            status: "pending",
            year: 2023,
            tag: "App Beta Test",
            desc: [
                {type: 2 , text: "Private closed beta"},
                {type: 1 , text: "Open beta launched to public and improvement the app"},
            ]   
        },
        {
            qid: "Q3",
            status: "pending",
            year: 2023,
            tag: "Token Sale",
            desc: [
                {type: 2 , text: "ICO Press Tour"},
                {type: 1 , text: "Open global sales of ICOblock token"}
            ]   
        },
        {
            qid: "Q4",
            status: "pending",
            year: 2023,
            tag: "Alpha Test",
            desc: [
                {type: 2 , text: "In-house testing of functional"},
                {type: 1 , text: "Prototype published and linked to Ethereum blockchain with real-time scanning"}
            ]   
        }
        
    ];

    let activeLen = 0;

    goals.forEach(item => {
        if(item.status === "completed"){
            activeLen++;
        }
    })

    console.log("activeLen: " + activeLen)

    return (
        <div id = "Roadmap" className={classes.section}>

            <div className={classes.text}>
                <p>Roadmap</p>
                <p>The use of cryptocurrencies has become more widespread, The origin platform <br></br> idea. Development of the concept and business plan.</p>
            </div>

            <div className={classes.timeline}>

                {/* ul of li of data */}
                {/* li => styled component */}
                <TimeLine listsLen = {goals.length} activeLen = {activeLen}>
                    {goals.map((data,idx) => {
                        return <Goal key = {idx} obj = {data}/>
                    })}
                </TimeLine>

            </div>

            
        </div>
    );
}

export default Roadmap;