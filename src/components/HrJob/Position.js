import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useEffect} from "react";
import instance from "../../Axios/instance/Instance";
import HrSelectJob from "./HrSelectJob";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Position({handleCategoryChange, handleJobNameChange, handleMinSalaryChange, handleMaxSalaryChange}) {


    const [changed, setChanged] = React.useState(false);

    const [category, setCategory] = React.useState('');

    const handleCategoryChangeChild = (event) => {
        setCategory(event.target.value);
        handleCategoryChange(event);
    }

    const [jobName, setJobName] = React.useState('');

    const handleJobNameChangeChild = (event) => {
        setJobName(event.target.value);
        handleJobNameChange(event);
    }

    const [minSalary, setMinSalary] = React.useState('');

    const handleMinSalaryChangeChild = (event) => {
        setMinSalary(event.target.value);
        handleMinSalaryChange(event);
    }

    const [maxSalary, setMaxSalary] = React.useState('');

    const handleMaxSalaryChangeChild = (event) => {
        setMaxSalary(event.target.value);
        handleMaxSalaryChange(event);
    }

    async function queryJob() {
        try {
            const response = await instance.get('/queryJob', {});
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    console.log(response.data.data.category);
                    setCategory(response.data.data.category);
                    console.log("category: ", category);
                    setJobName(response.data.data.job_name);
                    setMinSalary(response.data.data.min_salary);
                    setMaxSalary(response.data.data.max_salary);
                    console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!changed) {
            setChanged(true);
            queryJob().then();
        }
    }, []);

    return (
        <Grid container spacing={3}>

            <FormGrid item xs={12}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>

                        <FormLabel htmlFor="educational-background" required>
                            选择职业大类
                        </FormLabel>
                        <div style={{height: '2vh'}}/>
                        <Select
                            value={category}
                            onChange={handleCategoryChangeChild}
                            // displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            required={true}>
                            <MenuItem value={'房地产/建筑'}>房地产/建筑</MenuItem>
                            <MenuItem value={'服务业'}>服务业</MenuItem>
                            <MenuItem value={'互联网/IT'}>互联网/IT</MenuItem>
                            <MenuItem value={'教育'}>教育</MenuItem>
                            <MenuItem value={'金融'}>金融</MenuItem>
                            <MenuItem value={'贸易'}>贸易</MenuItem>
                            <MenuItem value={'市场'}>市场</MenuItem>
                            <MenuItem value={'行政'}>行政</MenuItem>
                        </Select>
                    </FormControl>
            </FormGrid>

            <FormGrid item xs={12}>
                <div style={{height: '4vh'}}/>
                <FormLabel htmlFor="College" required>
                    职位名称
                </FormLabel>
                <div style={{height: '2vh'}}/>
                <OutlinedInput
                    id="College"
                    name="College"
                    type="college"
                    value={jobName}
                    autoComplete="College"
                    onChange={handleJobNameChangeChild}
                    required/>
            </FormGrid>

             <FormGrid item xs={12}
                      md={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <FormLabel htmlFor="educational-background" required>
                        最低薪资(千元/月)
                    </FormLabel>
                    <div style={{height: '2vh'}}/>
                    <TextField
                        id="expected-salary"
                        required
                        type={'number'}
                        inputProps={{ min: "0", max: "100" }}
                        value={minSalary}
                        onChange={handleMinSalaryChangeChild}>
                    </TextField>
                </FormControl>
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <FormLabel htmlFor="educational-background" required>
                        最高薪资(千元/月)
                    </FormLabel>
                    <div style={{height: '2vh'}}/>
                    <TextField
                        id="expected-salary"
                        required
                        type={'number'}
                        inputProps={{ min: "0", max: "100" }}
                        value={maxSalary}
                        onChange={handleMaxSalaryChangeChild}>
                    </TextField>
                </FormControl>
            </FormGrid>




        </Grid>
    );
}
