import Layout from '../components/Layout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <p>Hello Next.js</p>
    <ul>
      <PostLink id="hello-there" title="Hello there" />
    </ul>
  </Layout>
)
