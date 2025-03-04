import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar"; // ✅ Keep this import
import "react-pro-sidebar/styles.css"; // ✅ Corrected CSS import
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const SidebarComponent = () => { // ✅ Renamed from Sidebar to SidebarComponent
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .ps-sidebar-root": { background: `${colors.primary[400]} !important` },
        "& .ps-menu-button:hover": { color: "#868dfb !important" },
        "& .ps-menu-button.ps-active": { color: "#6870fa !important" },
      }}
    >
      <Sidebar collapsed={isCollapsed}> {/* ✅ No conflict with component name */}
        <Menu>
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h3" color={colors.grey[100]}>ADMIN</Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <MenuItem component={<Link to="/" />} icon={<HomeOutlinedIcon />}>Dashboard</MenuItem>
          <MenuItem component={<Link to="/team" />} icon={<PeopleOutlinedIcon />}>Manage Team</MenuItem>
          <MenuItem component={<Link to="/contacts" />} icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem component={<Link to="/invoices" />} icon={<ReceiptOutlinedIcon />}>Invoices</MenuItem>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent; // ✅ Export with the new name
