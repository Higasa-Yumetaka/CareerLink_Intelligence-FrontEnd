import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';
import EdgesensorHighRoundedIcon from '@mui/icons-material/EdgesensorHighRounded';
import ViewQuiltRoundedIcon from '@mui/icons-material/ViewQuiltRounded';

const items = [
    {
        icon: <ViewQuiltRoundedIcon/>,
        title: '职位推荐',
        description:
            '填写在线简历，并分析得到系统推荐的最适合您的职业',
        imageLight: 'url("/static/images/function_1.jpg")',
        imageDark: 'url("/static/images/function_1.jpg")',
        link: '/checkout', // 添加跳转链接
    },
    {
        icon: <EdgesensorHighRoundedIcon/>,
        title: '行情分析',
        description:
            '查看行业最新动态，分析行业发展趋势，为您的职业规划提供参考',
        imageLight: 'url("/static/images/function_2.jpg")',
        imageDark: 'url("/static/images/function_2.jpg")',
        link: '/quotes', // 添加跳转链接
    },
    {
        icon: <DevicesRoundedIcon/>,
        title: '寻找职员',
        description:
            '发布招聘信息，寻找最适合您企业的员工',
        imageLight: 'url("/static/images/function_3.jpg")',
        imageDark: 'url("/static/images/function_3.jpg")',
        link: '/hr', // 添加跳转链接
    },
];

export default function Functions() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Container id="features" sx={{py: {xs: 8, sm: 16}}}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <div>
                        <Typography component="h2" variant="h4" color="text.primary">
                            产品功能
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 2}}}>
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 1}}}>
                            开始使用智聘通，体验智能职业规划、行情分析、招聘管理等功能，
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 1}}}>
                            为您的职业发展和企业发展提供有力支持， 让您的职业生涯更加顺利。
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 1}}}>
                            点击下方功能卡片，了解更多功能详情。
                        </Typography>
                        <Typography
                            variant="body1"
                            color="text.secondary"
                            sx={{mb: {xs: 2, sm: 2}}}>
                        </Typography>
                    </div>
                    <Grid container item gap={1} sx={{display: {xs: 'auto', sm: 'none'}}}>
                        {items.map(({title}, index) => (
                            <Chip
                                key={index}
                                label={title}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'primary.light' : '';
                                        }
                                        return selectedItemIndex === index ? 'primary.light' : '';
                                    },
                                    background: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index ? 'none' : '';
                                        }
                                        return selectedItemIndex === index ? 'none' : '';
                                    },
                                    backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                                    '& .MuiChip-label': {
                                        color: selectedItemIndex === index ? '#fff' : '',
                                    },
                                }}
                            />
                        ))}
                    </Grid>
                    <Box
                        component={Card}
                        variant="outlined"
                        sx={{
                            display: {xs: 'auto', sm: 'none'},
                            mt: 4,
                        }}
                    >
                        <Box
                            sx={{
                                backgroundImage: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? items[selectedItemIndex].imageLight
                                        : items[selectedItemIndex].imageDark,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                minHeight: 280,
                            }}
                        />
                        <Box sx={{px: 2, pb: 2}}>
                            <Typography color="text.primary" variant="body2" fontWeight="bold">
                                {selectedFeature.title}
                            </Typography>
                            <Typography color="text.secondary" variant="body2" sx={{my: 0.5}}>
                                {selectedFeature.description}
                            </Typography>
                            <Link
                                color="primary"
                                variant="body2"
                                fontWeight="bold"
                                href={selectedFeature.link} // 使用功能对象的链接地址
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    '& > svg': {transition: '0.2s'},
                                    '&:hover > svg': {transform: 'translateX(2px)'},
                                }}
                            >
                                <span>开始使用</span>
                                {/*<span>&nbsp;&nbsp;&nbsp;查看推荐</span>*/}
                                <ChevronRightRoundedIcon
                                    fontSize="small"
                                    sx={{mt: '1px', ml: '2px'}}
                                />
                            </Link>
                        </Box>
                    </Box>
                    <Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        spacing={2}
                        useFlexGap
                        sx={{width: '100%', display: {xs: 'none', sm: 'flex'}}}
                    >
                        {items.map(({icon, title, description}, index) => (
                            <Card
                                key={index}
                                variant="outlined"
                                component={Button}
                                onClick={() => handleItemClick(index)}
                                sx={{
                                    p: 3,
                                    height: 'fit-content',
                                    width: '100%',
                                    background: 'none',
                                    backgroundColor:
                                        selectedItemIndex === index ? 'action.selected' : undefined,
                                    borderColor: (theme) => {
                                        if (theme.palette.mode === 'light') {
                                            return selectedItemIndex === index
                                                ? 'primary.light'
                                                : 'grey.200';
                                        }
                                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '100%',
                                        display: 'flex',
                                        textAlign: 'left',
                                        flexDirection: {xs: 'column', md: 'row'},
                                        alignItems: {md: 'center'},
                                        gap: 2.5,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            color: (theme) => {
                                                if (theme.palette.mode === 'light') {
                                                    return selectedItemIndex === index
                                                        ? 'primary.main'
                                                        : 'grey.300';
                                                }
                                                return selectedItemIndex === index
                                                    ? 'primary.main'
                                                    : 'grey.700';
                                            },
                                        }}
                                    >
                                        {icon}
                                    </Box>
                                    <Box sx={{textTransform: 'none'}}>
                                        <Typography
                                            color="text.primary"
                                            variant="body2"
                                            fontWeight="bold"
                                        >
                                            {title}
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                            sx={{my: 0.5}}
                                        >
                                            {description}
                                        </Typography>
                                        <Link
                                            color="primary"
                                            variant="body2"
                                            fontWeight="bold"
                                            href={selectedFeature.link} // 使用功能对象的链接地址
                                            sx={{
                                                display: 'inline-flex',
                                                alignItems: 'center',
                                                '& > svg': {transition: '0.2s'},
                                                '&:hover > svg': {transform: 'translateX(2px)'},
                                            }}
                                        >
                                            <span style={{fontWeight: 'bold'}}>开始使用</span>
                                            <ChevronRightRoundedIcon
                                                fontSize="small"
                                                sx={{mt: '1px', ml: '2px'}}
                                            />
                                        </Link>
                                    </Box>
                                </Box>
                            </Card>
                        ))}
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{display: {xs: 'none', sm: 'flex'}, width: '100%'}}
                >
                    <Card
                        variant="outlined"
                        sx={{
                            height: '100%',
                            width: '100%',
                            display: {xs: 'none', sm: 'flex'},
                            pointerEvents: 'none',
                        }}
                    >
                        <Box
                            sx={{
                                m: 'auto',
                                width: 420,
                                height: 500,
                                backgroundSize: 'contain',
                                backgroundImage: (theme) =>
                                    theme.palette.mode === 'light'
                                        ? items[selectedItemIndex].imageLight
                                        : items[selectedItemIndex].imageDark,
                            }}
                        />
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
