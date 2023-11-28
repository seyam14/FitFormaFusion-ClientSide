// Import statements remain unchanged
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:5000/posts?page=${currentPage}`)
      .then(response => {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
        setCurrentPostIndex(0);
      })
      .catch(error => console.log('Error fetching posts', error));
  }, [currentPage]);

  const handleUpvote = (postId) => {
    if (postId === undefined) {
      console.log('Invalid postId for upvote');
      return;
    }

    console.log(`Upvoting post ${postId}`);
    // Upvoting logic remains unchanged
    axios.post(`http://localhost:5000/posts/${postId}/upvote`)
      .then(response => {
        setPosts(prevPosts => {
          return prevPosts.map(post => {
            if (post.id === postId) {
              return { ...post, upvotes: response.data.updatedUpvotes };
            }
            return post;
          });
        });
      })
      .catch(error => console.log('Error upvoting post', error));
  };

  const handleDownvote = (postId) => {
    if (postId === undefined) {
      console.log('Invalid postId for downvote');
      return;
    }

    console.log(`Downvoting post ${postId}`);
    // Downvoting logic remains unchanged
    axios.post(`http://localhost:5000/posts/${postId}/downvote`)
      .then(response => {
        setPosts(prevPosts => {
          return prevPosts.map(post => {
            if (post.id === postId) {
              return { ...post, downvotes: response.data.updatedDownvotes };
            }
            return post;
          });
        });
      })
      .catch(error => console.log('Error downvoting post', error));
  };

  const handleNextPost = () => {
    if (currentPostIndex < posts.length - 1) {
      setCurrentPostIndex(currentPostIndex + 1);
    }
  };

  const handlePrevPost = () => {
    if (currentPostIndex > 0) {
      setCurrentPostIndex(currentPostIndex - 1);
    }
  };

  return (
    <div>
       <Helmet>
        <title>FitFF|Forum</title>
     </Helmet> 
      <SectionTitle
        subHeading="Community Dialogues: Explore, Learn, Connect"
        heading="Forum"
      ></SectionTitle>
      <div className="max-w-4xl mx-auto mt-8 text-center">
        {posts.length > 0 && (
          <div key={posts[currentPostIndex].id} className="mb-4 p-4 border rounded shadow-md">
            <h2 className="text-2xl  font-bold mb-2">{posts[currentPostIndex].title}</h2>
            <p className="text-gray-700">{posts[currentPostIndex].content}</p>
            <div key={`buttons-${posts[currentPostIndex].id}`} className="mt-4">
              <button onClick={() => handleUpvote(posts[currentPostIndex].id)} className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <FaThumbsUp /> {posts[currentPostIndex].upvotes}
              </button>
              <button onClick={() => handleDownvote(posts[currentPostIndex].id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                <FaThumbsDown />{posts[currentPostIndex].downvotes}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-center">
          <button onClick={handlePrevPost} className="mx-2 px-4 py-2 rounded bg-blue-500 text-white">
            Previous
          </button>
          <span className="mx-2 px-4 py-2 rounded bg-gray-300">
            {currentPostIndex + 1} of {posts.length}
          </span>
          <button onClick={handleNextPost} className="mx-2 px-4 py-2 rounded bg-blue-500 text-white">
            Next
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`mx-2 px-4 py-2 rounded ${
                currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
              }`}
            >
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
