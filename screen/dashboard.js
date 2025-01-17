import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const FinanceDashboard = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={styles.greeting}>Hi, Ngân!</Text>
          <Text style={styles.balanceLabel}>Số Dư Hiện Tại</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.balance}>1.350.000₫</Text>
            <TouchableOpacity style={styles.image}>
              <Image
                source={require('../assets/signIn.png')} // Replace with your icon URL
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* <TouchableOpacity>
          <Image
            source={{ uri: 'https://profile-pic-url.png' }} // Replace with your profile picture URL
            style={styles.profilePic}
          />
        </TouchableOpacity> */}
      </View>

      {/* Transaction Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Giao dịch</Text>
        <View style={styles.transactionCard}>
          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>↓</Text>
            <Text style={styles.transactionIncome}>1.500.000₫</Text>
          </View>
          <View style={styles.transactionRow}>
            <Text style={styles.transactionLabel}>↑</Text>
            <Text style={styles.transactionExpense}>1.500.000₫</Text>
          </View>
        </View>
      </View>

      {/* Budget Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ngân sách</Text>
        <View style={styles.budgetCard}>
          <Text style={styles.budgetLabel}>Ăn uống</Text>
          <Text style={styles.budgetRemaining}>475.000₫ Còn lại</Text>
        </View>
        <View style={styles.budgetCard}>
          <Text style={styles.budgetLabel}>Đi lại</Text>
          <Text style={styles.budgetRemaining}>100.000₫ Còn lại</Text>
        </View>
      </View>

      {/* Recent Transactions Section */}
      <View style={styles.section}>
        <View style={styles.recentHeader}>
          <Text style={styles.sectionTitle}>Giao dịch gần đây</Text>
          <TouchableOpacity>
            <Text style={styles.seeMore}>Xem thêm</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.recentTransaction}>
          <Text style={styles.transactionItem}>Mua quần áo</Text>
          <Text style={styles.transactionDate}>13 thg 1, 2025 - 9:16AM</Text>
          <Text style={styles.transactionAmountExpense}>-500.000₫</Text>
        </View>
      </View>
    </ScrollView>
  );
};

// Tab bar component
const SettingsScreen = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Settings Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50, // Đẩy tất cả xuống từ trên
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#E0F7FA',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerText: {
    flex: 1,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  balanceLabel: {
    fontSize: 16,
    color: '#888',
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  section: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
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
    borderRadius: 10,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  budgetLabel: {
    fontSize: 16,
  },
  budgetRemaining: {
    fontSize: 16,
    fontWeight: 'bold',
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
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  transactionItem: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionDate: {
    fontSize: 14,
    color: '#888',
  },
  transactionAmountExpense: {
    fontSize: 16,
    color: '#F44336',
    fontWeight: 'bold',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 12,
    marginHorizontal: 8,
    top:-55
    
  }
});

export default FinanceDashboard;
