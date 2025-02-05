import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import * as Font from 'expo-font';
import {LinearGradient} from 'expo-linear-gradient';

const FinanceDashboard = ({navigation}) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'Avo': require('../assets/font/Avo.ttf'),
        'AvoBold': require('../assets/font/AvoBold.ttf'),
        'AvoItalic': require('../assets/font/AvoItalic.ttf'),
        'AvoBold_Italic': require('../assets/font/AvoBold_Italic.ttf')
       
      });
      setFontLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontLoaded) {
    return <Text>Đang tải font...</Text>; // Hiển thị khi font chưa tải xong
  }

  return (
  
    <LinearGradient 
    colors={['#e5f2ed', '#ffffff']} 
    style={{ flex: 1 }}
    locations={[0, 0.39]}
    >
    <ScrollView style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <View style={styles.headerRow}>
        <Text style={[styles.greeting, { fontFamily: 'AvoBold' }]}>Hi, Ngân!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image
            source={require('../assets/signIn.png')}
            style={styles.profilePic}
          />
        </TouchableOpacity>
        <View style={styles.iconBell}>
          <Feather name="bell" size={24} color="#535353" />
          <View style={styles.iconBellCircle}></View>
        </View>
      </View>
        <View style={styles.balanceColumn}>
          <Text style={[styles.balanceLabel, { fontFamily: 'Avo' }]}>Số Dư Hiện Tại</Text>
        <View style={styles.balanceRow}>
        <Text style={[styles.balance, { fontFamily: 'AvoBold' }]}>
          {isBalanceVisible ? '1.350.000₫' : '******'}
        </Text>
        <TouchableOpacity onPress={() => setIsBalanceVisible(!isBalanceVisible)}>
          <Feather
            name={isBalanceVisible ? 'eye' : 'eye-off'}
            size={24}
            color="#535353"
            style={{ top: 4 }}
          />
        </TouchableOpacity>
      </View>
    </View>
    </View>

     {/* Transaction Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontFamily: 'AvoBold' }]}>Giao dịch</Text>
        <View style={styles.transactionCard}>

          {/* Row 1 with gradient */}

          <LinearGradient
           colors={['#edf8f5', '#DFF2EB']}
           start={{x: 0, y: 0}}
           end={{x: 1, y: 0}}
           style={styles.transactionCardRow1}
           >
          <View>
            <View style={styles.transactionIconContainer}>
              <Feather name="arrow-down-left" size={20} color="#1E88E5" />
            </View>
            <Text style={[styles.transactionAmountIncome, { fontFamily: 'AvoBold' }]}>
              1.500.000₫
            </Text>

          </View>

          </LinearGradient>
         

          {/* Row 2 with gradient */}
          <LinearGradient
          colors={['#f8f8ea', '#f1efd3']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.transactionCardRow2}
          >
            <View style={styles.transactionIconContainer}>
              <Feather name="arrow-up-right" size={20} color="#F44336" />
            </View>
            <Text style={[styles.transactionAmountExpense, { fontFamily: 'AvoBold', bottom: 20, marginRight: 18 }]}>
              1.500.000₫
            </Text>

          </LinearGradient>
        </View>
      </View>


      {/* Budget Section */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { fontFamily: 'AvoBold' }]}>Ngân sách</Text>
        <View style={styles.budgetCard}>
          <View style={styles.circle}>
            <Image source={require('../assets/an.png')}
            style={styles.Icon}
            />
          </View>

          <View style={styles.budgetRemainingColumn}>
            <Text style={[styles.budgetLabel1, { fontFamily: 'AvoBold_Italic' }]}>Ăn uống</Text>
            <Text style={[styles.budgetLabel2, { fontFamily: 'Avo' }]}>Đã chi 25000đ</Text>
          </View>

          <View style ={styles.budgetRemainingColumn}>
            <Text style={[styles.budgetRemaining1, { fontFamily: 'AvoBold' }]}>475.000₫ </Text>
            <Text style={[styles.budgetRemaining2, { fontFamily: 'Avo' }]}>Còn lại</Text>
          </View>


        </View>
        <View style={styles.budgetCard}>
        <View style={styles.circle}>
          <Image source={require('../assets/di.png')}
          style={styles.iconTravel}

          />
        </View>
        <View style={styles.budgetRemainingColumn}>
            <Text style={[styles.budgetLabel1, { fontFamily: 'AvoBold_Italic' }]}>Đi lại</Text>
            <Text style={[styles.budgetLabel2, { fontFamily: 'Avo' }]}>Đã chi 25000đ</Text>
          </View>

          <View style ={styles.budgetRemainingColumn}>
            <Text style={[styles.budgetRemaining1, { fontFamily: 'AvoBold' }]}>100.000₫ </Text>
            <Text style={[styles.budgetRemaining2, { fontFamily: 'Avo' }]}>Còn lại</Text>
          </View>
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={styles.section}>
        <View style={styles.recentHeader}>
          <Text style={[styles.sectionTitle, { fontFamily: 'AvoBold' }]}>Giao dịch gần đây</Text>
          <TouchableOpacity>
            <Text style={[styles.seeMore, { fontFamily: 'Avo' }]}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentTransaction}>
  <View style={styles.transactionColumn}>
    <View style={styles.transactionRow}>
      <View style={styles.circle}>
        <Image source={require('../assets/quan_ao.png')} style={styles.iconTravel} />
      </View>
      <View style={styles.TextColumn1}>
        <Text style={[styles.transactionItem, { fontFamily: 'AvoBold_Italic' }]}>Mua quần áo</Text>
        <Text style={[styles.transactionDate1, { fontFamily: 'Avo' }]}>13 thg 1, 2025 - 9:16AM</Text>
      </View>
      <View style={styles.TextColumn2}>
        <Text style={[styles.transactionAmountExpense, { fontFamily: 'AvoBold' }]}>-500.000₫</Text>
        <Text style={[styles.transactionDate2, { fontFamily: 'Avo' }]}>   Tiền mặt</Text>
      </View>
    </View>
  </View>
