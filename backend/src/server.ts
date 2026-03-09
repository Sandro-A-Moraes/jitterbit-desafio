import app from './app'

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} \n Swagger Docs: http://localhost:3000/api-docs`);
});