import React, { useState, useEffect } from 'react';
import { Input, Input1, Input2, FormBtn} from "./userForm"
import { Col, Row, Container } from "../Grid";
import API from "../../utils/API";
import Jumbotron from "../Jumbotron";

function Form() {
    // Setting our component's initial state
   
    const [formObject, setFormObject] = useState({})
    const [userPosts, setUserPosts] = useState([])

    function loadUserPosts(email){
      console.log(email)
      API.returnByEmail(email)
      .then(res =>
        console.log(res)
      )
      .catch(err => console.log(err))
    }

    useEffect(() => {
      const email = localStorage.getItem("userEmail") 
      loadUserPosts(email)
    }, [])
    
  
    // Load all books and store them with setBooks
  
    // Loads all books and sets them to books
 
  
    // Deletes a book from the database with a given id, then reloads books from the db
  
  
    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, Email:localStorage.getItem("userEmail"),  [name]: value})
    };
  
    // When the form is submitted, use the API.saveBook method to save the book data
    // Then reload books from the database
    function handleFormSubmit(event) {
        
      event.preventDefault();
     
      console.log()
        API.postAilment({
          Ailment: formObject.Ailment,
          Method: formObject.Method,
          Treatment: formObject.Treatment,

          
        })
        console.log(formObject)
      
    };
  // use the books example for the display ailments, need to match the email from local storage
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>Form</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="Ailment"
                  placeholder="Ailment (required)"
                />
                <Input1
                  onChange={handleInputChange}
                  name="Method"
                  placeholder="Title (required)"
                />
                <Input2
                  onChange={handleInputChange}
                  name="Treatment"
                  placeholder="Title (required)"
                />
                {/* <TextArea
                  onChange={handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                /> */}
                <FormBtn
                  onClick={handleFormSubmit}
                >
                 Form
                </FormBtn>
              </form>
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Form;





