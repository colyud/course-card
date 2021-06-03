import "./App.css";
import React, { useState } from "react";
import courseData from "./data";
import CourseInfo from "./components/CourseInfo";
import img from "./image/blob.svg";

function App() {
    const [courses, setCourses] = useState(courseData);
    const [index, setIndex] = useState(0);
    console.log(courses[0]);
    return (
        <>
            <h1 className="header">Course Card</h1>
            <main>
                <header className="card-header">
                    <h2 className="course-name">{courses[0].courseName}</h2>
                    <img className="blob" src={img} alt="blob" height="50px" />
                </header>
                <CourseInfo courses={courses[0]} />
            </main>
        </>
    );
}

export default App;
