import React from "react"
import {
  Card,
  CardBody,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane
} from "reactstrap"
import AddUser from "./addUser"
import RegisteredUser from './RegisteredUser'
import "../../assets/scss/pages/users.scss"
import {postAddUser} from '../../redux/actions/addUser/addUser'
class UserEdit extends React.Component {
  state = {
    activeTab: "1"
  }

  toggle = tab => {
    this.setState({
      activeTab: tab
    })
  }
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
                <AddUser postAddUser={postAddUser}/>
            </CardBody>
          </Card>
          <RegisteredUser />
        </Col>
      </Row>
    )
  }
}
export default UserEdit
