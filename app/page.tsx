const services = [
  {
    number: "01",
    title: "Healthcare AI",
    japanese: "医療AI",
    description:
      "現場の文脈を理解し、日々の判断に静かに寄り添うAIを設計します。",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <circle cx="24" cy="24" r="17" />
        <circle cx="24" cy="24" r="4" className="icon-fill" />
        <path d="M24 7v9M24 32v9M7 24h9M32 24h9M12 12l6 6M30 30l6 6M36 12l-6 6M18 30l-6 6" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Hospital Operations\nOptimization",
    japanese: "病院オペレーション最適化",
    description:
      "病床・人員・時間の制約を数理で捉え、病院全体の流れを整えます。",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 37V21h11v16M29 37V11h11v26M19 37V27h10v10M5 37h38" />
        <path d="m11 17 8-7 8 5 10-9" className="icon-accent" />
        <circle cx="11" cy="17" r="2" className="icon-fill" />
        <circle cx="19" cy="10" r="2" className="icon-fill" />
        <circle cx="27" cy="15" r="2" className="icon-fill" />
        <circle cx="37" cy="6" r="2" className="icon-fill" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Clinical Workflow\nAutomation",
    japanese: "医療ワークフロー自動化",
    description:
      "分断された業務をつなぎ、医療者が本来向き合うべき仕事に時間を戻します。",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="6" y="8" width="13" height="13" rx="2" />
        <rect x="29" y="27" width="13" height="13" rx="2" />
        <path d="M19 14h10c5 0 7 3 7 7v6M29 34H19c-5 0-7-3-7-7v-6" />
        <path d="m32 23 4 4 4-4M16 25l-4-4-4 4" className="icon-accent" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "LLM Applications",
    japanese: "大規模言語モデル活用",
    description:
      "医療の専門知と生成AIを、安全で実用的なプロダクトへ落とし込みます。",
    icon: (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 10h32v23H22l-9 7v-7H8z" />
        <path d="M15 18h18M15 25h12" className="icon-accent" />
      </svg>
    ),
  },
];

const principles = [
  {
    number: "01",
    title: "Question",
    japanese: "問いを立てる",
    body: "現場の声とデータを丁寧に観察し、本当に解くべき課題を定義する。",
  },
  {
    number: "02",
    title: "Model",
    japanese: "構造を捉える",
    body: "複雑な医療の営みを、AIと数理の力で扱える構造へ変換する。",
  },
  {
    number: "03",
    title: "Optimize",
    japanese: "最適解を実装する",
    body: "正しさだけでなく、現場で使われ続けることまでを設計する。",
  },
];

