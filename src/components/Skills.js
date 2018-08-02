import React from 'react';

const Skills = (props) => {
    const skills = props.skills.map(skill => {
        return <li key={Math.random()}>{skill}</li>
    })

    return (
        <section className={props.toggle ? "skills-container" : "hidden"}>
            <ul className="skills-list">
                <h4>Skills</h4>
                {skills}
            </ul>
        </section>
    );
}

export default Skills;