import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { Select } from 'antd'
const { Option, OptGroup } = Select
import forEach from 'lodash/forEach'

const Wrapper = styled.div`
	display: none;
	background: #ffffff;
	border: 1px solid #eaeaea;
	border-radius: ${props => props.radius};
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
	color: ${props => props.accent};
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
		const { theme, keywords, groups } = this.props
		let allUnreadKeywords = 0
		forEach(keywords, value => (allUnreadKeywords += value.unread || 0))

		return (
			<Wrapper radius={theme.radius}>
				<Title>Keywords & Group</Title>
				<SelectFilter defaultValue="ALL" onChange={this.handleKeywords}>
					<OptGroup label="Keywords">
						<Option value="ALL" style={{ display: 'flex' }}>
							<Text>ทั้งหมด</Text>
							<Noti accent={theme.accent}>{allUnreadKeywords}</Noti>
							<Divide />
						</Option>
						{keywords.map((value, index) => (
							<Option
								value={value.keyword}
								style={{ display: 'flex' }}
								key={index}>
								<Text>{value.keyword}</Text>
								<Noti accent={theme.accent}>{value.unread}</Noti>
								<Divide />
							</Option>
						))}
					</OptGroup>
					<OptGroup label="Group">
						{groups.map((value, index) => (
							<Option
								value={value.title}
								style={{ display: 'flex' }}
								key={index}>
								<Text>{value.title}</Text>
								<Noti accent={theme.accent}>{value.unread}</Noti>
								<Divide />
							</Option>
						))}
					</OptGroup>
				</SelectFilter>
			</Wrapper>
		)
	}
}

const mapStateToProps = ({ theme, keywords, groups }) => ({
	theme,
	keywords,
	groups
})

export default connect(mapStateToProps)(Keywords)
