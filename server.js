import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend API çalışıyordfhfghcgfhjcfgj."
  });
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});

/*
1. yazılım dilleri => python, javascript
2. veritabanı => sql, nosql db
3. oyun motoru => unity, unreal engine
4. web tabanlı arayüz => react, flutter
5. makine öğrenimi, derin öğrenme, yapay zeka proje
6. LangChain, LlamaIndex, RAG
7. Docker
8. Github
*/