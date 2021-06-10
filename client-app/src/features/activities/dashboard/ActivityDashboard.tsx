import React from 'react';
import { Grid, List } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    handleSelectedActivity: (id: string) => void;
    handleCanceledActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
}

export default function ActivityDashboard({
        activities,
        selectedActivity,
        handleSelectedActivity,
        handleCanceledActivity,
        editMode,
        openForm,
        closeForm,
        createOrEdit,
    }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} handleSelectedActivity={handleSelectedActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode && (
                    <ActivityDetails 
                        activity={selectedActivity} 
                        handleCanceledActivity={handleCanceledActivity} 
                        openForm={openForm}
                    />
                )}
                {editMode && (
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} />
                )}
            </Grid.Column>
        </Grid>
    )
}