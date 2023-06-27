import { Button, Card } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutImage from '../../assets/about.jpg';

function AboutUs () {
    return(
        <div style={{marginTop:'50px', width:'100%'}}> 
        <div style={{textAlign:'center', fontSize:'30px', fontWeight:'bold', marginBottom:'10px'}}>WELCOME TO FIDTECH HOTEL & SUITE</div>
        <Row >
        <Col sm>
            <Card >
                <Card.Body>
                <Button variant="primary" >About us</Button>
                <Card.Text style={{marginTop:'50px'}}> 
                    FidTech Hotel and Suit is dolor sit amet consectetur, adipisicing elit. 
                    Id minus quos reiciendis. Rerum ad voluptas aliquam minus 
                    culpa cupiditate amet nihil odio dolores. Magni molestias 
                    assumenda hic laborum aperiam vel sed ratione, similique, 
                    ipsum ex quaerat nostrum ut, nesciunt voluptates pariatur. 
                    Reiciendis, beatae consequatur explicabo provident repudiandae 
                    enim eligendi adipisci quibusdam numquam nihil autem voluptatem 
                    odio dicta! Officia, exercitationem explicabo! Hic repellat nemo 
                    porro, cum doloremque harum earum praesentium ex animi repudiandae nisi 
                    doloribus dolor culpa fuga sint at itaque nam sit? Et veniam maxime distinctio 
                    consequatur magni. Sapiente nostrum quidem recusandae totam, debitis, aliquam facilis 
                  
                </Card.Text>
                </Card.Body>
            </Card>
        
        </Col>
        <Col sm> 
        <img src={AboutImage} alt="" style={{height:"300px", width:'100%'}} />
        
        </Col>
      </Row>
        </div>

    )
}
export default AboutUs;