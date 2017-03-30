/**
 * ASP.NET Core Starter Kit (https://dotnetreact.com)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import { connect } from 'react-redux';
import { testAsync } from '../../actions/';

const title = 'ASP.NET Core Starter Kit';
const link = 'https://github.com/kriasoft/aspnet-starter-kit';

class Home extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
    
   const { dispatch } = this.props;
  dispatch(testAsync('1', 1, 'ghost'));
  

  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <h1 className="mdl-typography--title">Welcome to {title}!</h1>
        <p className="mdl-typography--body-1">
          For more information visit <a href={link}>{link}</a>
        </p>
        <h4 className="mdl-typography--title">Articles</h4>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
      </Layout>
    );
  }
}

export default connect(
  (state) => ({
    galleryData: state.films.galleryData,
    asyncData: state.films.asyncData,
    keyword: state.films.keyword,
    asyncLoading: state.films.asyncLoading,
    id: state.films.id
  })
)(Home);
