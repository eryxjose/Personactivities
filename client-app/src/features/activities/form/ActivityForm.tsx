import React from 'react';
import { Button, Form, Segment } from 'semantic-ui-react';

export default function ActivityForm() {
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Título' />
                <Form.TextArea placeholder='Descrição' />
                <Form.Input placeholder='Categoria' />
                <Form.Input placeholder='Data' />
                <Form.Input placeholder='Cidade' />
                <Form.Input placeholder='Local' />
                <Button floated='right' positive type='submit' content='Enviar' />
                <Button floated='right' type='button' content='Cancelar' />
            </Form>
        </Segment>
    )
}