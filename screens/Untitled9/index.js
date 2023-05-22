import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, View } from "react-native";

const Untitled9 = ({
  navigation,
  route
}) => {
  const NavBar = () => {
    return <View style={styles.navbar}>
        <Text style={styles.navbarText}>Patient Portal</Text>
      </View>;
  };

  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.container}>
          <NavBar />
          <View style={styles.content}>
            <View style={styles.column}>
              <Image source={{
              uri: patientData.image
            }} style={styles.image} />
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
        </View>
        );
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  navbar: {
    height: 60,
    backgroundColor: "#f8f8f8",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ebebeb"
  },
  navbarText: {
    fontSize: 18,
    fontWeight: "bold"
  }
});
export default Untitled9;