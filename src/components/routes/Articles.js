import React, {Component} from 'react';
import ArticleList from '../ArticleList';
import Article from '../Article';
import {Route} from 'react-router-dom';

class Articles extends Component {

    render () {

        return (
            <div>
                <ArticleList />
                <Route path = "/articles" render = {this.getIndex} exact />      
                <Route path = "/articles/:id" render = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params;
        return <Article id = {id} isOpen = {true} key = {id}/>;
    }

    getIndex = () => {
        return <h2>Выберите себе статью</h2>;
    }
}

export default Articles;