import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Pressable } from "react-native";
const patientData = [{
  id: 1,
  name: "John Doe",
  age: 35,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "aHUS",
  medication: "Alexion",
  date: "2021-10-01",
  lastAppointment: "2023-03-24",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Nakamura",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-06-16"
  }
}, {
  id: 2,
  name: "Jane Smith",
  age: 45,
  gender: "Female",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "neuromyelitis optica spectrum disorder (NMOSD)",
  medication: "Alexion",
  date: "2021-09-28",
  lastAppointment: "2023-02-12",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Smith",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-05-01"
  }
}, {
  id: 3,
  name: "Stephen Johansen",
  age: 37,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "lysosomal acid lipase deficiency (LAL-D)",
  medication: "Alexion",
  date: "2021-09-25",
  lastAppointment: "2023-01-03",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Sayed",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-04-01"
  }
}, {
  id: 4,
  name: "Stacy Lee",
  age: 61,
  gender: "Female",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "generalized Myasthenia Gravis (gMG)",
  medication: "Alexion",
  date: "2021-09-25",
  lastAppointment: "2023-05-01",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Jankowski",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-09-01"
  }
}, {
  id: 5,
  name: "Gil Faisan",
  age: 43,
  gender: "Male",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "paroxysmal nocturnal hemoglobinuria (PNH)",
  medication: "Alexion",
  date: "2021-09-25",
  lastAppointment: "2023-04-04",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Lee",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-07-11"
  }
}, {
  id: 6,
  name: "Loretta Alvarez",
  age: 29,
  gender: "Female",
  image: "https://tinyurl.com/42evm3m3",
  diagnosis: "hypophosphatasia (HPP)",
  medication: "Alexion",
  date: "2021-09-25",
  lastAppointment: "2023-03-12",
  phone: "555-501-1234",
  physicianNotes: {
    physicianName: "Dr. Flores",
    generalNotes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ultrices ornare lorem, nec hendrerit enim commodo eu. Sed nec magna viverra, commodo purus at, volutpat mauris. Vestibulum sed nisl et neque ullamcorper consectetur. Suspendisse potenti. Nulla eu purus pellentesque, tempor nulla non, ornare risus. Mauris mollis leo quis iaculis eleifend. In congue dolor nulla, sed aliquam tellus consectetur a. Donec id feugiat velit, ut dapibus nisi. Nam tempus turpis et iaculis placerat. Aliquam nunc orci, tempor fringilla gravida non, varius vel purus. Quisque vestibulum ut dui sit amet rutrum. Nulla volutpat sem ut ante semper facilisis. Cras imperdiet quam facilisis nulla vulputate, vitae accumsan elit bibendum. Morbi pulvinar leo ut enim dignissim, ac volutpat tellus posuere. Sed lobortis enim a tellus mollis, sit amet lobortis justo tristique. Nunc faucibus rhoncus risus a convallis. Pellentesque vel hendrerit risus. Morbi ut eleifend tortor, vitae tempor est.",
    recNextAppointment: "2023-06-23"
  }
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

const PatientScreen = () => {
  const [selectedPatient, setSelectedPatient] = useState(patientData[0]);
  return <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.title}>{"Provider View"}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.patientList}>
          {patientData.map(patient => <PatientRecord key={patient.id} patient={patient} onPress={() => setSelectedPatient(patient)} />)}
          <View style={styles.aHncWoIq}>
            <Pressable onPress={() => navigation.navigate("Untitled4", {
            selectedPatient
          })}>
              <Text style={styles.baIKEoGz}>Patient View</Text>
            </Pressable>
          </View>
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