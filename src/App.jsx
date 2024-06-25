import React, { useState, useEffect } from "react";

export default function App() {
    const [statement, setStatement] = useState("I am sorry");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (index <= 5500000) {
                setStatement(`I am sorry ${index}`);
                setIndex((prev) => prev + 91, 666.666666666666666666666666667);
            } else {
                setStatement(`I am sorry ${5500000}`);
                setIndex(5500000);
            }
        }, 1);
        return () => clearInterval(intervalId);
    });

    return (
        <div>
            <h1>{statement}</h1>
            <p>55 lakh sorries incoming 🦸‍♂️</p>
            {index == 5500000 && <p>I am becoming your sock next life 🧦</p>}
        </div>
    );
}
