import React from 'react'

const PostList = ({ posts, addToCart }) => {
    return (
        <div className="posts-container">
            {posts.map((post) => {
                return (
                    <div className="post_card" key={post.id}>
                        <div className='post_card_ev'>
                            <div className='post_card_layout'>

                                <img
                                    src={post.thumbnail}
                                    alt={post.title}
                                    className="post_img"
                                />

                                <div className='post_text_layout'>
                                    <div className='post_id_title'>
                                        <h1>{post.id}{'.'} {post.title}</h1>
                                    </div>
                                    <p className="post_discr">{post.description}</p>
                                    <div>{"Rating:"} {post.rating}</div>

                                </div>

                                <div className='post_char_column'>
                                    <div className='post_price_title'>{"Цена:"} {post.price}{"$"}</div>
                                    <button className='FetchBtn' onClick={() => addToCart(post)}>Добавить в корзину</button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
};
export default PostList;
