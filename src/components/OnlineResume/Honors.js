import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import {styled} from '@mui/system';
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import instance from "../../Axios/instance/Instance";

const FormGrid = styled(Grid)(() => ({
    display: 'flex',
    flexDirection: 'column',
}));

export default function Honors({ReceiveHonorHandleChange, RelatedWorksHandleChange}) {

    const [relatedWorks, setRelatedWorks] = React.useState('');

    const [receiveHonor, setReceiveHonor] = React.useState('');

    const [changed, setChanged] = React.useState(false);


    const RelatedWorksHandleChangeChild = (event) => {
        setRelatedWorks(event.target.value);
        RelatedWorksHandleChange(event);
        //console.log("college: ", college);
    }

    const ReceiveHonorHandleChangeChild = (event) => {
        setReceiveHonor(event.target.value);
        ReceiveHonorHandleChange(event);
        //console.log("educationalExperience: ", educationalExperience);
    }

    async function queryOnlineResume(education, college, educationalExperience) {
        try {
            const response = await instance.get('/queryOnlineResume', {

            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    setRelatedWorks(response.data.data.related_works);
                    setReceiveHonor(response.data.data.receive_honor);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    React.useEffect(() => {
        if (!changed) {
            setChanged(true);
            console.log("useEffect")
            queryOnlineResume().then();
        }
    }, []);

    return (
        <Grid container spacing={3}>

            <FormGrid item xs={12}>
                <FormLabel htmlFor="receive-honor-select-label">获得荣誉</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="receive-honor-textfield"
                    onChange={ReceiveHonorHandleChangeChild}
                    multiline
                    value={receiveHonor}
                    minRows={4}
                    required/>
            </FormGrid>

            <FormGrid item xs={12}>
                <div style={{height: '4vh'}}/>
                <FormLabel htmlFor="related-works-select-label">相关作品</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="related-works-textfield"
                    onChange={RelatedWorksHandleChangeChild}
                    multiline
                    value={relatedWorks}
                    minRows={4}/>
            </FormGrid>

        </Grid>
    );
}
