import jwt from 'jsonwebtoken'
import { getAssetFromKV } from '@cloudflare/kv-asset-handler'

function getKey(header, callback) {
  // TODO look up public key in _cloudflare_s3_config/keys/ based on header
}

/**
 * Return a simple Hello World response
 * @param {Request} request
 */
async function handleRequest(request) {
  const bearer = request.headers.get('Authentication');
  try {
    const decoded = jwt.verify(bearer, getKey);
    // TODO look up acl based on request and decoded id
    return getAssetFromKV()
  } catch {
    return new Response('permission denied', { status: 403 })
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
