import React, {Component} from "react";

import '../styles/Converter.css';
import ApiService from "../service/ApiService";

export default class NumberConverter extends Component {
    state = {
        result: "",
        from: "USD",
        to: "GBP",
        number: 1,
        options: [],
    };

    // Get options (Decimal, Hexadecimal etc.)
    componentDidMount() {
        ApiService.getOptions()
            .then(res => {
                const options = [];
                res.data.forEach(option => {
                    options.push(option)
                });
                this.setState({options: options, from: options[0], to: options[0]});
                this.setState({message: 'Fetched options successfully'});
            }).catch(err => {
            console.log(err.message);
        });
    }

    // Convert the number
    convertNumber = () => {
        if (this.state.from !== this.state.to) {
            let converter = {from: this.state.from, to: this.state.to, number: this.state.number};
            ApiService.convertNumber(converter)
                .then(res => {
                    this.setState({result: res.data});
                    this.setState({message: 'Conversion successful'});
                }).catch(err => {
                console.log(err.message);
            });
        } else {
            this.setState({result: "Please do not choose same format for both"})
        }
    };

    // New number format is selected
    selectFromDropdown = (event) => {
        if (event.target.name === "from") {
            this.setState({from: event.target.value})
        }
        if (event.target.name === "to") {
            this.setState({to: event.target.value})
        }
    };

    render() {
        return (
            <div>
                <h1><span>Number Converter   </span> <span className="Symbol">&#35;</span></h1>
                <div className="Form">
                    <input
                        name="number"
                        type="text"
                        value={this.state.amount}
                        onChange={press =>
                            this.setState({number: press.target.value})
                        }
                    />
                    <h3 > From
                    <select
                        name="from"
                        onChange={(press) => this.selectFromDropdown(press)}
                        value={this.state.from}
                    >
                        {this.state.options.map(format => ( <option key={format}>{format}</option> ))}
                    </select>
                    </h3>
                    <h3> To
                    <select
                        name="to"
                        onChange={(press) => this.selectFromDropdown(press)}
                        value={this.state.to}
                    >
                        {this.state.options.map(format => ( <option key={format}>{format}</option> ))}
                    </select>
                    </h3>
                    <button onClick={this.convertNumber}>Convert !</button>
                </div>
                {this.state.result && <h3>{this.state.result}</h3>}
            </div>
        );
    }
}