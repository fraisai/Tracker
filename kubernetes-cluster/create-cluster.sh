#!/usr/bin/env bash
eksctl create cluster --name trackr-cluster --region us-east-1 --fargate

# eksctl created a kubectl config file in ~/.kube or added the new cluster's configuration within an existing config file in ~/.kube on your computer.



# In case someone sees this and is using Docker for creating an image of this application.

# Regarding:
    # but I'm not clear on exactly where I'm supposed to drop my build.sh file
    # Wherever you do decide to drop your build.sh file, make sure it is included in the Dockerfile image output, i.e. the file's path is in one of the COPY commands in the Dockerfile.

# For example, if you have something like
    # scripts {
    #   "build": "./scripts/build.sh"
    # }
    # Then your Dockerfile should have a COPY command similar to:

    # COPY scripts/build.sh scripts/