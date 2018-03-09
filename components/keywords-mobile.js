import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Select } from 'antd'
const { Option, OptGroup } = Select

const Wrapper = styled.div`
	display: none;
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	padding: 16px;

	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
	}
`

const Title = styled.div`
	margin-bottom: 8px;
`

const SelectFilter = styled(Select)`
	flex: 1;

	.ant-select-selection-selected-value {
		width: 100%;
		display: flex !important;

		> * {
			:nth-last-child(1) {
				display: block;
			}
		}
	}
`

const Text = styled.div`
	flex: 1;
`

const Noti = styled.div`
	color: #1abaed;
	font-size: 12px;
`

const Divide = styled.div`
	display: none;
	height: 14px;
	width: 1px;
	margin: auto 0 auto 8px;
	background: #e8e8e8;
`

class Keywords extends Component {
	constructor(props, context) {
		super(props, context)
	}

	handleKeywords = () => {}

	handleGroup = () => {}

	render() {
		const { theme, data } = this.props
		const { dataKeywords, allKeywords, dataGroup } = data

		const keywords = (
			<SelectFilter defaultValue="ALL" onChange={this.handleKeywords}>
				<OptGroup label="Keywords">
					<Option value="ALL" style={{ display: 'flex' }}>
						<Text>ทั้งหมด</Text>
						<Noti>{allKeywords}</Noti>
						<Divide />
					</Option>
					{dataKeywords.map((k, index) => (
						<Option value={k.text} style={{ display: 'flex' }} key={index}>
							<Text>{k.text}</Text>
							<Noti>{k.noti}</Noti>
							<Divide />
						</Option>
					))}
				</OptGroup>
				<OptGroup label="Group">
					{dataGroup.map((g, index) => (
						<Option value={g.text} style={{ display: 'flex' }} key={index}>
							<Text>{g.text}</Text>
							<Noti>{g.noti}</Noti>
							<Divide />
						</Option>
					))}
				</OptGroup>
			</SelectFilter>
		)

		return (
			<Wrapper>
				<Title>Keywords & Group</Title>
				{keywords}
			</Wrapper>
		)
	}
}

export default Keywords
