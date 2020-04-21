import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class FullOption extends Component {
    constructor(props) {
        super(props)
        this.onClickHandler = this.onClickHandler.bind(this)
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this)
        this.onMouseOutHandler = this.onMouseOutHandler.bind(this)
        this.state = {
            selected: 0,
            hovered: undefined
        }
    }

    onMouseOverHandler(_, __, index) {
        this.setState({
            hovered: index
        })
    }

    onMouseOutHandler() {
        this.setState({
            hovered: undefined
        })
    }

    onClickHandler(_, __, index) {
        const { selected } = this.state
        this.setState({
            selected: index === selected ? undefined : index
        })
    }


    render() {
        if (!this.props.data) return null
        const { hovered, selected } = this.state
        const data = this.props.data.map((entry, i) => {
            if (hovered === i) {
                return {
                    ...entry,
                    color: 'grey',
                }
            }
            return entry
        })

        return (
            <PieChart
                style={{
                    fontFamily:
                        '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                    fontSize: '8px',
                }}
                data={data}
                radius={40}
                lineWidth={60}
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                segmentsShift={(_, index) => (index === selected ? 10 : 1)}
                animate
                label={({ data, dataIndex }) =>
                    `${data[dataIndex].percentage}%`
                }
                labelPosition={100 - 60 / 2}
                labelStyle={{
                    fill: '#fff',
                    opacity: 0.75,
                    pointerEvents: 'none',
                    dominantBaseline: 'central',
                }}
                onClick={this.onClickHandler}
                onMouseOver={this.onMouseOverHandler}
                onMouseOut={this.onMouseOutHandler}
            />
        )
    }
}

export default FullOption