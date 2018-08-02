import React from 'react';
import Card from './Card';

const Main = (props) => {
    console.log(props)
    const card = props.dinosaurs.map(card => {
        return <Card dinosaurs={card} key={Math.random()} />
    })

    return (
        <main>
            <section id="profiles-container">
                <h2>Profiles </h2>
                {card}
                <ul id="profiles"></ul>
            </section>
        </main>
    );
}



export default Main;