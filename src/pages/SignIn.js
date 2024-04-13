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
import instance from '../Axios/instance/Instance';

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


export default function SignIn() {

    async function login(email, password) {
        try {
            const response = await instance.post('/login', {
                username: email,
                password: password
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 保存 token到cookie
                    document.cookie = `Authorization=${response.data.data.token}; path=/; max-age=86400`;
                    // 登录成功，跳转到首页
                    window.location.href = '/';
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const response = login(data.get('email'), data.get('password'));
        console.log(response);
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
                            登 录
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="电子邮件地址"
                                name="email"
                                autoComplete="email"
                                autoFocus/>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="输入您的密码"
                                type="password"
                                id="password"
                                autoComplete="current-password"/>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="在此设备上记住"/>
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
                                登 录
                            </Button>

                            <Grid container>

                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        忘记密码？
                                    </Link>
                                </Grid>

                                <Grid item>
                                    <Link href="/sign-up-students" variant="body2">
                                        {"没有账号？前往注册"}
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
