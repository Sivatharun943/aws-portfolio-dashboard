const fs = require('fs');

const linkedInSummary = `
## LinkedIn Profile Summary for Sivatharun Devireddy

---

### About Me

Master’s student in Computer Science at the University of Bridgeport with 2.5+ years of professional experience in embedded systems, software testing, automation, and cloud computing. Skilled in designing and managing cloud infrastructure, security policies, automation pipelines, and deploying applications on AWS.

---

### Key AWS & Cloud Computing Projects (16 Labs + 4 Supplemental Assignments)

I have completed a comprehensive hands-on cloud curriculum covering core AWS services, DevOps, security, logging, AI/ML, and deployment strategies, including:

#### Core Cloud Labs (12):

1. **S3 Static Website Hosting**  
   Built and deployed globally accessible static websites with custom domain naming conventions using Amazon S3, configuring bucket policies and public access securely.

2. **IAM and MFA Security Setup**  
   Configured IAM users with Multi-Factor Authentication, created restrictive policies enforcing IP-based EC2 access, and validated secure login flows.

3. **Centralized Log Aggregation with OpenSearch**  
   Automated log collection by integrating AWS Lambda, CloudWatch Logs, and OpenSearch for centralized, searchable log analytics.

4. **Elastic Beanstalk Blue-Green Deployment**  
   Implemented zero-downtime deployments by cloning environments and swapping CNAMEs using Elastic Beanstalk, demonstrating robust CI/CD practices.

5. **EC2 Instance Management and Networking**  
   Provisioned and configured EC2 instances with VPC, security groups, and load balancers.

6. **AWS Lambda Serverless Computing**  
   Created event-driven Lambda functions triggered by AWS services for scalable automation.

7. **CloudFormation Infrastructure as Code**  
   Designed reusable CloudFormation templates to automate infrastructure provisioning.

8. **AWS RDS Database Deployment**  
   Set up managed relational databases with automated backups and security best practices.

9. **API Gateway & Lambda Integration**  
   Built REST APIs using API Gateway backed by Lambda for serverless application architectures.

10. **AWS SQS & SNS Messaging Services**  
    Implemented decoupled communication and notification systems.

11. **AWS SageMaker for ML Model Deployment**  
    Developed, trained, and deployed machine learning models integrated with AWS Lambda and API Gateway.

12. **Containerization with Docker and ECS**  
    Containerized applications and deployed to Elastic Container Service clusters for scalability.

#### Supplemental Assignments (4):

1. **Static Website Hosting with Amazon S3**  
   Created a fully functional static website with custom domain and public access.

2. **IAM Policy with MFA and IP Restrictions**  
   Strengthened IAM security by enforcing MFA and IP whitelisting policies.

3. **Centralized Log Aggregation using OpenSearch and Lambda**  
   Automated log streaming and visualization for operational insights.

4. **Blue-Green Deployment on Elastic Beanstalk**  
   Performed safe, zero-downtime application upgrades with environment cloning and CNAME swaps.

---

### Professional Experience

**Associate Software Engineer | Capgemini Engineering**  
*Aug 2021 – Dec 2023*

- Developed and tested high-speed Ethernet communication platforms and chipset validation projects.  
- Automated testing scripts and integrated CI/CD pipelines using GitLab.  
- Collaborated closely with architects and analysts for requirements gathering and solution delivery.  
- Specialized in Linux systems, shell scripting, and embedded API testing with pytest.  

---

### Technical Skills

- **Cloud Platforms:** AWS (EC2, S3, Lambda, RDS, CloudFormation, Elastic Beanstalk, IAM, API Gateway, SageMaker, ECS, VPC, Route 53, OpenSearch, CodePipeline, CloudWatch)  
- **Languages:** Python, C, C#, Shell scripting, Node.js (basic)  
- **DevOps:** Docker, CI/CD, GitLab, Infrastructure as Code, automated testing  
- **Databases:** SQL, RDS  
- **Other:** Linux system administration, Agile methodologies, technical documentation

---

### Certifications

- AWS Cloud Foundations (Credly)  
- AWS Cloud Developing (Credly)  
- AWS Cloud Architecting (Credly)

---

### Career Objective

Seeking AWS Cloud Architect / Cloud Engineer roles to design and implement scalable, secure, and cost-efficient cloud solutions leveraging best practices in infrastructure automation, security, and deployment.

---

### Contact

📧 xyz@my.bridgeport.edu  
📞 +1 (848) XXX XXXX  
🌐 [LinkedIn URL]

`;

fs.writeFile('Sivatharun_LinkedIn_Summary.md', linkedInSummary, (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log('LinkedIn summary markdown file created successfully.');
});

