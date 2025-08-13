Assignment: Zero Downtime Kubernetes Deployments with Blue-Green, Canary, and Rolling Update Strategies

 

Objective:

Create a containerized web application, push it to Docker Hub, and deploy it to Kubernetes using Blue-Green, Canary, and Rolling Update strategies. Each deployment strategy must ensure zero downtime during updates to the latest Docker image tag.

 

Prerequisites:

· Docker Hub account

· Kubernetes cluster (Minikube, kind, or cloud-based)

· Installed tools:

o kubectl

o docker

o helm (optional)

o argocd (if using Argo CD/Rollouts)

 

Part 1: Create and Push Your Docker Image

1. Build a simple web application that clearly displays its version (e.g., “Version 1”).

2. Containerize the app using a Dockerfile.

3. Push two versions to Docker Hub:

o v1

o v2

o Also push each version as latest when applicable.

 Part 2: Blue-Green Deployment

1. Create two Kubernetes Deployments:

o blue using image v1

o green using image v2

2. Create a Service that points initially to blue.

3. Update the Service selector to point to green to simulate production switch.

4. Ensure the switch happens with zero downtime.

 

Part 3: Rolling Update Deployment

1. Create a standard Kubernetes Deployment using the latest image.

2. Configure the strategy for a rolling update:

o Use maxSurge and maxUnavailable to ensure zero downtime.

3. Simulate an update:

o Push a new version to Docker Hub as latest.

o Update the deployment and observe the update behavior.
rollout screenshot : 
![successfull rollout]()
