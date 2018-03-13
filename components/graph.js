import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { DatePicker } from 'antd'
const { RangePicker } = DatePicker

const Wrapper = styled.div`
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: ${props => props.radius};
`

const Title = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 16px;

	@media screen and (max-width: 768px) {
		flex-direction: column;
		align-items: flex-start;
	}
`

const LeftTitle = styled.div`
	flex: 1;

	@media screen and (max-width: 768px) {
		margin-bottom: 8px;
	}
`

const CollapseButton = styled.div`
	cursor: pointer;

	i {
		margin-right: 8px;
		transition: 0.2s;
	}

	i.rotate {
		transform: rotate(180deg);
	}
`

const RightTitle = styled.div``

const CollapseWrapper = styled.div`
	height: ${props => (props.collapse ? '0' : '300px')};
	overflow: hidden;
	transition: 0.4s ease-out;
	margin: 0 16px;
`

const Collapse = styled.div`
	padding: 16px 0;
	border-top: 1px solid #eaeaea;
`

class Graph extends Component {
	constructor(props, context) {
		super(props, context)

		this.state = {
			collapse: false
		}
	}

	collapseToggle = () => {
		const collapse = !this.state.collapse
		this.setState({ collapse })
	}

	onChange = (value, dateString) => {
		console.log('Selected Time: ', value)
		console.log('Formatted Selected Time: ', dateString)
	}

	onOk = value => {
		console.log('onOk: ', value)
	}

	render() {
		const { theme } = this.props
		const { collapse } = this.state

		// Chart
		const chartData = []
		// const width = 700,
		// 	height = 300,
		// 	margins = { left: 100, right: 100, top: 50, bottom: 50 },
		// 	title = 'User sample',
		// 	// chart series,
		// 	// field: is what field your data want to be selected
		// 	// name: the name of the field that display in legend
		// 	// color: what color is the line
		// 	chartSeries = [
		// 		{
		// 			field: 'BMI',
		// 			name: 'BMI',
		// 			color: '#ff7f0e'
		// 		}
		// 	],
		// 	// your x accessor
		// 	x = function(d) {
		// 		return d.index
		// 	}

		return (
			<Wrapper radius={theme.radius}>
				<Title>
					<LeftTitle>
						<CollapseButton onClick={this.collapseToggle}>
							<i
								className={'fas fa-arrow-down ' + (collapse ? 'rotate' : '')}
							/>
							กราฟแสดงจำนวนที่ Keywords ถูกพูดถึง
						</CollapseButton>
					</LeftTitle>
					<RightTitle>
						<RangePicker
							showTime={{ format: 'HH:mm' }}
							format="YYYY-MM-DD HH:mm"
							placeholder={['Start Time', 'End Time']}
							onChange={this.onChange}
							onOk={this.onOk}
							style={{ width: 'auto' }}
						/>
					</RightTitle>
				</Title>
				<CollapseWrapper collapse={collapse}>
					<Collapse>
						{/* <Chart
							title={title}
							width={width}
							height={height}
							margins={margins}>
							<LineChart
								margins={margins}
								title={title}
								data={chartData}
								width={width}
								height={height}
								chartSeries={chartSeries}
								x={x}
							/>
						</Chart> */}
					</Collapse>
				</CollapseWrapper>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme, keywords, groups }) => ({
	theme,
	keywords,
	groups
})

export default connect(mapStateToProps)(Graph)
