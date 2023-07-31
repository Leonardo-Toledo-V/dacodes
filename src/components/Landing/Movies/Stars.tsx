import React from 'react'
import {VscStarFull, VscStarHalf, VscStarEmpty} from "react-icons/vsc"


interface StarsProps {
    stars: number;
}

const Stars: React.FC<StarsProps> = (props) => {
    const { stars } = props;

    const ratingStars = Array.from({ length: 5 }, (_, index) => {
        const number = index + 0.5;
        return (
            <span key={index}>
                {stars/2 >= index + 1 ? <VscStarFull /> : stars/2 >= number ? <VscStarHalf /> : <VscStarEmpty />}
            </span>
        );
    });

    return <div className="flex text-white text-3xl">{ratingStars}</div>;
};

export default Stars;
