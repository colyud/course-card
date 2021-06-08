import React from "react";
import { RandomBlob } from "react-random-shapes";
var randomColor = require("randomcolor");

export default function Blob() {
    const size = Math.floor(Math.random() * 400) + 100;
    const blobbg = randomColor({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.25,
    });
    return (
        <React.Fragment>
            <RandomBlob size={size} className="blob" options={{ style: { fill: blobbg } }} />
        </React.Fragment>
    );
}
