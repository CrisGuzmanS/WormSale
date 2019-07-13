import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TransferForm from './TransferForm';
import TransferList from './TransferList';
import url from '../config';

export default class Example extends Component {

    constructor(props) {
        super(props);

        // State before assembling the component
        this.state = {
            money: 0,
            transfers: [],
            form: {
                description: '',
                amount: '',
                wallet_id: 3
            },
            error: null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async componentDidMount() {
        try {

            let response = await fetch(`${url}api/wallet`);
            let data = await response.json();

            this.setState({
                money: data.money,
                transfers: data.transfers
            });

        } catch (error) {

            this.setState({
                error
            });

        }
    }

    handleChange(e) {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }

    async handleSubmit(e) {
        e.preventDefault();

        try {

            const res = await fetch(`${url}api/transfer`, {
                method: 'POST', 
                body: JSON.stringify(this.state.form),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            console.log(2);
            const transfer = await res.json();

            console.log(3);
            this.setState({
                money: parseInt(this.state.money) + parseInt(transfer.amount),
                transfers: this.state.transfers.concat(transfer)
            });

        } catch (error) {

            console.log(error);

            this.setState({
                error
            });

        }

    }

    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 m-t-md">
                        <p className="title"> $ {this.state.money} </p>
                    </div>
                    <div className="col-md-12">
                        <TransferForm
                            form={this.state.form}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                        />
                    </div>
                </div>
                <div className="m-t-md">
                    <TransferList transfers={this.state.transfers} />
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
