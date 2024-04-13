import React, {useEffect, useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import AddressForm from '../components/Profile/AddressForm';
import getCheckoutTheme from '../components/Profile/getCheckoutTheme';
import ToggleColorMode from '../components/Profile/ToggleColorMode';
import instance from "../Axios/instance/Instance";

function getStepContent() {
    return <AddressForm/>;
}
export default function Profile() {

    const [mode, setMode] = React.useState('light');
    const checkoutTheme = createTheme(getCheckoutTheme(mode));
    const [userName, setUserName] = useState('');
    const [nickname, setNickname] = useState('');

    // 模拟检查 cookie 中是否存在 authorization 项的函数
    const checkAuthorization = () => {
        const cookie = document.cookie;
        return cookie.includes('Authorization');
    };

    useEffect(() => {

        if (localStorage.getItem('ColorMode')) {
            setMode(localStorage.getItem('ColorMode'));
        }
        // 检查 cookie 中是否存在 authorization 项
        const authorizationExists = checkAuthorization();
        if (!authorizationExists) {
            // 如果未授权，则重定向到登录页面
            window.location.href = '/sign-in';
        }
        async function fetchUserInfo() {
            try {
                const response = await instance.get('/getUserInfo');

                if(response.data.data.nickname && response.data.data.nickname === undefined){
                    setUserName(response.data.data.username);
                }
                setUserName(response.data.data.username);
                setNickname(response.data.data.nickname)
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo(); // 调用异步函数
    }, [nickname]);

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
        localStorage.setItem('ColorMode', mode === 'dark' ? 'light' : 'dark');
    };

    return (
        <ThemeProvider theme={checkoutTheme}>
            <CssBaseline/>
            <Box sx={{display: 'flex'}}>
                <Grid container sx={{height: {xs: '100%', sm: '100vh', alignItems: 'center',}}}>
                    <Grid item sm={12} md={7} lg={8} sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '100%',
                        width: '100%',
                        backgroundColor: {xs: 'transparent', sm: 'background.default'},
                        alignItems: 'center',
                        margin: 'auto',
                        pt: {xs: 2, sm: 4},
                        px: {xs: 2, sm: 10},
                        gap: {xs: 4, md: 8},
                    }}>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: {sm: 'space-between', md: 'flex-end'},
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                        }}>

                            <Box sx={{
                                display: {xs: 'flex', md: 'none'},
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}>
                                <Button startIcon={<ArrowBackRoundedIcon/>} component="a" href="/"
                                        sx={{alignSelf: 'start'}}>
                                    返回
                                </Button>
                                <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                            </Box>
                            <Box sx={{
                                display: {xs: 'none', md: 'flex'},
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                }}>
                                    <Button
                                        startIcon={<ArrowBackRoundedIcon/>}
                                        component="a"
                                        href="/"
                                        sx={{ml: '-6px'}}>
                                        返回
                                    </Button>
                                    <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="h5"
                                    sx={{textAlign: 'left', mt: 2, mb: 2}}
                                    color="text.primary">
                            {nickname ? nickname : userName} 的个人信息
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            flexGrow: 1,
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                            maxHeight: '720px',
                            gap: {xs: 5, md: 'none'},
                        }}>
                            {getStepContent()}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
