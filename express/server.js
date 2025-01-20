const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Route principale
app.get("/", (req, res) => {
  res.send({ message: "Bienvenue sur l'API!" });
});

// Exemple de route pour un point d'accès API
app.get("/api/status", (req, res) => {
  res.send({ status: "success", message: "API en ligne!" });
});

// Point d'accès dynamique
app.post("/api/data", (req, res) => {
  const { name, value } = req.body;
  if (!name || !value) {
    return res.status(400).send({ error: "Les champs 'name' et 'value' sont requis." });
  }
  res.send({ name, value, message: "Données reçues avec succès." });
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
