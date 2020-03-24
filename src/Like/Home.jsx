import React, { Component } from 'react';
import './Home.css';
import { Layout } from 'antd';
import { Card } from 'antd';
import { LikeFilled, DislikeFilled } from '@ant-design/icons';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
import { Button } from 'antd';
const {  Content,  } = Layout;
const { Meta } = Card;


class Home extends Component{
    state = {
        like: 2000
    }

    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        })
    }

    handleDislike = () => {
        if(this.state.like > 0){
            this.setState({
            like: this.state.like - 1
            })
        }
    }

    render(){
        return(
        <Layout className="layout" role="dialog" max-width="815px">
                <PageHeader
                    className="header"
                    title="@cloth.id"
                    extra={[
                        <Avatar size={42} icon={<UserOutlined />} />]}
                />
            <Content>
            <Card
                hoverable
                style={{ 
                    width: 450,
                    padding:16 }}
                cover={<img alt="example" src="https://i.pinimg.com/564x/87/0d/67/870d67df4ccbda86e09ac8f4f369ee51.jpg" />}
            >
            <div>
                <p  className="likes">{this.state.like} likes</p>
            </div>
            <Meta title="Channel Perfumery" description="What about this? How many like i will get? Please, click love below!" /> 

            <div className="like">
                <Button type="primary" shape="circle" onClick={this.handleLike}>
                    <LikeFilled />
                </Button>
            </div>
            <div className="like">
                <Button type="danger" shape="circle" onClick={this.handleDislike}>
                    <DislikeFilled />
                </Button>
            </div>

            </Card>
            
            </Content>
        </Layout>
        );
    }
}


export default Home;