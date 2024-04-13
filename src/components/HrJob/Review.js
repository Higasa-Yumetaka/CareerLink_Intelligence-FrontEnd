import * as React from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {useEffect} from "react";
import {styled} from "@mui/system";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Review() {

    useEffect(() => {
        console.log("Review");
    });

    return (
        <Grid container spacing={3} justifyContent="center"> {/* 使用justifyContent="center"使内容水平居中 */}
            <FormGrid item xs={12} md={6}>
                <Typography variant="h6" gutterBottom align="center"> {/* 使用align="center"使文字水平居中 */}
                    请等待审核
                </Typography>
            </FormGrid>
        </Grid>
    );
}
