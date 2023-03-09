import React, { useEffect, useMemo, useState } from 'react'

function PageTitleChanger() {
    const title = "Daniel Ene";
    const words = useMemo(() => ["Frontend Developer.", "Team player.", "Eager to learn!"], [])

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        document.title = words[index]
        if (index > 2) document.title = title
        return () => { }
    }, [index, words])

}

export default PageTitleChanger