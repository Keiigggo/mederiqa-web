const services = [
  {
    number: "01",
    title: "Healthcare AI",
    japanese: "医療AI",
    description:
      "現場の文脈を理解し、日々の判断に静かに寄り添うAIを設計します。",
  },
  {
    number: "02",
    title: "Hospital Operations Optimization",
    japanese: "病院オペレーション最適化",
    description:
      "病床・人員・時間の制約を数理で捉え、病院全体の流れを整えます。",
  },
  {
    number: "03",
    title: "Clinical Workflow Automation",
    japanese: "医療ワークフロー自動化",
    description:
      "分断された業務をつなぎ、医療者が本来向き合うべき仕事に時間を戻します。",
  },
  {
    number: "04",
    title: "LLM Applications",
    japanese: "大規模言語モデル活用",
    description:
      "医療の専門知と生成AIを、安全で実用的なプロダクトへ落とし込みます。",
  },
];

const principles = [
  {
    number: "01",
    english: "Observe",
    japanese: "現場を知る",
    body: "医療現場の声とデータを丁寧に観察し、本当に解くべき課題を見つけます。",
  },
  {
    number: "02",
    english: "Structure",
    japanese: "構造を捉える",
    body: "複雑な医療の営みを、AIと数理の力で扱える構造へ変換します。",
  },
  {
    number: "03",
    english: "Improve",
    japanese: "より良くする",
    body: "正しさだけでなく、現場に根づき、使われ続けることまでを設計します。",
  },
];

function BrandSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 685 751"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Medenoa symbol"
    >
      <g fill="currentColor">
        <circle cx="54" cy="49" r="49" />
        <circle cx="630" cy="49" r="49" />
        <circle cx="151" cy="187" r="46" />
        <circle cx="532" cy="187" r="46" />
        <circle cx="44" cy="279" r="26" />
        <circle cx="640" cy="279" r="26" />
        <circle cx="45" cy="388" r="22" />
        <circle cx="638" cy="388" r="22" />
        <circle cx="45" cy="499" r="26" />
        <circle cx="639" cy="495" r="26" />
        <circle cx="164" cy="445" r="44" />
        <circle cx="520" cy="445" r="44" />
        <circle cx="153" cy="576" r="44" />
        <circle cx="530" cy="576" r="44" />
        <circle cx="49" cy="701" r="50" />
        <circle cx="635" cy="701" r="50" />
        <path d="M237 266c28 0 50 22 50 50 0 32 23 59 55 59s55-27 55-59c0-28 22-50 50-50s50 22 50 50-22 50-50 50c-30 0-54 25-54 55v10c0 30-23 54-51 54s-52-24-52-54v-10c0-30-24-55-53-55-28 0-50-22-50-50s22-50 50-50Z" />
      </g>
    </svg>
  );
}

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span className={`brand${light ? " brand--light" : ""}`}>
      <BrandSymbol className="brand__symbol" />
      <span>Medenoa</span>
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

function HeroMark() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-orbit hero-orbit--outer" />
      <div className="hero-orbit hero-orbit--inner" />
      <div className="hero-sphere">
        <span className="sphere-glow" />
        <BrandSymbol className="hero-symbol" />
      </div>
      <span className="visual-label visual-label--one">Human</span>
      <span className="visual-label visual-label--two">Intelligence</span>
      <span className="visual-label visual-label--three">Healthcare</span>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a href="#top" className="logo-link" aria-label="Medenoa ホーム">
          <Brand />
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
          <p className="eyebrow">
            <span />
            Healthcare Intelligence
          </p>
          <h1>
            <span>人とAI・テクノロジーをつなぎ、</span>
            <span>医療の可能性を無限に拡張する。</span>
          </h1>
          <p className="hero-description">
            Medenoaは、テクノロジーの力で医療の未来を切り拓き、
            <br />
            すべての人により良い選択肢を届けます。
          </p>
          <a className="primary-link" href="#contact">
            <span>Contact us</span>
            <span className="link-circle">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <HeroMark />
        <div className="hero-meta">
          <span>Built in Japan</span>
          <span>Designed for Healthcare</span>
        </div>
        <a className="scroll-cue" href="#about" aria-label="Aboutへスクロール">
          <span>Scroll</span>
          <i />
        </a>
      </section>

      <section className="about section" id="about">
        <div className="section-heading">
          <span className="section-number">01</span>
          <h2>About</h2>
          <span className="section-jp">私たちについて</span>
        </div>
        <div className="about-layout">
          <p className="about-lead">
            <span>医療に、問いを立て、</span>
            <span>
              知性で<em>最適解</em>を導く。
            </span>
          </p>
          <div className="about-body">
            <p>
              Medenoaは、AI・数理最適化・大規模言語モデルを活用し、
              医療現場の意思決定を支援するソフトウェアを開発しています。
            </p>
            <p>
              現在は病床管理・退院支援・業務最適化を中心に、
              現場の知とテクノロジーをつなぐプロダクトを開発しています。
            </p>
          </div>
        </div>
        <div className="about-signature" aria-hidden="true">
          <BrandSymbol />
          <p>
            Human <i>×</i> Intelligence <i>×</i> Healthcare
          </p>
        </div>
      </section>

      <section className="manifesto" aria-label="Medenoa mission">
        <div className="manifesto-mark" aria-hidden="true">
          <BrandSymbol />
        </div>
        <div>
          <p className="manifesto-kicker">Our mission</p>
          <h2>
            Technology shaped
            <br />
            around <em>care.</em>
          </h2>
          <p className="manifesto-jp">
            技術からではなく、医療の課題から。
            <br />
            人とテクノロジーの間に、信頼できる選択肢をつくる。
          </p>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <span className="section-number">02</span>
          <h2>Services</h2>
          <span className="section-jp">事業領域</span>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              <div className="service-top">
                <span>{service.number}</span>
                <span className="service-dot" />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-jp">{service.japanese}</p>
                <p className="service-description">{service.description}</p>
              </div>
              <BrandSymbol className="service-watermark" />
            </article>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="section-heading section-heading--light">
          <span className="section-number">03</span>
          <h2>Approach</h2>
          <span className="section-jp">私たちの思考法</span>
        </div>
        <div className="approach-intro">
          <p>
            Better decisions,
            <br />
            by design<span>.</span>
          </p>
          <p>
            問いを立て、構造を捉え、
            <br />
            現場で使われる最適解へ。
          </p>
        </div>
        <div className="principle-list">
          {principles.map((principle) => (
            <article className="principle" key={principle.number}>
              <span className="principle-number">{principle.number}</span>
              <div className="principle-title">
                <h3>{principle.english}</h3>
                <span>{principle.japanese}</span>
              </div>
              <p>{principle.body}</p>
              <span className="principle-node" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-top">
          <span className="section-number">04</span>
          <span>Contact</span>
          <span className="section-jp">お問い合わせ</span>
        </div>
        <div className="contact-main">
          <p>Let&apos;s expand the possibilities of healthcare.</p>
          <a href="mailto:contact@medenoa.jp">
            <span>contact@medenoa.jp</span>
            <span className="contact-arrow">
              <ArrowIcon />
            </span>
          </a>
        </div>
        <footer>
          <Brand light />
          <div className="footer-statement">
            <span>Built in Japan.</span>
            <span>Designed for Healthcare.</span>
          </div>
          <span className="copyright">© 2026 Medenoa</span>
        </footer>
      </section>
    </main>
  );
}
