import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'development'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// 惰性创建：只在首次使用时创建 client，避免模块加载时因缺少 projectId 而崩溃
function makeClient(token?: string) {
  if (!projectId) return null
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !token,
    token,
    stega: { enabled: false, studioUrl: '/admin' },
  })
}

let _client: ReturnType<typeof createClient> | null | undefined
let _previewClient: ReturnType<typeof createClient> | null | undefined

function getClient() {
  if (_client === undefined) _client = makeClient()
  return _client
}

function getPreviewClient() {
  if (_previewClient === undefined) _previewClient = makeClient(process.env.SANITY_API_READ_TOKEN)
  return _previewClient
}

// 用 Proxy 确保 import { client } 在运行时能正常工作，而不是在模块加载时失败
export const client = new Proxy({} as NonNullable<ReturnType<typeof getClient>>, {
  get(_, key) {
    const c = getClient()
    if (!c) {
      if (key === 'fetch') {
        return async () => { throw new Error('Sanity not configured – set NEXT_PUBLIC_SANITY_PROJECT_ID') }
      }
      return undefined
    }
    return (c as any)[key]
  },
})

export const previewClient = new Proxy({} as NonNullable<ReturnType<typeof getPreviewClient>>, {
  get(_, key) {
    const c = getPreviewClient()
    if (!c) {
      if (key === 'fetch') {
        return async () => { throw new Error('Sanity not configured – set NEXT_PUBLIC_SANITY_PROJECT_ID') }
      }
      return undefined
    }
    return (c as any)[key]
  },
})
