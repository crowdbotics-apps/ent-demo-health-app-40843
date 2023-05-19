import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
const patientData = [{
  id: 1,
  name: "John Doe",
  age: 35,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "Flu",
  medication: "Ibuprofen",
  date: "2021-10-01"
}, {
  id: 2,
  name: "Jane Smith",
  age: 45,
  gender: "Female",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "Migraine",
  medication: "Aspirin",
  date: "2021-09-28"
}, {
  id: 3,
  name: "Bob Johnson",
  age: 50,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "Broken Arm",
  medication: "Percocet",
  date: "2021-09-25"
}];

const PatientRecord = ({
  patient,
  onPress
}) => {
  return <TouchableOpacity style={styles.patientRecord} onPress={onPress}>
      <Image source={{
      uri: patient.image
    }} style={styles.patientImage} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientAge}>{patient.age} years old</Text>
      </View>
    </TouchableOpacity>;
};

const PatientDetails = ({
  patient
}) => {
  return <View style={styles.patientDetails}>
      <Image source={{
      uri: patient.image
    }} style={styles.patientImage} />
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientAge}>{patient.age} years old</Text>
        <Text style={styles.patientGender}>{patient.gender}</Text>
        <Text style={styles.patientDiagnosis}>
          Diagnosis: {patient.diagnosis}
        </Text>
        <Text style={styles.patientMedication}>
          Medication: {patient.medication}
        </Text>
        <Text style={styles.patientDate}>Date: {patient.date}</Text>
      </View>
    </View>;
};

const PatientScreen = () => {
  const [selectedPatient, setSelectedPatient] = useState(patientData[0]);
  return <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Patient Records</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.patientList}>
          {patientData.map(patient => <PatientRecord key={patient.id} patient={patient} onPress={() => setSelectedPatient(patient)} />)}
        </View>
        <View style={styles.patientDetails}>
          <PatientDetails patient={selectedPatient} />
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topBar: {
    height: 80,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  patientList: {
    width: "25%",
    backgroundColor: "#F5F5F5",
    padding: 20
  },
  patientRecord: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  patientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  patientInfo: {
    flex: 1
  },
  patientName: {
    fontSize: 16,
    fontWeight: "bold"
  },
  patientAge: {
    fontSize: 14,
    color: "#666"
  },
  patientDetails: {
    width: "75%",
    padding: 20
  },
  patientGender: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10
  },
  patientDiagnosis: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  patientMedication: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10
  },
  patientDate: {
    fontSize: 14,
    color: "#666"
  }
});
export default PatientScreen;