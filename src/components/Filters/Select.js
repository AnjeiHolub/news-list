import React, {Component} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';
import {mapToArray} from '../../helpers';

class SelectFilter extends Component {
    render () {

        const {articles, selected} = this.props;
        const options = articles.map((article) => {
            return {
                label: article.title,
                value: article.id
            };
        });

        return (
            <div>
                <Select options = {options} value = {selected} onChange = {this.changeSelection} isMulti = {true}/>
            </div>
        );
    }

    changeSelection = (selected) => {
        this.props.changeSelection(selected);
    }
}

const decorator = connect((state) => ({
    articles: mapToArray(state.articles.entities),
    selected: state.filters.selected
}), {changeSelection});

export default decorator(SelectFilter);
