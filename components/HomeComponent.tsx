import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

HomeComponent.propTypes = {};

function HomeComponent() {
  return (
    <div>
      <h1>hihi</h1>
      <Button variant="outlined" endIcon={<SendIcon />}>
        Hello World
      </Button>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </div>
  );
}

export default HomeComponent;
