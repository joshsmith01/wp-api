import React from 'react';
import axios from 'axios';

class ExcerptTeaser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://wordpress/wp-json/wp/v2/posts`)
        .then(res => {
          this.setState({
            posts: res.data
          });
          console.log(res.data)
        });
  }

  render() {
    return (
      <div>
        {this.state.posts.map((post) => (
        <article className="post desktop" key={post.id}>
          <div className="img-holder alignleft">
            <img width="220" height="149"
                 src="http://2e8ram2s1li74atce18qz5y1.wpengine.netdna-cdn.com/wp-content/uploads/2017/06/shutterstock_572805178-220x149.jpg"
                 className="attachment-thumbnail-desktop size-thumbnail-desktop wp-post-image" alt=""/>
              <div className="overlay"></div>
          </div>
          <div className="holder">
            <header>
              <h2><a href="{post.link}">{post.title.rendered}</a></h2>
              <strong className="name">{post.author_name},</strong>
              <time dateTime="2017-06-30">June 30, 2017</time>
            </header>
            <p>{post.excerpt.rendered}<a className="more-link"
                                                  href="http://insights.dice.com/2017/06/30/next-big-challenge-business-a-i-nuance/">…</a>
            </p>
          </div>
        </article>
        ))}
      </div>
    );
  }

}

export default ExcerptTeaser;