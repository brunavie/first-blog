import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Container from '../Container';
import './Layout.css';
import Helmet from 'react-helmet';
import favicon from '../../../static/favicon.png';
import config from '../../../data/config';

export default ({ children }) => (
    <div>
        <Helmet>
            <meta name="description" content={config.siteDescription} />
            <link rel="icon" href={favicon} />
        </Helmet>
        <Header />
        <main role="main">
            <Container>
                {children}
                <aside className="aside">
                    <Sidebar
                        title="A autora"
                        description="Sou uma programadora, inconformada com o fato de não conseguir cultivar nem uma rosa do deserto se quer, e que se encontra atualmente em uma ardua batalha contra a minha falta de talento para jardinagem. Bora programar enquanto o jardim não saí?"
                    />
                    <Sidebar
                        title="Sobre o blog"
                        description="Uma coletânea da minha louca aventura rumo a terra dos programadores e amantes das plantas."
                    />
                </aside>
            </Container>
        </main>

    </div>
);
