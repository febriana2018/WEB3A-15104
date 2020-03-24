import React, { Component } from 'react';
import './Home.css';
import { LikeFilled, DislikeFilled } from '@ant-design/icons';
import { Button } from 'antd';


class Like extends Component{
    state = {
        like: 2000
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    handleLike = () => {
        this.setState({
            like: this.state.like + 1
        }, () => {
            this.handleCounterChange(this.state.like)
        })
        
    }

    handleDislike = () => {
        if(this.state.like > 0){
            this.setState({
            like: this.state.like - 1
            }, () => {
                this.handleCounterChange(this.state.like)
            })
        }
    }
    

    render(){
        return(
            <div>
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
            </div>
            
        );
    }
}


export default Like;