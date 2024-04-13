import React, {useState, useEffect} from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const HomeCard = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <Card loading={loading}
              onClick={() => {
                    console.log('Card clicked');
              }
              }
            hoverable
            style={{ width: '60vh',
                padding: '10px 10px 10px 10px',
        }}
            cover={<img alt="example" src="/public/static/images/hero-light.png" />}>
            <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
    )

};

export default HomeCard;