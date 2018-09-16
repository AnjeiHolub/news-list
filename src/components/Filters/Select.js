import React, {Component} from 'react';
import Select from 'react-select';


export default class SelectFilter extends Component {
    state = {
        selection: null
    }

    render () {
        const options = this.props.articles.map((article) => ({
            label: article.title,
            value: article.id
        }));

        return (
            <div>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} isMulti = {true}/>
            </div>
        );
    }

    changeSelection = (selection) => {
        this.setState({selection});
    }
}
