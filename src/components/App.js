import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired //массив статей
    }

    render () {
        return (
            <div>
                <ArticleList articles = {this.props.articles} />
            </div>
        )
    }
}

export default App;