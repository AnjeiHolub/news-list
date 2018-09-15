import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Select from 'react-select';
import DatePicker from './Filters/DatePicker';

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired //массив статей
    }

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
                <UserForm />
                <DatePicker/>
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} isMulti = {true}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }

    changeSelection = (selection) => {
        this.setState({selection});
    }
}

export default App;