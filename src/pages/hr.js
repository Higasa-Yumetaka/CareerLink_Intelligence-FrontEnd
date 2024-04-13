import * as React from 'react';
import {useEffect} from "react";
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';

import {createTheme, ThemeProvider} from '@mui/material/styles';

import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

import ToggleColorMode from './ToggleColorMode';
import instance from "../Axios/instance/Instance";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Company from "../components/HrJob/Company";
import Position from "../components/HrJob/Position";
import HrSkills from "../components/HrJob/HrSkills";
import Review from '../components/HrJob/Review';

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

const steps = ['公司信息', '职位信息', '招聘要求', '完成'];


export default function HR() {
    // 主题
    const [mode, setMode] = React.useState(localStorage.getItem('ColorMode') || 'light');

    const [open, setOpen] = React.useState(true);

    // 主题
    const defaultTheme = createTheme({palette: {mode}});

    // 步骤
    const [activeStep, setActiveStep] = React.useState(0);


    const [companyName, setCompanyName] = React.useState('');

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    }

    const [location, setLocation] = React.useState('');

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const [category, setCategory] = React.useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const [jobName, setJobName] = React.useState('');

    const handleJobNameChange = (event) => {
        setJobName(event.target.value);
    }

    const [minSalary, setMinSalary] = React.useState('');

    const handleMinSalaryChange = (event) => {
        setMinSalary(event.target.value);
    }

    const [maxSalary, setMaxSalary] = React.useState('');

    const handleMaxSalaryChange = (event) => {
        setMaxSalary(event.target.value);
    }

    const [education, setEducation] = React.useState('');

    const handleEducationChange = (event) => {
        setEducation(event.target.value);
    }

    const [description, setDescription] = React.useState('');

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    }

    const [requirement, setRequirement] = React.useState('');

    const handleRequirementChange = (event) => {
        setRequirement(event.target.value);
    }

    const handleClose = () => {
        setOpen(false);
    };

    // 步骤内容
    function getStepContent(step) {
        switch (step) {
            case 0:
                return <Company
                    handelCompanyNameChange={handleCompanyNameChange}
                    handleLocationChange={handleLocationChange}
                    />;
            case 1:
                return <Position
                    handleCategoryChange={handleCategoryChange}
                    handleJobNameChange={handleJobNameChange}
                    handleMinSalaryChange={handleMinSalaryChange}
                    handleMaxSalaryChange={handleMaxSalaryChange}
                    />
            case 2:
                return <HrSkills
                    handleEducationChange={handleEducationChange}
                    handleDescriptionChange={handleDescriptionChange}
                    handleRequirementChange={handleRequirementChange}
                    />;
            case 3:
                return <Review />;
            default:
                throw new Error('Unknown step');
        }
    }


    // 创建在线简历
    async function createJob() {
        try {
            const response = await instance.post('/createJob', {
                company_name: companyName,
                location: location,
                category: category,
                job_name: jobName,
                min_salary: minSalary,
                max_salary: maxSalary,
                education: education,
                description: description,
                requirement: requirement,
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
    async function updateJob() {
        try {
            const response = await instance.put('/updateJob', {
                company_name: companyName,
                location: location,
                category: category,
                job_name: jobName,
                min_salary: minSalary,
                max_salary: maxSalary,
                education: education,
                description: description,
                requirement: requirement,
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
    async function queryJob() {
        try {
            const response = await instance.get('/queryJob', {});
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setCompanyName(response.data.data.company_name);
                    setLocation(response.data.data.location);
                    setCategory(response.data.data.category);
                    setJobName(response.data.data.job_name);
                    setMinSalary(response.data.data.min_salary);
                    setMaxSalary(response.data.data.max_salary);
                    setEducation(response.data.data.education);
                    setDescription(response.data.data.description);
                    setRequirement(response.data.data.requirement);
                    console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    const toggleColorMode = () => {
        localStorage.setItem('ColorMode', mode === 'dark' ? 'light' : 'dark');
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    const handleNext = () => {
        //console.log("activeStep: ", activeStep)
        if (activeStep < steps.length - 1) {
            if (activeStep === 0) {
                createJob().then();
                updateJob().then();
            } else {
                updateJob().then();
            }
        } else {
            window.location.href = "/";
        }
        setActiveStep(activeStep + 1);
        //console.log("activeStep: ", activeStep)
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    }

    useEffect(() => {
        //console.log("activeStep: ", activeStep)
        queryJob().then();
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline/>

            {/* 权限使用警告 */}
            <React.Fragment>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {"个人信息使用许可"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            我们需要您填写一些公司信息，包括您的公司情况、职位信息等等，这些信息将用于生成您的招聘信息概要并进行人才推荐。我们将严格保护您的公司信息，不会泄露给任何第三方。若不同意，请点击下方按钮返回首页。若您继续填写信息，即表示您同意我们的个人信息使用许可。
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}
                                target={"_self"}
                                href={"/"}>
                            不同意
                        </Button>
                        <Button onClick={handleClose}>
                            同意
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>


            <Grid container
                  sx={{
                      height: {
                          xs: '100%',
                          sm: '100dvh',
                          alignItems: 'center',
                          marginBottom: '200px',
                          //margin: 'auto',
                          minHeight: '110vh',
                      }}}>
                <Grid
                    item
                    sm={12}
                    md={7}
                    lg={8}
                    sx={{
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
                    {/* phone */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: {sm: 'space-between', md: 'flex-end'},
                            alignItems: 'center',
                            width: '100%',
                            maxWidth: {sm: '100%', md: 600},
                        }}>
                        <Box
                            sx={{
                                display: {xs: 'flex', md: 'none'},
                                flexDirection: 'row',
                                width: '100%',
                                justifyContent: 'space-between',
                            }}>
                            <Button
                                startIcon={<ArrowBackRoundedIcon/>}
                                component="a"
                                href="/"
                                sx={{alignSelf: 'start'}}>
                                返回首页
                            </Button>
                            <ToggleColorMode mode={mode}
                                             toggleColorMode={toggleColorMode}
                            />
                        </Box>
                        <Box
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                                //height: 150,
                            }}>
                            <Box
                                sx={{
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
                    <Box
                        sx={{
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
                                        {activeStep === steps.length - 1 ? '确定' : '下一步'}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

