import TextTransition, { presets } from "react-text-transition";
import {useEffect, useState} from "react";
export default function Intro() {
    const [index, setIndex] = useState(0);

    const greetings = ["Hey", "Hello", "Howdy", "Hola", "What's up", "Bonjour", "Aloha", "Ciao", "Hallo", "Goededag"];

    const genRandomInt = (list) => {
        return Math.floor(Math.random() * (list.length - 1)) ;
    };

    useEffect(() => {
        const intervalId = setInterval(
            () => {
                const ranIndex = genRandomInt(greetings)
                setIndex(ranIndex);
            },
            4000 // every 4 sec
        );
        return () => clearTimeout(intervalId);
    },[]);

    return(
        <div>
            <h2>
                <TextTransition inline={true} springConfig={presets.slow}>
                    {greetings[index]}
                </TextTransition>
                , my name is Tim!
            </h2>
        </div>
    );
}