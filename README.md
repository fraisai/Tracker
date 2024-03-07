Tech stack:

- Fullstack app: JavaScript, React, Node.js (Express), SQL (PostgreSQL)
- Devops: Amazon EKS (Kubernetes), Amazon ECR, Docker, Github Actions (CI/CD)



To get the URL for the frontend load balancer: `npm run url-ui`

To run app containers: `MYSQL_PASSWORD='<some password>' docker compose --file docker-compose.yml up`
To stop containers: `docker compose -f dist/docker-compose/docker-compose.yml down`


8000 server
3000 frontend


