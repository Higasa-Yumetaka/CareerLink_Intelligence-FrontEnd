import React, {useEffect} from 'react';
import {ConfigProvider, theme, flex, Layout} from 'antd';
import { useGlobalNavContext } from "../../global/GlobalNavContext";
import StudentBody from "../../components/Student/StudentBody";
import StudentSider from "../../components/Student/StudentSider";

function Student() {
    const [navBarState, setNavBarState] = useGlobalNavContext();
    useEffect(() => {
        setNavBarState("student");
    }, [setNavBarState]);
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}>>
            <StudentSider />
            <StudentBody />
        </Layout>
    );
}

export default Student;