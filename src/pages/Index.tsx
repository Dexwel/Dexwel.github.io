import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Database,
  Dna,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Microscope,
} from "lucide-react";

const cvUrl = `${import.meta.env.BASE_URL}Daniel_Adediran_CV.pdf`;

const researchAreas = [
  {
    number: "01",
    title: "Genomics & sequence analysis",
    description:
      "AMR gene detection, sequence alignment, phylogenetics, and reproducible command-line workflows.",
    tools: "Abricate · argNorm · MAFFT · IQ-TREE",
  },
  {
    number: "02",
    title: "Genomic epidemiology",
    description:
      "Interpreting pathogen genomes in public-health settings, including SARS-CoV-2 lineage analysis.",
    tools: "Nextclade · Nextstrain · R",
  },
  {
    number: "03",
    title: "Transcriptomics & omics",
    description:
      "Differential gene expression, immunoinformatics, proteomics, and collaborative single-cell research.",
    tools: "R · DESeq2 · VaxiJen · IEDB",
  },
  {
    number: "04",
    title: "One Health & public health",
    description:
      "Antimicrobial use and resistance surveillance, epidemiology, climate-sensitive disease, and WASH.",
    tools: "Surveillance · biostatistics · implementation",
  },
  {
    number: "05",
    title: "Structural bioinformatics",
    description:
      "Applying computational structure prediction and molecular docking to infectious-disease research.",
    tools: "PDB · AlphaFold · I-TASSER",
  },
  {
    number: "06",
    title: "Training & capacity building",
    description:
      "Designing practical curricula, mentoring learners, and making technical ideas accessible.",
    tools: "Curriculum design · teaching · mentorship",
  },
];

const professionalExperience = [
  {
    role: "Consultant",
    organization: "Ajisefini Consulting",
    dates: "Dec 2025 – Jul 2026",
    location: "Remote, Nigeria",
    highlights: [
      "Analysed antimicrobial-use data across six states for antimicrobial use and resistance surveillance.",
      "Analysed ACE3 HIV service and eMTCT data and contributed to a knowledge product on service continuity under USAID funding changes.",
      "Designed data-collection instruments and used R and Python for data cleaning, regression, and hypothesis testing; delivered client-ready reports with reproducible, Git-versioned workflows.",
    ],
  },
  {
    role: "Health Data and Bioinformatics Analyst",
    organization: "DataLab Analytics",
    dates: "Jan 2025 – Dec 2025",
    location: "Remote, Nigeria",
    highlights: [
      "Designed and taught a practical AMR genomics module: screening FASTA sequences with abricate against ResFinder, CARD, and NCBI, then harmonising gene names with argNorm and building presence/absence matrices and heatmaps.",
      "Taught multiple sequence alignment and phylogenetic inference using MAFFT and IQ-TREE, with learner projects in tree visualisation and interpretation.",
      "Introduced SARS-CoV-2 genomic epidemiology with Nextclade and Nextstrain, and taught structural bioinformatics, Linux, RNA-seq analysis, and public-health outbreak analysis in R.",
      "Created the SHE Innovate data-skills programme for 50 women; 96% completed it and 90% reported immediate use of their new skills. Trained and mentored 70+ learners.",
    ],
  },
  {
    role: "R&D Assistant II & Teaching Assistant",
    organization: "Helix Biogen Institute",
    dates: "Aug 2021 – Present",
    location: "Ogbomoso, Nigeria",
    highlights: [
      "Contributed to in-silico peptide diagnostic-kit development for Treponema species using bioinformatics and immunoinformatics.",
      "Led 17 research interns in computational vaccine-design projects for Nipah virus and COVID-19, coordinating literature reviews and analytical workflows that supported two grant proposals.",
      "Developed and documented standard operating procedures for vaccine-design pipelines, validating workflows and coordinating weekly project reviews.",
      "Trained 200+ participants in MEGA, VaxiJen, and IEDB; prepared practical teaching materials and exercises.",
    ],
  },
];

