
import React from "react";
import { useState, useEffect } from "react";
import Card from './Card'



const Cards = (props) => {

    let courses = props.courses;
    let category = props.category;

    const [likedCourses, setLikedcourses] = useState([]);




    const getCourses = () => {

        

        if (category === "All") {
            let allCourses = [];
            Object.values(courses).forEach((courseCategory) => {
                courseCategory.forEach((data) => {
                    allCourses.push(data);
                })
            })
            
            return allCourses;
        }
        else {
            return courses[category];
        }



    }

    return (

        <div className="flex flex-wrap justify-center gap-4">
            {
                getCourses().map((course) => {
                    return (
                        <Card
                            course={course}
                            key={course.id}
                            likedCourses={likedCourses}
                            setLikedCourses={setLikedcourses}
                        />
                    );
                })
            }
        </div>
    );

}
export default Cards;