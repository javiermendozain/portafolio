import React,{Fragment} from 'react';
import { Button, Label, Input,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import { connect } from 'react-redux';
import Select from 'react-select';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faSave, faPlus, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { setContentModal, openCloseModal } from '../../../../redux/actions/modalActions';
import { saveCategory, getAllCategories,
  typingCategory, editingColorCategory, editingCategory,
  deleteCategory, getAllTag, editingTag,
  saveTag, typingEditCategory, saveEditCategory } from '../../../../redux/actions/categoryActions';
import { getRandomColor, isEmpty } from '../../../../../shared/utils/commonFunctions';

import style from './categories.scss';

// Categoria
import { Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';


class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
      isOpenModalAddCategory: false,
      isOpenModalAddTag: false,
      selectedCategory: 0
    };
    this.toggle = this.toggle.bind(this);
    this.openCloseModalAddCategory = this.openCloseModalAddCategory.bind(this);
    this.openCloseModalAddTag = this.openCloseModalAddTag.bind(this);

  }

  componentDidMount() {
    const { getAllCategories, getAllTag, categoryReducer: {categories=[], tags=[]} } = this.props;
    // if (isEmpty(categories)) {
    //   getAllCategories();
    // }
    if (isEmpty(tags)) {
      getAllTag();
    }
  }

  componentDidUpdate(prevProps) {
    const {categoryReducer: { color }} = prevProps;
    if (color !== this.props.categoryReducer.color) {
      this.forceUpdate();
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  openCloseModalAddCategory () {
    this.setState({
      isOpenModalAddCategory: !this.state.isOpenModalAddCategory
    });
  }

  openCloseModalAddTag () {
    this.setState({
      isOpenModalAddTag: !this.state.isOpenModalAddTag
    });
  }

  render() {

    const {
      // Functions
      typingEditCategory,
      saveCategory, saveEditCategory, typingCategory, editingCategory, editingColorCategory,
      saveTag, editingTag,

      firebase: { auth: { uid } },
      categoryReducer: { newTag, newCategory, color, categories, editingCategory:editCategory }
    } = this.props;

    const _optionsCategories = ()=>{
      return categories.map( (item) => ({label: item.category, value: item.id}));
    };

    const _showCategories = ()=>{
      const { categoryReducer: { categories= []}, deleteCategory, history } = this.props;
      const res =[];
      res.push(<div
        key='-1'
        className= {style.itemCategory}
        style= {{background:'#1a2849'}}
        onClick={()=> this.setState({selectedCategory: 0},()=>history.push('/blog/') )}>
        Todo
        { (this.state.selectedCategory === 0) && <Fragment> <FontAwesomeIcon icon={faCheckCircle} /></Fragment>}
      </div >);

      categories.map((item, index)=> {
        res.push(
          <div
            key={index}
            className={style.itemCategory}
            style={{background:`${(item.color)? item.color : 'red'}`}}
            onClick={()=> this.setState({selectedCategory: item.id},()=>history.push(`/blog/${item.id}`) )}
          >
            {item.category}
            { (item.id === this.state.selectedCategory) && <Fragment> <FontAwesomeIcon icon={faCheckCircle} /></Fragment>}
            { (!isEmpty(uid)) &&
              <div className={style.buttonDelete} onClick={()=>{
                // eslint-disable-next-line no-alert
                if (confirm(`Esta segudo de eliminar: ${item.category}`)) {
                  deleteCategory(item.id);
                }
              }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </div>
            }
          </div >);
        return null;
      });
      return res;
    };


    return (
      <React.Fragment>
        <div className={style.categories}>
          <div className={style.containerItemCategory} >
            {_showCategories()}
          </div>
          {/* Enable if user is admin */}
          { (!isEmpty(uid)) &&
          <ButtonDropdown className={style.addCategory} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle outline caret>
              <FontAwesomeIcon icon={faPlus} />
            </DropdownToggle>
            <DropdownMenu>
              {/* <DropdownItem header>Header</DropdownItem> */}
              <DropdownItem onClick={()=> this.openCloseModalAddCategory()} >Categorías</DropdownItem>
              {/* <DropdownItem divider /> */}
              <DropdownItem onClick={()=> this.openCloseModalAddTag()} >Etiqueta</DropdownItem>
              <DropdownItem >
                <Link to='/blog/newPost' style={{textDecoration: 'none' }} >
                  Publicación
                </Link>
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>}
        </div>
        {/* Add categoria */}
        <Modal
          isOpen={this.state.isOpenModalAddCategory}
          toggle={()=>this.openCloseModalAddCategory()}
          fade
        >
          <ModalHeader
            toggle={()=>this.openCloseModalAddCategory()}
          >
             Crear una categoría
          </ModalHeader>
          <ModalBody>
            <React.Fragment>
              <Label> Nombre categoría</Label>
              <Input onChange = {(e) => typingCategory(e.target.value)} defaultValue = {newCategory} maxLength='100' />
              <div className={style.itemCategory} style = {{background:`${color}`, width:'20px'}}>
                {color}
              </div>
              <Button onClick={(e) =>editingColorCategory(getRandomColor())} > Generar color </Button>
              &nbsp;
              <Button outline onClick={() => saveCategory(()=>this.openCloseModalAddCategory())}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
              <hr/>
              <Label> Editar categoría</Label>
              <Select
                placeholder='Selecione...'
                options={_optionsCategories()}
                onChange = {(e)=> editingCategory(e)}
              />

              { !isEmpty(editCategory) &&
                <React.Fragment>
                  <Input
                    onChange = {(e) => typingEditCategory({...editCategory ,label: e.target.value})}
                    value = {editCategory.label} maxLength='100'
                    style={{marginBottom: '5px', marginTop: '5px'}}
                  />
                  <Button outline onClick={() => saveEditCategory(()=>this.openCloseModalAddCategory())}>
                    <FontAwesomeIcon icon={faSave} />
                  </Button>
                </React.Fragment>
              }

            </React.Fragment>
          </ModalBody>
        </Modal>

        {/* Add etiqueta */}
        <Modal
          isOpen={this.state.isOpenModalAddTag}
          toggle={()=>this.openCloseModalAddTag()}
          fade
        >
          <ModalHeader
            toggle={()=>this.openCloseModalAddTag()}
          >
            Crear una etiqueta
          </ModalHeader>
          <ModalBody>
            <Label> Nombre de etiqueta</Label>
            <Input onChange = {(e) => editingTag(e.target.value)} defaultValue = {newTag} maxLength='100' />
          </ModalBody>
          <ModalFooter>
            <Button onClick={() => this.openCloseModalAddTag()}>
              Cancelar
            </Button>
            <Button onClick={() => saveTag(() => this.openCloseModalAddTag())}>
              Guardar
            </Button>
          </ModalFooter>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({categoryReducer, firebase}) => ({categoryReducer, firebase});

const mapDispatchToProps = {
  setContentModal, openCloseModal,
  saveCategory, getAllCategories, typingCategory, editingCategory,
  editingColorCategory, deleteCategory, typingEditCategory, saveEditCategory,
  getAllTag, editingTag, saveTag
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Categories));
