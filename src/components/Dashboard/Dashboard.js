import React, { Component } from "react";
import v4 from "uuid/v4";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Controls from "../Controls";
import Balance from "../Balance";
import TransactionHistory from "../TransactionHistory";
import css from './Dashboard.module.css';

class Dashboard extends Component {
    state = {
        income: 0,
        expense: 0,
        balance: 0,
        transactions: []
    };

    componentDidMount = () => {
        toast.configure();
    };

    notify = message => toast(message);

    handleDeposit = e => {
        const amount = Number(e.target.parentElement.firstElementChild.value);

        if (amount) {
            const transaction = {
                id: v4(),
                type: "Deposit",
                amount: amount,
                date: new Date().toLocaleString("uk")
            };

            this.setState(prevState => ({
                income: (prevState.income += amount),
                balance: (prevState.balance += amount),
                transactions: [...prevState.transactions, transaction]
            }));
        } else {
            this.notify("Please enter amount");
        }
    };

    handleWithdraw = e => {
        const amount = Number(e.target.parentElement.firstElementChild.value);

        if (amount) {
            const { balance } = this.state;
            if (amount > balance) {
                this.notify("Not enough funds on your acoount");
                return;
            }
            const transaction = {
                id: v4(),
                type: "Withdrawal",
                amount: amount,
                date: new Date().toLocaleString("uk")
            };
            this.setState(prevState => ({
                expense: (prevState.expense += amount),
                balance: (prevState.balance -= amount),
                transactions: [...prevState.transactions, transaction]
            }));
        } else {
            this.notify("Please enter amount");
        }
    };

    render() {
        const { income, expense, balance, transactions } = this.state;
        return (
            <div className={css.dashboard}>
                <Controls
                    handleDeposit={this.handleDeposit}
                    handleWithdraw={this.handleWithdraw}
                />
                <Balance income={income} expense={expense} balance={balance} />
                <TransactionHistory transactions={transactions} />
            </div>
        );
    }
}

export default Dashboard;
