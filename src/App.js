import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Portfolio", "Services", "Contact"];

// ╔══════════════════════════════════════════════════════════╗
// ║         🖼️  HOW TO ADD YOUR IMAGES — READ THIS          ║
// ╠══════════════════════════════════════════════════════════╣
// ║                                                          ║
// ║  STEP 1: Create a folder called "images" inside /src     ║
// ║          src/images/                                     ║
// ║                                                          ║
// ║  STEP 2: Copy your image files into that folder          ║
// ║          e.g. george-photo.jpg, trident.jpg, etc.        ║
// ║                                                          ║
// ║  STEP 3: Import them just below this comment block:      ║
// ║          import profileImg from "./images/george.jpg";   ║
// ║          import p1 from "./images/trident.jpg";          ║
// ║          import p2 from "./images/escapade.jpg";         ║
// ║          ... and so on for each project                  ║
// ║                                                          ║
// ║  STEP 4: Replace null values below with your imports     ║
// ║          PROFILE_IMAGE = profileImg                      ║
// ║          image: p1   (in PROJECTS array)                 ║
// ║                                                          ║
// ║  Supported formats: .jpg .jpeg .png .webp .gif           ║
// ╚══════════════════════════════════════════════════════════╝

// ── PASTE YOUR IMPORTS BELOW THIS LINE ──
 import profileImg from "./images/george.png";
// import p1 from "./images/trident.jpg";
// import p2 from "./images/escapade.jpg";
// import p3 from "./images/jetlyfe.jpg";
// import p4 from "./images/charm.jpg";
// import p5 from "./images/winit.jpg";
// import p6 from "./images/forex.jpg";
// ── END OF IMPORTS ──


// ── SET YOUR PROFILE PHOTO HERE ──
const PROFILE_IMAGE = profileImg;
// Change null to your import variable, e.g:  profileImg


// ── SET YOUR PROJECT IMAGES HERE ──
const PROJECTS = [
  {
    id: 1,
    type: "graphic",
    title: "TRIDENT Identity System",
    desc: "Full brand identity and visual language for a media consultancy.",
    tag: "Brand Design",
    color: "#ff4400",
    image: null, // ← replace with: p1
  },
  {
    id: 2,
    type: "video",
    title: "Escapade Motion Reel",
    desc: "Cinematic brand motion reel featuring dynamic transitions and color grading.",
    tag: "Video Editing",
    color: "#e8ff00",
    image: null, // ← replace with: p2
  },
  {
    id: 3,
    type: "graphic",
    title: "Jetlyfe Campaign Posters",
    desc: "Bold poster series for a lifestyle brand — strategy meets visual storytelling.",
    tag: "Poster Design",
    color: "#00d4ff",
    image: null, // ← replace with: p3
  },
  {
    id: 4,
    type: "video",
    title: "Charm Brand Film",
    desc: "Short-form brand film crafted to reflect authenticity and creative direction.",
    tag: "Motion Graphics",
    color: "#ff4400",
    image: null, // ← replace with: p4
  },
  {
    id: 5,
    type: "graphic",
    title: "Winit Visual System",
    desc: "Media consultant work — art direction, layout design, and brand photography.",
    tag: "Visual Identity",
    color: "#e8ff00",
    image: null, // ← replace with: p5
  },
  {
    id: 6,
    type: "video",
    title: "Forex Portal Reel",
    desc: "Creative directorial oversight and post-production for fintech brand content.",
    tag: "Creative Direction",
    color: "#00d4ff",
    image: null, // ← replace with: p6
  },
];

const SERVICES = [
  { icon: "◈", title: "Graphic Design", desc: "Posters, layouts, editorial design — crafted with intention and precision." },
  { icon: "◉", title: "Brand Identity", desc: "Logos, visual systems, and brand guidelines that create lasting recognition." },
  { icon: "▶", title: "Video Editing", desc: "From raw footage to cinematic sequences — storytelling through motion." },
  { icon: "◆", title: "Motion Graphics", desc: "Dynamic visual content that bridges design and moving image." },
  { icon: "◎", title: "Brand Photography", desc: "Art-directed photography that reflects your brand's true essence." },
  { icon: "✦", title: "Creative Direction", desc: "Strategic oversight translating brand vision into impactful visual solutions." },
];

