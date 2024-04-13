import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import {alpha} from "@mui/material";

const items = [
    {
        icon: <SettingsSuggestRoundedIcon/>,
        title: '个性化匹配服务',
        description:
            '利用先进的算法和人工智能技术，根据用户的兴趣、技能、经验和求职目标，为他们提供个性化的职业推荐，确保每位用户都能找到最适合的工作机会。',
    },
    {
        icon: <ConstructionRoundedIcon/>,
        title: '广泛的职位覆盖',
        description:
            '涵盖各行各业的职位，从技术岗位到销售、市场营销、金融等各种职业领域，满足用户不同的求职需求。',
    },
    {
        icon: <ThumbUpAltRoundedIcon/>,
        title: '详尽的职位信息',
        description:
            '提供详细的职位描述、要求和福利待遇，让用户可以全面了解每个职位的情况，更好地做出求职决策。',
    },
    {
        icon: <AutoFixHighRoundedIcon/>,
        title: '实时更新的职位信息',
        description:
            '网站定期更新职位信息，确保用户获取到最新的信息，及时了解市场动态，抓住求职机会。',
    },
    {
        icon: <SupportAgentRoundedIcon/>,
        title: '职业发展建议',
        description:
            '除了职位推荐，本网站还提供职业发展建议和求职技巧，帮助用户提升求职竞争力，实现职业目标。',
    },
    {
        icon: <QueryStatsRoundedIcon/>,
        title: '优秀的交互体验',
        description:
            '无论在手机还是电脑，白天还是夜晚，在本网站均能享受优秀的使用体验。',
    },
];

export default function Highlights() {
    return (
        <Box
            id="highlights"
            sx={(theme) => ({
                pt: {xs: 4, sm: 12},
                pb: {xs: 8, sm: 16},
                color: 'white',
                bgcolor:
                    theme.palette.mode === 'light'
                        ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                        : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
            })}>
            <Container
                sx={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: {xs: 3, sm: 6},
                }}
            >
                <Box
                    sx={{
                        width: {sm: '100%', md: '60%'},
                        textAlign: {sm: 'left', md: 'center'},
                    }}
                >
                    <Typography component="h2" variant="h4"
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode === 'light' ? 'primary.main' : 'white',
                                }}>
                        产品亮点
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{mb: {xs: 2, sm: 2}}}>
                    </Typography>
                    <Typography variant="body1" sx={{color: 'grey.400'}}>
                        {/*Explore why our product stands out: adaptability, durability,*/}
                        {/*user-friendly design, and innovation. Enjoy reliable customer support and*/}
                        {/*precision in every detail.*/}
                    </Typography>
                </Box>
                <Grid container spacing={2.5}
                      sx={{
                          color: (theme) =>
                              theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
                      }}
                >
                    {items.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Stack
                                direction="column"
                                color="inherit"
                                component={Card}
                                spacing={1}
                                useFlexGap
                                sx={(theme)=>({
                                    p: 3,
                                    height: '100%',
                                    border: '2px solid',
                                    borderColor:
                                        theme.palette.mode === 'light'
                                        ? 'grey.200'
                                        : 'grey.800',
                                    background: 'transparent',
                                    backgroundColor:
                                        theme.palette.mode === 'light'
                                        ? 'linear-gradient(180deg, #DCDCDC, #F8F8FF)'
                                        : 'grey.900',
                                })}
                            >
                                <Box sx={{opacity: '50%'}}>{item.icon}</Box>
                                <div>
                                    <Typography fontWeight="medium"
                                                gutterBottom
                                                sx={(theme)=>({
                                                    color: theme.palette.mode === 'light'
                                                    ? 'primary.main'
                                                    : 'white',
                                                })}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography variant="body2" sx={(theme)=>({
                                        color:
                                            theme.palette.mode === 'light'
                                            ? 'primary.main'
                                            : 'grey.400',
                                    })}>
                                        {item.description}
                                    </Typography>
                                </div>
                            </Stack>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
