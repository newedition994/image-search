import React, { Component } from 'react'

import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class Search extends Component {

    state = {
        searchText: '',
        amount: 15,
        apiURL: 'https://pixabay.com/api',
        apiKey: process.env.REACT_APP_PB_KEY,
        images: []
    }

    render() {
        return (
            <div>
                <TextField
                    name="searchText"
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="Search for Images"
                    fullWidth={true}
                />
                <br />
                <SelectField
                    name="amount"
                    floatingLabelText="Amount"
                    value={this.state.value}
                    onChange={this.onAmountChage}
                >
                    <MenuItem value={5} primaryText="5" />
                    <MenuItem value={10} primaryText="10" />
                    <MenuItem value={15} primaryText="15" />
                    <MenuItem value={30} primaryText="30" />
                    <MenuItem value={50} primaryText="50" />
                </SelectField>
                <br />
            </div>
        )
    }
}


export default Search;