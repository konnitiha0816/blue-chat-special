const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 現在のフォルダにあるファイル（htmlやmp3）を公開する
app.use(express.static(__dirname));

// どのURLに来てもindex.htmlを返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
