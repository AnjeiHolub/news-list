import React, {Component} from 'react';
import Select from 'react-select';
import {connect} from 'react-redux';
import {changeSelection} from '../../AC';

class SelectFilter extends Component {
    render () {

        const {articles, selected} = this.props;
        const options = articles.map((article) => ({
            label: article.title,
            value: article.id
        }));

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
    articles: state.articles,
    selected: state.filters.selected
}), {changeSelection});

export default decorator(SelectFilter);
