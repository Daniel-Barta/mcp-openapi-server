/**
 * HTTP method categorization utilities
 */

export const VALID_HTTP_METHODS = [
  "get",
  "post",
  "put",
  "patch",
  "delete",
  "options",
  "head",
] as const

export const GET_LIKE_METHODS = ["get", "delete", "head", "options"] as const

export const POST_LIKE_METHODS = ["post", "put", "patch"] as const

type ValidHttpMethod = (typeof VALID_HTTP_METHODS)[number]
type GetLikeMethod = (typeof GET_LIKE_METHODS)[number]
type PostLikeMethod = (typeof POST_LIKE_METHODS)[number]

/**
 * Check if an HTTP method is valid
 */
export function isValidHttpMethod(method: string): method is ValidHttpMethod {
  return VALID_HTTP_METHODS.includes(method.toLowerCase() as ValidHttpMethod)
}

/**
 * Check if an HTTP method uses query parameters (GET-like)
 */
export function isGetLikeMethod(method: string): method is GetLikeMethod {
  return GET_LIKE_METHODS.includes(method.toLowerCase() as GetLikeMethod)
}

/**
 * Check if an HTTP method uses request body (POST-like)
 */
export function isPostLikeMethod(method: string): method is PostLikeMethod {
  return POST_LIKE_METHODS.includes(method.toLowerCase() as PostLikeMethod)
}
