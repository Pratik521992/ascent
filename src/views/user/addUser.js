import React from "react"
import { Form, FormGroup, Label, Input, Row, Col, Button , Dropdowns} from "reactstrap"
import {
  Link,
} from "react-feather"

class UserSocialTab extends React.Component {
  render() {
    return (
        <React.Fragment>
      <Form className="mt-2" onSubmit={e => e.preventDefault()}>
        <h5 className="mb-1">
          <Link size={15} />
          <span className="align-middle ml-50">Add User</span>
        </h5>
        <Row>
          <Col md="6" sm="12">
            <Label for="twitter">First Name</Label>
            <FormGroup className="position-relative">
              <Input id="first-name" placeholder="" />
             
            </FormGroup>
            <Label for="facebook">Last Name</Label>
            <FormGroup className="position-relative">
              <Input id="last-name" placeholder="" />
             
            </FormGroup>
            <Label for="instagram">User Name</Label>
            <FormGroup className="position-relative">
              <Input id="user-name" placeholder="" />
             
            </FormGroup>
            <Label for="instagram">Role</Label>
            <FormGroup className="position-relative">
                <Input type="select" name="role" id="role">
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                  </Input>
             
            </FormGroup>
            <Label for="instagram">Password</Label>
            <FormGroup className="position-relative">
              <Input id="password" type="password" placeholder="" />
             
            </FormGroup>
            <Label for="instagram">Phone Number</Label>
            <FormGroup className="position-relative">
              <Input id="phone-number" type="number" placeholder="" />
             
            </FormGroup>
          </Col>
          <Col
                className="d-flex justify-content-end flex-wrap mt-2"
                sm="12"
              >
                <Button.Ripple className="mr-1" color="primary">
                  Add User
                </Button.Ripple>
                <Button.Ripple color="flat-warning">Cancel</Button.Ripple>
              </Col>
        </Row>
      </Form>
       
      </React.Fragment>
    )
  }
}
export default UserSocialTab
