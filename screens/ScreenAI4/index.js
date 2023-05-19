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
  notes: "Patient is allergic to penicillin"
}, {
  id: 2,
  name: "Jane Smith",
  age: 45,
  gender: "Female",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "Migraine",
  medication: "Sumatriptan",
  notes: "Patient has a history of heart disease"
}, {
  id: 3,
  name: "Bob Johnson",
  age: 50,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "Diabetes",
  medication: "Insulin",
  notes: "Patient is a smoker"
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
        <Text style={styles.patientDiagnosis}>{patient.diagnosis}</Text>
        <Text style={styles.patientMedication}>{patient.medication}</Text>
        <Text style={styles.patientNotes}>{patient.notes}</Text>
      </View>
    </View>;
};

const PatientScreen = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  return <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>Patient Records</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.patientList}>
          {patientData.map(patient => <PatientRecord key={patient.id} patient={patient} onPress={() => setSelectedPatient(patient)} />)}
        </View>
        <View style={styles.patientDetailsContainer}>
          {selectedPatient ? <PatientDetails patient={selectedPatient} /> : <Text style={styles.noPatientSelected}>No patient selected</Text>}
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
    borderRightWidth: 1,
    borderRightColor: "#E0E0E0"
  },
  patientRecord: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0"
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
  patientDetailsContainer: {
    width: "75%",
    padding: 20
  },
  patientDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
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
  patientNotes: {
    fontSize: 14,
    color: "#666"
  },
  noPatientSelected: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center"
  }
});
export default PatientScreen;