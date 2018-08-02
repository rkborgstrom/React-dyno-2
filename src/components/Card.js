import React, { Component } from 'react';
import Skills from './Skills';

class Card extends Component {

    state = {
        toggle: false,
    };

    handleClick = () => {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render() {
        return (
            <div className="profile-card">
                <header onClick={this.handleClick} className="profile-header">
                    <img src={this.props.dinosaurs.image} alt="dino" />
                    <h2>{this.props.dinosaurs.name}</h2>
                </header>
                <div>

                </div>
                <Skills skills={this.props.dinosaurs.skills} toggle={this.state.toggle} />
            </div>
        );
    }
}

export default Card;