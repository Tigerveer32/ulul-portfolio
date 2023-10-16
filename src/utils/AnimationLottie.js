import React from 'react';
import Lottie from 'react-lottie';

const AnnimationLotie = ({ AnimationPath, width}) => {
    const defaultOptions ={
    loop: true,
    autoplay: true,
    animationData: AnimationPath,
    style: {
        width: '120%',
    }
    };

    return (
        <Lottie {...defaultOptions}/>
    );
};

export default AnnimationLotie;