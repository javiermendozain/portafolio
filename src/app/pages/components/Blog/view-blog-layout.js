import React,{Fragment} from 'react';
import { connect } from 'react-redux';
import Editor from 'for-editor';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { tiempoTranscurrido } from '../../../../shared/utils/commonFunctions';

import style from './view-blog-layout.scss';

class ViewBlogLayout extends React.Component {

  componentDidMount() {
    const { postReducer:{ posts=[] }, match: {params:{ idPost }}} = this.props;
    if (posts && posts.length >0 ) {
      const post = posts.filter((item)=>(item.id === idPost));
      if (post && post.length<=0) {
        //  get Post by ID
      }

    }
  }

  render() {
    const { postReducer:{ posts=[] }, match: {params:{ idPost }}} = this.props;
    const Post = posts.filter((item)=>(item.id === idPost));
    let contentPost ={};
    if (Post && Post.length>0) {
      contentPost = Post[0];
    }

    return <Fragment>
      <p className={style.title}>
        <div className="row">
          <div className="col-auto" style={{paddingRight:'0'}}>
            <img src='/icon/back.png' className='icon' onClick={()=>this.props.history.goBack()} />
          </div>
          <div className="col-sm">
            {contentPost.title}
          </div>
        </div>
        <small>
          <FontAwesomeIcon style={{ marginRight: '5px'}} icon={faClock} />
          { tiempoTranscurrido(contentPost.time) }
        </small>
      </p>
      <Editor
        value = {contentPost.content}
        language= 'en'
        // eslint-disable-next-line react/jsx-boolean-value
        preview= {true}
        toolbar= {{}}
      />
    </Fragment>;
  }
}


const mapStateToProps = ({postReducer})=>({postReducer});


export default connect(mapStateToProps)(ViewBlogLayout);


