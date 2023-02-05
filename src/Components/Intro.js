import TextTransition, { presets } from "react-text-transition";
import {useEffect, useState} from "react";
export default function Intro(props) {
    const [index, setIndex] = useState(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const greetings = ["Hey", "Hello", "Howdy", "Hola", "What's up", "Bonjour", "Aloha", "Ciao", "Hallo", "Goededag", "Hoi"];


    useEffect(() => {
            const intervalId = setInterval(
                () => {
                    const ranIndex = props.genRandomInt(greetings)
                    setIndex(ranIndex);
                },
                4000 // every 4 sec
            );
            return () => clearTimeout(intervalId);
        },
        [greetings]);

    return(
        <div>
            <hgroup>
                <h2>
                    <TextTransition inline={true} springConfig={presets.slow}>
                        {greetings[index]}
                    </TextTransition>
                    , my name is Tim!
                </h2>
                <h3>
                    A driven and innovative Business & IT student at the University of Twente 🎓,
                    with a passion for combining technical expertise with business strategy📱.
                </h3>
            </hgroup>

        </div>
    );
}