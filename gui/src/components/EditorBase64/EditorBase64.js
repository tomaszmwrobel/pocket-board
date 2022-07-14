import * as React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Editor from "@monaco-editor/react";

const textToBase64 = "TEXT to Base64"
const base64ToPlainText = "Base64 to PLAIN TEXT"
export class EditorBase64 extends React.Component {

    constructor(props) {
        super(props);
        this.monacoInput = null
        this.monacoOutput = null

        this.state = {
            base64Direction: textToBase64,
            isBase64Source: false
        }
        this.handleDirection = this.handleDirection.bind(this)
    }

    handleEditorDidMount = (editor, monaco) => {
        this.monacoInput = editor;
    }

    handleEditorDidMount2 = (editor, monaco) => {
        this.monacoOutput = editor;
    }

    handleEditorChange = (value, event) => {
        console.log("editor changed: " + this.state.base64Direction)
        let result = ""
        if (this.state.isBase64Source) {
            result = this.getDecodedValue(value);
        } else {
            result = btoa(value)
        }
        this.monacoOutput.getModel().setValue(result)

    }

    getDecodedValue(value) {
        try {
            return atob(value)
        } catch (e) {
            console.log("Wrong base64 Input")
            return  "Wrong  base64 Input"
        }
    }

    handleDirection() {
        let changedDirection = textToBase64
        if (this.state.base64Direction === textToBase64) {
            changedDirection = base64ToPlainText
        }
        console.log("direction of transformation should be changed to: " + changedDirection)
        this.setState(prevState =>({
            base64Direction: changedDirection,
            isBase64Source: !prevState.isBase64Source
        }));
        this.updateEditors();
    }

    updateEditors() {
        let outputValue = this.monacoOutput.getModel().getValue()
        let inputValue = this.monacoInput.getModel().getValue()
        console.log("status to change:" + outputValue)
        this.monacoInput.getModel().setValue(outputValue)
        this.monacoOutput.getModel().setValue(inputValue)
    }

    render() {
        return <Container>
            <Row>
                <Button onClick={this.handleDirection}>
                    Change conversion
                </Button>
            </Row>
        <Row>
            <p>Current conversion: {this.state.base64Direction}</p>
        </Row>
            <Row>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="plaintext"
                        defaultValue="// test value"
                        onMount={this.handleEditorDidMount}
                        onChange={this.handleEditorChange}
                    />
                </Col>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="plaintext"
                        defaultValue="Ly8gdGVzdCB2YWx1ZQ=="
                        onMount={this.handleEditorDidMount2}
                    />
                </Col>
            </Row>
        </Container>
    }
}