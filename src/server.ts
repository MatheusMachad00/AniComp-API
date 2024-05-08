import app from "./app";

const PORT = Number(process.env.PORT) || 5001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});