import React, {useEffect} from 'react';
import { ConfigProvider, theme, flex} from 'antd';
import { useGlobalNavContext } from "../global/GlobalNavContext";

function About() {
    const [navBarState, setNavBarState] = useGlobalNavContext();
    useEffect(() => {
        setNavBarState("about");
    }, [setNavBarState]);
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

export default About;