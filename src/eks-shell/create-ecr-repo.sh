# get login: aws ecr get-login-password --region region | docker login --username AWS --password-stdin aws_account_id.dkr.ecr.region.amazonaws.com

aws ecr create-repository \
    --repository-name hello-repo \
    --region region