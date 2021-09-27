import React, { Component } from 'react'


export default class Post extends Component {




    state = {
        posts : []
    }
    // Cargar antes de que la app renderice 
    // Cuando el componente esta montado 
    async componentDidMount() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        //    console.log(res)
        const data = await res.json();
        console.log(data);
        this.setState({posts: data})

    }

    render() {
        return (
            <div>
                <h1>Post</h1>
                {
                    this.state.posts.map(post => {
                        return(
                        <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        );
                    })
                }
            </div>
        )
    }
}


