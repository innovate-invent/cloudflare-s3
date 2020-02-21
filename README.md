Cloudflare - S3
---------------

This worker creates a minimal Amazon S3 interface to Cloudflare Workers KV.

Authentication is done using jsonwebtokens.

Buckets are mapped to namespaces.

A reserved namespace called `_cloudflare_s3_config` stores configuration 
objects and is not accessible via the S3 API.
