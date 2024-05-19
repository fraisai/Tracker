git update-index --chmod=+x aws-credentials.sh

sudo chmod u+x aws-credentials.sh 
#!/usr/bin/env bash

sudo aws ecr get-login-password --region $AWS_REGION | docker login --username AWS --password-stdin $AWS_ACC_ID.dkr.ecr.$AWS_REGION.amazonaws.com



        