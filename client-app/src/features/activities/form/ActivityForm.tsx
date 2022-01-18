import React, { useState, ChangeEvent } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({
    activity: selectedActivity, 
    closeForm, 
    createOrEdit,
    submitting
}: Props) {

    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState);

    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input placeholder='Título' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea placeholder='Descrição' value={activity.description} name='description' onChange={handleInputChange} />
                <Form.Input placeholder='Categoria' value={activity.category} name='category' onChange={handleInputChange} />
                <Form.Input placeholder='Data' value={activity.date} name='date' onChange={handleInputChange} />
                <Form.Input placeholder='Cidade' value={activity.city} name='city' onChange={handleInputChange} />
                <Form.Input placeholder='Local' value={activity.venue} name='venue' onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Enviar' />
                <Button onClick={closeForm} floated='right' type='button' content='Cancelar' />
            </Form>
        </Segment>
    )
}