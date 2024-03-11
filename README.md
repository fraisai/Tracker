Tech stack:

- Fullstack app: JavaScript, React, Node.js (Express), SQL (PostgreSQL)
- Devops: Amazon EKS (Kubernetes), Amazon ECR, Docker, Github Actions (CI/CD)

To get the URL for the frontend load balancer: `npm run url-ui`
To run app containers: `MYSQL_PASSWORD='<some password>' docker compose --file docker-compose.yml up`
To stop containers: `docker compose -f dist/docker-compose/docker-compose.yml down`



Use `npm run create-cluster` to create EKS cluster (`eksctl create cluster --name <cluster-name> --region <region_mame> --fargate`)
Make changes to your code 
When code is committed to the main branch:
Git commit code is used to tag docker image
Dockerfile (runs npm run build) is tagged, built and pushed to ECR repository
Kubeconfig file is updated (organize information about clusters, users, namespaces, and authentication mechanisms)
Finally changes to application are deployed to Kubernetes cluster by applying the Service and Deployment Manifests
