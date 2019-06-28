import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Container, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class AppSideBar extends Component {
    changeModalVisibilty = (bool) => {
        if (bool) this.props.navigation.closeDrawer();
        this.setState({isModalVisible: bool});
    };
    render() {
        const { navigate } = this.props.navigation;
        return(
            <Container>
                <ScrollView>
                    <View style={style.profile}>
                        <TouchableOpacity>
                            <Thumbnail style={style.profilePic} large source={require('../assets/user.png')} />
                        </TouchableOpacity>
                            <Text style={style.profileName}>Sodikin</Text>
                    </View>
                    <TouchableOpacity onPress={()=>navigate('EditNote')}>
                        <View style={style.list}>
                            <Icon name='control-point' size={20} style={style.icon}/>
                            <Text style={style.text}>Work</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.changeModalVisibilty(true)}>
                        <View style={style.list}>
                            <Icon name='control-point' size={20} style={style.icon}/>
                            <Text style={style.text}>Add Category</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => this.changeModalVisibilty(false)}>
                    <PopupCategory changeModalVisibilty={this.changeModalVisibilty}/>
                </Modal>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    icon: {
        color: 'black',
        paddingRight: 15
    },
    text: {
        color: 'black',
        fontSize: 17,
        fontWeight: 'bold'
    },
    list: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 5
    },
    profile: {
        alignItems : 'center',
        marginTop : 45,
        marginBottom :30
    },
    profilePic: {
        borderRadius:100 ,
        width: 100,
        height: 100
    },
    profileName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginTop: 18 
    }
})

export default AppSideBar;