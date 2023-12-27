import Pagination from "@mui/material/Pagination";

import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function PaginationControlled({ page, handleChange }) {
  return (
    <div className="pagination-component">
      <Pagination
        count={10}
        page={page}
        onChange={(event, value) => handleChange(event, value)}
        sx={{
          color: "var(--white)",
          "& .Mui-selected ": {
            background: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
          },
          "& .MuiPaginationItem-ellipsis": {
            border: "0px solid var(--grey) !important",
          },
          "& .MuiPaginationItem-text": {
            color: "var(--white)",
            border: "1px solid var(--grey)",
          },
        }}
      />
    </div>
  );
}
