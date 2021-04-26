import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, Button, Breadcrumb, BreadcrumbItem,Modal, ModalHeader, ModalBody, Label, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite(campsite){
        
        return (
            <div className = "col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                  
                        <CardText>{campsite.description}</CardText>
                        
                    </CardBody>

                </Card>
            </div>
        )

    }

class CommentForm extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    
    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
      
    }

    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" /> Submit Comment </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={values => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select defaultValue= {1} model=".rating" id="rating" name="rating"
                                        className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                      <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </div>
                            <div className="form-group">
                                <Label htmlFor="text" md={12}>Comment</Label>
                                <Col md={12}>
                                    <Control.textarea model=".text" id="text" name="text"
                                        rows="6"
                                        className="form-control"
                                    />
                                </Col>
                            </div>
                            <div className="form-group">
                                <Col md={{size: 10, offset: 0}}>
                                    <Button color="primary" type="submit"> Submit </Button>
                                </Col>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderComments(comments){
        if(comments){
            return (
                <div className = "col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => <div key={comment.id}> {comment.text} <br />-- {comment.author}{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} <br /><br /></div>)}
                    <CommentForm />
                </div>
            );
        }
        return <div />;
    }

function CampsiteInfo(props){
        if (props.campsite){
            return (
               
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h2>{props.campsite.name}</h2>
                            <hr />
                        </div>
                    </div>
                    <div className = "row">
                        {RenderCampsite(props.campsite)}
                        {RenderComments(props.comments)}
                                 
                    </div>
                  
                </div>  
            );
        } 
        return <div />;
    }


export default CampsiteInfo;