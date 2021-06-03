import "./App.css";
import React, { useState } from "react";
import courseData from "./data";
import CourseInfo from "./components/CourseInfo";
import Blob from "./components/Blob";
var randomColor = require("randomcolor");

function App() {
    const [courses, setCourses] = useState(courseData);
    const [index, setIndex] = useState(0);

    function checkIndex(i) {
        if (i < 0) {
            return courses.length - 1;
        }
        if (i > courses.length - 1) {
            return 0;
        }
        return i;
    }
    function prevCourse() {
        setIndex(() => {
            let newIndex = index - 1;
            return checkIndex(newIndex);
        });
    }
    function nextCourse() {
        setIndex(() => {
            let newIndex = index + 1;
            return checkIndex(newIndex);
        });
    }
    const cardbg = randomColor({
        luminosity: "light",
        format: "rgba",
        alpha: 0.4,
    });

    const left = () => {
        return Math.floor(Math.random() * 400) - 100;
    };
    const top = () => {
        return Math.floor(Math.random() * 200) - 100;
    };
    return (
        <>
            <h2 className="header">My favorite Scrimba courses</h2>
            <main>
                <header className="card-header" style={{ backgroundColor: cardbg }}>
                    <h1 className="course-name">{courses[index].courseName}</h1>
                    <div className="blob-container" style={{ left: left(), top: top() }}>
                        <Blob />
                    </div>
                    <div className="blob-container" style={{ left: left(), top: top() }}>
                        <Blob />
                    </div>
                </header>

                <CourseInfo courses={courses[index]} />
            </main>
            <div className="btn-container">
                <button className="btn prev" onClick={prevCourse}>
                    prev
                </button>
                <button className="btn next" onClick={nextCourse}>
                    next
                </button>
            </div>
        </>
    );
}

export default App;
