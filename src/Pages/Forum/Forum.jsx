import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FaThumbsUp, FaThumbsDown, FaPlus, FaTimes } from 'react-icons/fa';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import { Helmet } from 'react-helmet';
import { AnimatePresence, motion } from 'framer-motion';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Create Post form states
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    fetchPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const fetchPosts = () => {
    axios.get(`https://b8a12-server-side-seyam14.vercel.app/posts?page=${currentPage}`)
      .then(response => {
        setPosts(response.data.posts);
        setTotalPages(response.data.totalPages);
        setCurrentPostIndex(0);
      })
      .catch(error => console.log('Error fetching posts', error));
  };

  const handleUpvote = (postId) => {
    axios.post(`https://b8a12-server-side-seyam14.vercel.app/posts/${postId}/upvote`)
      .then(response => {
        setPosts(prev =>
          prev.map(post =>
            post.id === postId
              ? { ...post, upvotes: response.data.updatedUpvotes }
              : post
          )
        );
      })
      .catch(error => console.log('Upvote error', error));
  };

  const handleDownvote = (postId) => {
    axios.post(`https://b8a12-server-side-seyam14.vercel.app/posts/${postId}/downvote`)
      .then(response => {
        setPosts(prev =>
          prev.map(post =>
            post.id === postId
              ? { ...post, downvotes: response.data.updatedDownvotes }
              : post
          )
        );
      })
      .catch(error => console.log('Downvote error', error));
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

  const openModal = () => {
    setIsModalOpen(true);
    setFormError('');
    setFormSuccess('');
    setNewTitle('');
    setNewContent('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTitle || !newContent) {
      setFormError('Both fields are required.');
      return;
    }

    try {
      setIsSubmitting(true);
      // eslint-disable-next-line no-unused-vars
      const res = await axios.post(`https://b8a12-server-side-seyam14.vercel.app/posts`, {
        title: newTitle,
        content: newContent,
      });
      setFormSuccess('Post submitted successfully!');
      setTimeout(() => {
        setIsSubmitting(false);
        closeModal();
        fetchPosts();
      }, 1000);
    } catch (err) {
      console.error(err);
      setFormError('Failed to submit post.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative">
      <Helmet>
        <title>FitFF | Forum</title>
      </Helmet>
      <SectionTitle
        subHeading="Community Dialogues: Explore, Learn, Connect"
        heading="Forum"
      />
      <div className="max-w-4xl mx-auto mt-8 text-center px-4">
        <div className="mb-4">
          <button
            onClick={openModal}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-md transition"
          >
            <FaPlus /> New Post
          </button>
        </div>

        {posts.length > 0 && (
          <div key={posts[currentPostIndex].id} className="mb-4 p-4 border rounded shadow-md bg-white text-left">
            <h2 className="text-2xl font-bold mb-2">{posts[currentPostIndex].title}</h2>
            <p className="text-gray-700">{posts[currentPostIndex].content}</p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={() => handleUpvote(posts[currentPostIndex].id)}
                className="flex items-center gap-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                <FaThumbsUp /> {posts[currentPostIndex].upvotes}
              </button>
              <button
                onClick={() => handleDownvote(posts[currentPostIndex].id)}
                className="flex items-center gap-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                <FaThumbsDown /> {posts[currentPostIndex].downvotes}
              </button>
            </div>
          </div>
        )}

        <div className="mt-4 flex justify-center gap-4">
          <button onClick={handlePrevPost} className="px-4 py-2 rounded bg-blue-500 text-white">
            Previous
          </button>
          <span className="px-4 py-2 rounded bg-gray-300">
            {currentPostIndex + 1} of {posts.length}
          </span>
          <button onClick={handleNextPost} className="px-4 py-2 rounded bg-blue-500 text-white">
            Next
          </button>
        </div>

        <div className="mt-4 flex justify-center flex-wrap gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            key="modal"
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-40"
          >
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-base-100 rounded-xl shadow-xl p-6 relative">
              <div className="flex justify-between items-center mb-4">
                <h3 id="modal-title" className="text-xl font-bold text-primary">
                  Create New Post
                </h3>
                <button
                  onClick={closeModal}
                  disabled={isSubmitting}
                  className="text-gray-400 hover:text-gray-600 transition"
                >
                  <FaTimes size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-medium mb-1">Title</label>
                  <input
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div>
                  <label className="block font-medium mb-1">Content</label>
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    rows={6}
                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter post content"
                    required
                  />
                </div>

                {formError && <p className="text-red-500">{formError}</p>}
                {formSuccess && <p className="text-green-600">{formSuccess}</p>}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Post'}
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Forum;
