import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
    <React.Fragment>
        <ListItemButton>

            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>

            <ListItemText primary="在线简历"/>

        </ListItemButton>

        <ListItemButton>

            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>

            <ListItemText primary="职位推荐"/>

        </ListItemButton>

    </React.Fragment>
);

