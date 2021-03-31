import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SysName from "./SysName";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        <SysName />
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
