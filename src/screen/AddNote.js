import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader'
import { Form, Textarea, Container, Content, Picker } from 'native-base';

class AddNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 'Add Category'
        }
    }
    onValueChange(value) {
        this.setState({
          selected: value
        });
      }
    render() {
        const { goBack } = this.props.navigation
        return(
            <Container>
                <AppHeader 
                leftHeader={()=> goBack()}
                rightHeader={()=> goBack()}
                title='ADD NOTE'
                screenLocation='addNote'/>
                <Content padder>
                <Form>
                    <Textarea rowSpan={5} placeholder="ADD TITLE ..."/>
                    <Textarea rowSpan={5} placeholder="ADD DESCRIPTION ..."/>
                    <Text style={{color: 'black', left:10}}>CATEGORY</Text>
                    <Picker
                        mode='dropdown'
                        placeholder="Add Category"
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

export default AddNote;