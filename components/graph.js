import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	height: calc(100vh - 120px);
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 768px) {
		height: auto;
	}
`

const GraphTitle = styled.div`
	margin-bottom: 10px;
	color: #ffffff;
	font-size: 18px;
`

const Background = styled.div`
	height: calc(100vh - 120px - 138px);
	background: #ffffff;
	border-radius: 10px;
	padding: 24px;
	box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
`

const Info = styled.div``

const Menu = styled.div`
	background: ${props => props.background};
`

class Graph extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				<GraphTitle>กราฟแสดงจำนวนที่ Keywords ถูกพูดถึง</GraphTitle>
				{/* <Background className="columns">
					<Info className="column is-9">Graph</Info>
					<Menu className="column is-3" background={theme.light}>
						Menu
					</Menu>
				</Background> */}
			</Wrapper>
		)
	}
}

export default Graph
