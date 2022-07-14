import * as React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import Editor from "@monaco-editor/react";

import * as yaml from "yaml"

const yamlToJson = "YAML to JSON"
const jsonToYaml = "JSON to YAML"

export class JsonYamlConverter extends React.Component {

    constructor(props) {
        super(props);
        this.monacoEditorInput = null
        this.monacoEditorOutput = null
        this.monacoInput = null
        this.monacoOutput = null

        this.state = {
            convertDirection: yamlToJson,
            isYamlSource: false
        }
        this.handleDirection = this.handleDirection.bind(this)
    }

    handleEditorDidMountInput = (editor, monaco) => {
        this.monacoEditorInput = editor;
        this.monacoInput = monaco
    }

    handleEditorDidMountOutput = (editor, monaco) => {
        this.monacoEditorOutput = editor;
        this.monacoOutput = monaco
    }

    handleEditorChange = (value, event) => {
        console.log("editor changed: " + this.state.base64Direction)
        let result = ""
        if (this.state.isYamlSource) {
            result = this.getYamlValue(value);
        } else {
            result = this.getJsonValue(value)
        }
        this.monacoEditorOutput.getModel().setValue(result)

    }

    getYamlValue(value) {
        try {
            return yaml.stringify(JSON.parse(value))
        } catch (e) {
            console.log("Wrong Input")
            return "Wrong Input"
        }
    }

    getJsonValue(value) {
        try {
            return JSON.stringify(yaml.parse(value))
        } catch (e) {
            console.log("Wrong Input")
            return "Wrong Input"
        }
    }

    handleDirection() {
        let changedDirection = yamlToJson
        if (this.state.convertDirection === yamlToJson) {
            changedDirection = jsonToYaml
        }
        console.log("direction of transformation should be changed to: " + changedDirection)
        this.setState(prevState => ({
            convertDirection: changedDirection,
            isYamlSource: !prevState.isYamlSource
        }));
        this.updateEditors();
    }

    updateEditors() {
        let editorInputModel = this.monacoEditorInput.getModel();
        let editorOutputModel = this.monacoEditorOutput.getModel();

        let outputValue = editorOutputModel.getValue()
        let outputLangId = editorOutputModel.getLanguageId()
        let inputValue = editorInputModel.getValue()
        let inputLangId = editorInputModel.getLanguageId()

        console.log("inputLang: " + inputLangId + "outputLang: " + outputLangId)
        editorInputModel.setValue(outputValue)
        this.monacoInput.editor.setModelLanguage(editorInputModel, outputLangId);
        editorOutputModel.setValue(inputValue)
        this.monacoOutput.editor.setModelLanguage(editorOutputModel, inputLangId);
    }

    render() {
        return <Container>
            <Row>
                <Button onClick={this.handleDirection}>
                    Change conversion
                </Button>
            </Row>
            <Row>
                <p>Current conversion: {this.state.convertDirection}</p>
            </Row>
            <Row>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="yaml"
                        defaultValue=""
                        onMount={this.handleEditorDidMountInput}
                        onChange={this.handleEditorChange}
                    />
                </Col>
                <Col>
                    <Editor
                        height="90vh"
                        defaultLanguage="json"
                        defaultValue="{}"
                        onMount={this.handleEditorDidMountOutput}
                    />
                </Col>
            </Row>
        </Container>
    }
}