function Mark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand-mark${compact ? " brand-mark--compact" : ""}`}>
      <svg viewBox="0 0 34 34" aria-hidden="true">
        <path d="M5 26V8l12 10L29 8v18" />
        <circle cx="5" cy="8" r="2.2" />
        <circle cx="17" cy="18" r="2.2" />
        <circle cx="29" cy="8" r="2.2" />
        <circle cx="5" cy="26" r="2.2" />
        <circle cx="29" cy="26" r="2.2" />
      </svg>
      {!compact && <span>Mederiqa</span>}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M3 10h13M11 5l5 5-5 5" />
    </svg>
  );
}

function IntelligenceField() {
  return (
    <div className="intelligence-field" aria-hidden="true">
      <svg viewBox="0 0 720 720" preserveAspectRatio="xMidYMid meet">
        <defs>
          <radialGradient id="nodeGlow">
            <stop offset="0" stopColor="#57d8b2" stopOpacity=".65" />
            <stop offset="1" stopColor="#57d8b2" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g className="field-orbits">
          <circle cx="360" cy="360" r="92" />
          <circle cx="360" cy="360" r="176" />
          <circle cx="360" cy="360" r="266" />
        </g>
        <g className="field-lines">
          <path d="M360 94 478 202 626 312 521 473 360 626 213 504 94 360 210 210Z" />
          <path d="m360 94 0 532M94 360h532M210 210l311 263M478 202 213 504" />
          <path d="m210 210 150 150 161 113M478 202 360 360 213 504M94 360l266 0 266-48" />
        </g>
        <g className="field-glows">
          <circle cx="360" cy="94" r="46" />
          <circle cx="626" cy="312" r="38" />
          <circle cx="213" cy="504" r="42" />
          <circle cx="360" cy="360" r="54" />
        </g>
        <g className="field-nodes">
          <circle cx="360" cy="94" r="7" />
          <circle cx="478" cy="202" r="5" />
          <circle cx="626" cy="312" r="7" />
          <circle cx="521" cy="473" r="5" />
          <circle cx="360" cy="626" r="7" />
          <circle cx="213" cy="504" r="5" />
          <circle cx="94" cy="360" r="7" />
          <circle cx="210" cy="210" r="5" />
          <circle cx="360" cy="360" r="9" className="field-core" />
        </g>
      </svg>
      <div className="field-label field-label--top">
        <span>INPUT</span>
        <b>Clinical data</b>
      </div>
      <div className="field-label field-label--right">
        <span>PROCESS</span>
        <b>Intelligence</b>
      </div>
      <div className="field-label field-label--bottom">
        <span>OUTPUT</span>
        <b>Better decisions</b>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="Mederiqa ホーム">
          <Mark />
        </a>
        <nav aria-label="メインナビゲーション">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#approach">Approach</a>
        </nav>
        <a className="header-contact" href="#contact">
          Contact
          <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Healthcare Technology / Japan
          </div>
          <h1>
            <span>Healthcare</span>
            <span className="hero-title-offset">
              Intelligence<span className="accent-dot">.</span>
            </span>
          </h1>
          <p className="hero-jp">
            医療に、問いを立て、
            <br />
            知性で最適解を導く。
          </p>
          <a className="primary-link" href="#contact">
            <span>Contact us</span>
            <span className="link-circle">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <IntelligenceField />
        <div className="hero-footnote">
          <span>AI</span>
          <i />
          <span>Optimization</span>
          <i />
          <span>Healthcare</span>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Aboutへスクロール">
          <span>Scroll to discover</span>
          <span className="scroll-line" />
        </a>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>About</h2>
          <span className="section-jp">私たちについて</span>
        </div>
        <div className="about-content">
          <p className="about-lead">
            複雑さの中にある、
            <br />
            <em>より良い意思決定</em>のために。
          </p>
          <div className="about-body">
            <p>
              Mederiqaは、AI・数理最適化・大規模言語モデルを活用し、
              医療現場の意思決定を支援するソフトウェアを開発しています。
            </p>
            <p>
              現在は病床管理・退院支援・業務最適化を中心に、
              現場の知とテクノロジーをつなぐプロダクトを開発しています。
            </p>
          </div>
        </div>
        <div className="about-diagram" aria-hidden="true">
          <div className="diagram-item">
            <span>01</span>
            <b>Observe</b>
            <small>現場を知る</small>
          </div>
          <div className="diagram-arrow">
            <ArrowIcon />
          </div>
          <div className="diagram-item">
            <span>02</span>
            <b>Structure</b>
            <small>構造を解く</small>
          </div>
          <div className="diagram-arrow">
            <ArrowIcon />
          </div>
          <div className="diagram-item diagram-item--accent">
            <span>03</span>
            <b>Improve</b>
            <small>医療を前へ</small>
          </div>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading section-heading--light">
          <span className="section-number">02</span>
          <h2>Services</h2>
          <span className="section-jp">事業領域</span>
        </div>
        <div className="services-intro">
          <p>
            Technology shaped
            <br />
            around <em>care.</em>
          </p>
          <span>
            技術からではなく、医療の課題から。
            <br />
            現場に根ざした4つの領域に取り組んでいます。
          </span>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <div className="service-icon">{service.icon}</div>
              </div>
              <div>
                <h3>
                  {service.title.split("\n").map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </h3>
                <p className="service-jp">{service.japanese}</p>
                <p className="service-description">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="section-heading">
          <span className="section-number">03</span>
          <h2>Our Approach</h2>
          <span className="section-jp">私たちの思考法</span>
        </div>
        <div className="approach-head">
          <p>
            The intelligence
            <br />
            behind better care<span>.</span>
          </p>
          <div className="approach-orbit" aria-hidden="true">
            <div className="orbit-ring" />
            <div className="orbit-core">M</div>
          </div>
        </div>
        <div className="principle-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <div className="principle-title">
                <h3>{principle.title}</h3>
                <span>{principle.japanese}</span>
              </div>
              <p>{principle.body}</p>
              <span className="principle-mark" aria-hidden="true">
                +
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" aria-hidden="true" />
        <div className="contact-top">
          <span className="section-number">04</span>
          <span className="section-label">Contact</span>
          <span className="section-jp">お問い合わせ</span>
        </div>
        <div className="contact-main">
          <p>Let&apos;s shape the future of healthcare.</p>
          <a href="mailto:matsumura@mederiqa.jp">
            <span>matsumura@mederiqa.jp</span>
            <span className="contact-arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <footer>
          <Mark />
          <div className="footer-statement">
            <span>Built in Japan.</span>
            <span>Designed for Healthcare.</span>
          </div>
          <span className="copyright">© 2026 Mederiqa</span>
        </footer>
      </section>
    </main>
  );
}
