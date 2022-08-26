import { ListEl } from "./Timeline.style";

const Goal = (props) => {

    return (
        <ListEl status = {props.obj.status}>
            {/* <i class="fa-solid fa-gear"></i> */}
            {/* <i class="fa-solid fa-box"></i> */}

            <div className="head">
                <p className = "year">{props.obj.year}</p>
                <p className = "questNo">{props.obj.qid}</p>
            </div>

            <div className="data">
                <p className="tag">{props.obj.tag}</p>
                {props.obj.desc.map((txt,id) => (
                    <p key = {id} className = "desc">
                        {txt.type === 1 ? <i className="fa-solid fa-gear tagIcon"></i> : <i className="fa-solid fa-box tagIcon"></i>}
                        <span className="info">
                            {txt.text}
                        </span>

                    </p>
                ))}
            </div>

        </ListEl>
    );
}

export default Goal;