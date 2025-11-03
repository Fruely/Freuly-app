export default function Home() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      color: "#222",
      fontFamily: "Helvetica, Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Freuly</h1>
      <h2 style={{ fontSize: "1.5rem", marginBottom: "2rem", color: "#007aff" }}>
        Spezialisten, die dich verstehen
      </h2>
      <button style={{
        padding: "1rem 2rem",
        fontSize: "1rem",
        borderRadius: "50px",
        border: "2px solid #007aff",
        background: "transparent",
        color: "#007aff",
        cursor: "pointer",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = "#007aff";
        e.target.style.color = "white";
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = "transparent";
        e.target.style.color = "#007aff";
      }}>
        Suchen
      </button>
    </div>
  );
}
