import React from "react";

const WorkWrapper = (props) => {
    return (
        <div class="works-content-wrapper">
            <div class="works-wrapper-h">
                <h5>{props.work_wrapper_heading}</h5>
            </div>
            <div class="works-wrapper-p">
                <p>{props.work_wrapper_paragraph}</p>
            </div>
        </div>
    )
}

export default WorkWrapper;