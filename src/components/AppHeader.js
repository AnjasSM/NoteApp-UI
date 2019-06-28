import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { Header, Title, Thumbnail, Drawer, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class AppHeader extends Component {
    render() {
        const { leftHeader,rightHeader, title, screenLocation } = this.props;
        return(
        <Header style={{backgroundColor: '#ffffff', justifyContent: 'space-between' , alignItems:'center'}}>
            <View>
                {
                    screenLocation === 'homeNote' ? (
                        <TouchableOpacity onPress={leftHeader}>
                            <Thumbnail small source={require('../assets/user.png')} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={leftHeader}>
                            <Icon name='chevron-left' size={23} />
                        </TouchableOpacity>
                    )
                }     
            </View>
            <View>
                <Title style={{color: 'black'}}>{title}</Title>
            </View>
            <View>
                {
                    screenLocation === 'homeNote' ? (
                        <TouchableOpacity onPress={rightHeader}>
                            <Icon name='sort-amount-asc' size={22} />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity onPress={rightHeader}>
                            <Icon color='green' name='check-circle-o' size={30} />
                        </TouchableOpacity>
                    )
                }
            </View>
        </Header>
        )
    }
}

const styles = StyleSheet.create({
    modal: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      backgroundColor: '#fff',
      padding: 15,
    }
});

export default AppHeader;