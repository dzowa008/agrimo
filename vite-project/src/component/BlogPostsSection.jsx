import React from 'react';
import { BsChevronLeft, BsChevronRight, BsCalendar, BsPerson, BsArrowUpRight } from 'react-icons/bs';
// Ensure 'bootstrap/dist/css/bootstrap.min.css' is imported in your main app file (e.g., App.js or index.js)
import '../styles/BlogPostsSection.css'; // Import the dedicated CSS file

// --- Dummy Data ---
const blogPosts = [
    { 
        id: 1, 
        category: 'FOOD CROPS', 
        date: 'March 28, 2024', 
        author: 'ADMIN', 
        title: 'What technology is used in vertical farming?', 
        image: '../src/assets/dd0fb82ebd4eded971286ea582b6ee0266974808.jpg' 
    },
    { 
        id: 2, 
        category: 'ORGANIC FARM', 
        date: 'March 28, 2024', 
        author: 'ADMIN', 
        title: 'Which type of farming is more prevalent today?', 
        image: '../src/assets/c8f680be74b27ffc5ac0609560a2d2b35a9af117.jpg' 
    },
    { 
        id: 3, 
        category: 'FARMING TIPS', 
        date: 'March 28, 2024', 
        author: 'ADMIN', 
        title: 'The Farmers Sentiment Darkens Hopes Fade', 
        image: '../src/assets/e4348fcaf04cb49016826ff23c3cac59408f1dfe.jpg' 
    },
];

// --- Reusable Card Component (Nested) ---
const BlogCard = ({ post }) => {
    return (
        <div className="card-custom">
            <div className="card-img-top-wrapper">
                <img src={post.image} className="card-img-top" alt={post.title} />
                <span className="card-img-overlay-badge">{post.category}</span>
                <div className="card-link-icon">
                    <BsArrowUpRight />
                </div>
            </div>
            <div className="card-body-custom">
                <p className="card-meta">
                    <span><BsCalendar /> {post.date}</span>
                    <span><BsPerson /> {post.author}</span>
                </p>
                <h5 className="card-title-custom">{post.title}</h5>
            </div>
        </div>
    );
};

// --- Main Blog Section Component ---
const BlogSection = () => {
    return (
        <div className="blog-section container">
            {/* Header */}
            <div className="section-header">
                <div>
                    <div className="sub-title">Latest Blog</div>
                    <h2>Latest posts & articles</h2>
                </div>
                <div className="navigation-buttons">
                    <button aria-label="Previous posts">
                        <BsChevronLeft />
                    </button>
                    <button aria-label="Next posts">
                        <BsChevronRight />
                    </button>
                </div>
            </div>

            {/* Posts Grid using Bootstrap classes */}
            <div className="row g-4">
                {blogPosts.map(post => (
                    <div key={post.id} className="col-md-6 col-lg-4">
                        <BlogCard post={post} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogSection;