import { FooterContainer, Container, Row, Col } from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Row>
                    <Col>
                        {/* Note: this is a mock-up footer, 
                        If there are real world, I will replace 
                        all p tags to <NavLink> or <Link> components*/}
                        <h3>LOGO INC</h3>
                        <p>243-465-1354</p>
                        <p>3 Holly St</p>
                        <p>Toronto, ON</p>
                    </Col>
                    <Col>
                        <h3>Company</h3>
                        <p>About</p>
                        <p>Mission</p>
                        <p>Careers</p>
                    </Col>
                    <Col>
                        <h3>Services</h3>
                        <p>Consulting</p>
                        <p>Web design</p>
                        <p>Development</p>
                        <p>UX/UI design</p>
                    </Col>
                    <Col>
                        <h3>Help</h3>
                        <p>Support</p>
                        <p>Fund</p>
                        <p>FAQs</p>
                    </Col>
                </Row>
            </Container>
        </FooterContainer>
    );
}

export default Footer;