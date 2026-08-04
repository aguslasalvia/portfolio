import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { ExperienceEntry } from '../../data/portfolio';
import './ExperienceTimeline.css';

type Experience = ExperienceEntry & { isCurrent: boolean };

export default function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  // The animated line needs a real pixel height to grow to, and CSS alone
  // can't give us that here (percentage heights don't work on an
  // absolutely-positioned line inside a parent whose own height is "auto").
  // So we measure the container once on mount and again if it resizes.
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;
    const el = containerRef.current;
    const update = () => setHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Start growing the line once the timeline is 80% up the viewport, and
  // finish by the time its end reaches the middle of the screen.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 55%'],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, height]);
  // Fade the line in quickly (first 8% of scroll progress) instead of
  // letting it pop in at 0 height.
  const fillOpacity = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div className="tl-root" ref={containerRef}>
      <div className="tl-track" style={{ height }} aria-hidden="true">
        <motion.div className="tl-fill" style={{ height: fillHeight, opacity: fillOpacity }} />
      </div>

      {experiences.map((exp, i) => (
        <div className="tl-item" key={i}>
          <div className="tl-sticky-col">
            <span className={`tl-dot${exp.isCurrent ? ' is-current' : ''}`} aria-hidden="true" />
            <span className="tl-period">{exp.period}</span>
          </div>
          <div className="tl-content">
            <h3 className="tl-title">{exp.title}</h3>
            <p className="tl-company">{exp.company} · {exp.location}</p>
            <p className="tl-description">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
