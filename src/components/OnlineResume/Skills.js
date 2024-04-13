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

export default function Skills({SkillsSpecialtiesHandleChange, ProjectExperienceHandleChange,InternExperienceHandleChange, TrainingExperienceHandleChange}) {

    const [internExperience, setInternExperience] = React.useState('');

    const [projectExperience, setProjectExperience] = React.useState('');

    const [skillsSpecialties, setSkillsSpecialties] = React.useState('');

    const [trainingExperience, setTrainingExperience] = React.useState('');

    const [changed, setChanged] = React.useState(false);


    const InternExperienceHandleChangeChild = (event) => {
        setInternExperience(event.target.value);
        InternExperienceHandleChange(event);
        //console.log("education: ", education);
    };

    const ProjectExperienceHandleChangeChild = (event) => {
        setProjectExperience(event.target.value);
        ProjectExperienceHandleChange(event);
        //console.log("college: ", college);
    }

    const SkillsSpecialtiesHandleChangeChild = (event) => {
        setSkillsSpecialties(event.target.value);
        SkillsSpecialtiesHandleChange(event);
        //console.log("educationalExperience: ", educationalExperience);
    }

    const TrainingExperienceHandleChangeChild = (event) => {
        setTrainingExperience(event.target.value);
        TrainingExperienceHandleChange(event);
        //console.log("trainingExperience: ", trainingExperience);
    }
    async function queryOnlineResume(){
        try {
            const response = await instance.get('/queryOnlineResume', {
            });
            if (response.status === 200) {
                if (response.data.code === 0) {
                    // 查询成功
                    setSkillsSpecialties(response.data.data.skills_and_specialties);
                    setProjectExperience(response.data.data.project_experience);
                    setInternExperience(response.data.data.intern_experience);
                    setTrainingExperience(response.data.data.training_experience);
                    console.log("查询成功");
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
                <FormLabel htmlFor="skills-and-specialties-select-label">技能与特长 *</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="skills-and-specialties-textfield"
                    onChange={SkillsSpecialtiesHandleChangeChild}
                    multiline
                    value={skillsSpecialties}
                    minRows={4}
                    required/>
            </FormGrid>

            <FormGrid item xs={12}>
                <div style={{height: '4vh'}}/>
                <FormLabel htmlFor="project-experience-select-label">项目经历</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="project-experience-textfield"
                    onChange={ProjectExperienceHandleChangeChild}
                    multiline
                    value={projectExperience}
                    minRows={4}/>
            </FormGrid>

            <FormGrid item xs={12}>
                <div style={{height: '4vh'}}/>
                <FormLabel htmlFor="intern-experience-select-label">实习经历</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="intern-experience-textfield"
                    onChange={InternExperienceHandleChangeChild}
                    value={internExperience}
                    multiline
                    minRows={4}/>
            </FormGrid>

            <FormGrid item xs={12}>
                <div style={{height: '4vh'}}/>
                <FormLabel htmlFor="training-experience-select-label">培训经历</FormLabel>
                <div style={{height: '2vh'}}/>
                <TextField
                    id="training-experience-textfield"
                    onChange={TrainingExperienceHandleChangeChild}
                    value={trainingExperience}
                    multiline
                    minRows={4}/>
            </FormGrid>

        </Grid>
    );
}
