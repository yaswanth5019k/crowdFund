import React, { useState } from 'react';
import './Hero.css';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect } from "react";

function Hero() {
  // Temporary placeholder images for testing
  const cardWarsImg = "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=800&auto=format&fit=crop";
  const stickersImg = "https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=800&auto=format&fit=crop";
  const umamiImg = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop";
  const openCallImg = "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&auto=format&fit=crop";
  const featuredImg = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop";
  const creatorAvatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop";

  const stats = [
    { number: '273', label: 'PROJECTS FUNDED' },
    { number: '853', label: 'TOWARDS CREATIVE WORK' },
    { number: '1003', label: 'PLEDGES' }
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "Adventure Time Card Wars 2025",
      creator: "Cryptozoic Entertainment",
      image: cardWarsImg,
      description: "Three new Collector's Packs featuring Heroes fans voted for — like Flame Princess, Fern, and Prismo — plus new game cards and more.",
      timeLeft: "18 days left",
      funded: "680% funded",
      category: "Tabletop Games",
      location: "Laguna Hills, CA"
    },
    {
      id: 2,
      title: "'Brewed Together' Sticker Pack: Make 100",
      creator: "Stitchcrafts Studio",
      image: stickersImg,
      description: "Cute sticker collection featuring adorable designs",
      timeLeft: "5 days left",
      funded: "819% funded",
      category: "Art",
      location: "Portland, OR"
    },
    {
      id: 3,
      title: "Umami Seasoning: Discover the magic of umami of sake!!",
      creator: "Tokyo Bai Inc",
      image: umamiImg,
      description: "Experience the fifth taste with our special seasoning blend",
      timeLeft: "11 days left",
      funded: "175% funded",
      category: "Food",
      location: "Tokyo, JP"
    },
    {
      id: 4,
      title: "'Brewed Together' Sticker Pack: Make 100",
      creator: "Stitchcrafts Studio",
      image: stickersImg,
      description: "Cute sticker collection featuring adorable designs",
      timeLeft: "5 days left",
      funded: "819% funded",
      category: "Art",
      location: "Portland, OR"
    },{
      id: 5,
      title: "Adventure Time Card Wars 2025",
      creator: "Cryptozoic Entertainment",
      image: cardWarsImg,
      description: "Three new Collector's Packs featuring Heroes fans voted for — like Flame Princess, Fern, and Prismo — plus new game cards and more.",
      timeLeft: "18 days left",
      funded: "680% funded",
      category: "Tabletop Games",
      location: "Laguna Hills, CA"
    },
    {
      id: 6,
      title: "Umami Seasoning: Discover the magic of umami of sake!!",
      creator: "Tokyo Bai Inc",
      image: umamiImg,
      description: "Experience the fifth taste with our special seasoning blend",
      timeLeft: "11 days left",
      funded: "175% funded",
      category: "Food",
      location: "Tokyo, JP"
    },
    {
      id: 7,
      title: "Adventure Time Card Wars 2025",
      creator: "Cryptozoic Entertainment",
      image: cardWarsImg,
      description: "Three new Collector's Packs featuring Heroes fans voted for — like Flame Princess, Fern, and Prismo — plus new game cards and more.",
      timeLeft: "18 days left",
      funded: "680% funded",
      category: "Tabletop Games",
      location: "Laguna Hills, CA"
    },
    {
      id: 8,
      title: "'Brewed Together' Sticker Pack: Make 100",
      creator: "Stitchcrafts Studio",
      image: stickersImg,
      description: "Cute sticker collection featuring adorable designs",
      timeLeft: "5 days left",
      funded: "819% funded",
      category: "Art",
      location: "Portland, OR"
    },
    {
      id: 9,
      title: "Umami Seasoning: Discover the magic of umami of sake!!",
      creator: "Tokyo Bai Inc",
      image: umamiImg,
      description: "Experience the fifth taste with our special seasoning blend",
      timeLeft: "11 days left",
      funded: "175% funded",
      category: "Food",
      location: "Tokyo, JP"
    }
  ];

 const AnimatedCounter = ({ target }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (value) => Math.floor(value)); // Ensure whole numbers

  useEffect(() => {
    const controls = animate(count, target, { duration: 2, ease: "easeOut" });
    return controls.stop; // Cleanup on unmount
  }, [target]);

  return <motion.span>{rounded}</motion.span>;
};

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNext = () => {
    if ((currentPage + 1) * itemsPerPage < featuredProjects.length) {
      setCurrentPage(currentPage + 1);
    }
  };
  

  const currentProjects = featuredProjects.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <main className="hero-section">
      <div className="hero-content">

        <motion.div className="tag-line"
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          transition={{ delay: 0.2, duration: 0.6 }} // Delay the animation slightly
        >
          <h1>Bring a creative project to life.</h1>
          <p className="subtitle">With us in Elevate Fund</p>
        </motion.div>

        <motion.div className="stats-container"
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
          transition={{ delay: 0.2, duration: 0.6 }} // Delay the animation slightly
        >
          {stats.map((stat, index) => (

          <div key={index} className="stat-item">
          <h2 className="stat-number">
            <AnimatedCounter target={Number(stat.number)} />
          </h2>
          <p className="stat-label">{stat.label}</p>
          </div>

          ))}

        </motion.div>

        <section className="projects-section">
          <motion.h2 className="section-title"
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
            transition={{ delay: 0.2, duration: 0.6 }} // Delay the animation slightly
          >FEATURED PROJECTS</motion.h2>

          <div className="projects-grid">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
                animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
                transition={{
                  delay: index%3 * 0.2, // Delay each card's animation slightly (0.2s delay for each one)
                  duration: 0.6, // Duration of each animation
                }}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster hover effect
              >
                <div className="project-header">
                  <div className="creator-info">
                    <img
                      src={creatorAvatar}
                      alt="Creator"
                      className="creator-avatar"
                    />
                    <span>{project.creator}</span>
                  </div>
                  <button className="bookmark-btn">☆</button>
                </div>
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-meta">
                    <div className="funcding-info">
                      <span className="time-left">{project.timeLeft}</span>
                      <span className="bullet">•</span>
                      <span className="funded">{project.funded}</span>
                    </div>
                    <div className="project-tags">
                      <span className="tag">{project.category}</span>
                      <span className="tag">{project.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pagination">
            <button className="prev-btn" onClick={handlePrev}>
              ←
            </button>
            <div className="page-numbers">
              <span className={currentPage === 0 ? "active" : ""}>1</span>
              <span className={currentPage === 1 ? "active" : ""}>2</span>
              <span className={currentPage === 2 ? "active" : ""}>3</span>
            </div>
            <button className="next-btn" onClick={handleNext}>
              →
            </button>
          </div>
        </section>

        <section className="open-call-section">
          <div className="open-call-grid">
            <motion.div className="open-call-card"
              initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
              transition={{ delay: 0.2, duration: 0.6 }} // Delay the animation slightly
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster hover effect
            >
              <div className="open-call-image">
                <img src={openCallImg} alt="Open Call Projects" />
              </div>
              <div className="open-call-content">
                <h3>Open Call Projects</h3>
                <p>Submit your creative projects</p>
                <span className="category-tag">All Categories</span>
              </div>
            </motion.div>
            <motion.div className="open-call-card"
              initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and position
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }} // Faster hover effect
              transition={{ delay: 0.2, duration: 0.6 }} // Delay the animation slightly
            >
              <div className="open-call-image">
                <img src={featuredImg} alt="Featured Projects" />
              </div>
              <div className="open-call-content">
                <h3>Featured Projects</h3>
                <p>Discover amazing innovations</p>
                <span className="category-tag">Featured</span>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default Hero; 