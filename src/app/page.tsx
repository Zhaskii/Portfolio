import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { CodeProjectCard } from "@/components/code-project-card";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Navigation />

      <main>
        <section
          id="home"
          className="hero section-shell grid min-w-0 grid-cols-1 items-end gap-12 pb-6 pt-32 md:gap-16 md:pb-10 md:pt-36 lg:min-h-screen lg:grid-cols-[minmax(0,1.55fr)_minmax(320px,0.68fr)] lg:gap-[clamp(36px,7vw,100px)] lg:pb-11 lg:pt-[140px]"
        >
          <div className="hero-copy min-w-0">
            <Reveal>
              <p className="eyebrow">
                <span className="status-dot" />
                {portfolio.availability}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="hero-title">
                I build digital
                <span>products from</span>
                <em>end to end.</em>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="hero-intro">
                <div className="hero-intro-content">
                  <p>{portfolio.intro}</p>
                  <div className="hero-cta-row">
                    <a className="button button-primary" href="#projects">
                      Explore my work
                      <ArrowRight size={16} />
                    </a>
                    <a
                      className="button button-secondary"
                      href="https://wa.me/9779843346258"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Let&apos;s talk
                    </a>
                  </div>
                </div>
                <a className="circle-link" href="#projects" aria-label="View projects">
                  <ArrowDown size={24} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="hero-aside flex w-full min-w-0 flex-col gap-4 md:grid md:grid-cols-[minmax(0,1fr)_minmax(180px,0.5fr)] md:items-end lg:flex lg:flex-col">
            <div className="portrait-card relative block aspect-[4/5] min-h-[380px] w-full min-w-0 shrink-0 sm:aspect-[5/6] sm:min-h-[440px] md:min-h-[470px] lg:aspect-auto lg:min-h-[490px]">
              <Image
                src="/kunal-profile.png"
                alt="Kunal Shrestha standing in front of a mountain landscape"
                fill
                priority
                sizes="(max-width: 720px) 100vw, (max-width: 980px) 65vw, 32vw"
                className="portrait-photo block h-full w-full object-cover object-center"
              />
              <span className="portrait-label">Frontend × Backend</span>
              <div className="portrait-stack">
                <span>Next.js</span>
                <span>Node.js</span>
                <span>MongoDB</span>
              </div>
              <div className="portrait-location">
                <MapPin size={16} />
                {portfolio.location}
              </div>
            </div>
            <div className="mini-note w-full min-w-0">
              <Sparkles size={20} />
              <p>
                Currently exploring
                <strong>{portfolio.currentlyExploring}</strong>
              </p>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Areas of expertise">
          <div className="marquee-track">
            {Array.from({ length: 4 }, (_, groupIndex) => (
              <div
                className="marquee-group"
                aria-hidden={groupIndex > 0}
                key={groupIndex}
              >
                {portfolio.marquee.map((item) => (
                  <span key={`${groupIndex}-${item}`}>
                    {item}
                    <i>✦</i>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-shell about-section">
          <Reveal className="section-kicker">
            <span>01</span>
            <p>About me</p>
          </Reveal>

          <div className="about-grid grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-[clamp(60px,10vw,170px)]">
            <Reveal>
              <h2>
                Clean code should feel
                <em> clear, scalable,</em> and ready to grow.
              </h2>
            </Reveal>

            <Reveal delay={0.1} className="about-copy">
              {portfolio.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <a
                className="text-link"
                href={portfolio.resumeUrl}
                download="Kunal-Shrestha-Resume.pdf"
              >
                Download resume
                <Download size={17} />
              </a>
            </Reveal>
          </div>

          <div className="stats-grid grid grid-cols-2 lg:grid-cols-4">
            {portfolio.stats.map((stat, index) => (
              <Reveal delay={index * 0.08} key={stat.label} className="stat">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-shell">
            <Reveal className="section-kicker light">
              <span>02</span>
              <p>Selected work</p>
            </Reveal>

            <Reveal className="projects-heading grid grid-cols-1 gap-9 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:gap-20">
              <h2>
                A few things I&apos;ve
                <br />
                loved <em>making.</em>
              </h2>
              <p>
                Three client websites designed and developed from scratch,
                covering corporate storytelling and complete luxury-retail
                experiences.
              </p>
            </Reveal>

            <div className="projects-grid grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {portfolio.projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="other-projects" className="other-projects-section">
          <div className="section-shell">
            <Reveal className="section-kicker">
              <span>+</span>
              <p>Other projects</p>
            </Reveal>

            <Reveal className="other-projects-heading grid grid-cols-1 gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-[clamp(50px,9vw,130px)]">
              <div>
                <p className="other-projects-label">Built to learn deeply</p>
                <h2>
                  Full-stack work,
                  <br />
                  <em>open in GitHub.</em>
                </h2>
              </div>
              <p>
                These applications are not deployed, so each case study focuses
                on the engineering: architecture, authentication, API workflows,
                database design, client state, validation, and real-time
                behaviour.
              </p>
            </Reveal>

            <div className="code-projects-grid grid grid-cols-1 gap-6 md:grid-cols-2">
              {portfolio.otherProjects.map((project, index) => (
                <CodeProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-shell experience-section">
          <Reveal className="section-kicker">
            <span>03</span>
            <p>Experience</p>
          </Reveal>

          <div className="experience-grid grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[clamp(70px,11vw,160px)]">
            <Reveal>
              <h2>
                Where I&apos;ve been,
                <br />
                what I&apos;ve <em>learned.</em>
              </h2>
              <p className="experience-intro">{portfolio.experienceIntro}</p>
            </Reveal>

            <div className="experience-list">
              {portfolio.experience.map((job, index) => (
                <Reveal delay={index * 0.06} key={`${job.company}-${job.period}`}>
                  <article className="experience-item min-w-0">
                    <div className="experience-period">{job.period}</div>
                    <div>
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <ul className="experience-summary experience-highlights">
                      {job.summary.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section
          id="education"
          className="section-shell experience-section education-section"
        >
          <Reveal className="section-kicker">
            <span>04</span>
            <p>Education</p>
          </Reveal>

          <div className="experience-grid grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[clamp(70px,11vw,160px)]">
            <Reveal>
              <h2>
                Always learning,
                <br />
                always <em>building.</em>
              </h2>
            </Reveal>

            <div className="experience-list">
              {portfolio.education.map((item, index) => (
                <Reveal
                  delay={index * 0.06}
                  key={`${item.institution}-${item.period}`}
                >
                  <article className="experience-item education-item min-w-0">
                    <div className="experience-period">{item.period}</div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.institution}</p>
                    </div>
                    <p className="experience-summary">{item.details}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-shell skills-section">
          <Reveal className="section-kicker">
            <span>05</span>
            <p>Toolkit</p>
          </Reveal>

          <div className="skills-grid grid grid-cols-1 gap-10 md:gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-[clamp(70px,11vw,160px)]">
            <Reveal>
              <h2>
                Ideas are nice.
                <br />
                <em>Shipping is better.</em>
              </h2>
              <p className="skills-intro">{portfolio.skillsIntro}</p>
            </Reveal>

            <div className="skill-groups">
              {portfolio.skills.map((group, index) => (
                <Reveal delay={index * 0.07} key={group.category}>
                  <article className="skill-group">
                    <span>0{index + 1}</span>
                    <h3>{group.category}</h3>
                    <p>{group.items.join(" · ")}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-shell contact-inner">
            <Reveal>
              <p className="eyebrow light">
                <span className="status-dot" />
                Let&apos;s make something good
              </p>
              <h2>
                Have a project
                <br />
                in mind? <em>Say hello.</em>
              </h2>
            </Reveal>

            <Reveal
              delay={0.1}
              className="contact-actions min-w-0"
            >
              <a
                className="email-link"
                href={`mailto:${portfolio.email}`}
              >
                <Mail size={22} />
                {portfolio.email}
              </a>

              <div className="social-links">
                {portfolio.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                    <ArrowUpRight size={15} />
                  </a>
                ))}
              </div>
            </Reveal>

            <footer>
              <p>
                © {new Date().getFullYear()} {portfolio.name}
              </p>
              <p>Built with Next.js, TypeScript, and curiosity.</p>
              <a href="#home">
                Back to top
                <ArrowUpRight size={15} />
              </a>
            </footer>
          </div>
        </section>
      </main>
    </>
  );
}
