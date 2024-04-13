import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {FormControl, FormLabel, RadioGroup} from "@mui/material";
import {Radio} from "antd";

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

const defaultTheme = createTheme();

export default function SignUpStudents() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    component="main"
                    maxWidth="xs"
                    sx={{
                        position: 'relative',
                        minHeight: '93vh', // 保证 Container 的最小高度为视窗高度
                    }}>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}>
                        <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            求职用户注册
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="电子邮件地址"
                                        name="email"
                                        autoComplete="email"/>
                                </Grid>
                                <Grid item xs={20}>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="输入您的密码"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"/>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        label="确认您的密码"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"/>
                                </Grid>
                                <Grid item xs={20}>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                        label="我想通过电子邮件接收灵感、营销促销和更新。"/>
                                </Grid>
                            </Grid>
                            <Typography
                                variant="body1"
                                color="text.secondary"
                                sx={{mb: {xs: 2, sm: 4}}}>
                            </Typography>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}>
                                注 册
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item xs>
                                    <Link href="/sign-up-hr" variant="body2">
                                        企业用户注册通道
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/sign-in" variant="body2">
                                        已有账号？前往登录
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            width: '90%',
                        }}>
                        <Copyright sx={{mt: 8, mb: 4}}/>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
