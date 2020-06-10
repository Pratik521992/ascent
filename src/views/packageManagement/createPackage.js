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
import PackageForm from './editPackage'
import Packagetable from './managePackage'

class CreatePackage extends React.Component {
  
  render() {
    return (
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="pt-2">
               <PackageForm title={'Create Package'}/>
               <Packagetable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    )
  }
}
export default CreatePackage
