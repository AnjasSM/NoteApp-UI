import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Textarea, Form, Container, Picker, Content } from 'native-base';
import AppHeader from '../components/AppHeader';

class EditNote extends Component {
    constructor(props) {
        super(props)
        this.state= {
            selected: undefined
        }
    };
    onValueChange(value) {
        this.setState({
            selected: value
        })
    };
    render() {
        const { goBack } = this.props.navigation
        return(
            <Container>
                <AppHeader  
                leftHeader={()=> goBack()}
                rightHeader={()=> goBack()}
                title='EDIT NOTE'
                screenLocation='editNote'/>
                <Content padder>
                <Form>
                    <Textarea rowSpan={5} placeholder="ADD TITLE ..."/>
                    <Textarea rowSpan={5} placeholder="ADD DESCRIPTION ..."/>
                    <Text style={{color: 'black', left:10}}>CATEGORY</Text>
                    <Picker
                        mode='dropdown'
                        placeholder="Edit Category"
                        selectedValue={this.state.selected}
                        onValueChange={this.onValueChange.bind(this)}
                        style={{width:130, left:5}} >
                        <Picker.Item label="Work" value="key0"/>
                        <Picker.Item label="lifecycle" value="key1"/>
                        <Picker.Item label="to do" value="key2"/>
                        <Picker.Item label="exercise" value="key3"/>
                    </Picker>
                </Form>
                </Content>
                </Container>
        )
    }
}

export default EditNote;