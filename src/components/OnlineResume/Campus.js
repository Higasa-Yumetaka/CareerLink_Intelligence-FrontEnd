import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import {createContext, useEffect} from "react";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Campus({EducationHandleChange, CollegeHandleChange, EducationalExperienceHandleChange}) {

    const [education, setEducation] = React.useState('');

    const [college, setCollege] = React.useState('');

    const [educationalExperience, setEducationalExperience] = React.useState('');

    const [changed, setChanged] = React.useState(false);


    const EducationHandleChangeChild = (event) => {
        setEducation(event.target.value);
        EducationHandleChange(event);
        //console.log("education: ", education);
    };

    const CollegeHandleChangeChild = (event) => {
        setCollege(event.target.value);
        CollegeHandleChange(event);
        //console.log("college: ", college);
    }

    const EducationalExperienceHandleChangeChild = (event) => {
        setEducationalExperience(event.target.value);
        EducationalExperienceHandleChange(event);
        //console.log("educationalExperience: ", educationalExperience);
    }

    async function queryOnlineResume() {
        try {
            const response = await instance.get('/queryOnlineResume', {
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setEducation(response.data.data.education);
                    setCollege(response.data.data.college);
                    setEducationalExperience(response.data.data.campus_experience);
                    console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        console.log("Campus")
        if (!changed) {
            setChanged(true);
            //console.log("useEffect")
            queryOnlineResume().then();
        }
    }, [changed]);

    return (
            <Grid container spacing={3}>
                <FormGrid item xs={12}>
                    <Box sx={{minWidth: 120}}>
                        <FormLabel htmlFor="educational-background" required>
                            学历情况
                        </FormLabel>
                        {/*<div style={{height: '2vh'}}/>*/}
                        <FormControl
                            fullWidth
                            margin="normal">
                            {/*<InputLabel>学历</InputLabel>*/}
                            <Select
                                //labelId="educational-background-select-label"
                                //id="educational-background-select"
                                value={education}
                                // label="Age"
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                onChange={EducationHandleChangeChild}>
                                <MenuItem value={"本科"}>本科</MenuItem>
                                <MenuItem value={"研究生"}>研究生</MenuItem>
                                <MenuItem value={"博士"}>博士</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </FormGrid>

                <FormGrid item xs={12}>
                    <div style={{height: '4vh'}}/>
                    <FormLabel htmlFor="College" required>
                        毕业院校
                    </FormLabel>
                    <div style={{height: '2vh'}}/>
                    <OutlinedInput
                        id="College"
                        name="College"
                        type="college"
                        value={college}
                        // placeholder="毕业院校"
                        autoComplete="College"
                        onChange={CollegeHandleChangeChild}
                        // margin="normal"
                        required/>

                </FormGrid>

                <FormGrid item xs={12}>
                    <div style={{height: '4vh'}}/>
                    <FormLabel htmlFor="educational-experience-select-label">教育经历 *</FormLabel>
                    {/*<div style={{height: '2vh'}}/>*/}
                    <TextField
                        id="educational-experience-textfield"
                        onChange={EducationalExperienceHandleChangeChild}
                        // label="教育经历"
                        value={educationalExperience}
                        multiline
                        minRows={4}
                        margin="normal"
                        required/>
                </FormGrid>

            </Grid>
    );
}