const researchExperience = [
  {
    role: "Co-Lead · ASBCB Omics Codeathon",
    dates: "Aug 2022 – Nov 2022",
    description:
      "Led a five-person team analysing differentially expressed genes in Multiple Sclerosis datasets with R; coordinated code sprints, documented the work on GitHub, and presented results to NIH-affiliated mentors.",
  },
  {
    role: "Scholar · AI-BOND Program",
    dates: "Dec 2023 – Apr 2024",
    description:
      "Used Texas Advanced Computing Center clusters for computational analysis and worked across Python, R, and SAS on statistical modelling and GWAS, including a Framingham Heart Study analysis of cardiovascular risk predictors.",
  },
  {
    role: "Intern · BigDataBiology, Fudan University",
    dates: "May 2023 – Oct 2023",
    description:
      "Analysed genomic metadata from Shanghai dog samples with Python; prepared reports and visual dashboards and collaborated through Git and weekly mentor feedback.",
  },
  {
    role: "Mentee · KaggleX BIPOC Mentorship Program",
    dates: "Jul 2023 – Oct 2023",
    description:
      "Learned scikit-learn and TorchDrug for bioinformatics-focused machine learning and contributed to a CRISPR repair-outcome prediction model.",
  },
];

const communityExperience = [
  {
    role: "Training & Education Committee Member",
    organization: "Climate Sensitive Infectious Diseases Network (CSIDNet)",
    dates: "Jun 2025 – Present",
    description:
      "Contributes to the design, coordination, monitoring, and evaluation of capacity-building programmes on climate-sensitive infectious diseases.",
  },
  {
    role: "Needs Assessment Intern · MERLA Branch",
    organization: "Global Hart",
    dates: "Feb 2026 – May 2026",
    description:
      "Supported the Haiti WASH Education Program needs assessment, produced five deliverables, and developed a cited, sector-agnostic field guide.",
  },
  {
    role: "Scientific Manager I",
    organization: "Panoramics-Vision",
    dates: "Jun 2023 – Jan 2024",
    description:
      "Built a directory of African single-cell omics researchers, curated 20+ peer-reviewed articles, and coordinated a monthly spatial-transcriptomics series.",
  },
  {
    role: "Teaching Assistant",
    organization: "H3ABioNet",
    dates: "Jul 2022 – Oct 2022",
    description:
      "Introduced participants to bioinformatics, Linux, and biological databases and provided feedback on course assignments and quizzes.",
  },
  {
    role: "Program Officer",
    organization: "SDGs CDS, NYSC · Tafa LGA",
    dates: "Dec 2023 – Nov 2024",
    description:
      "Organised local climate-action and sustainability programmes with community partners and shared 10+ funding and training opportunities.",
  },
  {
    role: "Member, Data Federation Training Group",
    organization: "AgBioData",
    dates: "Jan 2023 – Dec 2023",
    description:
      "Helped standardise iRODS-based data-federation training materials and facilitated a pilot session for new contributors.",
  },
];

const teachingMaterials = [
  {
    title: "AMR gene detection from FASTA sequences",
    description:
      "A two-day, hands-on tutorial covering sequence quality control, abricate screening, argNorm harmonisation, presence/absence matrices, heatmaps, and interpretation.",
  },
  {
    title: "Multiple sequence alignment & phylogenetics",
    description:
      "A practical using MAFFT and IQ-TREE, with a learner project in tree visualisation and interpretation.",
  },
  {
    title: "Genomic epidemiology with Nextstrain",
    description:
      "A SARS-CoV-2 case-study introduction to Nextclade, the Nextstrain platform, and genomic epidemiology.",
  },
  {
    title: "Structural bioinformatics & RNA-seq",
    description:
      "Learning materials on PDB, AlphaFold, I-TASSER, molecular docking, DESeq2 differential expression, and public-health outbreak analysis in R.",
  },
];

const certifications = [
  "Climate and Health Data Science · Data.org",
  "Train the Trainer · H3ABioNet, Wellcome Connecting Science & EMBL-EBI",
  "Introduction to Epidemic Theory · Epiverse",
  "Introduction to Global Burden of Disease · IHME",
  "Time Series Analysis",
  "Implementation Science Workshop · Bingham University",
  "Implementation Science in Public Health · ISGlobal",
  "Monitoring and Evaluation Essentials · DisasterReady",
  "Project Management Professional · ICBMD",
];

