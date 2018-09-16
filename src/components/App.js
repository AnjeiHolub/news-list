import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import UserForm from './UserForm';
import Filters from './Filters';
import store from '../store';
import Counter from './Counter';

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired //массив статей
    }

    render () {
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters articles = {this.props.articles}/>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default App;