import React from 'react';
import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
const HomeCarousel = () => {
    const { banners } = useSelector(state => state.bookingReducer)

    return (
        <div>
            <Carousel autoplay prevArrow={<LeftOutlined />} nextArrow={<RightOutlined />} className=''>
                {banners.map(item =>
                    <img className='h-100' src={item.hinhAnh} alt={item.maPhim} key={item.maPhim} />
                )}
            </Carousel>
        </div>
    );
};

export default HomeCarousel;