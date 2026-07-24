import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from './sanity/schema'
import { structure } from './sanity/structure'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'development'

export default defineConfig({
  name: 'personal-site',
  title: '个人网站',
  projectId,
  dataset,
  plugins: [structureTool({ structure }), codeInput()],
  schema: {
    types: schemaTypes,
  },
})
