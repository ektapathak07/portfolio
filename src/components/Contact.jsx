import { Mail, Github, Linkedin } from "lucide-react";

function Contact({email,socials}) {
  return (
    <section id="contact" className="section dark-section">
      <div className="container">
        <div className="card contact-card">
          <h2 className="section-title">Let's<span className="gradient-text">Contact</span></h2>
          <p className="muted">I am open to internship and open source contribution</p>

          <div className="contact-links">
            <a className="icon-link icon-link-text" href={`mailto:${email}`}><Mail size={18} />Email</a>
            <a className="icon-link icon-link-text" href={socials.github}><Github size={18} />Github</a>
            <a className="icon-link icon-link-text" href={socials.linkedin}><Linkedin size={18} />linkedin</a>
          </div>

          <a className="btn btn-primary" href={`mailto:${email}`}>Contact me</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
