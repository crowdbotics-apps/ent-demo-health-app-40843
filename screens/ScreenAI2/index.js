import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const PatientPortalScreen = ({
  route
}) => {
  const {
    patient
  } = route.params || {};
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://pbs.twimg.com/profile_images/1542807211604320256/Gmm47qxe_400x400.png"
      }} style={styles.logo} />
        <Text style={styles.title}>Patient Portal</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          Welcome back, {patient?.name || "patient name"}
        </Text>
        <View style={styles.columnLeft}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Upcoming Appointments</Text>
            <View style={styles.appointment}>
              <Text style={styles.appointmentTitle}>
                {patient?.physicianNotes.recNextAppointment || "Next Appointment"}
              </Text>
              <Text style={styles.appointmentDate}>
                {patient?.physicianNotes.recNextAppointment || "{next appointment placeholder}"}
              </Text>
            </View>
            <View style={styles.appointment}>
              <Text style={styles.appointmentTitle}>Physical Therapy</Text>
              <Text style={styles.appointmentDate}>Wednesday, August 25th</Text>
            </View>
          </View>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Recent Activity</Text>
            <View style={styles.activity}>
              <Text style={styles.activityTitle}>Lab Results</Text>
              <Text style={styles.activityDate}>August 20th</Text>
            </View>
            <View style={styles.activity}>
              <Text style={styles.activityTitle}>Prescription Refill</Text>
              <Text style={styles.activityDate}>August 18th</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "grid"
  },
  header: {
    backgroundColor: "#002E6C",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  columnLeft: {
    width: 400
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  appointment: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  appointmentTitle: {
    fontWeight: "bold"
  },
  appointmentDate: {
    color: "#A9A9A9"
  },
  activity: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  activityTitle: {
    fontWeight: "bold"
  },
  activityDate: {
    color: "#A9A9A9"
  }
});
export default PatientPortalScreen;