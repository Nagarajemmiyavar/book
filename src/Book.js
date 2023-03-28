import React, { useState } from 'react';
import { Document, Page, Text, View, PDFDownloadLink, StyleSheet } from '@react-pdf/renderer';




const TicketPriceCalculator = () => {
  const [numTickets, setNumTickets] = useState(0);
  const [flyingfrom, setFlyingFrom] = useState("")
  const [flyingto, setFlyingTo] = useState("")
  const [datelocaltime1, setdatelocaltime1] = useState("")
  const [datelocaltime2, setdatelocaltime2] = useState("")

  const handleInputChange = (e) => {
    setNumTickets(parseInt(e.target.value));
  }
  function handl1(e) {
    setFlyingFrom(e.target.value);
  }
  const handleInputChange2 = (e) => {
    setFlyingTo(e.target.value);
  }


  const handleInputChange3 = (e) => {
    setdatelocaltime1(e.target.value);

  }
  const handleInputChange4 = (e) => {
    setdatelocaltime2(e.target.value);

  }

  const calculateTicketPrice = () => {
    if (numTickets >= 10) {
      return ("Sorry!!! only  seats availiable is 9");
    }
    if (numTickets < 0) {
      return ("you entered worng ")
    }
    const ticketPrice = 1000;
    const Totalprice = (numTickets * ticketPrice) + "Rs";
    return (Totalprice);

  }

  return (
    <div className='nagaraj'>


      <form>
        <label>Departure From :</label>
        <input type="text" value={flyingfrom} onChange={handl1}></input><br></br>
        <label> Arrival to :</label>
        <input type="text" value={flyingto} onChange={handleInputChange2}></input><br></br>
        <label>Departure Date :</label>
        <input type="datetime-local" value={datelocaltime1} onChange={handleInputChange3}></input><br></br>
        <label>Arrival Date :</label>
        <input type="datetime-local" value={datelocaltime2} onChange={handleInputChange4}></input><br></br>
        <label htmlFor="numTickets">Number of tickets :</label>
        <input min='1' type="number" id="numTickets" value={numTickets} onChange={handleInputChange} /><br></br>
        <p>Total amount : {calculateTicketPrice()}</p>
      </form>
      <PDFDownloadLink document={<MyDocument numTickets={numTickets} ticketPrice={calculateTicketPrice()} flyingfrom={flyingfrom} flyingto={flyingto} datelocaltime1={datelocaltime1} datelocaltime2={datelocaltime2} />} fileName="ticket_price.pdf">
        {({ loading }) => (loading ? 'Loading document...' : <button>Generate Ticket</button>)}
      </PDFDownloadLink>
    </div>
  );
}
export default TicketPriceCalculator;


const styles = StyleSheet.create({
  page: {
    padding: 20,
    height: "20"
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#bfbfbf',
    alignItems: 'center',
    height: 24,
    fontStyle: 'bold',
  },
  tableCol: {
    width: '50%',
    borderRightWidth: 1,
    borderRightColor: '#bfbfbf',
    paddingLeft: 5,
  },
});





const MyDocument = ({ numTickets, ticketPrice, flyingfrom, flyingto, datelocaltime1, datelocaltime2 }) => (
  <Document>
    <Page style={styles.page}>

      <Text style={{ textAlign: "center" }}> TICKET</Text>
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>Flying From</Text>
          </View>

          <View style={styles.tableCol}>
            <Text>{flyingfrom} </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>Flying To</Text>
          </View>

          <View style={styles.tableCol}>
            <Text>{flyingto}</Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>Departure Date</Text>
          </View>

          <View style={styles.tableCol}>
            <Text> {datelocaltime1} </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>Arrival Date</Text>

          </View>

          <View style={styles.tableCol}>
            <Text> {datelocaltime2} </Text>

          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>
            <Text>No of Tickets</Text>
          </View>

          <View style={styles.tableCol}>
            <Text> {numTickets} </Text>
          </View>
        </View>
        <View style={styles.tableRow}>
          <View style={styles.tableCol}>

            <Text> Total Price </Text>

          </View>

          <View style={styles.tableCol}>

            <Text> {ticketPrice} </Text>
          </View>
        </View>
        <Text style={{ textAlign: "center", color: "green" }}> HAPPY JOURNEY!!!</Text>

      </View>
    </Page>
  </Document>
);