</View>

      </View>
    </ScrollView>
  </LinearGradient>
    


  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50, // Đẩy tất cả xuống từ trên
  },
  header: {
    padding: 16,
    backgroundColor: '#E0F7FA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    right:-80
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    color: '#535353'
  },
  balanceLabel: {
    fontSize: 16,
    color: '#535353',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 28,
    color: '#535353',
    marginRight: 10, // Thêm margin để tạo không gian cho biểu tượng mắt
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 100,
    top: -63,
    left: 133,
  },

  section: {
    marginVertical: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 22,
    marginBottom: 8,
    color:'#535353',
    left:25
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  transactionLabel: {
    fontSize: 18,
  },
  transactionIncome: {
    fontSize: 18,
    color: '#4CAF50',
  },
  transactionExpense: {
    fontSize: 18,
    color: '#F44336',
   
  },
  budgetCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height:80,
    
  },
  budgetLabel1: {
    fontSize: 16,
    color:'#535353',
    left:-40,
    top:-5
  },
  budgetLabel2: {
    fontSize: 13,
    left:-40,
    color:'#737373',
    top:-5
    
  },

  budgetRemaining1: {
    fontSize: 16,
    textAlign:'left',
    color:'#7AB2D3'
  },

  budgetRemaining2: {
    fontSize: 15,
    textAlign:'right',
    color:'#737373',
    left:-20,
    top:-5
  },

  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMore: {
    color: '#007BFF',
    fontSize: 16,
  },
  recentTransaction: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    height:80,
    
  },
  transactionItem: {
    fontSize: 16,
    color: '#535353'
  },
  transactionDate1: {
    fontSize: 13,
    color: '#888',
  
  },
  transactionDate2: {
    fontSize: 15,
    color: '#888',
    top:-11,
    left:8,
    
  },
  transactionAmountExpense: {
    fontSize: 16,
    color: '#F44336',
  
  },
  iconBell: {
    position: 'relative',
  },
  iconBellCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    position: 'absolute',
    top: -3,
    right: 1,
    borderWidth: 2,
    borderColor: '#fff',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Đảm bảo các phần tử được phân bố đều
  },
  
  balanceColumn: {
    alignItems: 'center',
    marginTop: 10,
  },
  circle:{
    width: 55,
    height: 55,
    backgroundColor: '#7AB2D3',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    top:-5
  },
  Icon:{
    width: 23,
    height: 23,
    resizeMode: 'contain',
  },
  iconTravel:{
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
  budgetRemainingColumn:{
    top:7
  },
  transactionColumn: {
    flexDirection: 'row', // Sắp xếp các phần tử theo chiều ngang
    alignItems: 'center',
    justifyContent: 'space-between', // Đảm bảo các phần tử được phân bố đều
  },
  
  TextColumn1:{
    flex: 1,
    marginLeft: 17, // Thêm margin để tạo không gian cho biểu tượng mắt
    top:2
  },
  TextColumn2:{
    top:2,
    right:7
  },
  transactionItemRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 10,
    marginBottom: 8,
  },
  
  transactionItemRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 10,
  },
  
  transactionIconContainer: {
    width: 75,
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    top:10,
  },
  
  transactionAmountIncome: {
    fontSize: 18,
    color: '#1E88E5', // Màu xanh dương cho thu nhập
    textAlign: 'right',
    flex: 1,
    marginLeft: 10,
    bottom: 20,
    left: -18,
  },
  transactionAmountExpense: {
    fontSize: 18,
    color: '#F44336', // Màu đỏ cho chi phí
    textAlign: 'right',
    flex: 1,
    marginLeft: 10,
  },
  
  transactionCardRow1:{
    borderRadius:14,
    marginVertical: 8
  },

  transactionCardRow2:{
    borderRadius:14
  },

});

export default FinanceDashboard;