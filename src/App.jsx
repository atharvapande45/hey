import React, { useState, useEffect } from "react";

export default function App() {
    const [statement, setStatement] = useState("I am sorry");
    const [index, setIndex] = useState(5499999);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index < 5500000) {
                setStatement(`I am sorry ${index}`);
                setIndex((prev) => prev + 1);
            }
        }, 0.0001);
        return () => clearInterval(intervalId);
    }, [index]);

    return (
        <div>
            <h1>{statement}</h1>
            <p>55 lakh sorries incoming 🦸‍♂️</p>
            <p>I am becoming your sock next life 🧦</p>
        </div>
    );
}
