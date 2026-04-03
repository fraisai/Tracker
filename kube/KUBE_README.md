kubectl apply -f kube/namespace.yaml
kubectl apply -f kube/sql-stateful/sql-configmap.yaml
kubectl apply -f kube/sql-stateful/sql-services.yaml
kubectl apply -f kube/sql-stateful/sql-statefulset.yaml
kubectl apply -f kube/carts-store/carts-kube-v1/
kubectl apply -f kube/catalog-store/catalog-kube-v1/
kubectl apply -f kube/ui-store/ui-kube-v1/
kubectl apply -f kube/trackr-deployment.yml
kubectl apply -f kube/trackr-service.yml
kubectl apply -f kube/ingress.yaml


check with:

kubectl get pods -n trackr-namespace
kubectl get svc -n trackr-namespace
kubectl get ingress -n trackr-namespace