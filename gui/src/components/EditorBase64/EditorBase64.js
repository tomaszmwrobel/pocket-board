import * as React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Editor from "@monaco-editor/react";

export class EditorBase64 extends React.Component {

    constructor(props) {
        super(props);
        this.monacoInput = null
        this.monacoOutput = null

        this.state = {
            showSimpleReactComponent: false,
            showSimpleMainView1: false,
            showEditorBase64: false,
        }
    }

    handleEditorDidMount = (editor, monaco) => {
        this.monacoInput = editor;
    }

    handleEditorDidMount2 = (editor, monaco) => {
        this.monacoOutput = editor;
    }

    handleEditorChange = (value, event) => {
        let encoded = btoa(value);
        this.monacoOutput.getModel().setValue(encoded)

    }

    render() {
        return <Container>
            <Row>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="javascript"
                        defaultValue="// test value"
                        onMount={this.handleEditorDidMount}
                        onChange={this.handleEditorChange}
                    />
                </Col>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="plaintext"
                        defaultValue=""
                        onMount={this.handleEditorDidMount2}
                    />
                </Col>
            </Row>
        </Container>
    }
}