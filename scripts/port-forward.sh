#!/usr/bin/env bash
# Port-forward service to localhost:8080
kubectl -n zero-downtime port-forward svc/myapp-svc 8080:80
