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
import "../../assets/scss/pages/users.scss"
class PackageManagement extends React.Component {
  
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
                <a href="/app/user/createPackage">Create Package</a>
                <a style={{marginLeft: '20px'}} href="/app/user/managePackage">Manage Package</a>
                <a style={{marginLeft: '20px'}} href="/app/user/editPackage">Edit Package</a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default PackageManagement
