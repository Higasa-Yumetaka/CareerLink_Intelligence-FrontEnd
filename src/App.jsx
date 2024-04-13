import React from 'react';
import {ConfigProvider} from 'antd';
import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom"
import Landing from "./pages/Landing";
import SignIn from "./pages/SignIn";
import SignUpStudents from "./pages/SignUp-students";
import SignUpHR from "./pages/SignUp-HR";
import OnlineResume from "./pages/OnlineResume";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import HR from "./pages/hr";
import About from "./pages/about";
import {GlobalNavProvider} from './global/GlobalNavContext';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


// 获取NavBar状态

const Layout = () => {
    return (
        <div className="App">
            {/*<NavBar />*/}
            <Outlet/>
        </div>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Landing/>
            },
            {
                path: "/sign-in",
                element: <SignIn/>
            },
            {
                path: "/sign-up-students",
                element: <SignUpStudents/>
            },
            {
                path: "/sign-up-hr",
                element: <SignUpHR/>
            },
            {
                path: "/checkout",
                element: <OnlineResume/>
            },
            {
                path: "/quotes",
                element: <Dashboard/>
            },
            {
                path: "/profile",
                element: <Profile/>
            },
            {
                path: "/hr",
                element: <HR />
            }
        ]
    },
])


const debounce = (fn, delay) => {
    let timer
    return (...args) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn(...args)
        }, delay)
    }
}

const _ResizeObserver = window.ResizeObserver;
window.ResizeObserver = class ResizeObserver extends _ResizeObserver {
    constructor(callback) {
        callback = debounce(callback, 200);
        super(callback);
    }
}


export default function APP() {


    return (

        <GlobalNavProvider>
            <RouterProvider router={router}>
                <ConfigProvider>
                    <meta name="viewport" content="initial-scale=1, width=device-width"/>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"/>
                    <Outlet/>
                </ConfigProvider>
            </RouterProvider>
        </GlobalNavProvider>

    );
}