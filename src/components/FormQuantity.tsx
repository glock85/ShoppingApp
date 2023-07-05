import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

export const FormQuantity = ({
  isExpired,
  quantity,
  handleChange,
}: {
  isExpired: boolean;
  quantity: number;
  handleChange: (event: SelectChangeEvent<number>) => void;
}) => {
  return (
    <Grid item>
      <FormControl
        sx={{
          m: 1,
          minWidth: 100,
          maxWidth: 100,
          width: "100%",
        }}
        disabled={isExpired}
      >
        <InputLabel id="demo-controlled-open-select-label">Cantidad</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          value={quantity}
          label="Cantidad"
          onChange={handleChange}
          sx={{ height: 40 }}
        >
          <MenuItem value="">0</MenuItem>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
            return (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Grid>
  );
};
