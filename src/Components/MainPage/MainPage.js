import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './MainPage.css'
import Courses from '../Courses/Courses';
import Cart from '../Cart/Cart';

const MainPage = () => {
    const[courseInfo, setCourseInfo] = useState(fakeData);
    const[cart, setCart] = useState([]);
    const handleAddCourse = (courseInfo) => {
        const newCart = [...cart, courseInfo];
        setCart(newCart);
    }
    return (
        <div className = "mainPage-container">
            <div className="course-container row mr-auto ml-auto">
                    {
                        courseInfo.map(course => <Courses key = {course.id} course = {course} handleAddCourse = {handleAddCourse}></Courses>)
                    }
            </div>

            <div className = "cart-container w-25 mr-auto ml-auto mt-3">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default MainPage;