// ── Reusable components ──

function DotGrid() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
      backgroundSize: "28px 28px",
    }} />
  );
}

function CornerBrackets({ color = "#ff4400", size = 18 }) {
  const s = { position: "absolute", width: size, height: size, background: color };
  return (
    <>
      <span style={{ ...s, top: 0, left: 0 }} />
      <span style={{ ...s, top: 0, right: 0 }} />
      <span style={{ ...s, bottom: 0, left: 0 }} />
      <span style={{ ...s, bottom: 0, right: 0 }} />
    </>
  );
}

function Counter({ end }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const step = Math.ceil(end / 40);
        const t = setInterval(() => {
          start += step;
          if (start >= end) { setVal(end); clearInterval(t); }
          else setVal(start);
        }, 35);
      }
    }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{val}</span>;
}

// Profile photo — shows real image or placeholder
function ProfileImage({ src }) {
  if (src) {
    return (
      <>
        <img src={src} alt="George Saater" style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top", display: "block",
        }} />
        {/* Gradient blend at bottom */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0, height: "35%",
          background: "linear-gradient(to top, #0f0f0f, transparent)", zIndex: 2,
        }} />
      </>
    );
  }
  return (
    <div style={{
      position: "absolute", inset: 0, display: "flex", alignItems: "center",
      justifyContent: "center", flexDirection: "column", gap: 14,
      background: "linear-gradient(160deg, #181818 0%, #0a0a0a 100%)",
    }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%",
        border: "1px solid rgba(255,68,0,0.25)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(255,68,0,0.5)" strokeWidth="1.2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", color: "rgba(255,255,255,0.2)" }}>PROFILE PHOTO</p>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, color: "rgba(255,68,0,0.45)", letterSpacing: "0.1em", marginTop: 4 }}>See code comments to add</p>
      </div>
    </div>
  );
}

// Project thumbnail — shows real image or creative placeholder
function ProjectThumb({ src, color, index, title, isHovered }) {
  if (src) {
    return (
      <>
        <img src={src} alt={title} style={{
          position: "absolute", inset: 0, width: "100%", height: "100%",
          objectFit: "cover", display: "block",
          transition: "transform 0.5s ease",
          transform: isHovered ? "scale(1.06)" : "scale(1)",
        }} />
        {/* Hover darkening */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 1,
          background: isHovered ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.08)",
          transition: "background 0.35s ease",
        }} />
      </>
    );
  }

  // Stylised geometric placeholder
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `linear-gradient(135deg, #111 0%, #0a0a0a 100%)`,
    }}>
      {/* Glow blob */}
      <div style={{
        position: "absolute", inset: 0,
        background: isHovered
          ? `radial-gradient(ellipse at 50% 50%, ${color}22 0%, transparent 65%)`
          : `radial-gradient(ellipse at 30% 70%, ${color}0d 0%, transparent 60%)`,
        transition: "background 0.4s ease",
      }} />
      {/* Decorative rings */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ position: "relative" }}>
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            border: `1px solid ${color}18`,
            position: "absolute", top: "50%", left: "50%",
            transform: `translate(-50%, -50%) scale(${isHovered ? 1.4 : 1.1})`,
            transition: "transform 0.4s ease",
          }} />
          <div style={{
            width: 60, height: 60, borderRadius: "50%",
            border: `1px solid ${color}10`,
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }} />
          <div style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 54, lineHeight: 1, color: color,
            opacity: isHovered ? 0.22 : 0.08,
            transition: "opacity 0.35s ease",
          }}>{index.toString().padStart(2, "0")}</div>
        </div>
      </div>
      {/* "Add image" nudge */}
      <div style={{
        position: "absolute", bottom: 12, left: "50%", transform: "translateX(-50%)",
        display: "flex", alignItems: "center", gap: 6,
        opacity: isHovered ? 0.55 : 0.22, transition: "opacity 0.3s",
        whiteSpace: "nowrap",
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 8, letterSpacing: "0.15em", color, textTransform: "uppercase" }}>Add Image</span>
      </div>
    </div>
  );
}

