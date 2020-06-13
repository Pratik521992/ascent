import React from "react"
import { Form, FormGroup, Label, Input, Row, Col, Button , Dropdowns} from "reactstrap"
import {
  Link,
} from "react-feather"

const {useState} = React;

export function UserSocialTab({postAddUser}) {
  const [userData, setUserDate] = useState({
    firstName: '',
    lastName: '',
    username: '',
    role: '',
    password: '',
    phonenumber: ''
  });

  const onChangeData = (event) => {
    setUserDate({
      ...userData,
      [event.id]: event.value
    })
  }

    return (
        <React.Fragment>
      <Form className="mt-2" onSubmit={postAddUser(userData)}>
        <h5 className="mb-1">
          <Link size={15} />
          <span className="align-middle ml-50">Add User</span>
        </h5>
        <Row>
          <Col md="6" sm="12">
            <Label for="twitter">First Name</Label>
            <FormGroup className="position-relative">
              <Input id="firstname" placeholder="" onChange={onChangeData} />
             
            </FormGroup>
            <Label for="facebook">Last Name</Label>
            <FormGroup className="position-relative">
              <Input id="lastname" placeholder="" onChange={onChangeData}/>
             
            </FormGroup>
            <Label for="instagram">User Name</Label>
            <FormGroup className="position-relative">
              <Input id="username" placeholder="" onChange={onChangeData}/>
             
            </FormGroup>
            <Label for="instagram">Role</Label>
            <FormGroup className="position-relative">
                <Input type="select" name="role" id="role" onChange={onChangeData}>
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                    <option>select user</option>
                  </Input>
             
            </FormGroup>
            <Label for="instagram">Password</Label>
            <FormGroup className="position-relative">
              <Input id="password" type="password" placeholder="" onChange={onChangeData}/>
             
            </FormGroup>
            <Label for="instagram">Phone Number</Label>
            <FormGroup className="position-relative">
              <Input id="phonenumber" type="number" placeholder="" onChange={onChangeData}/>
             
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
export default UserSocialTab
