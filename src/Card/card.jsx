import React from 'react';
import './card.css';
import { Card, Col, Row } from 'antd';
import { Layout, Menu } from 'antd';
import { Rate } from 'antd';
import { Steps } from 'antd';
const { Step } = Steps;
const { Header} = Layout;

function Cards(){

  const cardData = [
    {
      title:"Febriana P",
      job:"FrontEnd Dev",
      finish:"Design tampilan website dengan Ant Design",
      progress:"Memperbarui tampilan sesuai permintaan customer",
      waiting:"Projek Selanjutnya"
    },
    {
      title:"Ana Sari",
      job:"Project Manager",
      finish:"Membagi tugas sesuai deskjob",
      progress:"Memantau progress tiap divisi",
      waiting:"Projek Selanjutnya"
    },
    {
      title:"Pamungkasari",
      job:"UI/UX",
      finish:"Membuat prototipe tampilan website",
      progress:"Memberi perubahan yang perlu",
      waiting:"Projek Selanjutnya"
    }
  ]

  return (
    // <div>
    //   {cardData.map(data =>
    //     <div className="card">
    //       <p className="title">{data.title}</p>
    //       <p>{data.job}</p>
    //     </div>
    //     )}
    // </div>
  <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">Menu 1</Menu.Item>
        <Menu.Item key="2">Menu 2</Menu.Item>
        <Menu.Item key="3">Menu 3</Menu.Item>
      </Menu>
    </Header>

    <div className="site-card-wrapper">
      <Row gutter={[8,8]}>
        {cardData.map(data =>
        <Col span={8}>
          <Card title="Data Nama" bordered={false}>
            <p className="title">{data.title}</p>
            <p>{data.job}</p>
            <p><Rate allowHalf defaultValue={4} /> </p>
          </Card>

          <Card title="Pengerjaan" bordered={false}>
            <Steps direction="vertical" current={1}>
              <Step title="Finished" description={data.finish}/>
              <Step title="In Progress" description={data.progress}/>
              <Step title="Waiting" description={data.waiting}/>
            </Steps>
          </Card>

        </Col>
        )}
        </Row>
    </div>
    
  </Layout>
  );

}

export default Cards;
