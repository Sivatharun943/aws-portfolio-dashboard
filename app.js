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

app.get('/projects/sam-pipeline', (req, res) => {
  res.render('sam-pipeline');
});

app.get('/projects/sagemaker-ai', (req, res) => {
  res.render('sagemaker-ai');
});

app.get('/projects/eks-kubernetes', (req, res) => {
  res.render('eks-kubernetes');
});

app.get('/projects/blue-green-deployment', (req, res) => {
  res.render('blue-green-deployment');
});

app.get('/projects/opensearch-logs', (req, res) => {
  res.render('opensearch-logs');
});

app.get('/projects/multi-tier-app', (req, res) => {
  res.render('multi-tier-app');
});

app.get('/projects/efs-storage', (req, res) => {
  res.render('efs-storage');
});

app.get('/projects/s3-static-website', (req, res) => {
  res.render('s3-static-website');
});

app.get('/projects/vpc-networking', (req, res) => {
  res.render('vpc-networking');
});

app.get('/projects/rds-migration', (req, res) => {
  res.render('rds-migration');
});

app.get('/projects/vpc-peering', (req, res) => {
  res.render('vpc-peering');
});

app.get('/projects/cognito-auth', (req, res) => {
  res.render('cognito-auth');
});

app.get('/projects/cicd', (req, res) => {
  res.send('<h1>CI/CD project page coming soon 🔧</h1><a href="/">Back</a>');
});

app.listen(port, () => {
  console.log(`✅ Portfolio website running at http://localhost:${port}`);
});

