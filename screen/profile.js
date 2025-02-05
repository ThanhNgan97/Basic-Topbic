import React from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Feather from '@expo/vector-icons/Feather';
import AntDesign from '@expo/vector-icons/AntDesign';

const ProfileScreen = () => {
  const [isNotificationEnabled, setIsNotificationEnabled] = React.useState(true);

  const toggleSwitch = () => setIsNotificationEnabled((previousState) => !previousState);

  return (
    <LinearGradient 
      colors={['#e5f2ed', '#ffffff']} 
      style={styles.container}
      locations={[0, 0.39]}
    >
      {/* Avatar và tên */}
      <View style={styles.profileHeader}>
        <Image
          source={require('../assets/signIn.png')} 
          style={styles.avatar}
        />
        <View style={styles.editRow}>
          <Text style={styles.name}>bé nhà anh</Text>
          <AntDesign name="edit" size={22} color="#4A628A" style={{ left: 10, top: 5 }} />
        </View>

        <View style={styles.statusContainer}>
          <Text style={styles.status}>Chuyên gia tích lũy 💎</Text>
        </View>
      </View>

      {/* Các tùy chọn */}
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          <View style={styles.retangleIcon}>
            <View style={styles.iconBellOff}>
              <FontAwesome5 name="bell-slash" size={25} color="#4A628A" />
            </View>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText1}>Thông báo</Text>
          </View>
          <Switch
            trackColor={{ false: '#ccc', true: '#4A628A' }}
            thumbColor={isNotificationEnabled ? '#fff' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isNotificationEnabled}
          />
        </View>

        <TouchableOpacity style={styles.option}>
          <View style={styles.retangleIcon}>
            <View style={styles.iconBellOff}>
              <Feather name="lock" size={28} color="#4A628A" />
            </View>
          </View>
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionText2}>Đổi mật khẩu</Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 75,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontFamily: 'AvoBold',
    color: '#333',
  },
  statusContainer: {
    backgroundColor: '#E0F2EC',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  status: {
    fontSize: 14,
    color: '#333',
    fontFamily: 'AvoItalic',
  },
  optionContainer: {
    width: '90%',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 2,
    top: 20,
  },
  optionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  optionText1: {
    fontSize: 16,
    fontFamily: 'AvoBold',
    color: '#333',
    right: 62,
  },
  optionText2: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    left: -160,
    fontFamily: 'AvoBold',
  },
  retangleIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#E0F2EC',
    borderRadius: 10,
  },
  iconBellOff: {
    top: 12,
    left: 10,
  },
  editRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
  },
});

export default ProfileScreen;
