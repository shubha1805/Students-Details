import React, { Component } from 'react';
import { Button, Form, Card} from 'react-bootstrap';
import { collegeDetails, clearCollegeDetails, singleStudentsDetails, updateStudents } from '../actions';
import { connect } from 'react-redux';
import './Login.css';

 class college extends Component {
    state ={
       name:"",
       college: "",
       Physics: "",
       Chemistry: "",
       Mathematics: "",
       Biology: "",
       
    }

    handleChange =(e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault();
        const  collegeItems = {
            name: this.state.name,
            college: this.state.college,
            Physics: this.state.Physics,
            Chemistry: this.state.Chemistry,
            Mathematics: this.state.Mathematics,
            Biology: this.state.Biology,
        }
      console.log(this.state) 
     
      console.log(this.props.studentIndex)
     
      this.clearFields();
      this.props.studentsItems && Object.keys(this.props.studentsItems).length > 0 ? this.props.updateStudentDetails(collegeItems,this.props.studentIndex)  : this.props.collegeItems(collegeItems)
    }
    clearFields =() =>{
        // this.props.clearForm()
        this.setState({
       name:"",
       college: "",
       Physics: "",
       Chemistry: "",
       Mathematics: "",
       Biology: "",
     
        })
    }
   
    componentDidMount(){
        if(Object.keys(this.props.studentsItems).length){
            this.setState ({
                name: this.props.studentsItems.name,
                college: this.props.studentsItems.college,
                Physics: this.props.studentsItems.Physics,
                Chemistry: this.props.studentsItems.Chemistry,
                Mathematics: this.props.studentsItems.Mathematics,
                Biology: this.props.studentsItems.Biology,
               })
               console.log(this.props.studentsItems) 
            }
         }
         
        
    
    
    
    render() {
        const { name, Biology, Chemistry, Mathematics, Physics, college } = this.state
        console.log('sffdsfd', this.props)
    return (
        <Card className="op-Login-area">
        <Card.Title className="text-center">Student Form</Card.Title>
        <Card.Body>
    <Form onSubmit={this.handleSubmit}>
    <Form.Group controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" id="name"placeholder="Enter Name"  name="First Name" value={name} onChange={this.handleChange} required/>
    </Form.Group>
    <Form.Group controlId="formBasicCollege">
            <Form.Label>College</Form.Label>
            <Form.Control type="text" id="college" placeholder="Enter college name"  name="college " value={college}  onChange={this.handleChange} required />
    </Form.Group>
    <hr className="line"/>
    <Form.Group className="prefrence" controlId="formBasicPhysics">
        <label for="Physics">Physics: </label>
        <input type="number" min="0" max="100"  id="Physics" placeholder="Enter number" name="Physics "  value={Physics}  onChange={this.handleChange} required ></input>
    </Form.Group>
    <Form.Group className="prefrence" controlId="formBasicChemistry">
        <label for="Chemistry">Chemistry: </label>
        <input type="number" min="0" max="100" id="Chemistry" placeholder="Enter number" name="Chemistry " value={Chemistry}  onChange={this.handleChange} required ></input>
    </Form.Group>
    <Form.Group className="prefrence" controlId="formBasicMathematics">
        <label for="Mathematics">Mathematics: </label>
        <input type="number" min="0" max="100" id="Mathematics" placeholder="Enter number" name="Mathematics " value={Mathematics}  onChange={this.handleChange} required ></input>
    </Form.Group>
    <Form.Group className="prefrence" controlId="formBasicBiology">
        <label for="Biology">Biology: </label>
        <input type="number" min="0" max="100"  id="Biology" placeholder="Enter number" name="Biology " value={Biology}  onChange={this.handleChange} required ></input>
    </Form.Group>
  
    <Button variant="primary" type="submit" id="button-1" >{this.props.studentsItems &&  Object.keys(this.props.studentsItems).length > 0 ?  'update':'submit'}</Button>

    <Button variant="primary" id="button-2" onClick={this.clearFields} >Cancel</Button>
    </Form>
    </Card.Body>
    </Card>
    )
}
}
const mapDispatchToProps = {
    collegeItems : collegeDetails,
    updateStudentDetails: updateStudents,
    clearForm: clearCollegeDetails

}
const mapStateToProps = (state) => {
    return {
        studentsItems: state.college.studentsItems,
        studentIndex : state.college.index
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(college);
