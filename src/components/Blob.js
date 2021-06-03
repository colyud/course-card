import React from "react";

import { RandomBlob } from "react-random-shapes";

export default function Blob() {
    const size = Math.floor(Math.random() * 400) + 100;
    return (
        <React.Fragment>
            <RandomBlob size={size} className="blob" options={{ style: { fill: "rgba(0, 0, 0, 0.2)" } }} />
        </React.Fragment>
    );
}
