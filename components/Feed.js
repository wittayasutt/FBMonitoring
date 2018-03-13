import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import Switch from './switch'
import Filter from './filter'
import Box from './box'
import { Pagination } from 'antd'

const Wrapper = styled.div`
	margin-top: 24px;
`

const Title = styled.div`
	display: flex;
	flex-direction: row;
`

const LeftTitle = styled.div`
	flex: 1;
	font-size: 24px;
	font-weight: 500;
`

const RightTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Boxes = styled.div``

class Feed extends Component {
	constructor(props, context) {
		super(props, context)
	}

	render() {
		const data = [
			{
				name: 'Thanapa Suthisa-ngiam',
				type: 'Post',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:56',
				answer: true
			},
			{
				name: 'Ratthapon Wittayasuttikul',
				type: 'Comment',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:55',
				answer: false
			},
			{
				name: 'Phet Chaiyadech',
				type: 'Reply',
				text:
					'กองของ<a>cimb</a>ที่ลงทุนในเวียดนามตอนนี้เปิดเพิ่มให้ซื้อได้แล้วคับเพื่อนๆตั้งแต่วันที่21-25เดือนนี้เท่านั้น ใครสนใจรีบๆก่อนหมดนะคับ',
				date: '20 Dec 2017 16:31:55',
				answer: false
			}
		]

		return (
			<Wrapper>
				<Title>
					<LeftTitle>
						<Switch />
					</LeftTitle>
					<RightTitle>
						<Filter />
					</RightTitle>
				</Title>
				<Boxes>{data.map((d, index) => <Box data={d} key={index} />)}</Boxes>
				<Pagination
					size="small"
					defaultCurrent={1}
					total={300}
					pageSize={30}
					style={{ textAlign: 'center', marginTop: '40px' }}
				/>
			</Wrapper>
		)
	}
}

export default Feed
