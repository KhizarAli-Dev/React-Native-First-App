import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      uid: 1,
      name: 'Iron Man',
      status: 'Marvel',
      imageUrl:
        'https://playcontestofchampions.com/wp-content/uploads/2023/04/champion-iron-man-2023-update.jpg',
    },
    {
      uid: 2,
      name: 'SuperMan',
      status: 'DC',
      imageUrl:
        'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-27709-20130611-superman-x624-1370963561.jpg?w=624&h=420&crop=1',
    },
    {
      uid: 3,
      name: 'Batman',
      status: 'DC',
      imageUrl:
        'https://cdn.pixabay.com/photo/2024/01/15/11/36/batman-8510022_640.png',
    },
    {
      uid: 4,
      name: 'SpiderMan',
      status: 'Marvel',
      imageUrl:
        'https://www.stuff.tv/wp-content/uploads/sites/2/2021/08/amazing-spider-man-2_0.jpeg?w=1080',
    },
    {
      uid: 5,
      name: 'Deadpool',
      status: 'Marvel',
      imageUrl:
        'https://cdn.magicdecor.in/com/2024/02/13170018/Dangerous-Deadpool-Wallpaper-for-Wall.jpg',
    },
  ];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
    marginTop:2,
   
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'#283048',
    borderRadius:12,
    padding:8
    
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 14,
    marginLeft:12
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  userStatus: {
    fontSize: 16,
    color: 'white',
  },
});
