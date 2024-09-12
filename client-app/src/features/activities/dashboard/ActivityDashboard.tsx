import React, { useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';
import { useStore } from '../../../app/stores/store';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';
import ActivityList from './ActivityList';
import './dashboard.scss';

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    handleSelectedActivity: (id: string) => void;
    handleCanceledActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;
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
    deleteActivity,
    submitting,
}: Props) {

    const { activityStore } = useStore();
    const { loadActivities } = activityStore;
    
    useEffect(() => {
        if (activities.length <= 1) loadActivities();
    }, [activities.length, loadActivities])

    return (
        <Grid className='my-background'>
            <Grid.Column width='10'>
                <ActivityList 
                    activities={activities} 
                    handleSelectedActivity={handleSelectedActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
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
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />
                )}
            </Grid.Column>
        </Grid>
    )
}

function loadActivities() {
    throw new Error('Function not implemented.');
}
