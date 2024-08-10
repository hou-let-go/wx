const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5500;

// 静态文件服务
app.use(express.static(__dirname));

// 获取图片文件名
app.get('/getImages', (req, res) => {
    const dir = path.join(__dirname, 'hd');
    fs.readdir(dir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: '无法读取文件夹' });
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.json(images);
    });
});

app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
});