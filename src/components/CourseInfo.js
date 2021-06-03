import React from "react";

function CourseInfo({ courses }) {
    const { lessons, duration, level, teacher } = courses;
    return (
        <div className="course-info">
            <div className="main-info">
                <div className="duration-info">
                    <p className="amount">{`${lessons} lessons | ${duration} min`}</p>
                    <p className="teacher-name">
                        with <span>{teacher.name}</span>
                    </p>
                </div>
                <img className="avatar" src={teacher.img} alt="teacher-img" height="30px" />
            </div>
            <p className="level">{level}</p>
        </div>
    );
}

export default CourseInfo;
