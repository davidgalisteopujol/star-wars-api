import propTypes from "prop-types";
import React from "react";

const Title = (props) => {

    return (
        <div>
            <h2 className="text-center text-warning mb-2">{props.title}</h2>
        </div>
    )
}

export default Title;
