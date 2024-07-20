terraform {
  required_providers {
    cloudflare = {
      source  = "cloudflare/cloudflare"
      version = "~> 4.0"
    }
  }
}

variable "cloudflare_api_token" {
  type = string
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

// Totally irrelevant, you have to create a zone for CF workers if using Terraform. 
// This zone is ignored and the .workers.dev domain used instead
resource "cloudflare_zone" "this" {
  account_id = "debd18411bb7b2eff1477b5b636f2332"
  zone       = "google.com"
}

resource "cloudflare_worker_script" "main" {
  account_id = "debd18411bb7b2eff1477b5b636f2332"
  name       = "site"
  content    = file("../src/main.js")
}

resource "cloudflare_worker_script" "cv" {
  account_id = "debd18411bb7b2eff1477b5b636f2332"
  name       = "cv"
  content    = file("../src/cv.js")
}

resource "cloudflare_worker_route" "main" {
  zone_id     = cloudflare_zone.this.id
  pattern     = cloudflare_zone.this.zone
  depends_on  = [cloudflare_worker_script.main]
  script_name = cloudflare_worker_script.main.name
}

resource "cloudflare_worker_route" "cv" {
  zone_id     = cloudflare_zone.this.id
  pattern     = "${cloudflare_zone.this.zone}/cv}"
  depends_on  = [cloudflare_worker_script.cv]
  script_name = cloudflare_worker_script.cv.name
}
