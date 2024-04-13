import * as React from 'react';
import {useEffect, useState} from 'react';
import {createTheme, styled, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Chart from '../components/Dashboard/Chart';
import Pie from '../components/Dashboard/Pie';
import WordClouds from '../components/Dashboard/WordClouds';
import Map from '../components/Dashboard/Map';
import SelectCat from "../components/Dashboard/SelectCat";
import MuiDrawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import IconButton from "@mui/material/IconButton";
import SvgIcon from '@mui/material/SvgIcon';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://124.223.196.177:8080/">
                Vistalab
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

// 抽屉
const drawerWidth = 240;

// 抽屉样式
const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const categories = [
    { name: "算法工程师    ", count: 208 },
    { name: "推荐算法工程师 ", count: 188 },
    { name: "搜索算法工程师 ", count: 172 },
    { name: "机器学习工程师 ", count: 169 },
    { name: "推荐算法工程师 ", count: 130 },
    { name: "深度学习工程师 ", count: 128 },
    { name: "数据挖掘工程师 ", count: 99 },
    { name: "算法研究院", count: 89 },
    { name: "自动驾驶系统工程师", count: 88 },
    { name: "风控算法工程师 ", count: 88 }

];

function NavBarItems({navPosition, setNavPosition}) {

    const handleListItemClick = (event, index) => {
        setNavPosition(index);
        //console.log("navPosition: ", navPosition);
    }

    return (
        <React.Fragment>
            {categories.map((category, index) => (
                <React.Fragment key={index}>

                        <Typography variant="subtitle2"  component="div"
                                    sx={{
                                        alignItems: 'left',
                                        alignContent: 'left',
                                        color: 'primary.main',
                                        paddingTop: '4px'
                                        }}
                        >
                            {category.name}
                        </Typography>
                        {/*<Typography variant="subtitle2"  component="div" >*/}
                        {/*    &nbsp;&nbsp;/&nbsp;&nbsp;*/}
                        {/*</Typography>*/}
                        <Typography variant="subtitle2"  component="div"
                                    sx={{
                                        alignItems: 'right',
                                        alignContent: 'right',
                                        color: 'grey.500',
                                        paddingBottom: '4px'
                                    }}
                        >
                            {category.count.toString()}
                        </Typography>
                    {index < categories.length - 1 && <Divider light={true}/>}
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}

function navBar() {
    return (
        <Drawer variant="permanent" open={true}>
            <Toolbar
                sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1],}}>
            </Toolbar>
            <Typography variant="h6" noWrap component="div"
                        marginTop='2vh'
                        marginBottom='2vh'>
                热门职业
            </Typography>

            <Divider/>

            <List component="nav">

                <NavBarItems />

            </List>

        </Drawer>
    )
}


// TODO remove, this demo shouldn't need to reset the theme.

export default function Dashboard() {
    const [mode, setMode] = React.useState(localStorage.getItem('ColorMode') || 'light');

    const defaultTheme = createTheme({palette: {mode}});

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const [industry, setIndustry] = useState('');

    const [subIndustry, setSubIndustry] = useState('');

    const handleIndustryChange = (event) => {
        setIndustry(event.target.value);
        console.log(event.target.value);
    }

    const handleSubIndustryChange = (event) => {
        setSubIndustry(event.target.value);
        console.log(event.target.value);
    }

    useEffect(() => {
        const localMode = localStorage.getItem('ColorMode');
        if (localMode) {
            setMode(localMode);
        }
    }, []);

    return (
        //<ThemeProvider theme={defaultTheme}>


            <Box sx={{display: 'flex'}}>
                <CssBaseline/>

                <AppBar position="absolute" open={false}>


                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            target='_self'
                            href='/'
                            sx={{
                                marginRight: '36px',
                            }}>

                            <HomeIcon />

                        </IconButton>

                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}>
                            行情分析
                        </Typography>

                    </Toolbar>

                </AppBar>

                <Box
                    component="main"
                    sx={{backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                        marginTop: '6vh',
                    }}>

                    <Toolbar/>

                    <SelectCat
                        handleIndustryChange={handleIndustryChange}
                        handleSubIndustryChange={handleSubIndustryChange}/>

                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        <Grid container spacing={3}>

                            <Grid item xs={12} md={8} lg={9}
                                  marginTop='4vh'>
                                    <Chart
                                        industry={industry}
                                        subIndustry={subIndustry}/>

                            </Grid>

                            <Grid item xs={12} md={4} lg={3}
                                  height={{xs: '40vh', sm: '40vh', md: '40vh', lg: '30vh'}}
                                  marginTop='6vh'>
                                    <Pie industry={industry}
                                         subIndustry={subIndustry}/>
                            </Grid>
                            <Grid item xs={12}
                                  marginTop='4vh'>
                                    <WordClouds
                                        industry={industry}
                                        subIndustry={subIndustry}/>
                            </Grid>
                            <Grid item xs={12}>
                                    <Map
                                        industry={industry}
                                        subIndustry={subIndustry}/>
                            </Grid>
                        </Grid>
                        <Copyright sx={{pt: 4}}/>

                    </Container>
                </Box>
                <Grid sx={{display: {xs: 'none', md: 'block'},}}>
                    {navBar()}
                </Grid>
            </Box>
        //</ThemeProvider>
    );
}