function HeroVideo() {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 1, overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, zIndex: 2, background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.9) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 2, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)", animation: "scanline 8s linear infinite", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "radial-gradient(ellipse 60% 40% at 30% 60%, rgba(255,68,0,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 80% 30%, rgba(232,255,0,0.06) 0%, transparent 60%)", animation: "bokeh 6s ease-in-out infinite alternate" }} />
    </div>
  );
}

// ── Tip box shown when images are missing ──
function ImageTip({ message }) {
  return (
    <div style={{
      marginTop: 12, padding: "10px 14px",
      background: "rgba(255,68,0,0.05)", border: "1px solid rgba(255,68,0,0.18)",
    }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,120,60,0.85)", lineHeight: 1.65 }}>
        {message}
      </p>
    </div>
  );
}

// ── Main App ──
export default function App() {
  const [active, setActive] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [filter, setFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleContact = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi George! I'm ${form.name} (${form.email}).\n\n${form.message}`);
    window.open(`https://wa.me/2348137620998?text=${msg}`, "_blank");
  };

  const filtered = PROJECTS.filter(p => filter === "all" ? true : p.type === filter);
  const px = isMobile ? "20px" : isTablet ? "32px" : "48px";
  const sectionPy = isMobile ? "72px" : isTablet ? "96px" : "120px";
  const noProjectImages = PROJECTS.every(p => !p.image);

  return (
    <div style={{ fontFamily: "'Helvetica Neue', 'Arial Black', sans-serif", background: "#080808", color: "#f0f0f0", minHeight: "100vh", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-track { background: #080808; }
        ::-webkit-scrollbar-thumb { background: #ff4400; border-radius: 2px; }
        @keyframes scanline { 0% { background-position: 0 0; } 100% { background-position: 0 100vh; } }
        @keyframes bokeh { 0% { opacity: 0.6; transform: scale(1); } 100% { opacity: 1; transform: scale(1.1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes glowPulse { 0%, 100% { text-shadow: 0 0 40px rgba(255,68,0,0.3); } 50% { text-shadow: 0 0 80px rgba(255,68,0,0.6); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-8px); } }
        @keyframes dotPulse { 0%, 100% { box-shadow: 0 0 8px #ff4400; } 50% { box-shadow: 0 0 18px #ff4400; } }
        .nav-link { color: rgba(240,240,240,0.5); text-decoration: none; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; transition: color 0.2s; cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 500; }
        .nav-link:hover, .nav-link.active { color: #ff4400; }
        .hero-title { font-family: 'Bebas Neue', sans-serif; font-size: clamp(64px, 17vw, 200px); line-height: 0.9; letter-spacing: -0.01em; color: #fff; animation: fadeUp 1s ease both, glowPulse 4s ease-in-out 1.5s infinite; }
        .hero-subtitle { font-family: 'Bebas Neue', sans-serif; font-size: clamp(42px, 11vw, 130px); line-height: 0.9; color: transparent; -webkit-text-stroke: 1.5px rgba(255,255,255,0.4); animation: fadeUp 1s 0.2s ease both; }
        .section-label { font-family: 'DM Sans', sans-serif; font-size: 10px; letter-spacing: 0.3em; text-transform: uppercase; color: #ff4400; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; }
        .section-label::before { content: ''; display: inline-block; width: 32px; height: 1px; background: #ff4400; flex-shrink: 0; }
        .section-heading { font-family: 'Bebas Neue', sans-serif; font-size: clamp(40px, 9vw, 100px); line-height: 1; letter-spacing: 0.02em; color: #fff; }
        .project-card { position: relative; background: #0f0f0f; border: 1px solid rgba(255,255,255,0.06); cursor: pointer; transition: transform 0.3s ease, border-color 0.3s ease; overflow: hidden; }
        .project-card:hover { transform: translateY(-4px); border-color: rgba(255,68,0,0.4); }
        .service-card { border: 1px solid rgba(255,255,255,0.06); padding: 28px 24px; transition: border-color 0.3s, background 0.3s; background: #0a0a0a; }
        .service-card:hover { border-color: rgba(255,68,0,0.5); background: #111; }
        .filter-btn { background: transparent; border: 1px solid rgba(255,255,255,0.15); color: rgba(255,255,255,0.5); padding: 8px 16px; font-size: 10px; letter-spacing: 0.15em; text-transform: uppercase; cursor: pointer; transition: all 0.2s; font-family: 'DM Sans', sans-serif; }
        .filter-btn.active, .filter-btn:hover { background: #ff4400; border-color: #ff4400; color: #fff; }
        .cta-btn { background: #ff4400; border: none; color: #fff; padding: 14px 28px; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; cursor: pointer; font-family: 'DM Sans', sans-serif; font-weight: 500; transition: background 0.2s, transform 0.2s; display: inline-flex; align-items: center; gap: 8px; }
        .cta-btn:hover { background: #e03a00; transform: translateX(4px); }
        .form-input { width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); color: #f0f0f0; padding: 14px 18px; font-size: 14px; font-family: 'DM Sans', sans-serif; outline: none; transition: border-color 0.2s; }
        .form-input:focus { border-color: #ff4400; }
        .form-input::placeholder { color: rgba(255,255,255,0.3); }
        textarea.form-input { resize: vertical; }
        .social-link { color: rgba(255,255,255,0.4); text-decoration: none; font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; font-family: 'DM Sans', sans-serif; transition: color 0.2s; display: flex; align-items: center; gap: 8px; }
        .social-link:hover { color: #ff4400; }
      `}</style>

      <DotGrid />

      {/* ─── NAV ─── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, display: "flex", alignItems: "center", justifyContent: "space-between", padding: `18px ${px}`, background: "rgba(8,8,8,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 22, letterSpacing: "0.1em", color: "#fff" }}>
          GS<span style={{ color: "#ff4400" }}>.</span>
        </div>
        {!isMobile && (
          <div style={{ display: "flex", gap: isTablet ? 20 : 40 }}>
            {NAV_LINKS.map(l => (
              <a key={l} href={`#${l.toLowerCase()}`} className={`nav-link ${active === l ? "active" : ""}`} onClick={() => setActive(l)}>{l}</a>
            ))}
          </div>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          {!isMobile && <a href="#contact" className="cta-btn" style={{ padding: "10px 18px", fontSize: "9px", textDecoration: "none" }}>Hire Me →</a>}
          {isMobile && (
            <button style={{ background: "none", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 18, cursor: "pointer", padding: "6px 12px", lineHeight: 1 }} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && isMobile && (
        <div style={{ position: "fixed", top: 61, left: 0, right: 0, zIndex: 99, background: "#0c0c0c", borderBottom: "1px solid rgba(255,68,0,0.2)", padding: "28px 20px", display: "flex", flexDirection: "column", gap: 28 }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="nav-link" onClick={() => { setActive(l); setMenuOpen(false); }} style={{ fontSize: 16 }}>{l}</a>
          ))}
          <a href="#contact" className="cta-btn" style={{ textDecoration: "none", justifyContent: "center", marginTop: 4 }} onClick={() => setMenuOpen(false)}>Hire Me →</a>
        </div>
      )}

      {/* ─── HERO ─── */}
      <section style={{ position: "relative", height: "100svh", minHeight: 580, display: "flex", alignItems: "flex-end", padding: `0 ${px} ${isMobile ? "100px" : "80px"}`, overflow: "hidden", background: "#050505" }}>
        <HeroVideo />
        <div style={{ position: "absolute", top: isMobile ? 80 : 100, right: px, zIndex: 10, display: "flex", alignItems: "center", gap: 8, fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff4400", animation: "dotPulse 1.5s ease-in-out infinite" }} />
          Live Portfolio
        </div>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: isMobile ? "88vw" : "min(700px,85vw)", height: isMobile ? "48vh" : "min(400px,60vh)", zIndex: 2, pointerEvents: "none" }}>
          <CornerBrackets color="#ff4400" size={isMobile ? 12 : 20} />
        </div>
        <div style={{ position: "relative", zIndex: 10, width: "100%" }}>
          <div className="section-label" style={{ marginBottom: isMobile ? 14 : 24 }}>Creative Director & Visual Storyteller</div>
          <div className="hero-title">GEORGE</div>
          <div className="hero-subtitle">SAATER</div>
          <div style={{ marginTop: isMobile ? 20 : 32, display: "flex", flexDirection: isMobile ? "column" : "row", gap: isMobile ? 18 : 24, alignItems: "flex-start", flexWrap: "wrap" }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.55)", maxWidth: 340, lineHeight: 1.7, fontStyle: "italic", fontWeight: 300 }}>
              Translating brand intent into impactful visual solutions — through design, motion, and story.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#portfolio" className="cta-btn" style={{ textDecoration: "none" }}>View Work →</a>
              <a href="#contact" style={{ padding: "14px 18px", border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>Let's Talk</a>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: `10px ${px}`, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: isMobile ? 24 : 48, alignItems: "center", zIndex: 10, background: "rgba(8,8,8,0.6)", backdropFilter: "blur(10px)", overflowX: "auto" }}>
          {["Graphic Design", "Brand Identity", "Video Editing", "Motion Graphics", "Creative Direction"].map((s, i) => (
            <span key={i} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap" }}>{s}</span>
          ))}
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" style={{ padding: `${sectionPy} ${px}`, position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, alignItems: "center" }}>

            {/* Profile card */}
            <div>
              <div style={{ position: "relative", background: "#0f0f0f", border: "1px solid rgba(255,255,255,0.07)", padding: isMobile ? "28px 20px" : "40px 32px", overflow: "hidden" }}>
                <CornerBrackets color="#ff4400" size={14} />
                <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 80, lineHeight: 1, color: "rgba(255,255,255,0.04)", position: "absolute", bottom: 16, right: 16, userSelect: "none" }}>GS</div>

                {/* Profile photo */}
                <div style={{ width: "100%", paddingTop: isMobile ? "75%" : "110%", position: "relative", overflow: "hidden", marginBottom: 20 }}>
                  <ProfileImage src={PROFILE_IMAGE} />
                </div>

                {/* Stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1 }}>
                  {[{ n: 6, label: "Years Active" }, { n: 30, label: "Projects Done" }, { n: 10, label: "Brands Served" }].map((item, i) => (
                    <div key={i} style={{ background: "#0a0a0a", padding: "14px 8px", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 24 : 30, color: "#ff4400" }}><Counter end={item.n} />+</div>
                      <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 7, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", marginTop: 4 }}>{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {!PROFILE_IMAGE && (
                <ImageTip message="📸 To add your profile photo: create src/images/ folder, drop in your photo, import it at the top of App.js, then set PROFILE_IMAGE = yourImportedVariable" />
              )}
            </div>

            {/* Bio */}
            <div>
              <div className="section-label">About George</div>
              <div className="section-heading">STRATEGY<br />DRIVEN<br /><span style={{ color: "#ff4400" }}>CREATIVE.</span></div>
              <div style={{ margin: "24px 0", borderLeft: "2px solid #ff4400", paddingLeft: 20 }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 13 : 14, lineHeight: 1.8, color: "rgba(255,255,255,0.55)", fontStyle: "italic", fontWeight: 300 }}>
                  "I design marks that become symbols of trust and recognition."
                </p>
              </div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 14 : 15, lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
                George Saater is a strategy-driven Creative Director and Visual Storyteller with deep expertise in graphic design, brand identity, and video editing. With a portfolio spanning media consultancy, lifestyle brands, and fintech, he translates brand vision into bold visual solutions that resonate and endure.
              </p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 14 : 15, lineHeight: 1.85, color: "rgba(255,255,255,0.45)", marginBottom: 32 }}>
                Proficient in Adobe Photoshop, Illustrator, Premiere Pro, and After Effects — his process merges analytical thinking with creative precision to build identities that outlast trends.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {["Ps", "Ai", "Pr", "Ae", "Figma"].map(s => (
                  <span key={s} style={{ padding: "8px 14px", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "'Bebas Neue', sans-serif", fontSize: 14, letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PORTFOLIO ─── */}
      <section id="portfolio" style={{ padding: `${sectionPy} ${px}`, background: "#050505", position: "relative", zIndex: 5, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "flex-end", gap: 24, marginBottom: isMobile ? 28 : 48 }}>
            <div>
              <div className="section-label">Selected Work</div>
              <div className="section-heading">PORTFOLIO</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {["all", "graphic", "video"].map(f => (
                <button key={f} className={`filter-btn ${filter === f ? "active" : ""}`} onClick={() => setFilter(f)}>
                  {f === "all" ? "All" : f === "graphic" ? "Design" : "Video"}
                </button>
              ))}
            </div>
          </div>

          {/* {noProjectImages && (
            <ImageTip message="🖼️ To add project images: drop files in src/images/, import them at the top of App.js (e.g. import p1 from './images/trident.jpg'), then set the image: field for each project in the PROJECTS array." />
          )} */}

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: isMobile ? 16 : 2, marginTop: 24 }}>
            {filtered.map((p) => (
              <div key={p.id} className="project-card"
                onMouseEnter={() => setHoveredProject(p.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Thumbnail */}
                <div style={{ paddingTop: "68%", position: "relative", overflow: "hidden" }}>
                  <ProjectThumb src={p.image} color={p.color} index={p.id} title={p.title} isHovered={hoveredProject === p.id} />
                  {/* Tag */}
                  <div style={{ position: "absolute", top: 12, left: 12, zIndex: 4, background: p.color, padding: "3px 10px", fontFamily: "'DM Sans', sans-serif", fontSize: 8, letterSpacing: "0.2em", textTransform: "uppercase", color: "#000", fontWeight: 600 }}>{p.tag}</div>
                  {/* Type icon */}
                  <div style={{ position: "absolute", top: 12, right: 12, zIndex: 4, fontSize: 15, color: p.image ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.2)" }}>{p.type === "video" ? "▶" : "◈"}</div>
                </div>
                {/* Info */}
                <div style={{ padding: isMobile ? "18px 16px" : "22px 20px" }}>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.05em", color: "#fff", marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>{p.desc}</p>
                  <div style={{ marginTop: 14, fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: hoveredProject === p.id ? p.color : "rgba(255,255,255,0.25)", transition: "color 0.3s" }}>
                    View Project →
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services" style={{ padding: `${sectionPy} ${px}`, position: "relative", zIndex: 5, borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 2fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
            <div style={{ position: isMobile || isTablet ? "static" : "sticky", top: 100 }}>
              <div className="section-label">What I Offer</div>
              <div className="section-heading">SER<br />VICES</div>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", marginTop: 20 }}>
                End-to-end creative services for brands that demand excellence in every visual touchpoint.
              </p>
              <a href="#contact" className="cta-btn" style={{ marginTop: 28, display: "inline-flex", textDecoration: "none" }}>Start a Project →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? 12 : 2 }}>
              {SERVICES.map((s, i) => (
                <div key={i} className="service-card">
                  <div style={{ fontFamily: "monospace", fontSize: 22, color: "#ff4400", marginBottom: 14, animation: `float 3s ease-in-out ${i * 0.3}s infinite` }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 20, letterSpacing: "0.08em", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact" style={{ padding: `${sectionPy} ${px}`, background: "#050505", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: isMobile ? 48 : 80 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
            <div className="section-heading">LET'S CREATE<br /><span style={{ color: "#ff4400" }}>TOGETHER</span></div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: isMobile ? 13 : 15, lineHeight: 1.8, color: "rgba(255,255,255,0.4)", maxWidth: 520, margin: "20px auto 0" }}>
              Have a project in mind? Fill out the form below and I'll get back to you on WhatsApp within 24 hours.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: isMobile || isTablet ? "1fr" : "1fr 1fr", gap: isMobile ? 48 : 80, alignItems: "start" }}>
            <div style={{ position: "relative", padding: isMobile ? "28px 20px" : "48px 40px", border: "1px solid rgba(255,255,255,0.07)", background: "#0a0a0a" }}>
              <CornerBrackets color="#ff4400" size={12} />
              <form onSubmit={handleContact} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 8 }}>Your Name</label>
                  <input className="form-input" type="text" placeholder="John Doe" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 8 }}>Email Address</label>
                  <input className="form-input" type="email" placeholder="john@company.com" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                </div>
                <div>
                  <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", display: "block", marginBottom: 8 }}>Your Message</label>
                  <textarea className="form-input" rows={5} placeholder="Tell me about your project..." required value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="cta-btn" style={{ marginTop: 8, justifyContent: "center", width: "100%" }}>Send via WhatsApp →</button>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", textAlign: "center" }}>Opens WhatsApp automatically</p>
              </form>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 32 : 48 }}>
              <div>
                <div className="section-label" style={{ marginBottom: 16 }}>Direct Contact</div>
                {[
                  { label: "Email", value: "georgesaater@gmail.com", href: "mailto:georgesaater@gmail.com" },
                  { label: "WhatsApp", value: "+234 813 762 0998", href: "https://wa.me/2348137620998" },
                  { label: "Phone", value: "+234 813 762 0998", href: "tel:+2348137620998" },
                ].map((c, i) => (
                  <a key={i} href={c.href} style={{ display: "flex", flexDirection: "column", gap: 4, textDecoration: "none", padding: "16px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                    <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#ff4400" }}>{c.label}</span>
                    <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: isMobile ? 15 : 18, letterSpacing: "0.05em", color: "rgba(255,255,255,0.7)", wordBreak: "break-all" }}>{c.value}</span>
                  </a>
                ))}
              </div>
              <div>
                <div className="section-label" style={{ marginBottom: 20 }}>Follow My Work</div>
                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr", gap: 14 }}>
                  {[
                    { name: "LinkedIn", url: "https://linkedin.com", icon: "in" },
                    { name: "Behance", url: "https://behance.net", icon: "Be" },
                    { name: "Instagram", url: "https://instagram.com", icon: "IG" },
                    { name: "WhatsApp", url: "https://wa.me/2348137620998", icon: "WA" },
                  ].map((s, i) => (
                    <a key={i} href={s.url} target="_blank" rel="noreferrer" className="social-link">
                      <span style={{ width: 32, height: 32, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Bebas Neue', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", flexShrink: 0 }}>{s.icon}</span>
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ padding: "20px", border: "1px solid rgba(255,68,0,0.2)", background: "rgba(255,68,0,0.04)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 8px #00ff88", flexShrink: 0 }} />
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "#00ff88" }}>Available for Projects</span>
                </div>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
                  Currently accepting new clients for Q2 2026. Let's build something remarkable together.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)", padding: `28px ${px}`, background: "#030303", position: "relative", zIndex: 5 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: isMobile ? "column" : "row", justifyContent: "space-between", alignItems: isMobile ? "flex-start" : "center", gap: 16 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 18, letterSpacing: "0.1em", color: "rgba(255,255,255,0.4)" }}>
            GS<span style={{ color: "#ff4400" }}>.</span>
            {!isMobile && <span style={{ marginLeft: 12, fontFamily: "'DM Sans', sans-serif", fontSize: 10, letterSpacing: "0.12em", fontWeight: 300, color: "rgba(255,255,255,0.3)" }}>© 2026 George Saater. All Rights Reserved.</span>}
          </div>
          {isMobile && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)" }}>© 2026 George Saater. All Rights Reserved.</p>}
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[["LinkedIn", "#"], ["Behance", "#"], ["Instagram", "#"], ["WhatsApp", "https://wa.me/2348137620998"]].map(([name, url]) => (
              <a key={name} href={url} className="social-link" target="_blank" rel="noreferrer" style={{ fontSize: 9 }}>{name}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}