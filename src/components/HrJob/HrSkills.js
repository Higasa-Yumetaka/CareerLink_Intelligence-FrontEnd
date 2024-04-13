import * as React from 'react';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function HrSkills({handleEducationChange, handleDescriptionChange, handleRequirementChange}) {

    const [changed, setChanged] = React.useState(false);

    const [education, setEducation] = React.useState('');

    const handleEducationChangeChild = (event) => {
        setEducation(event.target.value);
        handleEducationChange(event);
    }

    const [description, setDescription] = React.useState('');

    const handleDescriptionChangeChild = (event) => {
        setDescription(event.target.value);
        handleDescriptionChange(event);
    }

    const [requirement, setRequirement] = React.useState('');

    const handleRequirementChangeChild = (event) => {
        setRequirement(event.target.value);
        handleRequirementChange(event);
    }

    async function queryJob() {
        try {
            const response = await instance.get('/queryJob', {
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
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

    useEffect(() => {
        console.log("Campus")
        if (!changed) {
            setChanged(true);
            //console.log("useEffect")
            queryJob().then();
        }
    }, [changed]);

    return (
            <Grid container spacing={3}>
                <FormGrid item xs={12}>
                    <Box sx={{minWidth: 120}}>
                        <FormLabel htmlFor="educational-background" required>
                            学历要求
                        </FormLabel>
                        <FormControl
                            fullWidth
                            margin="normal"
                        >
                            <Select
                                value={education}
                                displayEmpty
                                inputProps={{ 'aria-label': 'Without label' }}
                                onChange={handleEducationChangeChild}>
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
                        职责描述
                    </FormLabel>
                    <div style={{height: '2vh'}}/>
                    <TextField
                        value={description}
                        minRows={4}
                        multiline
                        margin='normal'
                        onChange={handleDescriptionChangeChild}
                        required/>

                </FormGrid>

                <FormGrid item xs={12}>
                    <div style={{height: '4vh'}}/>
                    <FormLabel >职位要求 *</FormLabel>
                    {/*<div style={{height: '2vh'}}/>*/}
                    <TextField
                        onChange={handleRequirementChangeChild}
                        // label="教育经历"
                        value={requirement}
                        multiline
                        minRows={4}
                        margin="normal"
                        required/>
                </FormGrid>

            </Grid>
    );
}
