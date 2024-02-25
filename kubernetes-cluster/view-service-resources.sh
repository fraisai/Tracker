
#!/usr/bin/env bash

kubectl -n eks-sample-app describe service eks-trackr-service

# kubectl get nodes -o wide && kubectl get pods -A -o wide
