import React from 'react';
import axios from 'axios';

class FetchDemo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    axios.get(`http://insights.dice.com/wp-json/wp/v2/posts`)
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
            <a href={post.link} key={post.id}><h1 className="red" >{post.title.rendered}</h1></a>
        ))}
      </div>
    );
  }
}

export default FetchDemo;
