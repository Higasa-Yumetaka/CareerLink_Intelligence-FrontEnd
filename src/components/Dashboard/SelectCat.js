import React, {useState} from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {styled} from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));



export default function SelectCat({handleIndustryChange, handleSubIndustryChange}) {

    const [industry, setIndustry] = useState('');
    const [subIndustry, setSubIndustry] = useState('');

    const handleIndustryChangeChild = (event) => {
        setIndustry(event.target.value);
        handleIndustryChange(event);
        // 如果有对应的子行业选项，则设置第二个框的选项
        if (subIndustryOptions[event.target.value]) {
            setSubIndustry('');
        }
    };

    const handleSubIndustryChangeChild = (event) => {
        setSubIndustry(event.target.value);
        handleSubIndustryChange(event);
        //dustryChange(event.target.value);
    }

    const industryOptions = [
        '房地产/建筑',
        '服务业',
        '互联网/IT',
        '教育',
        '金融',
        '贸易',
        '市场',
        '行政',
    ];

    // 第二个框的选项
    const subIndustryOptions = {
        '互联网/IT': [
            '移动应用开发',
            'Web开发',
            '软件测试/运维',
            '人工智能',
            '销售技术支持',
            '技术项目管理',
            '电子/硬件开发',
            '电气/自动化',
            '通信',
            '大数据',
            '网络运营专员',
            'IT技术员',
            '网络运维',
        ],
        // 在这里添加其他行业对应的子行业选项
    };



    return (
        <React.Fragment>

            <Box sx={{display: 'flex'}}
                 style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

                {/*<Typography variant="h6" component="h2" gutterBottom>*/}
                {/*    行情分析*/}
                {/*</Typography>*/}


                <Grid container spacing={3}
                      maxWidth='100vh'>

                    <FormGrid item xs={12}
                              md={6}>

                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FormLabel htmlFor="industry-select">行业</FormLabel>
                            <Select
                                value={industry}
                                onChange={handleIndustryChangeChild}
                                //label="行业"
                                inputProps={{ id: 'industry-select' }}
                            >
                                {industryOptions.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </FormGrid>
                    <FormGrid item xs={12} md={6}>
                        <FormControl sx={{ m: 1, minWidth: 120 }}>
                            <FormLabel htmlFor="sub-industry-select">子行业</FormLabel>
                            <Select
                                value={subIndustry}
                                onChange={handleSubIndustryChangeChild}
                                //label="子行业"
                                inputProps={{ id: 'sub-industry-select' }}
                                disabled={!subIndustryOptions[industry]}
                            >
                                {subIndustryOptions[industry]?.map((option, index) => (
                                    <MenuItem key={index} value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </FormGrid>

                </Grid>
            </Box>
        </React.Fragment>
    );
}