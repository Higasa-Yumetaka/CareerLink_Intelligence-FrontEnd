import * as React from 'react';
import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

import {styled, createTheme, ThemeProvider} from '@mui/material/styles';

import Campus from '../components/OnlineResume/Campus';
import Skills from '../components/OnlineResume/Skills';
import Review from '../components/OnlineResume/Review';
import SelectJob from "../components/OnlineResume/SelectJob";
import ToggleColorMode from './ToggleColorMode';
import instance from "../Axios/instance/Instance";
import Honors from "../components/OnlineResume/Honors";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";


function ToggleCustomTheme({showCustomTheme, toggleCustomTheme}) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100dvw',
                position: 'fixed',
                bottom: 24,
            }}
        >
        </Box>
    );
}

ToggleCustomTheme.propTypes = {
    showCustomTheme: PropTypes.shape({
        valueOf: PropTypes.func.isRequired,
    }).isRequired,
    toggleCustomTheme: PropTypes.func.isRequired,
};

// 步骤
const steps = ['意向调查', '学历情况', '特长与经历', '作品与荣誉', '完成'];

export default function OnlineResume() {
    // 主题
    const [mode, setMode] = React.useState(localStorage.getItem('ColorMode') || 'light');

    const defaultTheme = createTheme({palette: {mode}});

    const checkAuthorization = () => {
        const cookie = document.cookie;
        return cookie.includes('Authorization');
    };


    // 步骤
    const [activeStep, setActiveStep] = React.useState(0);

    // 表单信息

    // 意向工作
    const [job, setJob] = React.useState('');

    const [salary, setSalary] = React.useState('');

    const JobHandleChange = (event) => {
        setJob(event.target.value);
        //console.log("job: ", job);
    }

    const SalaryHandleChange = (event) => {
        setSalary(event.target.value);
        //console.log("salary: ", salary);
    }

    // 学历情况
    const [education, setEducation] = React.useState('');

    const [college, setCollege] = React.useState('');

    const [educationalExperience, setEducationalExperience] = React.useState('');

    const EducationHandleChange = (event) => {
        setEducation(event.target.value);
        console.log("education: ", education);
    };

    const CollegeHandleChange = (event) => {
        setCollege(event.target.value);
        console.log("college: ", college);
    }

    const EducationalExperienceHandleChange = (event) => {
        setEducationalExperience(event.target.value);
        console.log("educationalExperience: ", educationalExperience);
    }

    // 技能与特长

    const [internExperience, setInternExperience] = React.useState('');

    const [projectExperience, setProjectExperience] = React.useState('');

    const [skillsSpecialties, setSkillsSpecialties] = React.useState('');

    const [trainingExperience, setTrainingExperience] = React.useState('');

    const InternExperienceHandleChange = (event) => {
        setInternExperience(event.target.value);
        //console.log("InternExperience: ", InternExperience);
    }

    const ProjectExperienceHandleChange = (event) => {
        setProjectExperience(event.target.value);
        //console.log("ProjectExperience: ", ProjectExperience);
    }

    const SkillsSpecialtiesHandleChange = (event) => {
        setSkillsSpecialties(event.target.value);
        //console.log("SkillsSpecialties: ", SkillsSpecialties);
    }

    const TrainingExperienceHandleChange = (event) => {
        setTrainingExperience(event.target.value);
        console.log("TrainingExperience: ", trainingExperience);
    }

    // 作品与荣誉

    const [relatedWorks, setRelatedWorks] = React.useState('');

    const [receiveHonor, setReceiveHonor] = React.useState('');

    const RelatedWorksHandleChange = (event) => {
        setRelatedWorks(event.target.value);
        //console.log("RelatedWorks: ", RelatedWorks);
    }

    const ReceiveHonorHandleChange = (event) => {
        setReceiveHonor(event.target.value);
        //console.log("ReceiveHonor: ", ReceiveHonor);
    }


    // 内部状态
    const [warnOpen, setWarnOpen] = React.useState(true);

    const [appBarOpen, setAppBarOpen] = React.useState(true);

    const [navPosition, setNavPosition] = React.useState(0);

    // 警告
    const handleWarnClose = () => {
        setWarnOpen(false);
    };

    // 抽屉
    const toggleDrawer = () => {
        setAppBarOpen(!appBarOpen);
    };


    // 步骤内容
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <SelectJob
                    JobHandleChange={JobHandleChange}
                    SalaryHandleChange={SalaryHandleChange}
                />;
            case 1:
                return <Campus
                    EducationHandleChange={EducationHandleChange}
                    CollegeHandleChange={CollegeHandleChange}
                    EducationalExperienceHandleChange={EducationalExperienceHandleChange}/>;
            case 2:
                return <Skills
                    SkillsSpecialtiesHandleChange={SkillsSpecialtiesHandleChange}
                    ProjectExperienceHandleChange={ProjectExperienceHandleChange}
                    InternExperienceHandleChange={InternExperienceHandleChange}
                    TrainingExperienceHandleChange={TrainingExperienceHandleChange}/>;
            case 3:
                return <Honors
                    ReceiveHonorHandleChange={ReceiveHonorHandleChange}
                    RelatedWorksHandleChange={RelatedWorksHandleChange}/>;
            case 4:
                return <Review/>;
            default:
                throw new Error('Unknown step');
        }
    }


    // 创建在线简历
    async function createOnlineResume(education, college, educationalExperience) {
        try {
            const response = await instance.post('/createOnlineResume', {
                intended_job: job,
                education: education,
                college: college,
                campus_experience: educationalExperience,
                skills_and_specialties: skillsSpecialties,
                project_experience: projectExperience,
                intern_experience: internExperience,
                training_experience: trainingExperience,
                receive_honor: receiveHonor,
                related_works: relatedWorks,
                expected_salary: salary,
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 创建成功
                    console.log("创建成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    // 更新在线简历
    async function updateOnlineResume() {
        try {
            const response = await instance.put('/updateOnlineResume', {
                intended_job: job,
                education: education,
                college: college,
                campus_experience: educationalExperience,
                skills_and_specialties: skillsSpecialties,
                project_experience: projectExperience,
                intern_experience: internExperience,
                training_experience: trainingExperience,
                receive_honor: receiveHonor,
                related_works: relatedWorks,
                expected_salary: salary,
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 更新成功
                    console.log("更新成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    // 查询在线简历
    async function queryOnlineResume() {
        try {
            const response = await instance.get('/queryOnlineResume', {});
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setJob(response.data.data.intended_job);
                    setEducation(response.data.data.education);
                    setCollege(response.data.data.college);
                    setEducationalExperience(response.data.data.campus_experience);
                    setSkillsSpecialties(response.data.data.skills_and_specialties);
                    setProjectExperience(response.data.data.project_experience);
                    setInternExperience(response.data.data.intern_experience);
                    setTrainingExperience(response.data.data.training_experience);
                    setReceiveHonor(response.data.data.receive_honor);
                    setRelatedWorks(response.data.data.related_works);
                    setSalary(response.data.data.expected_salary);
                    //console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    // 切换颜色模式
    const toggleColorMode = () => {
        localStorage.setItem('ColorMode', mode === 'dark' ? 'light' : 'dark');
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    // 下一步
    const handleNext = () => {
        console.log("activeStep: ", activeStep)
        if (activeStep < steps.length - 1) {
            if (activeStep === 0) {
                createOnlineResume().then();
                updateOnlineResume().then();
            } else {
                updateOnlineResume().then();
            }
        } else {
            //console.log("setNavPosition(1)")
            // 转到职位推荐
            setNavPosition(1);
        }
        // 执行下一步
        setActiveStep(activeStep + 1);
        //console.log("activeStep: ", activeStep)
    };

    // 上一步
    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    // 初始化
    useEffect(() => {

        const authorizationExists = checkAuthorization();
        if (!authorizationExists) {
            // 如果未授权，则重定向到登录页面
            window.location.href = '/sign-in';
        }
        //console.log("activeStep: ", activeStep)
        queryOnlineResume().then();
        // 检查 cookie 中是否存在 authorization 项

        //console.log("NavPosition: ", navPosition);
    }, []);

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

    // 导航栏项目
    function NavBarItems({navPosition, setNavPosition}) {

        const handleListItemClick = (event, index) => {
            setNavPosition(index);
            console.log("navPosition: ", navPosition);
        }

        return (
            <React.Fragment>

                <ListItemButton
                    selected={navPosition === 0}
                    onClick={(event) => handleListItemClick(event, 0)}>
                    <ListItemIcon>
                        <LayersIcon/>
                    </ListItemIcon>
                    <ListItemText primary="在线简历"/>
                </ListItemButton>

                <ListItemButton
                    selected={navPosition === 1}
                    onClick={(event) => handleListItemClick(event, 1)}>
                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="职位推荐"/>
                </ListItemButton>

            </React.Fragment>
        )
    }

    // 主体：在线简历
    function resumeBody() {
        return (
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
                                返回首页
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
                                    返回首页
                                </Button>
                                <ToggleColorMode mode={mode}
                                                 toggleColorMode={toggleColorMode}/>
                            </Box>
                            <Stepper
                                id="desktop-stepper"
                                activeStep={activeStep}
                                alternativeLabel
                                sx={{
                                    width: '100%',
                                    height: 40,
                                }}>
                                {steps.map((label) => (
                                    <Step
                                        sx={{
                                            ':first-child': {pl: 0},
                                            ':last-child': {pr: 0},
                                        }}
                                        key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        </Box>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                        width: '100%',
                        maxWidth: {sm: '100%', md: 600},
                        maxHeight: '720px',
                        gap: {xs: 5, md: 'none'},
                    }}>
                        <Stepper
                            id="mobile-stepper"
                            activeStep={activeStep}
                            alternativeLabel
                            sx={{display: {sm: 'flex', md: 'none'}}}>
                            {steps.map((label) => (
                                <Step
                                    sx={{
                                        ':first-child': {pl: 0},
                                        ':last-child': {pr: 0},
                                        '& .MuiStepConnector-root': {top: {xs: 6, sm: 12}},
                                    }}
                                    key={label}>
                                    <StepLabel
                                        sx={{'.MuiStepLabel-labelContainer': {maxWidth: '70px'}}}>
                                        {label}
                                    </StepLabel>
                                </Step>))}
                        </Stepper>
                        {activeStep === steps.length ? (
                            <></>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: {xs: 'column-reverse', sm: 'row'},
                                        justifyContent: activeStep !== 0 ? 'space-between' : 'flex-end',
                                        alignItems: 'end',
                                        flexGrow: 1,
                                        gap: 1,
                                        pb: {xs: 12, sm: 0},
                                        mt: {xs: 2, sm: 0},
                                        mb: '60px',
                                    }}>
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="text"
                                            sx={{
                                                display: {xs: 'none', sm: 'flex'},
                                            }}>
                                            上一步
                                        </Button>)}
                                    {activeStep !== 0 && (
                                        <Button
                                            startIcon={<ChevronLeftRoundedIcon/>}
                                            onClick={handleBack}
                                            variant="outlined"
                                            fullWidth
                                            sx={{
                                                display: {xs: 'flex', sm: 'none'},
                                            }}>
                                            上一步
                                        </Button>
                                    )}
                                    <Button
                                        variant="contained"
                                        endIcon={<ChevronRightRoundedIcon/>}
                                        onClick={handleNext}
                                        sx={{width: {xs: '100%', sm: 'fit-content'},}}>
                                        {activeStep === steps.length - 1 ? '查看' : '下一步'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>
        )
    }

    const recommendItems = [
        {
            company: '上海纯氧互娱科技有限公司',
            job: '图像算法开发工程师',
            salary: '50-80K · 13薪',
            info: '1、负责公司产品的图像算法研发、优化和测试；2、研究深度学习及传统机器学习中核心算法，针对目标问题收集样本，训练模型'
        },
        {
            company: '维沃移动通信有限公司',
            job: '软件开发工程师',
            salary: '20-35K',
            info: '1.参与android APP软件的系统分析和设计方案，基础组件开发；2.按照产品需求文档，完成软件设计开发；3.对潜在的技术风险进行测试排查及修复；4.根据性能指标优化软件系统的性能，保证系统的安全、稳定、快速运行。1.大专或本科学历，计算机或理工科相关专业毕业；2.有5年或以上的android开发经验，至少参与过一个完整的商业级手机应用开发项目；3.Java语言基础扎实，熟练掌握android studio， git等工具；熟悉android的应用API，如应用生命周期，四大组件的特性，掌握多进程，多线程环境的开发，常用的设计模式。熟悉应用的内存，CPU，功耗，流畅度的性能优化。熟悉自定义view和动画，有网络编程、多媒体开发经验、熟悉BLE，WIFI P2P开发。有扎实的数据结构和算法基础；4.具有良好的言语表达能力，工作认真负责，有较强的自我驱动力、学习能力，以及抗压能力。'
        },
        {
            company: '北京分愿帽科技有限公司',
            job: 'Android开发工程师',
            salary: '30-60K · 15薪',
            info: '计算机相关专业，大专及以上学历；负责Android 手机客户端和平板端等应用产品的开发和维护；参与产品需求的沟通、讨论'
        },
        {
            company: '安徽省智慧交通科技有限责任公司',
            job: '前端开发工程师',
            salary: '16-24K · 13薪',
            info: '1、计算机相关专业，专科及以上学历，5年以上相关工作经验。2、精通HTML5和CSS2、CSS3。3、精通使用JavaScript、Ajax、 JQuery。4、熟悉主流的Vue.js、AngularJS、Node.js，vue mwm框架,。5、有微信小程序开发经验优先PS:公司目前在组建高质量开发团队,需要高级前端开发1名，最好近两年没有换过工作，薪资可谈。'
        },
    ];

    // 主体：职位推荐
    function ResumeRecommend() {
        return (
            <Grid container sx={{height: {xs: '100%', sm: '100vh', alignItems: 'center'}}}>
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
                    <Grid container spacing='2vh' rowSpacing='2vh' columnSpacing='2vh'>
                        {recommendItems.map((item, index) => (
                            <div key={index}>
                                <Card
                                    sx={{
                                        width: '40vh',
                                        height: '22vh',
                                        padding: 2,
                                        border: 2,
                                        borderColor: 'primary.main',
                                        borderRadius: 2
                                    }}>
                                    <CardContent>
                                        <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                            {item.company}
                                        </Typography>
                                        <Typography variant="h5" component="div">
                                            {item.job}
                                        </Typography>
                                        <Typography sx={{mb: 1.5}} color="text.secondary">
                                            {item.salary}
                                        </Typography>
                                    </CardContent>
                                    <CardActions
                                        sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                        <Button size="small">了解详情</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        ))}
                    </Grid>
                    <Grid item sx={{position: 'fixed', right: '20px', bottom: '20px'}}>
                        <Button variant="contained" color="primary"
                                target={"_self"}
                                href={"/"}>返回主页</Button>
                    </Grid>
                </Grid>
            </Grid>
        );
    }


    // 导航内容
    function getNavContent(navPosition) {
        switch (navPosition) {
            case 0:
                return resumeBody();
            case 1:
                return ResumeRecommend();
            default:
                throw new Error('Unknown navPosition');
        }
    }

    // 权限警告
    function permissionWarning() {
        return (
            <React.Fragment>
                <Dialog
                    open={warnOpen}
                    onClose={handleWarnClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"个人信息使用许可"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            我们需要您填写一些个人信息，包括您的学历情况、特长与经历、作品与荣誉等，这些信息将用于生成您的在线简历并进行职位推荐。我们将严格保护您的个人信息，不会泄露给任何第三方。若不同意，请点击下方按钮返回首页。若您继续填写信息，即表示您同意我们的个人信息使用许可。
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleWarnClose}
                                target={"_self"}
                                href={"/"}>
                            不同意
                        </Button>
                        <Button onClick={handleWarnClose}>
                            同意
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }

    // 导航栏
    function navBar() {
        return (
            <Drawer variant="permanent" open={appBarOpen}>
                <Toolbar
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        px: [1],
                    }}>
                    <IconButton onClick={toggleDrawer}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </Toolbar>
                <Divider/>

                <List component="nav">

                    <NavBarItems navPosition={navPosition} setNavPosition={setNavPosition}/>

                </List>

            </Drawer>
        )
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>

            {permissionWarning()}

            <Box sx={{display: 'flex'}}>

                {navBar()}

                {getNavContent(navPosition)}

            </Box>

        </ThemeProvider>
    );
}

