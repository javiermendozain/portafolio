import React from 'react';
import { connect } from 'react-redux';
import Editor from 'for-editor';
import Datetime from 'react-datetime';
import moment from 'moment';
import { Button, Label, Input, Row, Col } from 'reactstrap';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { setContentModal, openCloseModal } from '../../../redux/actions/modalActions';
import { setContentPost, publicPost, savePost,
  setTimePost, setTitlePost, setCategoriesPost,
  addTagPost } from '../../../redux/actions/newPostActions';

import './react-datetime.css';

const newBlogLayout = (props) => {
  const { setContentPost, publicPost, savePost,
    newPostReducer, setContentModal, openCloseModal,
    setTimePost, setTitlePost,
    setCategoriesPost, addTagPost,
    categoryReducer: { categories = [], tags=[]} } = props;

  const { content = '', title = '', category = 0, time = '', tags:defaultTags=[] }
  = newPostReducer;

  const _optionsCategories = ()=>{
    return categories.map( (item) => ({label: item.category, value: item.id}));
  };

  const _defaultCategory = () => {
    return categories.filter((item) => item.id === category ).map( (item) => ({label: item.category, value: item.id}));
  };

  const _optionsTags = ()=>{
    return tags.map( (item) => ({label: item.tag, value: item.id}));
  };

  const _defaultTags = () => {
    return tags.filter((item) => defaultTags.includes(item.id) ).map( (item) => ({label: item.tag, value: item.id}));
  };


  const _setContentModal = () => {
    const _body = () => {
      return (
        <React.Fragment>
          <Label> Titulo</Label>
          <Input onChange = {(e)=> setTitlePost(e.target.value)} defaultValue= {title} maxLength='100' />
          <Row>
            <Col>
              <Label> Categoria</Label>
              <Select
                placeholder='Selecione...'
                options={_optionsCategories()}
                onChange = {(e)=> setCategoriesPost(e.value)}
                defaultValue={_defaultCategory()}
              />
            </Col>
            <Col>
              <Label> Tags</Label>
              <Select
                placeholder='Selecione...'
                options={_optionsTags()}
                onChange = {(e)=> addTagPost(e)}
                defaultValue={_defaultTags()}
                // eslint-disable-next-line react/jsx-boolean-value
                isMulti={true}
                styles={{control: ()=> ({width: '1fr'}) }}
              />
            </Col>
          </Row>
          <Label> Fecha publicación</Label>
          <Datetime
            defaultValue={(time) ? time : moment().format('YYYY-MM-DD HH:mm:ss')}
            dateFormat={'YYYY-MM-DD'}
            timeFormat={'HH:mm:ss'}
            onChange={(day)=>setTimePost(day.format('YYYY-MM-DD HH:mm:ss'))}
            inputProps={{ placeholder: 'YYYY-MM-DD HH:mm:ss', readOnly: true }}
            locale="es"
          />
          {/* <Input onChange = {(e)=> } defaultValue = {time} maxLength='90' /> */}
        </React.Fragment>
      );
    };

    const _footer = () => {
      return (
        <React.Fragment>
          <Button onClick={()=>savePost()} >
            Guardar borrador
          </Button>
          <Button onClick = {()=>publicPost(
            (ref)=>{
              // history.push(`/blog/${ref.id}`);

            }
          )}
          >
            Publicar
          </Button>
        </React.Fragment>
      );
    };

    const _modalContent = {
      header: ' Información de la publicación ',
      body: _body(),
      footer: _footer()
    };

    setContentModal(_modalContent);
    openCloseModal();
  };


  return (
    <div>
      <Editor value={content} language='en' onSave={() => _setContentModal()} onChange={setContentPost} />
    </div>
  );

};

const mapStateToProps = ({newPostReducer, categoryReducer}) => ({newPostReducer, categoryReducer});

const mapDispatchToProps = {
  setContentPost, publicPost, savePost,
  setContentModal, openCloseModal,
  setTimePost, setTitlePost,
  setCategoriesPost, addTagPost
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(newBlogLayout));
