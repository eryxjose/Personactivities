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
}

export default function ActivityDashboard({
        activities,
        selectedActivity,
        handleSelectedActivity,
        handleCanceledActivity }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities} handleSelectedActivity={handleSelectedActivity} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && (
                    <ActivityDetails 
                        activity={selectedActivity} 
                        handleCanceledActivity={handleCanceledActivity} 
                    />
                )}
                <ActivityForm />
            </Grid.Column>
        </Grid>
    )
}