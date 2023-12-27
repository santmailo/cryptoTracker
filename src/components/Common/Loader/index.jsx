import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./styles.css";

export default function Loader() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
