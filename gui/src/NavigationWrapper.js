import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import {SimpleReactComponent} from "./components/SimpleReactComponent";
import {SimpleMainView1} from "./components/SimpleMainView1";
import {EditorBase64} from "./components/EditorBase64/EditorBase64";

export class NavigationWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSimpleReactComponent: false,
            showSimpleMainView1: false,
            showEditorBase64: false,
        }
    }

    handleSelect = (eventKey) => {
        switch (eventKey) {
            case '1':
                this.setState({
                    showSimpleReactComponent: true,
                    showSimpleMainView1: false,
                    showEditorBase64: false,
                });
                return;
            case '2':
                this.setState({
                    showSimpleReactComponent: false,
                    showSimpleMainView1: true,
                    showEditorBase64: false,
                });
                return;
            case '3':
                this.setState({
                    showSimpleReactComponent: false,
                    showSimpleMainView1: false,
                    showEditorBase64: true,
                });
                return;
            default:
                return;
        }

    }

    render() {
        return <Container fluid={true}>
            <Row>
                <Col lg={2}>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Nav className="flex-column text-start" activeKey="1" onSelect={this.handleSelect}>
                                <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
                                <Nav.Link eventKey="2" href="#">SimpleView1</Nav.Link>
                                <Nav.Link eventKey="3" href="#">Base64 Converter</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </Col>
                <Col lg={8}>
                    {this.state.showSimpleReactComponent && <SimpleReactComponent/>}
                    {this.state.showSimpleMainView1 && <SimpleMainView1/>}
                    {this.state.showEditorBase64 && <EditorBase64/>}
                </Col>
            </Row>
        </Container>;

    }
}