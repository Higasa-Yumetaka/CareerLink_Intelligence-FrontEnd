import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import ToggleColorMode from './ToggleColorMode';
import {getUserInfo} from "../../Axios/instance/getUserInfo";
import {useEffect, useState} from "react";
import instance from "../../Axios/instance/Instance";
import deleteCookie from "../../cookie/cookies";

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
};


function LoginButton() {
    const [userName, setUserName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        // 使用 useEffect 来在组件挂载时发送 Axios 请求
        async function fetchUserInfo() {
            try {
                const response = await instance.get('/getUserInfo');
                // console.log("username: ", response.data.data.username);
                setNickname(response.data.data.nickname);
                setUserName(response.data.data.username);
            } catch (error) {
                console.error('Error fetching user info:', error);
            }
        }

        fetchUserInfo(); // 调用异步函数
    }, []); // 传递空数组作为依赖项，确保只在组件挂载时发送一次请求

    // 如果不存在登录状态，则显示登录按钮
    if ( document.cookie.indexOf('Authorization') === -1) {
        return (
            <>
                <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component="a"
                    href="/sign-in"
                    target="_self">
                    登录
                </Button>
                <div style={{width: "1vh"}}/>
                <Button
                    color="primary"
                    variant="contained"
                    size="small"
                    component="a"
                    href="/sign-up-students"
                    target="_self">
                    注册
                </Button>
            </>
        );
    } else {
        return (
            <>
                <Typography variant="subtitle1"
                            onClick={() => {
                                window.location.href = '/profile';
                            }}
                            sx={{
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                '&:hover': {
                                    cursor: 'pointer',
                                    color: (theme) => {
                                        return theme.palette.mode === 'light' ? 'primary.dark' : 'white';
                                    }
                                }
                            }}>
                    {nickname ? nickname : userName}
                </Typography>
                <div style={{width: "2vh"}}/>
                <Button
                    color="primary"
                    variant="outlined"
                    size="small"
                    component="a"
                    onClick={() => {
                        // 清除 cookie：将token删除
                        deleteCookie('Authorization').then(
                            () => {
                                // 刷新页面
                                window.location.reload();
                            }
                        )
                    }
                    }
                >
                    登出
                </Button>
            </>
        );
    }
}


function LandingTopBar({mode, toggleColorMode}) {


    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const scrollToSection = (sectionId) => {
        const sectionElement = document.getElementById(sectionId);
        const offset = 128;
        if (sectionElement) {
            const targetScroll = sectionElement.offsetTop - offset;
            sectionElement.scrollIntoView({behavior: 'smooth'});
            window.scrollTo({
                top: targetScroll,
                behavior: 'smooth',
            });
            setOpen(false);
        }
    };

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}>
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}>

                            <div
                                style={{
                                    width: "3vh",
                                }}>
                            </div>

                            <Box sx={{display: {xs: 'none', md: 'flex'}}}>
                                <MenuItem
                                    onClick={() => scrollToSection('title')}
                                    sx={{py: '6px', px: '12px'}}>
                                    <Typography variant="h5"
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                                }}>
                                        智聘通
                                    </Typography>
                                </MenuItem>
                                <div
                                    style={{
                                        width: "5vh",
                                    }}>
                                </div>
                                <MenuItem
                                    onClick={() => scrollToSection('features')}
                                    sx={{py: '6px', px: '12px'}}>
                                    <Typography variant="subtitle1" sx={{
                                        color: (theme) =>
                                            theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                    }}>
                                        开始使用
                                    </Typography>
                                </MenuItem>
                                <div
                                    style={{
                                        width: "3vh",
                                    }}>
                                </div>
                                <MenuItem
                                    onClick={() => scrollToSection('highlights')}
                                    sx={{py: '6px', px: '12px'}}>
                                    <Typography variant="body1" color="text.primary">
                                        产品亮点
                                    </Typography>
                                </MenuItem>
                                <div
                                    style={{
                                        width: "1vh",
                                    }}>
                                </div>
                                <MenuItem
                                    onClick={() => scrollToSection('faq')}
                                    sx={{py: '6px', px: '12px'}}>
                                    <Typography variant="body1" color="text.primary">
                                        FAQ
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                gap: 0.5,
                                alignItems: 'center',
                            }}>
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                            <div style={{width: "2vh"}}/>
                            <LoginButton/>
                        </Box>
                        <Box sx={{display: {sm: '', md: 'none'}}}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{minWidth: '30px', p: '4px'}}>
                                <MenuIcon/>
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}>
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode}/>
                                    </Box>
                                    <MenuItem onClick={() => scrollToSection('features')}>
                                        开始使用
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('highlights')}>
                                        产品亮点
                                    </MenuItem>
                                    <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                                    <Divider/>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            component="a"
                                            href="/sign-up-students/"
                                            target="_self"
                                            sx={{width: '100%'}}>
                                            注册
                                        </Button>
                                    </MenuItem>
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href="/sign-in/"
                                            target="_self"
                                            sx={{width: '100%'}}>
                                            登录
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

LandingTopBar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

export default LandingTopBar;
