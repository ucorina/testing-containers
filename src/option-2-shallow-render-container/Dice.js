import React from 'react';
import PropTypes from 'prop-types';
import { rollDice } from '../actions';
import { connect } from 'react-redux';

export const Dice = ({ lastRolledNumber, onRollDice }) => (
    <div>        
        <p>The last rolled number was {lastRolledNumber}.</p>
        <button onClick={onRollDice}>Roll dice</button>
    </div>
);

Dice.propTypes = {
    lastRolledNumber: PropTypes.number.isRequired,
    onRollDice: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    lastRolledNumber: state.lastRolledNumber
});

const mapDispatchToProps = (dispatch) => ({
    onRollDice: () => dispatch(rollDice())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dice);