import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

type Props = {
  placeholder: string;
  onSearch: (search?: string) => void;
  disabled?: boolean;
};

export function Searchbar({ placeholder, onSearch, disabled }: Props) {
  const searchTimeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(
    () => () => {
      if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

      onSearch(undefined);
    },
    [],
  );

  const handleSearchChange = (search?: string) => {
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);

    searchTimeoutRef.current = setTimeout(() => {
      onSearch(search === "" ? undefined : search);
    }, 300);
  };

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        padding: "0 6px",
        border: "1px solid #ced4da",
        borderRadius: "6px",
        width: "300px",
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder={placeholder}
        onChange={(e) => handleSearchChange(e?.target?.value)}
        disabled={disabled}
      />
      <IconButton sx={{ padding: "7px" }}>
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
