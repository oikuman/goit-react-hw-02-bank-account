import React from "react";
import PropTypes from "prop-types";

const Controls = ({ handleDeposit, handleWithdraw }) => (
    <section className="controls">
        <input type="number" min="0" name="amount" />
        <button onClick={e => handleDeposit(e)} type="button">
            Deposit
        </button>
        <button onClick={e => handleWithdraw(e)} type="button">
            Withdraw
        </button>
    </section>
);

Controls.propTypes = {
    handleDeposit: PropTypes.func.isRequired,
    handleWithdraw: PropTypes.func.isRequired
};

export default Controls;
