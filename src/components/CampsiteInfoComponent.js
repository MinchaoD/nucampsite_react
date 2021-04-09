import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends Component {
    constructor(props) {
        super(props);
        this.state ={
            

        }
      
    }
    renderCampsite(campsite){
        
        return (
            <div className = "col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                        
                    </CardBody>

                </Card>
            </div>
        )

    }
 

    renderComments(campsite){
        if(campsite.comments){
            return (
                <div className = "col-md-5 m-1">
                    <h4>Comments</h4>
                    
                    {campsite.comments.map(comment => <div key={comment.id}> {comment.text} <br />-- {comment.author}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br /><br /></div>)}

                </div>
            );
        }
        return <div />;
    }



    render(){
        if (this.props.campsite){
            return (
                <div>
                    <div className = "row">
                        {this.renderCampsite(this.props.campsite)}
                        
                    </div>
                    <div className = "row">
                       
                        {this.renderComments(this.props.campsite)}
                    </div>
                </div>  
            );
        } 
        return <div />;


    }


}


export default CampsiteInfo;