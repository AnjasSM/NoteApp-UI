import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Modal, ScrollView, FlatList } from 'react-native';
import AppHeader from '../components/AppHeader'
import { Container, Fab } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

class HomeNote extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active:true,
            modalVisible:false,
            dummyData: [
                {
                    date: '27 June',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount lialkhs akshakjs ajshkan ajshalk kjhskjfh kjshfkjsd kjsdh jdhfjslkjhiuwf lakjsfhkjbsd sdhkljsdfkjhaf ksjdchkjdhkahdj kajsdfjbdc lakjdckjnkxlkhskjdfbbak lakfksdb'
                },
                {
                    date: '28 June',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                },
                {
                    date: '28 June',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                },
                {
                    date: '28 June',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                },
                {
                    date: '28 July',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                },
                {
                    date: '28 July',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                },
                {
                    date: '28 July',
                    title: 'Lifecycle',
                    category: 'Work',
                    note: 'Component Did Mount, Component Will Unmount'
                }
            ]
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        return(
            <Container>
                <View>
                    <AppHeader 
                    leftHeader={()=> this.props.navigation.openDrawer()}
                    title='NOTE APP'
                    screenLocation='homeNote' />
                </View>
                <View style={styles.searchBar}>
                    <TextInput style={{marginLeft: 10,marginRight: 25}} placeholder="Search..." />
                </View>
                <ScrollView>
                    <View style={styles.noteList}>
                        <FlatList
                            data={this.state.dummyData}
                            renderItem={({item}) =>
                            <View style={{marginRight: 30}}>
                                <TouchableOpacity style={styles.note} onPress={()=>navigate('EditNote')}>
                                <Text style={styles.noteDate}>{item.date}</Text>
                                <Text numberOfLines={1} style={styles.noteTitle}>{item.title}</Text>
                                <Text numberOfLines={1} style={styles.noteCategory}>{item.category}</Text>
                                <Text numberOfLines={4} style={styles.noteContent}>{item.note}</Text>
                            </TouchableOpacity>
                            </View>
                            }
                            numColumns={2}
                        />
                    </View>
                </ScrollView>
                <View style={{ flex: 1 }}>
                    <Fab
                        active={this.state.active}
                        containerStyle={{ }}
                        style={{ backgroundColor: '#FFFCFC' }}
                        position="bottomRight"
                        onPress={() => navigate('AddNote')}>
                        <Icon name="add" style={{color: 'black'}} />
                    </Fab>
                    </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    searchBar: {
        zIndex: 1,
        backgroundColor: '#fff',
        paddingLeft: 15,
        borderBottomColor: 'transparent',
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        marginTop: 85,
        alignSelf:'center',
        height: 45,
        width: 307,
        position: 'absolute',
        borderRadius: 20
    },
    noteList: {
        marginLeft: 27,
        justifyContent: 'space-between',
        paddingTop: 120
    },
    note: {
        width: 138,
        height: 138,
        borderRadius: 7,
        backgroundColor: '#2FC2DF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 12,
        marginBottom: 30,
    },
    noteDate: {
        color: '#fff',
        textAlign: 'right',
        fontSize: 12,
        fontWeight: '800'
    },
    noteCategory: {
        color: '#fff',
        fontSize: 13
    },  
    noteTitle: {
        color: '#fff',
        fontWeight: '900',
        fontSize: 18
    },
    noteContent: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500'
    }
})

export default HomeNote;