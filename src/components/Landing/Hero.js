import * as React from 'react';
import {alpha} from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";
import {theme} from "antd";
import {useTheme} from "@mui/material/styles";

export default function Hero() {

    const [mode, setMode] = React.useState(localStorage.getItem('ColorMode') || 'light');

    const color_ = mode === 'light' ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.7)';

    useEffect(() => {
        const localMode = localStorage.getItem('ColorMode');
        if (localMode) {
            setMode(localMode);
        }
    });

    return (
        <Box
            id="hero"
            sx={(theme) => ({
                width: '100%',
                backgroundImage:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
                backgroundSize: '100% 20%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center top'
            })}>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    pt: {xs: 14, sm: 20},
                    pb: {xs: 8, sm: 12},}}>
                <Stack spacing={2} useFlexGap sx={{width: {xs: '100%', sm: '70%'}}}>
                    <Typography
                        id="title"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'left',
                            textAlign: 'left',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',}}>
                        <Typography
                            id="title"
                            variant="h1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}>
                            连接您与理想职位的桥梁
                        </Typography>
                        <Typography
                            id="title"
                            variant="h2"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}>
                            连接您与理想职位的桥梁
                        </Typography>
                    </Typography>
                    <Typography
                        id="title"
                        variant="body1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'left',
                            textAlign: 'left',
                            fontSize: 'clamp(1.5rem, 3vw, 2rem)',}}>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                color: color_
                            }}>
                            为您提供广阔的职业机会和职业发展指导
                        </Typography>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                color: 'rgba(0,0,0,0.8)'
                            }}>
                            为您提供广阔的职业机会和职业发展指导
                        </Typography>
                    </Typography>
                    <Typography
                        textAlign="center"
                        color="text.secondary"
                        sx={{alignSelf: 'center', width: {sm: '100%', md: '80%'}}}>
                    </Typography>
                    <Stack
                        direction={{xs: 'column', sm: 'row'}}
                        alignSelf="center"
                        spacing={1}
                        useFlexGap
                        sx={{pt: 2, width: {xs: '100%', sm: 'auto'}}}
                    >
                    </Stack>
                    <Typography variant="caption" textAlign="center" sx={{opacity: 0.8}}>
                        {/*By clicking &quot;Start now&quot; you agree to our&nbsp;*/}
                        <Link href="#" color="primary">
                            {/*Terms & Conditions*/}
                        </Link>
                    </Typography>
                </Stack>
                <Box
                    id="image"
                    sx={(theme) => ({
                        mt: {xs: 8, sm: 10},
                        alignSelf: 'center',
                        height: {xs: 200, sm: 700},
                        width: '100%',
                        backgroundImage:
                            theme.palette.mode === 'light'
                                ? 'url("/static/images/hero-light.svg")'
                                : 'url("/static/images/hero-light.svg")',
                        backgroundSize: 'cover',
                        borderRadius: '10px',
                        outline: '1px solid',
                        outlineColor:
                            theme.palette.mode === 'light'
                                ? alpha('#BFCCD9', 0.5)
                                : alpha('#9CCCFC', 0.1),
                        boxShadow:
                            theme.palette.mode === 'light'
                                ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                                : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
                    })}>
                    <Typography
                        id="title"
                        variant="h1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'center',
                            textAlign: 'center',
                            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            marginTop: '5vh',
                            marginLeft: '5vh',
                        }}>
                        <Typography
                            id="title"
                            variant="h1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}>
                            明职道&nbsp;
                        </Typography>
                        <Typography
                            id="title"
                            variant="h1"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(3.5rem, 10vw, 4rem)',
                            }}>
                            明职道&nbsp;&nbsp;&nbsp;
                        </Typography>
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                display: {xs: 'none', md: 'block'},
                            }}>
                            ·
                        </Typography>
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                display: {xs: 'none', md: 'block'},
                            }}
                        >
                            &nbsp;智聘通
                        </Typography>
                        <Typography
                            component="span"
                            variant="h1"
                            sx={{
                                fontSize: 'clamp(3rem, 10vw, 4rem)',
                                color: (theme) =>
                                    theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                                display: {xs: 'block', md: 'none'},
                            }}
                        >
                            &nbsp;&nbsp;&nbsp;智聘通
                        </Typography>
                    </Typography>
                    <Typography
                        id="title"
                        variant="body1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'left',
                            textAlign: 'left',
                            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                            marginLeft: '5vh',
                            marginTop: '2vh',
                        }}>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            不仅仅是招聘推荐
                        </Typography>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            不仅仅是招聘推荐
                        </Typography>
                    </Typography>
                    <Typography
                        id="title"
                        variant="body1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'left',
                            textAlign: 'left',
                            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                            marginLeft: '5vh',
                            marginTop: '0.5vh',
                        }}>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            我们致力于帮助您实现职业目标
                        </Typography>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            我们致力于帮助您实现职业目标
                        </Typography>
                    </Typography>
                    <Typography
                        id="title"
                        variant="body1"
                        sx={{
                            display: 'flex',
                            flexDirection: {xs: 'column', md: 'row'},
                            alignSelf: 'left',
                            textAlign: 'left',
                            fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                            marginLeft: '5vh',
                            marginTop: '0.5vh',
                        }}>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'none', md: 'block'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            通过精准匹配和详尽的职业资源
                        </Typography>
                        <Typography
                            id="title"
                            variant="body1"
                            sx={{
                                display: {xs: 'block', md: 'none'},
                                flexDirection: {xs: 'column', md: 'row'},
                                alignSelf: 'center',
                                textAlign: 'center',
                                fontSize: 'clamp(1.5rem, 2vw, 2rem)',
                                color: color_
                            }}>
                            通过精准匹配和详尽的职业资源
                        </Typography>
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}
