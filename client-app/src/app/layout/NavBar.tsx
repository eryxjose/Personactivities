import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

export default function NavBar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/logo.png" alt="Logo" style={{ marginRight: '10px' }} />
                    PersonActivities
                </Menu.Item>
                <Menu.Item name='Activities' />
                <Menu.Item>
                    <Button positivity content='Adicionar Atividade' />
                </Menu.Item>
            </Container>
        </Menu>
    )
}