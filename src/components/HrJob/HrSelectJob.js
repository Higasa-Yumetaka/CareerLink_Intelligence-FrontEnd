import * as React from 'react';
import {useEffect} from 'react';

import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import {styled} from '@mui/system';
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function HrSelectJob({handleCategoryChange}) {

    const [job, setJob] = React.useState('');

    const [changed, setChanged] = React.useState(false);

    const [category, setCategory] = React.useState();

    const handleCategoryChangeChild = (event) => {
        setJob(event.target.value);
        handleCategoryChange(event);
    };

    async function queryOnlineResume() {
        try {
            const response = await instance.get('/queryOnlineResume', {
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setJob(response.data.data.intended_job);
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

            <FormGrid item xs={12}>

                <FormControl sx={{ m: 1, minWidth: 120 }}>

                    <FormLabel htmlFor="educational-background" required>
                       选择职业大类
                    </FormLabel>
                    <div style={{height: '2vh'}}/>

                    <Select
                        value={job}
                        onChange={handleCategoryChangeChild}
                        displayEmpty
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

                <FormControl sx={{ m: 1, minWidth: 120 }}>



                </FormControl>

            </FormGrid>


        </Grid>
    );
}
