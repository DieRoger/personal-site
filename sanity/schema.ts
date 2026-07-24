import content from './schemas/content'
import project from './schemas/project'
import tag from './schemas/tag'
import { blockContent } from './utils/portable-text'

export const schemaTypes = [content, project, tag]

// 注册自定义 blockContent 类型
export const customTypes = [blockContent]
