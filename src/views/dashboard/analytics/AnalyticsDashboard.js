import React from "react"
import { Row, Col, Card, CardTitle, CardBody } from "reactstrap"
import SalesCard from "./SalesCard"
import SuberscribersGained from "../../ui-elements/cards/statistics/SubscriberGained"
import OrdersReceived from "../../ui-elements/cards/statistics/OrdersReceived"
import AvgSession from "../../ui-elements/cards/analytics/AvgSessions"
import SupportTracker from "../../ui-elements/cards/analytics/SupportTracker"
import ProductOrders from "../../ui-elements/cards/analytics/ProductOrders"
import SalesStat from "../../ui-elements/cards/analytics/Sales"
import ActivityTimeline from "./ActivityTimeline"
import DispatchedOrders from "./DispatchedOrders"
import "../../../assets/scss/pages/dashboard-analytics.scss"

let $primary = "#7367F0",
  $danger = "#EA5455",
  $warning = "#FF9F43",
  $info = "#00cfe8",
  $primary_light = "#9c8cfc",
  $warning_light = "#FFC085",
  $danger_light = "#f29292",
  $info_light = "#1edec5",
  $stroke_color = "#e8e8e8",
  $label_color = "#e7eef7",
  $white = "#fff"

class AnalyticsDashboard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row className="match-height">
        <Col lg="12" md="12">
          <Card>
            <CardBody >
              <a href="/app/user/addUser">Add User</a>
              <a style={{marginLeft: '20px'}} href="/app/user/editUser">Edit User</a>
              </CardBody>
          </Card>
          </Col>
        </Row>
        <Row className="match-height">
          <Col lg="6" md="12">
            <SuberscribersGained showGraph={true} title={'No of Nursing homes'} />
          </Col>
          <Col lg="3" md="12">
            <OrdersReceived title={'No of Devices'} />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained showGraph={true} title={'Users'} />
          </Col>
          <Col lg="3" md="6" sm="12">
            <OrdersReceived title={'No of Subscription received'} />
          </Col>
          <Col lg="3" md="6" sm="12">
            <SuberscribersGained showGraph={false} title={'Package Management'} />
          </Col>
        </Row>
      </React.Fragment>
    )
  }
}

export default AnalyticsDashboard
