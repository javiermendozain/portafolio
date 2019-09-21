/* eslint-disable complexity */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import Editor from 'for-editor';
import Categories from '../../../global/components/layout/Categories/Categories';

import style from './blog-layout.scss';
import { isEmpty, tiempoTranscurrido } from '../../../../shared/utils/commonFunctions';
import LoadingLayout from '../../../global/components/Loading/loading-layout';


const blogsLayout = (props) => {
  const { postReducer: {posts= []}, history } = props;
  const _posts = posts.map((item, index) => {
    const _tagsHTML = item.tags.map((tag,index)=>
      (<div key={index}
        className={style.contentTagPost}
      >
        {tag.tag}
      </div>)
    );
    return (
      <div
        key={index}
        className={style.post}
        style={{borderBottom: `.25rem solid ${!isEmpty(item.category) ? item.category.color:''}`}}
        onClick={()=>history.push(`/blog/v/${item.id}`)}
      >

        {/* tite */}
        <strong style={{color:'rgb(0,119,181)'}}>
          {item.title}
        </strong>

        {/* Description */}
        <small>
          {(item.content).substr(0,150)} { item.content && '...'}
        </small>

        {/* Date */}
        { item.time &&
          <small className={style.timePost}>
            <FontAwesomeIcon style={{ marginRight: '5px'}} icon={faClock} />
            {tiempoTranscurrido(item.time)}
          </small>
        }

        {/* tags */}
        {/* <small style={{display:'inline-flex'}}>
          {_tagsHTML}

        </small> */}
      </div>
    );
  });

  return (
    <div>
      <Categories />

      {/* content blogs */}
      <div className={style.content}>
        {_posts}
      </div>
      {/* TODO: Poner a funcionar loading */}
      { false && <LoadingLayout/>}

    </div>
  );

};

const mapStateToProps = ({postReducer})=> ({postReducer});

export default connect(mapStateToProps)(withRouter(blogsLayout));

// View content post
// {/* <Editor value={value} language='en' onSave={this.onSave.bind(this)} preview={false} toolbar={{}} onChange={this.handleChange.bind(this)} /> */}
