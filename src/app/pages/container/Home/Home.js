import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import HomeLayout from '../../components/Home/home-layout';
import { setContentModal } from '../../../redux/types/modalActionsTypes';

class Home extends Component {

  componentDidMount() {

    const content = {
      header:'Confirmación',
      body: 'Del cuerpo',
      footer: <div> Hola jeje </div>
    };
    this.props.setContentModal(content);
  }

  render() {
    return (
      <Fragment>
        <HomeLayout/>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  setContentModal
};

export default connect(null,mapDispatchToProps)(Home);

