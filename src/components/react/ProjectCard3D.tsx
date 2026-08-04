import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { Project } from '../../data/portfolio';
import { GithubIcon, ExternalLinkIcon } from './Icons';
import TechBadge from './TechBadge';
import './ProjectCard3D.css';

// Max tilt angle in degrees as the mouse moves from edge to edge of the card.
const MAX_TILT_DEG = 8;

// Spring feel for the tilt: higher stiffness snaps back faster,
// higher damping means less bounce/overshoot.
const TILT_SPRING = { stiffness: 300, damping: 28 };

// Scroll-reveal: fade + slide up the first time a card enters the viewport.
// Cards in the same row (index 0-3) stagger in with a small delay each.
const revealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: (index % 4) * 0.08 },
  }),
};

export default function ProjectCard3D({ project, index = 0 }: { project: Project; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [MAX_TILT_DEG, -MAX_TILT_DEG]), TILT_SPRING);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-MAX_TILT_DEG, MAX_TILT_DEG]), TILT_SPRING);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    // Normalize cursor position within the card to a -0.5..0.5 range.
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.article
      ref={ref}
      className={`p3d-card${project.latest ? ' is-latest' : ''}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={revealVariants}
      whileHover={{ scale: 1.015 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.image && (
        <a href={`/projects/${project.slug}`} className="p3d-image">
          <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
          <span className="p3d-image-overlay">View project</span>
        </a>
      )}
      <div className="p3d-body">
        <div className="route-bar p3d-route-bar">
          <span className="method method-get">GET</span>
          <span className="route-path">/projects/{project.slug}</span>
          {project.latest && <span className="latest-badge">Latest</span>}
        </div>
        <div className="p3d-top">
          <h3 className="p3d-title">
            <a href={`/projects/${project.slug}`}>{project.title}</a>
          </h3>
          <div className="p3d-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener" aria-label="GitHub" title="GitHub">
                <GithubIcon />
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener" aria-label="Live demo" title="Live Demo">
                <ExternalLinkIcon />
              </a>
            )}
          </div>
        </div>
        <p className="p3d-description" dangerouslySetInnerHTML={{ __html: project.description }} />
        <div className="p3d-tech-row">
          <span className="p3d-tech-label">stack:</span>
          <div className="p3d-tech-list">
            {project.tech.map((t) => (
              <TechBadge name={t} key={t} />
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
