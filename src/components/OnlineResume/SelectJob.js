import * as React from 'react';
import {useEffect} from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {styled} from '@mui/system';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function SelectJob({JobHandleChange, SalaryHandleChange}) {

    const [job, setJob] = React.useState('');

    const [salary, setSalary] = React.useState('');

    const [changed, setChanged] = React.useState(false);

    const handleJobChange = (event) => {
        setJob(event.target.value);
        JobHandleChange(event);
    };

    const handleSalaryChange = (event) => {
        setSalary(event.target.value);
        SalaryHandleChange(event);
    }

    async function queryOnlineResume() {
        try {
            const response = await instance.get('/queryOnlineResume', {});
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    console.log(response.data.data.intended_job);
                    setJob(response.data.data.intended_job);
                    setSalary(response.data.data.expected_salary);
                    //console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (!changed) {
            setChanged(true);
            console.log("useEffect")
            queryOnlineResume().then();
        }
    }, []);

    return (
            <Grid container spacing={3}>

                <FormGrid item xs={12}
                          md={6}>

                    <FormControl sx={{m: 1, minWidth: 120}}>

                        <FormLabel htmlFor="educational-background" required>
                            意向行业
                        </FormLabel>
                        <div style={{height: '2vh'}}/>
                        <Select
                            value={job}
                            onChange={handleJobChange}
                            displayEmpty
                            inputProps={{'aria-label': 'Without label'}}
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
                <FormGrid item xs={12} md={6}>
                    <FormControl sx={{m: 1, minWidth: 120}}>
                        <FormLabel htmlFor="educational-background" required>
                            期望薪资(千元/月)
                        </FormLabel>
                        <div style={{height: '2vh'}}/>
                        <TextField
                            id="expected-salary"
                            required
                            type={'number'}
                            inputProps={{min: "0", max: "100"}}
                            value={salary}
                            onChange={handleSalaryChange}>
                        </TextField>
                    </FormControl>
                </FormGrid>
            </Grid>
    );
}
