import React from 'react';
import { Card, Media, Content, Heading } from 'react-bulma-components';

export default class Listing extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="card-container">
                    <Card>
                        <Card.Image size="4by3" src="https://source.unsplash.com/category/nature/400x300" />
                        <Card.Content>
                        <Media>
                            <Media.Item>
                            <Heading size={4}>{this.props.name}</Heading>
                            <Heading subtitle size={6}>{this.props.neighbourhood}</Heading>
                            </Media.Item>
                        </Media>
                        <Content>
                        {this.props.neighbourhood} | {this.props.room_type} | Minimum nights: {this.props.minimum_nights} | ${this.props.price}/night
                        </Content>
                        </Card.Content>
                        <Card.Footer>
                            <Card.Footer.Item renderAs="a" href="#Yes">Show</Card.Footer.Item>
                            <Card.Footer.Item renderAs="a" href="#No">Edit</Card.Footer.Item>
                            <Card.Footer.Item renderAs="a" href="#Maybe">Delete</Card.Footer.Item>
                        </Card.Footer>
                    </Card>
                </div>
            </div>
        )
    }
}