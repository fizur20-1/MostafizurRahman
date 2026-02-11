import { useEffect, useState } from "react";

export const StarBackground = () => { 

const [stars, setStars] =useState([]);
const [meteors, setMeteors] =useState([]);

useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
        generateStars();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

const generateStars = () => {

    const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
        const star = {
            id: i,
            top: Math.random() * 100, //y-axis
            left: Math.random() * 100, //x-axis
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        };
        newStars.push(star);
        setStars(newStars);
        }
    };


    const generateMeteors = () => {

    const numberOfMeteors = 6;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
        const meteors = {
            id: i,
            top: Math.random() * 20, //y-axis
            left: Math.random() * 100, //x-axis
            size: Math.random() * 2 + 1,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
        };
        newMeteors.push(meteors);
        setMeteors(newMeteors);
        }
    };

    return (
        < div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" > 
            {stars.map((star) => (
                <div
                    key={star.id}   
                    className="star animate-pulse-subtle"
                    style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDuration: `${star.animationDuration}s`,
                    }}
                />
            ))}

                {meteors.map((meteor) => (
                <div
                    key={meteor.id}   
                    className="meteor animate-meteor"
                    style={{ 
                        top: `${meteor.top}%`,
                        left: `${meteor.left*4}%`,
                        width: `${meteor.size*50}px`,
                        height: `${meteor.size*2}px`,
                        animationDelay: meteor.delay,
                        animationDuration: `${meteor.animationDuration}s`,
                    }}
                />
            ))} 

        </div>
    );
}