const awards = [
  "Fair Forward Best Methodological Rigor Award (2025)",
  "Poster Award · Nnamdi Azikiwe Bioinformatics Genomics Consortium (2022)",
  "RNA Therapeutics Symposium Scholarship (2022)",
  "Dan Kohn Scholarship · KubeCon + CloudNativeCon Europe (2023)",
  "KaggleX Career Development Scholarship (2023)",
  "eDNA Micro-grant · Physalia R Package Development Course (2023)",
  "Africa Rotavirus Conference Scholarship (2023)",
];

const affiliations = [
  "H3ABioNet Trainer Network",
  "Carpentries Instructor Community",
  "African Society for Bioinformatics and Computational Biology",
  "International Society for Computational Biology",
  "Human Cell Atlas Community",
  "Climate Sensitive Infectious Diseases Network",
  "AMMnet Nigeria",
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function Index() {
  return (
    <div className="portfolio">
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#home" aria-label="Daniel Adediran home">
            <span className="brand-mark">DA</span>
            <span>Daniel Adediran</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#expertise">Research</a>
            <a href="#experience">Experience</a>
            <a href="#teaching">Teaching</a>
            <a href="#publications">Publications</a>
          </nav>
          <a className="header-cv" href={cvUrl} download>
            CV <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <span className="eyebrow hero-eyebrow">
                ONE HEALTH <span>·</span> GENOMICS <span>·</span> PUBLIC HEALTH
              </span>
              <h1>
                Daniel
                <br />
                <span>Adewole Adediran</span>
              </h1>
              <p className="hero-lede">
                I work where genomics meets public health—turning data into
                practical research, better training, and stronger health
                systems.
              </p>
              <div className="hero-location">
                <MapPin size={16} aria-hidden="true" />
                Nigeria
                <span className="location-divider">·</span>
                Public health &amp; bioinformatics
              </div>
              <div className="hero-actions">
                <a className="button button-primary" href="#about">
                  Explore my work <ArrowDown size={16} aria-hidden="true" />
                </a>
                <a className="button button-outline" href={cvUrl} download>
                  Download CV <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-socials" aria-label="Contact and social links">
                <a href="mailto:adedirandanieladewoleo4@gmail.com">
                  <Mail size={17} aria-hidden="true" /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-adediran/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} aria-hidden="true" /> LinkedIn
                </a>
                <a
                  href="https://github.com/dexwel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} aria-hidden="true" /> GitHub
                </a>
              </div>
            </div>

            <div className="hero-portrait">
              <div className="portrait-frame">
                <img
                  src={`${import.meta.env.BASE_URL}lovable-uploads/fb991331-765f-4d44-9fa3-1e83bb1b8491.png`}
                  alt="Daniel Adewole Adediran"
                />
              </div>
              <div className="portrait-caption">
                <span className="portrait-caption-icon">
                  <Dna size={19} aria-hidden="true" />
                </span>
                <span>
                  <strong>Research. Training. Impact.</strong>
                  <small>Bioinformatics for better public health</small>
                </span>
              </div>
              <span className="portrait-index">01 / 04</span>
            </div>
          </div>
        </section>

        <section className="impact-strip" aria-label="Selected impact">
          <div className="impact-inner page-width">
            <div className="impact-item">
              <strong>270<span>+</span></strong>
              <span>Learners &amp; professionals trained</span>
            </div>
            <div className="impact-item">
              <strong>6</strong>
              <span>States included in AMU surveillance</span>
            </div>
            <div className="impact-item">
              <strong>17</strong>
              <span>Research interns led</span>
            </div>
            <div className="impact-item">
              <strong>50</strong>
              <span>Women in the SHE Innovate cohort</span>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="page-width about-grid">
            <div className="about-aside">
              <span className="eyebrow">A little about me</span>
              <span className="about-aside-mark">
                <Microscope size={35} strokeWidth={1.3} aria-hidden="true" />
              </span>
            </div>
            <div className="about-content">
              <SectionHeading
                eyebrow="PROFILE"
                title="Evidence meets impact."
              />
              <p className="about-lede">
                I’m a public-health and bioinformatics professional with
                training in public health and biochemistry, based in Nigeria.
                My work spans infectious-disease genomics, antimicrobial
                resistance, data analysis, and practical training.
              </p>
              <p className="body-copy">
                I teach and apply command-line AMR gene detection, multiple
                sequence alignment, phylogenetic analysis, SARS-CoV-2 genomic
                epidemiology, and differential gene expression. My research
                background includes computational vaccine and diagnostic
                design for infectious and zoonotic pathogens, dog metagenomics,
                and high-performance computing. I’m especially interested in
                connecting rigorous analysis to usable public-health evidence
                and building local capacity along the way.
              </p>
              <div className="degree-tags">
                <span>
                  <GraduationCap size={17} aria-hidden="true" /> MPH · Bingham
                  University
                </span>
                <span>
                  <GraduationCap size={17} aria-hidden="true" /> B.Tech.
                  Biochemistry · LAUTECH
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="section expertise-section" id="expertise">
          <div className="page-width">
            <SectionHeading
              eyebrow="WHAT I WORK ON"
              title="Research & expertise"
              description="An interdisciplinary toolkit for infectious-disease research, genomic analysis, and public-health practice."
            />
            <div className="expertise-grid">
              {researchAreas.map((area) => (
                <article className="expertise-card" key={area.number}>
                  <span className="card-number">{area.number}</span>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <span className="card-tools">{area.tools}</span>
                </article>
              ))}
            </div>
            <div className="toolkit">
              <span className="toolkit-label">
                <Database size={17} aria-hidden="true" /> TOOLS I WORK WITH
              </span>
              <p>
                Linux &amp; Bash · R/Bioconductor · Python (pandas, matplotlib,
                scikit-learn) · SQL · SPSS · SAS · Git/GitHub · Nextflow/nf-core
                · Docker · HPC · LaTeX/Overleaf · Quarto · MEGA · Clustal Omega
                · IQ-TREE · Nextclade · Nextstrain · DESeq2 · Power BI
              </p>
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="page-width">
            <SectionHeading
              eyebrow="SELECTED"
              title="Professional experience"
              description="Health data, bioinformatics, and research—across analysis, programme delivery, and hands-on training."
            />
            <div className="timeline">
              {professionalExperience.map((experience) => (
                <article className="timeline-entry" key={experience.role}>
                  <div className="timeline-meta">
                    <span className="timeline-dot" aria-hidden="true" />
                    <span>{experience.dates}</span>
                    <span>{experience.location}</span>
                  </div>
                  <div className="timeline-card">
                    <span className="entry-organization">
                      {experience.organization}
                    </span>
                    <h3>{experience.role}</h3>
                    <ul>
                      {experience.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section community-section">
          <div className="page-width">
            <SectionHeading
              eyebrow="RESEARCH & COMMUNITY"
              title="Collaboration beyond the lab"
              description="Research programmes, mentorship, and community work have shaped how I think about shared science and capacity building."
            />
            <div className="research-grid">
              {researchExperience.map((experience) => (
                <article className="research-card" key={experience.role}>
                  <span className="research-date">{experience.dates}</span>
                  <h3>{experience.role}</h3>
                  <p>{experience.description}</p>
                </article>
              ))}
            </div>
            <div className="community-list">
              <h3 className="subsection-title">Training &amp; programme roles</h3>
              {communityExperience.map((experience) => (
                <article className="community-row" key={experience.role}>
                  <div>
                    <h4>{experience.role}</h4>
                    <span>{experience.organization}</span>
                  </div>
                  <p>{experience.description}</p>
                  <time>{experience.dates}</time>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section teaching-section" id="teaching">
          <div className="page-width teaching-grid">
            <div>
              <SectionHeading
                eyebrow="TEACHING & CAPACITY BUILDING"
                title="Making bioinformatics practical."
                description="I build hands-on learning experiences that meet people where they are—from the command line to interpreting a phylogenetic tree."
              />
              <p className="teaching-note">
                At DataLab Analytics, I developed learning-management-system
                content, including videos, documentation, and structured
                learning paths. Across my roles, I have trained and mentored
                more than 270 learners and professionals.
              </p>
            </div>
            <div className="material-list">
              {teachingMaterials.map((material, index) => (
                <article className="material-row" key={material.title}>
                  <span className="material-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{material.title}</h3>
                    <p>{material.description}</p>
                  </div>
                  <BookOpen size={19} aria-hidden="true" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section publications-section" id="publications">
          <div className="page-width">
            <SectionHeading
              eyebrow="SELECTED WORK"
              title="Publications & presentations"
              description="Research contributions and scientific communication across oncology, infectious disease, and computational biology."
            />
            <div className="publication-grid">
              <article className="publication-card publication-featured">
                <span className="publication-label">JOURNAL ARTICLE · 2024</span>
                <h3>
                  Epigenetic modifications in solid tumor metastasis in people
                  of African ancestry
                </h3>
                <p>
                  Co-author · <em>Frontiers in Oncology</em>
                </p>
                <a
                  href="https://doi.org/10.3389/fonc.2024.1325614"
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
              <article className="publication-card">
                <span className="publication-label">SELECTED CONTRIBUTIONS</span>
                <h3>Infectious disease &amp; computational biology</h3>
                <p>
                  Co-authored work in <em>Genes &amp; Genomics</em>,{" "}
                  <em>Vaccines</em>, and <em>Immunogenetics</em> on proteomics,
                  mRNA vaccine design, RNA-seq, genomic surveillance, and
                  COVID-19.
                </p>
              </article>
              <article className="publication-card">
                <span className="publication-label">CONFERENCE · 2023</span>
                <h3>Computational mRNA vaccine design for Lassa virus</h3>
                <p>
                  Presented at the Beyond Science Initiative Conference.
                  Additional posters covered rotavirus genetic diversity in
                  Africa and diagnostic-kit design for{" "}
                  <em>Schistosoma haematobium</em>.
                </p>
              </article>
            </div>
            <p className="manuscript-note">
              Manuscripts in preparation include ACE3 eMTCT programme
              performance across three Northwest Nigeria states and an
              evaluation of NFELTP across 10 cohorts (2008–2018).
            </p>
            <a
              className="text-link"
              href="https://scholar.google.com/citations?user=HbEmDf0AAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
            >
              View my Google Scholar profile{" "}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="section education-section" id="education">
          <div className="page-width education-grid">
            <div>
              <SectionHeading
                eyebrow="EDUCATION"
                title="Academic background"
              />
            </div>
            <div className="education-list">
              <article className="education-row">
                <div className="education-date">Jan – Nov 2025</div>
                <div>
                  <h3>Master of Public Health (MPH)</h3>
                  <p>Bingham University</p>
                  <span>
                    Epidemiology, biostatistics, health informatics,
                    implementation science, global health, health policy, and
                    monitoring &amp; evaluation.
                  </span>
                </div>
              </article>
              <article className="education-row">
                <div className="education-date">2018 – 2023</div>
                <div>
                  <h3>B.Tech. Biochemistry</h3>
                  <p>Ladoke Akintola University of Technology (LAUTECH)</p>
                  <span>
                    CGPA 4.36/5.0 · Relevant coursework: molecular genetics and
                    bioinformatics.
                  </span>
                  <span>
                    Academic project: Assessment of Zingiber officinale on
                    tramadol-induced nephrotoxicity in rats.
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="section credentials-section">
          <div className="page-width credentials-grid">
            <div>
              <SectionHeading eyebrow="RECOGNITION" title="Awards & scholarships" />
              <ul className="simple-list">
                {awards.map((award) => (
                  <li key={award}>{award}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeading
                eyebrow="PROFESSIONAL DEVELOPMENT"
                title="Certifications & short courses"
              />
              <ul className="simple-list">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="page-width affiliations">
            <span className="eyebrow">PROFESSIONAL AFFILIATIONS</span>
            <div className="affiliation-list">
              {affiliations.map((affiliation) => (
                <span key={affiliation}>{affiliation}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="page-width contact-inner">
            <div>
              <span className="eyebrow">LET’S CONNECT</span>
              <h2>Good science grows through collaboration.</h2>
              <p>
                For research, training, and public-health collaborations, I’d
                be glad to hear from you.
              </p>
            </div>
            <a
              className="button button-light"
              href="mailto:adedirandanieladewoleo4@gmail.com"
            >
              Get in touch <Mail size={17} aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">DA</span>
            <span>Daniel Adewole Adediran</span>
          </a>
          <span>Public health · Bioinformatics · One Health</span>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/daniel-adediran/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com/dexwel"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a href={cvUrl} download aria-label="Download CV">
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;
