import { Pressable } from "react-native";
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
      <Text style={styles.subHeader}>
        Welcome back, {patient?.name || "patient name"}
      </Text>
      <View style={styles.content}>
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
        <View style={styles.columnRight}>
          <View style={styles.card}>
            <Pressable>
              <View style={styles.row}>
                <Text style={styles.alexionHeader}>
                  Fighting aHUS Every Day
                </Text>
                <Image source={require("./chevron_right_FILL0_wght400_GRAD0_opsz48.png")} style={styles.chevron} />
              </View>
            </Pressable>
          </View>
          <View style={styles.card}>
            <Text style={styles.alexionSubHeader}>
              What is atypical hemolytic uremic syndrome (aHUS)?
            </Text>
            <Text style={styles.zzxsPpis}>
              aHUS is a genetic, chronic, ultra-rare disease that can
              progressively damage vital organs, such as the kidneys. aHUS is
              caused by genetic abnormalities that result in chronic
              uncontrolled complement activation, leading to complement-mediated
              thrombotic microangiopathy (TMA)—the formation of blood clots in
              small blood vessels throughout the body.
            </Text>
            <Image source={{
            uri: "https://alexion.com/-/media/alexion_comredesign/images/realstories/ahus/erica/erica-01-w.jpg?mw=2048"
          }} style={styles.contentImage} />
            <Text style={styles.zzxsPpis}>
              aHUS affects both adults and children. Patients with aHUS can face
              a lifelong risk of TMA, which may lead to sudden, catastrophic,
              and life-threatening damage to the kidney and other vital organs.
            </Text>
            <Text style={styles.zzxsPpis}>
              Historically, two thirds of patients with the most common mutation
              required kidney dialysis, had permanent kidney damage, or died
              within the first year after diagnosis, despite supportive care.2,3
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    display: "grid",
    position: "absolute"
  },
  header: {
    backgroundColor: "#002E6C",
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20
  },
  alexionHeader: {
    color: "#b52555",
    fontWeight: "700",
    width: 270,
    height: 20,
    position: "absolute",
    top: -10
  },
  alexionSubHeader: {
    color: "#002E6C",
    fontWeight: "400",
    width: 200,
    height: 28
  },
  chevron: {
    height: 40,
    width: 10,
    position: "absolute",
    left: 354,
    top: -20
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
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  contentImage: {
    height: 143,
    width: 356,
    marginVertical: 15
  },
  columnLeft: {
    width: 400,
    marginRight: 15
  },
  columnRight: {
    width: 400
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
    color: "#787879"
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
  },
  row: {
    flexDirection: "row",
    position: "absolute",
    left: 0
  },
  zzxsPpis: {
    fontSize: 12,
    width: 351,
    color: "#787879",
    margin: 5
  }
});
export default PatientPortalScreen;