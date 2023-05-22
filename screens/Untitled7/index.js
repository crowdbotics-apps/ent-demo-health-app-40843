import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PatientRecord = ({
  patient,
  onPress
}) => {
  return <TouchableOpacity style={styles.patientRecord} onPress={onPress}>
     
      <View style={styles.patientInfo}>
        <Text style={styles.patientName}>{patient.name}</Text>
        <Text style={styles.patientAge}>{patient.age} years old</Text>
        <Text style={styles.patientAge}>{patient.diagnosis}</Text>
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
        <View>
          {new Date(patient.physicianNotes.recNextAppointment) < new Date() ? <Text style={styles.warning}>
              Please call the patient to schedule another appointment:{" "}
              {patient.phone}
            </Text> : null}
        </View>
        <Text style={styles.patientMedication}>
          Medication: {patient.medication}
        </Text>
        <Text style={styles.patientDate}>Date: {patient.date}</Text>
        <Text style={styles.lastAppointment}>
          Date of last appointment:
          {patient.lastAppointment}
        </Text>
        <Text style={styles.recNextAppt}>
          Physician recommended next appointment:{" "}
          {patient.physicianNotes.recNextAppointment}
        </Text>
        <Text style={styles.physicianNotesHeader}>Physician Notes: </Text>
        <Text style={styles.physicianNotes}>
          {patient.physicianNotes.generalNotes}
        </Text>
      </View>
    </View>;
};

const PatientScreen = ({
  navigation,
  selectedPatient
}) => {
  return <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{"Provider View"}</Text>
      </View>
      <View style={styles.content}>
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
  },
  lastAppointment: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    marginTop: 10
  },
  physicianNotesHeader: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 10,
    marginTop: 10
  },
  physicianNotes: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    marginTop: 10
  },
  recNextAppt: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
    marginTop: 10
  },
  warning: {
    fontSize: 14,
    color: "#FF0000",
    marginBottom: 10,
    marginTop: 10
  },
  aHncWoIq: {
    height: 41,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 15,
    color: "#777777",
    position: "absolute",
    left: 20,
    top: 691
  },
  baIKEoGz: {
    width: 105,
    height: 23,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0,
    position: "absolute",
    top: 13,
    left: 18,
    textAlign: "center"
  }
});
export default PatientScreen;