import React from "react";

import { RandomBlob } from "react-random-shapes";

export default function Blob() {
    return (
        <React.Fragment>
            <RandomBlob size={300} className="blob" options={{ style: { fill: "rgba(0, 0, 0, 0.2)" } }} />
        </React.Fragment>
    );
}
