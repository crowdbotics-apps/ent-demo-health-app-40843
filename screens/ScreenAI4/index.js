import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const PatientPortalScreen = () => {
  return <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>{"Patient View"}</Text>
      </View>
      <View style={styles.leftColumn}>
        <Text style={styles.title}>Important</Text>
        <Text style={styles.listItem}>Appointments</Text>
        <Text style={styles.listItem}>Prescriptions</Text>
        <Text style={styles.listItem}>Medical Records</Text>
        <Text style={styles.listItem}>Billing</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.title}>Appointments</Text>
        <View style={styles.appointment}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <View style={styles.appointmentDetails}>
            <Text style={styles.appointmentTitle}>Dr. John Doe</Text>
            <Text style={styles.appointmentSubtitle}>Dentist</Text>
            <Text style={styles.appointmentSubtitle}>Monday, 10:00 AM</Text>
          </View>
        </View>
        <Text style={styles.title}>Prescriptions</Text>
        <View style={styles.prescription}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <View style={styles.prescriptionDetails}>
            <Text style={styles.prescriptionTitle}>Ibuprofen</Text>
            <Text style={styles.prescriptionSubtitle}>
              Take 1 tablet every 6 hours
            </Text>
            <Text style={styles.prescriptionSubtitle}>Expires: 10/22/2022</Text>
          </View>
        </View>
        <Text style={styles.title}>Medical Records</Text>
        <View style={styles.medicalRecord}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <View style={styles.medicalRecordDetails}>
            <Text style={styles.medicalRecordTitle}>X-Ray</Text>
            <Text style={styles.medicalRecordSubtitle}>
              Taken on: 05/15/2021
            </Text>
          </View>
        </View>
        <Text style={styles.title}>Billing</Text>
        <View style={styles.billing}>
          <Image style={styles.image} source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} />
          <View style={styles.billingDetails}>
            <Text style={styles.billingTitle}>Invoice #12345</Text>
            <Text style={styles.billingSubtitle}>Amount Due: $100.00</Text>
            <Text style={styles.billingSubtitle}>Due Date: 10/31/2021</Text>
          </View>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff"
  },
  topBarTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  topBar: {
    height: 80,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center"
  },
  leftColumn: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20
  },
  rightColumn: {
    flex: 3,
    padding: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  listItem: {
    fontSize: 16,
    marginBottom: 10
  },
  appointment: {
    flexDirection: "row",
    marginBottom: 20
  },
  appointmentDetails: {
    marginLeft: 10
  },
  appointmentTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  appointmentSubtitle: {
    fontSize: 16,
    color: "#666"
  },
  prescription: {
    flexDirection: "row",
    marginBottom: 20
  },
  prescriptionDetails: {
    marginLeft: 10
  },
  prescriptionTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  prescriptionSubtitle: {
    fontSize: 16,
    color: "#666"
  },
  medicalRecord: {
    flexDirection: "row",
    marginBottom: 20
  },
  medicalRecordDetails: {
    marginLeft: 10
  },
  medicalRecordTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  medicalRecordSubtitle: {
    fontSize: 16,
    color: "#666"
  },
  billing: {
    flexDirection: "row",
    marginBottom: 20
  },
  billingDetails: {
    marginLeft: 10
  },
  billingTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },
  billingSubtitle: {
    fontSize: 16,
    color: "#666"
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  }
});
export default PatientPortalScreen;