import {withRouter} from 'next/router'
import Layout from '../components/Layout.js'

const Content = withRouter((props) => (
  <div>
    <h1>{props.router.query.id}</h1>
  </div>
))

const Page = (props) => (
  <Layout>
    <Content />
  </Layout>
)
export default Page
