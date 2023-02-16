import React from 'react'
import {Button, Card ,} from 'antd';
const { Meta } = Card;
const MovieItem = (props) => {
  const {item} = props

  return (
    <Card
      hoverable
      cover={<img className='h-60 object-cover' alt="example" src={item.hinhAnh} />}
    >
 
      <Meta title={item.tenPhim} description={item.tenPhim} />
      <Button className='mt-3' type="primary">Booking</Button>
    </Card>
  )
}

export default MovieItem