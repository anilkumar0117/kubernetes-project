                    GitHub
                       │
                       │ git push
                       ▼
              GitHub Actions
                       │
              ┌────────┴────────┐
              │                 │
          Docker Build       AWS Auth
              │                 │
              ▼                 │
        Docker Image            │
              │                 │
              ▼                 │
             ECR ◄──────────────┘
              │
              │ Docker image
              ▼
             EKS
       ┌──────┴──────┐
       │             │
    Pod 1          Pod 2
       │             │
       └──────┬──────┘
              │
         Kubernetes
           Service
              │
              ▼
       Kubernetes Ingress
              │
              ▼
   AWS Load Balancer Controller
              │
              ▼
        AWS ALB
       ┌──────┴──────┐
       │             │
    HTTP :80     HTTPS :443
       │             │
       └──────┬──────┘
              │
          ACM Certificate
              │
              ▼
   anime.anildevops.space
              ▲
              │
         GoDaddy DNS
