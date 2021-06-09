import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as menuActions from "../../redux/actions/menuActions";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Badge } from "reactstrap";
import {Component} from "react"
import { Link } from "react-router-dom";


class Menu extends Component {

    componentDidMount(){
        this.props.actions.getMenus();
    }

    selectMenu = menu => {
        this.props.actions.changeMenu(menu);
        
      };

    render() {
        return (
            <div>
                 <ListGroup>
          {this.props.menus.map(menu => (
            <Link to={`/${menu.value}`} style={{color:"inherit",
              textDecoration:"none",
             }}>
            <ListGroupItem
              active={menu.id === this.props.currentMenu.id}
              onClick={() => this.selectMenu(menu)}
              key={menu.id}
              action
              tag="button"
            >
              
              {menu.name}
            </ListGroupItem></Link>
            
          ))}
        </ListGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      currentMenu: state.changeMenuReducer,
      menus: state.menuListReducer
    };
  }

function mapDispatchToProps(dispatch) {
    return {
      actions: {
          getMenus:bindActionCreators(
              menuActions.getMenus,dispatch
          ),
        changeMenu: bindActionCreators(
          menuActions.changeMenu,
          dispatch
        ),
      }
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(Menu);