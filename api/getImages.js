const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
    const dir = path.join(process.cwd(), 'hd');
    fs.readdir(dir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: '无法读取文件夹' });
        }
        const images = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
        res.status(200).json(images);
    });
}