import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

// Extende HTMLElement para aceitar _leaflet_id
interface LeafletHTMLElement extends HTMLElement {
  _leaflet_id?: number;
}

export const About: React.FC = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const initMap = () => {
    const mapContainer = document.getElementById("map") as LeafletHTMLElement;
    if (!mapContainer || mapContainer._leaflet_id) return;

    const map = L.map(mapContainer).setView([-23.561684, -46.625378], 16);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker([-23.561684, -46.625378])
      .addTo(map)
      .bindPopup("Colégio Dr Gastão Vidigal")
      .openPopup();
  };

  useEffect(() => {
    if (open) {
      // Aguarda o modal montar o DOM antes de inicializar
      setTimeout(initMap, 0);
    }
  }, [open]);

  return (
    <div>
      <Button
        startIcon={<InfoIcon />}
        size={isMobile ? "medium" : "large"}
        onClick={handleOpen}
      >
        Sobre nós
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box sx={{ ...style, width: isMobile ? "90%" : 400 }}>
          <h2>O QUE SOMOS?</h2>
          <p>
            O SIS é um projeto desenvolvido no Colégio Dr.Gastão Vidigal, com o
            objetivo de ajudar pessoas socialmente vulneráveis, oferecendo
            suporte a...
          </p>

          <h3>Onde nos encontrar</h3>
          <div
            id="map"
            style={{ height: "250px", width: "100%", marginBottom: "16px" }}
          ></div>

          <Button onClick={handleClose} fullWidth={isMobile}>
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
