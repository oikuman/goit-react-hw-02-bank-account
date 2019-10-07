import React from "react";
import PropTypes from "prop-types";

const Balance = ({ income, expense, balance }) => (
    <section className="balance">
        <span>
            <span role="img" aria-label="arrow-up">
                ⬆️
            </span>
            {income}$
        </span>
        <span>
            <span role="img" aria-label="arrow-down">
                ⬇️
            </span>
            {expense}$
        </span>
        <span>Balance: {balance}$</span>
    </section>
);

Balance.propTypes = {
    income: PropTypes.number.isRequired,
    expense: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired
};

export default Balance;
