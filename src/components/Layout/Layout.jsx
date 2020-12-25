import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import './Layout.css';

export default ({children, title}) => (
    <div>
        <Header title={title} />
        <main role="main">
            <Container>
            {children}
            <aside className="aside">
                <Sidebar 
                title="A autora"
                description="Sou uma desenvolvedora e entusiasta da programação que ama passar o tempo livre entre um bug e outro desvendando os mistérios da floricultura."
                />
                <Sidebar 
                title="Sobre o blog"
                description="Uma coletânea da minha louca aventura rumo a terra dos amantes das plantas e suas terapias. Será que saio dessa menos louca? Sigam-me marujos!"
                />
            </aside>
            </Container>
        </main>
    </div>
);
