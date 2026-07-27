import type { CSSProperties } from "react";

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

const medenoaDots = [
  { cx: 338.9, cy: 269.8, r: 49, orbit: "outer" },
  { cx: 914.6, cy: 269.8, r: 49, orbit: "outer" },
  { cx: 436.3, cy: 408.1, r: 45.5, orbit: "mid" },
  { cx: 817.2, cy: 408.1, r: 45.5, orbit: "mid" },
  { cx: 328.5, cy: 499.5, r: 25.5, orbit: "micro" },
  { cx: 924.8, cy: 499.6, r: 25.5, orbit: "micro" },
  { cx: 330.4, cy: 608.6, r: 21.8, orbit: "micro" },
  { cx: 923.2, cy: 608.6, r: 21.8, orbit: "micro" },
  { cx: 329.5, cy: 719.8, r: 25.5, orbit: "micro" },
  { cx: 924.2, cy: 716.4, r: 25.5, orbit: "micro" },
  { cx: 448.6, cy: 666, r: 43.5, orbit: "mid" },
  { cx: 804.8, cy: 665.9, r: 43.5, orbit: "mid" },
  { cx: 438.1, cy: 797.4, r: 44, orbit: "mid" },
  { cx: 815.4, cy: 797.4, r: 44, orbit: "mid" },
  { cx: 333.7, cy: 921.9, r: 49.5, orbit: "outer" },
  { cx: 919.8, cy: 921.8, r: 49.5, orbit: "outer" },
];

const medenoaCenter = { x: 627.5, y: 597 };

const medenoaScatterPaths = medenoaDots.map((dot, dotIndex) =>
  Array.from({ length: 4 }, (_, waypointIndex) => {
    const angleDegrees =
      (dotIndex * 137.508 +
        waypointIndex * 83 +
        dotIndex * waypointIndex * 11) %
      360;
    const angle = (angleDegrees * Math.PI) / 180;
    const radius = 790 - dot.r;

    return [
      Number((Math.cos(angle) * radius).toFixed(1)),
      Number((Math.sin(angle) * radius).toFixed(1)),
    ] as const;
  }),
);

const medenoaCorePath =
  "M509.294 488.534C501.489 490.637 498.109 492.283 491.415 497.243C479.956 505.735 473.011 519.291 472.232 534.687C471.85 542.23 472.163 545.183 473.982 551.187C480.366 572.269 499.208 586.952 519.96 587.017C534.657 587.063 548.785 592.834 559.088 603C566.643 610.454 570.181 616.07 573.701 626.191C575.799 632.223 576.308 636.081 576.965 650.919C577.786 669.445 578.61 673.245 583.684 681.904C589.533 691.885 598.749 699.484 610.5 704.015C618.49 707.097 633.802 707.386 642 704.611C657.898 699.228 670.127 686.819 675.125 671C676.683 666.069 677.26 661.12 677.517 650.5C677.99 630.89 680.229 622.443 687.979 611.031C698.103 596.123 715.456 587.076 734.04 587.017C757.209 586.945 777.8 568.892 782.089 544.891C786.576 519.783 768.495 493.38 743.201 488.105C732.32 485.836 722.122 487.366 711.243 492.899C703.542 496.816 697.976 501.786 693.081 509.117C687.635 517.272 685.194 525.746 684.087 540.34C683.048 554.028 681.079 560.48 675.143 569.646C667.795 580.992 653.798 591.006 641 594.074C637.975 594.799 631.45 595.377 626.5 595.358C610.476 595.296 598.02 590.043 586.5 578.49C575.32 567.278 570 554.437 570 538.661C570 525.036 565.252 512.647 556.354 503.05C544.134 489.871 525.577 484.148 509.294 488.534Z";

function LogoGeometry({ animated = false }: { animated?: boolean }) {
  return (
    <>
      {medenoaDots.map((dot, dotIndex) => {
        const scatterPath = medenoaScatterPaths[dotIndex];
        const scatterStyle = animated
          ? ({
              "--scatter-x1": `${medenoaCenter.x + scatterPath[0][0] - dot.cx}px`,
              "--scatter-y1": `${medenoaCenter.y + scatterPath[0][1] - dot.cy}px`,
              "--scatter-x2": `${medenoaCenter.x + scatterPath[1][0] - dot.cx}px`,
              "--scatter-y2": `${medenoaCenter.y + scatterPath[1][1] - dot.cy}px`,
              "--scatter-x3": `${medenoaCenter.x + scatterPath[2][0] - dot.cx}px`,
              "--scatter-y3": `${medenoaCenter.y + scatterPath[2][1] - dot.cy}px`,
              "--scatter-x4": `${medenoaCenter.x + scatterPath[3][0] - dot.cx}px`,
              "--scatter-y4": `${medenoaCenter.y + scatterPath[3][1] - dot.cy}px`,
            } as CSSProperties)
          : undefined;

        return (
          <circle
            className={
              animated
                ? `hero-logo-dot hero-logo-dot--timing-${dotIndex % 4}`
                : undefined
            }
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            key={`${dot.cx}-${dot.cy}`}
            style={scatterStyle}
          />
        );
      })}
      <path d={medenoaCorePath} />
    </>
  );
}

function BrandSymbol({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="285 221 685 752"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Medenoa symbol"
    >
      <g fill="currentColor">
        <LogoGeometry />
      </g>
    </svg>
  );
}

function AnimatedBrandSymbol() {
  return (
    <svg
      className="hero-symbol"
      viewBox="285 221 685 752"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <LogoGeometry animated />
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
        <AnimatedBrandSymbol />
      </div>
      <span className="visual-label visual-label--one">
        <b>01</b> Human
      </span>
      <span className="visual-label visual-label--two">
        <b>02</b> Intelligence
      </span>
      <span className="visual-label visual-label--three">
        <b>03</b> Healthcare
      </span>
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
            <span>
              医療の可能性を<span className="hero-no-break">ひろげます。</span>
            </span>
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
            <span>医療を起点に、技術をつくる。</span>
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
            <p>
              共同開発や提携を通じて共有される技術・情報について、
              機密性を尊重し、厳格な管理のもとで取り扱います。
            </p>
          </div>
        </div>
      </section>

      <div className="about-signature" aria-hidden="true">
        <BrandSymbol />
        <p>
          Human <i>×</i> Intelligence <i>×</i> Healthcare
        </p>
      </div>

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

      <section className="contact" id="contact">
        <div className="contact-top">
          <span className="section-number">03</span>
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
