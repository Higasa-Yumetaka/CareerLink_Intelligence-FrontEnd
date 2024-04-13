import * as React from 'react';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import {styled} from '@mui/system';
import instance from "../../Axios/instance/Instance";
import {useEffect, useState} from "react";
import RadarS from "./radar";
import Button from "@mui/material/Button";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function AddressForm() {

    const [job, setJob] = React.useState('');

    const [education, setEducation] = React.useState('');

    const [college, setCollege] = React.useState('');

    const [userName, setUserName] = useState('');

    const [nickname, setNickname] = useState('');

    const [changed, setChanged] = React.useState(false);

    const [loaction, setLocation] = React.useState(true);

    const [edited, setEdited] = React.useState(false);


    async function queryOnlineResume() {
        try {
            const response = await instance.get('/queryOnlineResume', {});
            if (response.status === 200) {
                if (response.data.code === 0) {
                    setJob(response.data.data.intended_job);
                    setEducation(response.data.data.education);
                    setCollege(response.data.data.college);
                    //console.log("查询成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function updateNickname(value) {
        try {
            const response = await instance.post('/updateUserInfo', {
                nickname: value
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    console.log("更新成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    async function updateLocation(value) {
        try {
            const response = await instance.post('/updateUserInfo', {
                location: value
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    console.log("更新成功");
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    async function fetchUserInfo() {
        try {
            const response = await instance.get('/getUserInfo');

            if (response.data.data.nickname && response.data.data.nickname === undefined) {
                setLocation(response.data.data.location);
                setUserName(response.data.data.username);
            } else {
                setLocation(response.data.data.location)
                setUserName(response.data.data.username);
                setNickname(response.data.data.nickname)
            }

        } catch (error) {
            console.error('Error fetching user info:', error);
        }
    }

    const handleNicknameChange = (event) => {
        setNickname(event.target.value);
        setEdited(true);
        //fetchUserInfo();
    }

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        setEdited(true);
    }

    const updateAll = () => {
        updateNickname(nickname);
        updateLocation(loaction);
        setEdited(false);
    }

    useEffect(() => {
        if(!changed){
            setChanged(true);
            //console.log("useEffect")
            fetchUserInfo().then();
            queryOnlineResume().then();
        }
    }, [changed]);


    return (
        <Grid container spacing={3}>
            <FormGrid item xs={12} md={6}>
                <FormLabel>
                    邮箱
                </FormLabel>
                <OutlinedInput
                    value={userName}
                    disabled={true}
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel>
                    昵称
                </FormLabel>
                <OutlinedInput
                    onChange={handleNicknameChange}
                    value={nickname}
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel>
                    学历
                </FormLabel>
                <OutlinedInput
                    value={education}
                    disabled={true}
                />
            </FormGrid>
            <FormGrid item xs={12} md={6}>
                <FormLabel>院校</FormLabel>
                <OutlinedInput
                    value={college}
                    disabled={true}
                />
            </FormGrid>
            <FormGrid item xs={12}>
                <FormLabel>
                    工作地点
                </FormLabel>
                <OutlinedInput
                    value={loaction}
                    onChange={handleLocationChange}
                />
            </FormGrid>
            <FormGrid item xs={12}>
                <FormLabel>
                    意向行业
                </FormLabel>
                <OutlinedInput
                    value={job}
                    disabled={true}
                    onChange={handleLocationChange}
                />
            </FormGrid>

            <Button
                variant="contained"
                // endIcon={<ChevronRightRoundedIcon />}
                onClick={updateAll}
                sx={{
                    width: { xs: '100%', sm: 'fit-content' },
                    marginTop: '5vh',
                    marginButtom: '10vh',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    //edited为false时，display为none
                    display: edited ? 'block' : 'none',
                }}>
                保存
            </Button>
            <FormGrid item xs={16}>
                <RadarS/>
            </FormGrid>
        </Grid>
    );
}
