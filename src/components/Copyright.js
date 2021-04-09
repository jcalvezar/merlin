import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import SysName from "./SysName";
import { Link as RouterLink } from "react-router-dom";

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" component={RouterLink} to="/">
        <SysName />
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
