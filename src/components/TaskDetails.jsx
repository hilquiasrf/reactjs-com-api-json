import React from "react";
import { useHistory, useParams } from "react-router-dom";

import Button from "./Button";

import "./TaskDetails.css";

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtononClick = () => {
        history.goBack();
    };

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtononClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    At culpa ducimus omnis deserunt ab animi.
                </p>
            </div>
        </>
    )    
}

export default TaskDetails;
