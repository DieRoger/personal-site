import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get('x-vercel-revalidation-secret')
    if (secret !== process.env.REVALIDATION_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    const body = await request.json()
    const { _type, slug } = body

    switch (_type) {
      case 'project':
        revalidatePath('/portfolio')
        if (slug) revalidatePath(`/portfolio/${slug}`)
        break
      case 'content': {
        revalidatePath('/blog')
        revalidatePath('/garden')
        if (slug) {
          revalidatePath(`/blog/${slug}`)
          revalidatePath(`/garden/${slug}`)
        }
        break
      }
      case 'tag':
        revalidatePath('/portfolio')
        break
    }

    return NextResponse.json({ revalidated: true })
  } catch (err) {
    console.error('Revalidation error:', err)
    return NextResponse.json({ message: 'Internal error' }, { status: 500 })
  }
}
