import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import { format } from "date-fns";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
  value: {
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
    marginBottom: 5,
  },
});

const PdfTemplate = ({ data }) => (
  <Document>
    <Page style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text>{data?.partNumber} Part Details</Text>
      </View>

      {/* Details */}
      <View>
        <View style={styles.section}>
          <View style={styles.row}>
            <Text style={styles.label}>Price:</Text>
            <Text style={styles.value}>{data.price || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Our Price:</Text>
            <Text style={styles.value}>{data.ourPrice || "N/A"}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Supplier:</Text>
            <Text style={styles.value}>{data.supplier}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Delivery Date:</Text>
            <Text style={styles.value}>
              {format(new Date(data?.deliveryDate), "MM-dd-yyyy")}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Part Number:</Text>
            <Text style={styles.value}>{data.partNumber}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Description:</Text>
            <Text style={styles.value}>{data.description}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Status:</Text>
            <Text style={styles.value}>{data.status}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Notes:</Text>
            <Text style={styles.value}>{data.notes}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.label}>Quantity:</Text>
            <Text style={styles.value}>{data.quantity}</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default PdfTemplate;
