import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.div`
	.text {
		display: inline-flex;
		margin-right: 8px;
	}
`

const ButtonWrapper = styled.div`
	display: inline-flex;
	flex-direction: row;

	.btn-sentiment {
		height: 16px;
		width: 26px;
		background: #f2f1f1;
		color: #6d6b77;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		transition: 0.2s;

		:hover {
			color: #ffffff;
		}
	}

	.line {
		position: absolute;
		top: 3px;
		right: 0;
		height: 10px;
		width: 1px;
		background: #ffffff;
	}
`

const Positive = styled.div`
	border-radius: 20px 0 0 20px;

	.line {
		right: 0;
	}

	:hover {
		background: #47c9aa;

		.line {
			opacity: 0;
		}
	}
`

const Center = styled.div`
	:hover {
		background: #71aeef;
	}
`

const Negative = styled.div`
	border-radius: 0 20px 20px 0;

	.line {
		left: 0;
	}

	:hover {
		background: #e56767;

		.line {
			opacity: 0;
		}
	}
`

class Sentiment extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { theme } = this.props

		return (
			<Wrapper>
				<span className="text">ความหมายเชิง</span>
				<ButtonWrapper>
					<Positive className="btn-sentiment">
						+
						<span className="line" />
					</Positive>
					<Center className="btn-sentiment">+/-</Center>
					<Negative className="btn-sentiment">
						<span className="line" />-
					</Negative>
				</ButtonWrapper>
			</Wrapper>
		)
	}
}

export default Sentiment
