import "./App.css";
import React, { useState } from "react";
import courseData from "./data";
import CourseInfo from "./components/CourseInfo";
import img from "./image/blob.svg";

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
    return (
        <>
            <h1 className="header">Course Card</h1>
            <main>
                <header className="card-header">
                    <h2 className="course-name">{courses[index].courseName}</h2>
                    <img className="blob" src={img} alt="blob" height="50px" />
                </header>
                <CourseInfo courses={courses[0]} />
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
