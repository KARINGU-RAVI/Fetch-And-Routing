import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogData} = this.props
    const {id, author, topic, avatarUrl, imageUrl, title} = blogData
    return (
      <Link to={`/blogs/${id}`}>
        <div className="blogItem_container">
          <img src={imageUrl} className="imageUrl" />
          <div className="deails_blog_item">
            <p>{topic}</p>
            <h2 className="heading_avatar">{title}</h2>
            <div className="avatar_container">
              <img src={avatarUrl} className="avatar" />
              <p>{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
