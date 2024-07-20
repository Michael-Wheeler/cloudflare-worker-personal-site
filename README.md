# Cloudflare Workers Personal Site

To deploy:

- Generate a Cloudflare API token with the ability to create zones and edit workers (use the edit worker template and add Zone->zone->edit)
- For easiest use, set the token as a Terraform var using an env variable ```export TF_VAR_cloudflare_api_token=```
- ```terraform apply```
