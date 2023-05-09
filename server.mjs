import { initializeApp } from 'firebase/app';
import express from 'express';
import { renderFile } from 'ejs';
import path from 'path';

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const firebaseConfig = {
    apiKey: "AIzaSyDJswvykXP7RDq9DW_4H75acumhwpQg_AY",
    authDomain: "secret-santa-18b36.firebaseapp.com",
    projectId: "secret-santa-18b36",
    storageBucket: "secret-santa-18b36.appspot.com",
    messagingSenderId: "602055294989",
    appId: "1:602055294989:web:fdf0e149cb9365d87a1544"
};

const app = initializeApp(firebaseConfig);
const exp = express();

exp.engine('html', renderFile);
exp.set('view engine', 'html');
exp.set('views', path.join(__dirname, 'public'));

exp.use(express.static('public'));

exp.get('/', function (req, res) {
    res.render('homepage.html');
});

exp.listen(3000, () => {
    console.log(`Server listening on port ${3000}`);
});