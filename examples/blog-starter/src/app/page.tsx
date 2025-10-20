import Container from './_components/container'
import MoreStories from './_components/more-stories'
import HeroPost from './_components/hero-post'
import Intro from './_components/intro'
import { getAllPosts } from '../lib/api'

export default function Page() {
  const allPosts = getAllPosts()

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)

  return (
    <main>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  )
}

