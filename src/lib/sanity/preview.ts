/**
 * Preview Mode 工具
 * 使用 next-sanity 的 draft mode 实现草稿实时预览
 * 
 * 启用方式：
 * 1. 设置 SANITY_API_READ_TOKEN 环境变量
 * 2. 在需要预览的页面中导入 useLiveQuery
 * 
 * 参考: https://github.com/sanity-io/next-sanity
 */

export function isPreviewMode(): boolean {
  return !!process.env.SANITY_API_READ_TOKEN
}
