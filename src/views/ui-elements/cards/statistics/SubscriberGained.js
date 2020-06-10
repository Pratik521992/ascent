import React from "react"
import StatisticsCard from "../../../../components/@vuexy/statisticsCard/StatisticsCard"
import { Users } from "react-feather"
import { subscribersGained, subscribersGainedSeries } from "./StatisticsData"

const SubscriberGained = ({title, showGraph}) => {
    return (
      <StatisticsCard
        icon={<Users className="primary" size={22} />}
        stat="92.6k"
        statTitle={title}
        options={subscribersGained}
        series={showGraph ? subscribersGainedSeries : ''}
        type="area"
      />
    )
}
export default SubscriberGained
