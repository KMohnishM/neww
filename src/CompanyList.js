import React, { useEffect, useState } from "react";
import axios from "axios";

const CompanyList = () => {
  const [companies, setCompanies] = useState([]); // State to hold fetched companies

  // Fetch companies from the backend
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/companies");
        setCompanies(response.data); // Store data in state
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📊 Company Marketplace</h1>
      <div style={styles.tableWrapper}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Company Name</th>
              <th style={styles.th}>Shares to Sell</th>
              <th style={styles.th}>Price per Share</th>
              <th style={styles.th}>Current Valuation</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company._id} style={styles.row}>
                <td style={styles.td}>{company.name}</td>
                <td style={styles.td}>{company.numberOfSharesToSell.toLocaleString()}</td>
                <td style={styles.td}>${company.pricePerShare.toFixed(2)}</td>
                <td style={styles.td}>${company.currentValuation.toLocaleString()}</td>
                <td style={styles.td}>
                  <button style={styles.button}>Invest Now</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Inline styles with hover effects and responsive design
const styles = {
  container: {
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
    margin: "auto",
    maxWidth: "1000px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "2rem",
  },
  tableWrapper: {
    overflowX: "auto", // Makes table scrollable on small screens
  },
  table: {
    width: "100%",
    border:"20px",
    borderCollapse: "collapse",
    textAlign: "left",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  },
  th: {
    backgroundColor: "#4CAF50",
    color: "#fff",
    padding: "12px",
    fontSize: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius:"4px"
  },
  td: {
    borderBottom: "1px solid #ddd",
    padding: "12px",
    // color: "#555",
    transition: "background-color 0.3s ease",
  },
  row: {
    transition: "background-color 0.3s ease",
  },
  button: {
    padding: "8px 12px",
    backgroundColor: "#",
    color: "blackish-grey",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",   
  },
  buttonHover: {
    backgroundColor: "#45a049",
    color:"white",
  },
  // Hover effect on rows
  rowHover: {
    backgroundColor: "#f0f8ff",
  },
};

// Adding CSS hover styles dynamically
const css = `
  table tr:hover {
    background-color: #f0f8ff;
  }
  button:hover {
    background-color:rgb(79, 199, 85);
    color:white;
  }
`;

// Inject the CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = css;
document.head.appendChild(styleSheet);

export default CompanyList;
