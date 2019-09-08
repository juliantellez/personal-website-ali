locals {
  tags = {
    application   = "personal-website-ali"
    environment   = "${var.environment}"
    gitRepo       = "github.com/juliantellez/${local.project_repo}"
    managedBy     = "Terrafrom"
    WAFProtection = true
  }

  enviroment_delimiter = "${var.environment == "production" ? "" : "-${var.environment}" }"

  project_repo                = "personal-website-ali"
  bucket_name                 = "julian-tellez--personal-website-ali"
  acm_certificate_domain_name = "aliway.co"

  cloudfront_origin_id = "s3-${local.bucket_name}${local.enviroment_delimiter}"

  route53_zone_id     = "ZNFD9XO2P7BQI"
  route53_domain_name = "aliway.co"
}
