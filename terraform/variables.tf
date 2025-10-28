variable "resource_group_name" {
  description = "Name of the resource group"
  type        = string
  default     = "devops-project-rg"
}

variable "location" {
  description = "Azure region for resources"
  type        = string
  default     = "eastus"
}

variable "acr_name" {
  description = "Name of Azure Container Registry"
  type        = string
  default     = "devopsprojectacr2025"
}

variable "aks_cluster_name" {
  description = "Name of AKS cluster"
  type        = string
  default     = "devops-aks-cluster"
}
