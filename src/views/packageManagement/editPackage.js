import React from "react"
import { Form, FormGroup, Label, Input, Row, Col, Button, Dropdowns } from "reactstrap"
import {
    Link,
    Check,
} from "react-feather"
import Checkbox from "../../components/@vuexy/checkbox/CheckboxesVuexy"

const checkboxContent = [
    { id: 1, name: 'Incident Management' },
    { id: 2, name: 'Variable Management' },
]

export const PackageForm = ({ title = 'Edit Package' }) => {
    return (
        <Form className="mt-2" onSubmit={e => e.preventDefault()}>
            <h5 className="mb-1">
                <Link size={15} />
                <span className="align-middle ml-50">{title}</span>
            </h5>
            <Row>
                <Col md="6" sm="12">
                    <Label for="name">Package Name</Label>
                    <FormGroup className="position-relative">
                        <Input id="first-name" placeholder="" />

                    </FormGroup>
                    <Label for="description">Description</Label>
                    <FormGroup className="position-relative">
                        <Input id="last-name" type="textarea" placeholder="" />

                    </FormGroup>
                    <Label for="options">Options</Label>
                    <FormGroup className="position-relative" style={{ display: 'flex' }}>
                        {
                            checkboxContent.map(item => {
                                return <div style={{ display: 'flex', marginLeft: '20px' }}>
                                    <Checkbox
                                        color="primary"
                                        icon={<Check className="vx-icon" size={16} />}
                                        label=""
                                        defaultChecked={true}
                                        style={{ marginLeft: '20px' }}
                                    />
                                    <Label>{item.name}</Label>
                                </div>
                            })
                        }

                    </FormGroup>
                    <Label for="validity">Validity in Days</Label>
                    <FormGroup className="position-relative">
                        <Input id="phone-number" type="number" placeholder="" />

                    </FormGroup>
                </Col>
                <Col
                    className="d-flex justify-content-end flex-wrap mt-2"
                    sm="12"
                >
                    <Button.Ripple className="mr-1" color="primary">
                        {title}
                </Button.Ripple>
                    <Button.Ripple color="flat-warning">Cancel</Button.Ripple>
                </Col>
            </Row>
        </Form>
    )
}
export default PackageForm
