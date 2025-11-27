const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/projects/wordpress', (req, res) => {
  res.render('wordpress');
});

app.get('/projects/alembic', (req, res) => {
  res.render('alembic');
});

app.get('/projects/terraform', (req, res) => {
  res.render('terraform');
});

app.get('/projects/cloudformation', (req, res) => {
  res.render('cloudformation');
});
app.get('/projects/beanstalk', (req, res) => {
  res.render('beanstalk');
});


app.get('/projects/codepipeline', (req, res) => {
  res.render('codepipeline');
});

app.get('/projects/pipeline-as-code', (req, res) => {
  res.render('pipeline-as-code');
});
app.get('/projects/serverless-project', (req, res) => {
  res.render('serverless-project');
});

app.get('/projects/docker-nodejs', (req, res) => {
  res.render('docker-nodejs');
});

app.get('/projects/cicd', (req, res) => {
  res.send('<h1>CI/CD project page coming soon 🔧</h1><a href="/">Back</a>');
});

app.listen(port, () => {
  console.log(`✅ Portfolio website running at http://localhost:${port}`);
});

