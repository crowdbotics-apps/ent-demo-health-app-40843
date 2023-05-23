import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";

const Untitled4 = ({
  route,
  navigation
}) => {
  const {
    patientData
  } = route.params;
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.content}>
          <View style={styles.column}>
            <Text>{`ID: ${patientData.id}`}</Text>
            <Text>{`Name: ${patientData.name}`}</Text>
            <Text>{`Age: ${patientData.age}`}</Text>
            <Text>{`Gender: ${patientData.gender}`}</Text>
            <Text>{`Diagnosis: ${patientData.diagnosis}`}</Text>
            <Text>{`Medication: ${patientData.medication}`}</Text>
            <Text>{`Date: ${patientData.date}`}</Text>
            <Text>{`Last Appointment: ${patientData.lastAppointment}`}</Text>
            <Text>{`Phone: ${patientData.phone}`}</Text>
          </View>
          <View style={styles.column}>
            <Text>{`General Notes: ${patientData.physicianNotes.generalNotes}`}</Text>
            <Text>{`Next Appointment: ${patientData.physicianNotes.recNextAppointment}`}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
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
export default Untitled4;