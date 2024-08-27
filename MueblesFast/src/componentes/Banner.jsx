import React, { useState, useEffect } from 'react';
import './Banner.css';

const images = [
    'https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497_1280.jpg', 
    'https://cdn.pixabay.com/photo/2021/12/23/03/58/da-guojing-6888603_1280.jpg',
    'https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325_1280.jpg'
];

const Banner = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000); // Cambia cada 3 segundos
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="banner">
            <img src={images[currentImage]} alt="Banner" className="banner-image" />
        </div>
    );
};

export default Banner;
