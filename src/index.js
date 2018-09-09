import React from 'react';
import {render} from 'react-dom';
import Article from './Article';
import {articles} from './fixtures';

const article = articles[0];

render(<Article article = {article} />, document.getElementById('container'));