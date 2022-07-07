import React, { useState } from 'react';
import QuestionMark from '../assets/question.png'

export default function Grid({
    character,
    firstChoice,
    setFirstChoice,
    secondChoice,
    setSecondChoice,
    setClickCount,
    clickCount,
}) {
    const [seeImage, setSeeImage] = useState(false)
    const revealImage = (character) => {

        if (firstChoice) {
            setSecondChoice(character)
        }
        else {
            setFirstChoice(character)
        }
        setSeeImage(true);

        setClickCount(clickCount + 1);
    }
    return (
        <div>
            {seeImage && character.visible? (
                <div className='grid-content'>
                    <img className='grid-images' src={character.image} />
                </div>
            ) : (
                <div className='grid-content-alt'>
                    <img
                        className='grid-images'
                        src={QuestionMark}
                        onClick={() => revealImage(character.name)}
                    />
                </div>
            )}
        </div>
    );
}
