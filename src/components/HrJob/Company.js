import * as React from 'react';

import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import TextField from '@mui/material/TextField';
import {useEffect} from "react";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Company({handelCompanyNameChange, handleLocationChange}) {

    const [changed, setChanged] = React.useState(false);

    const [companyName, setCompanyName] = React.useState('');

    const handleCompanyNameChangeChild = (event) => {
        setCompanyName(event.target.value);
        handelCompanyNameChange(event);
    }

    const [location, setLocation] = React.useState('');

    const handleLocationChangeChild = (event) => {
        setLocation(event.target.value);
        handleLocationChange(event);
    }

    async function queryJob() {
        try {
            const response = await instance.get('/queryJob', {
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setCompanyName(response.data.data.company_name);
                    setLocation(response.data.data.location);
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
                    <div style={{height: '4vh'}}/>
                    <FormLabel htmlFor="College" required>公司名称 </FormLabel>
                    <div style={{height: '2vh'}}/>
                    <OutlinedInput
                        id="College"
                        name="College"
                        type="college"
                        value={companyName}
                        autoComplete="College"
                        onChange={handleCompanyNameChangeChild}
                        required/>
                </FormGrid>
                <FormGrid item xs={12}>
                    <div style={{height: '4vh'}}/>
                    <FormLabel htmlFor="educational-experience-select-label" required>公司地址</FormLabel>
                    <TextField
                        id="educational-experience-textfield"
                        onChange={handleLocationChangeChild}
                        value={location}
                        multiline
                        minRows={1}
                        margin="normal"
                        required/>
                </FormGrid>
            </Grid>
    );
}
