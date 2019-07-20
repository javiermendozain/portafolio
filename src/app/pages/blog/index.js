// Dependencices
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Posts from './components/Posts';

// Action
import { fetchPosts } from '../../redux/actions/blogActions';

// Utils
import { isFirstRender } from '../../../shared/utils/data';

class Blog extends Component {

  async componentDidMount() {
    if (isFirstRender(this.props.blogReducer.posts)) {
      await this.props.fetchPosts();
    }

    if (this.props.blogReducer.error) {
      return;
    }

  }

  render() {
    const { posts, error, loading } = this.props.blogReducer;
    return <div>
      {error &&
        <div>
          Error: {error}
        </div>
      }
      {loading &&
        <div>
          --------- Cargando -----
        </div>
      }
      <Posts posts={posts} />
    </div>;
  }
}

const mapStateToProps = ({ blogReducer }) => ({ blogReducer });

const mapDispatchToProps = { fetchPosts };

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
