import React from "react";
import { Linking } from "react-native";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const PatientPortalScreen = ({
  route
}) => {
  const {
    patient
  } = route?.params || {};
  return <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: "https://pbs.twimg.com/profile_images/1542807211604320256/Gmm47qxe_400x400.png"
      }} style={styles.logo} />
        <Text style={styles.title}>Patient Portal</Text>
      </View>
      <Text style={styles.subHeader}>
        Welcome back, {patient?.name || "{patient name placeholder}"}
      </Text>
      <View style={styles.content}>
        <View style={styles.columnLeft}>
          <View style={styles.card}>
            <Text style={styles.cardTitle}>Upcoming Appointments</Text>
            <View style={styles.appointment}>
              <Text style={styles.appointmentTitle}>Next Appointment</Text>
              <Text style={styles.appointmentDate}>
                {patient?.physicianNotes.recNextAppointment || "{next appointment placeholder}"}
              </Text>
              <Text style={styles.appointmentTitle}>Last Appointment</Text>
              <Text style={styles.appointmentDate}>
                {patient?.physicianNotes.lastAppointment}
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
          <View style={styles.card}>
            <Text style={styles.activityTitle}>Provider Details</Text>
            <Text style={styles.activityDate}>
              {patient?.physicianNotes.physicianName || "{Physician name placeholder}"}
            </Text>
          </View>
        </View>
        <View style={styles.columnRight}>
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
              within the first year after diagnosis, despite supportive care.
            </Text>
          </View>
        </View>
        <View style={styles.columnRight}>
          <View style={styles.card}>
            <Text style={styles.alexionSubHeader}>Resources</Text>

            <Text style={styles.link} onPress={() => Linking.openURL("https://alexion.com/our-inspiration/support-services")}>
              OneSource
            </Text>
            <Text style={styles.linkSubText}>
              Personalized Patient Support from Alexion
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("https://contactazmedical.astrazeneca.com/content/astrazeneca-champion/us/en/amp-form.html")}>
              Submit a Medical Information Inquiry
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("tel:1-844-259-6783")}>
              1-888-765-4747
            </Text>
            <Text style={styles.linkSubText}>For medical information on Kanuma, Koselugo, Soliris, Strensiq or Ultomiris, please call or submit an electronic Medical Information Inquiry. Links above</Text>
            

            <Text style={styles.alexionSubHeader}>Adverse Event Reporting</Text>
            <Text style={styles.linkSubText}>
              To report an adverse event experience for any Alexion product,
              please contact us
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("tel:1-844-259-6783")}>
              1-844-259-6783
            </Text>
            <Text style={styles.link} onPress={() => Linking.openURL("mailto:adverseeventreporting@alexion.com")}>
              Email
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
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 20
  },
  alexionSubHeader: {
    color: "#002E6C",
    fontWeight: "700",
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 16
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
    width: "auto",
    marginVertical: 15
  },
  columnLeft: {
    flex: 3
  },
  columnRight: {
    flex: 4,
    marginLeft: 25
  },
  card: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowRadius: 7,
    shadowColor: "#000",
    shadowOpacity: 0.15
  },
  link: {
    color: "#b52555",
    marginBottom: 0,
    margintTop: 0,
    marginLeft: 5,
    fontWeight: "700"
  },
  linkSubText: {
    fontSize: 12,
    color: "#787879",
    marginLeft: 5,
    marginBottom: 15
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  appointment: {
    marginBottom: 10
  },
  appointmentTitle: {
    fontWeight: "bold"
  },
  appointmentDate: {
    color: "#787879"
  },
  activity: {
    justifyContent: "space-between",
    marginBottom: 10
  },
  activityTitle: {
    fontWeight: "bold"
  },
  activityDate: {
    color: "#A9A9A9"
  },
  zzxsPpis: {
    fontSize: 12,
    color: "#787879",
    margin: 5
  }
});
export default PatientPortalScreen;