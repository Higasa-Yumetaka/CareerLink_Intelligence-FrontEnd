import React from 'react';
import { ConfigProvider, theme, flex} from 'antd';
import { useGlobalNavContext } from "../../global/GlobalNavContext";

function Show() {
    const [navBarState, setNavBarState] = useGlobalNavContext();
    setNavBarState("show");
    return (
        <div>
            <h2>show</h2>
        </div>
    );
}

export default Show;