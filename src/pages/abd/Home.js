import React, {useEffect} from 'react';
import { useGlobalNavContext } from "../../global/GlobalNavContext";
import HomeNav from "../../components/Home/HomeNav";
import HomeCarousel from "../../components/Home/HomeCarousel";
import '../../styles/HomeStyle.css';
import {Divider, Flex} from "antd";
import HomeSearch from "../../components/Home/HomeSearch";
import HomeCard from "../../components/Home/HomeCard";


const Home = () => {
    const [navBarState, setNavBarState] = useGlobalNavContext();
    useEffect(() => {
        setNavBarState('home');
    }, [setNavBarState]);

    return (
        <div className='HomeBody'>
            <HomeSearch />
            <Divider />
            <Flex>
                <HomeNav />
                <HomeCard />
            </Flex>
        </div>
    );
}

export default Home;
