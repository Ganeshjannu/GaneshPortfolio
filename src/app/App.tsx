import svgPaths from "../imports/Desktop3/svg-1s6swlc2u6";
import imgImage23 from "../imports/Desktop3/27e16c99227cb1bc5c1a30be0b82df4ba9631e9c.png";
import imgImage from "../imports/Desktop3/51c1d338972cdf04b34eb70aa07c06c52b0ea1c3.png";
import imgImage21 from "../imports/Desktop3/fcb30b0588d6a09eae6b94205b14f7d4da5d9c13.png";
import imgMacBookPro1 from "../imports/Desktop3/337b876ceca3fc836b51017d48e2d1458e3fcbd6.png";
import imgMacBookPro2 from "../imports/Desktop3/f9c56dd508bba82bb31114ffe7fc0256598423e4.png";
import imgIMac24 from "../imports/Desktop3/bfe3aac78afc71eef995f48f091ed50d3fe9ec46.png";
import imgImage19 from "../imports/Desktop3/107e844d7b2221dbb6b992cb1007e97829731b38.png";
import imgFigma from "../imports/Desktop3/daf22326774b50152eb328a33bfb9fa7cfcc52f7.png";
import imgImage12 from "../imports/Desktop3/47d786441a284c8f3ad12fc90690038a39c845e8.png";
import imgImage13 from "../imports/Desktop3/ec54fe58db3f95eb98763802dd4f3bc51722dd8d.png";
import imgImage14 from "../imports/Desktop3/ca17433acb3b5d2d08f55099d5e77de9fc155eb8.png";
import imgImage16 from "../imports/Desktop3/250d03996336c669335c43c7264dacb8c7d433e4.png";
import imgImage17 from "../imports/Desktop3/9f15350abbfe7a57ee482bcf2b6685551844b9f7.png";
import imgImage20 from "../imports/Desktop3/14d1c6ba692e5f7a1346350ef2a6df42c9a13c5a.png";

/* ─── NAVBAR ─── */
function Navbar() {
  return (
    <div className="w-full flex items-start justify-center pt-4 px-4">
      <div
        className="w-full bg-[#212121] flex items-center justify-between px-6 py-4 rounded-2xl"
        style={{ maxWidth: 1274, height: 76 }}
      >
        <div className="relative shrink-0" style={{ width: 102, height: 36 }}>
          <img alt="Logo" className="absolute inset-0 w-full h-full object-cover" src={imgImage23} />
        </div>
        <div className="flex items-center gap-6">
          <button
            className="relative flex items-center gap-4 px-6 py-3 rounded-lg border"
            style={{ borderColor: "rgba(255,255,255,0.5)" }}
          >
            <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 14, color: "#fff", lineHeight: "16.8px" }}>
              Linkedin
            </span>
            <div className="flex items-center justify-center" style={{ width: 20, height: 20 }}>
              <svg width="14" height="14" viewBox="0 0 13.3313 13.3313" fill="none">
                <path d={svgPaths.p142739f0} fill="white" />
              </svg>
            </div>
          </button>
          <button className="flex items-center justify-center px-6 py-4 rounded-lg" style={{ background: "#ec0b43" }}>
            <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 700, fontSize: 14, color: "#faf8f7", lineHeight: "16.8px" }}>
              Download CV
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── HERO ─── */
function HeroSection() {
  return (
    <div className="relative w-full bg-white overflow-hidden" style={{ borderRadius: "0 0 64px 64px" }}>
      {/* Side decoration */}
      <div
        className="absolute right-0 pointer-events-none"
        style={{ top: "50%", transform: "translateY(-50%)", width: 86, height: 298 }}
      >
        <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImage21} />
      </div>

      <div className="w-full flex items-center justify-center">
        <div
          className="w-full flex items-center justify-center"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 60, paddingBottom: 112 }}
        >
          {/* 2-col layout */}
          <div className="flex items-center" style={{ width: "100%", maxWidth: 1200, gap: 136 }}>
            {/* LEFT TEXT */}
            <div className="flex flex-col shrink-0" style={{ width: 578, gap: 16 }}>
              {/* Hi / Name / Role */}
              <div className="flex flex-col" style={{ gap: 8 }}>
                <p style={{ fontFamily: "'Savoye LET',cursive", fontSize: 24, color: "#120e1e", lineHeight: "normal", margin: 0 }}>
                  Hi I'm
                </p>
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    fontWeight: 400,
                    fontSize: 72,
                    color: "#ec0b43",
                    letterSpacing: "-3.6px",
                    lineHeight: "normal",
                    margin: 0,
                    fontVariationSettings: "'opsz' 14,'wdth' 100",
                  }}
                >
                  Ganesh Jannu
                </p>
                <p
                  style={{
                    fontFamily: "'Bricolage Grotesque',sans-serif",
                    fontWeight: 400,
                    fontSize: 48,
                    color: "#ec0b43",
                    letterSpacing: "-2.4px",
                    lineHeight: "57.6px",
                    margin: 0,
                    fontVariationSettings: "'opsz' 14,'wdth' 100",
                  }}
                >
                  Product Designer
                </p>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontFamily: "'Bricolage Grotesque',sans-serif",
                  fontSize: 48,
                  color: "#120e1e",
                  letterSpacing: "-2.4px",
                  lineHeight: "57.6px",
                  margin: 0,
                  width: "100%",
                }}
              >
                <span style={{ fontWeight: 300, fontVariationSettings: "'opsz' 14,'wdth' 100" }}>Designing experiences</span>
                <span style={{ fontWeight: 400, fontVariationSettings: "'opsz' 14,'wdth' 100" }}>, </span>
                <span style={{ fontWeight: 600, fontVariationSettings: "'opsz' 14,'wdth' 100" }}>decoding users, perfecting every pixel.</span>
              </p>

              {/* Meta */}
              <div className="flex flex-col" style={{ gap: 8 }}>
                {["☞ Based in Hyderabad, India", "☞ 2.8+ years of experience"].map((line, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Bricolage Grotesque',sans-serif",
                      fontWeight: 400,
                      fontSize: 18,
                      color: "rgba(18,14,30,0.5)",
                      letterSpacing: "-0.4px",
                      lineHeight: "28px",
                      margin: 0,
                      fontVariationSettings: "'opsz' 14,'wdth' 100",
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative shrink-0" style={{ width: 426, height: 544 }}>
              {/* Outer luminosity ring */}
              <div
                className="absolute"
                style={{ inset: 0, width: 426, height: 544, borderRadius: 205, mixBlendMode: "luminosity" }}
              >
                <img
                  alt=""
                  src={imgImage}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{ borderRadius: 205, opacity: 0.1 }}
                />
              </div>
              {/* Main photo */}
              <div className="absolute" style={{ left: 26, top: 33, width: 374, height: 478 }}>
                <img
                  alt="Ganesh Jannu"
                  src={imgImage}
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  style={{
                    borderRadius: "205px 205px 205px 187px",
                    backdropFilter: "blur(25px)",
                  }}
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ borderRadius: "205px 205px 205px 187px", border: "1px solid #383051" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── WORK EXPERIENCE ─── */
function WorkBadge({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: "#e2f4fe", padding: "0 4px", borderRadius: 2 }}
    >
      <span
        style={{
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 500,
          fontSize: 16,
          color: "#0ba1ec",
          letterSpacing: "-0.4px",
          lineHeight: "28px",
          textTransform: "capitalize",
          fontVariationSettings: "'opsz' 14,'wdth' 100",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function WorkEntry({
  company,
  role,
  type,
  dateRange,
  duration,
  bullets,
  collaboration,
  isLast,
}: {
  company: string;
  role: string;
  type: string;
  dateRange: string;
  duration: string;
  bullets: string[];
  collaboration?: string[];
  isLast?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col w-full"
      style={{
        gap: 24,
        paddingBottom: 40,
        borderBottom: isLast ? "none" : "1px solid #c0bdc1",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        {/* Left */}
        <div className="flex flex-col shrink-0" style={{ width: 332, gap: 8 }}>
          <div
            style={{
              fontFamily: "'Bricolage Grotesque',sans-serif",
              fontWeight: 500,
              fontSize: 32,
              color: "#120e1e",
              letterSpacing: "-0.3px",
              lineHeight: "41.6px",
              fontVariationSettings: "'opsz' 14,'wdth' 100",
            }}
          >
            {company}
          </div>
          <div className="flex items-center" style={{ gap: 8 }}>
            <span
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontWeight: 400,
                fontSize: 16,
                color: "rgba(18,14,30,0.5)",
                letterSpacing: "-0.4px",
                lineHeight: "28px",
                whiteSpace: "nowrap",
                fontVariationSettings: "'opsz' 14,'wdth' 100",
              }}
            >
              {role}
            </span>
            <WorkBadge label={type} />
          </div>
        </div>
        {/* Right: dates */}
        <div
          className="flex flex-col"
          style={{
            fontFamily: "'Bricolage Grotesque',sans-serif",
            fontWeight: 400,
            color: "rgba(18,14,30,0.5)",
            letterSpacing: "-0.3px",
            whiteSpace: "nowrap",
            fontVariationSettings: "'opsz' 14,'wdth' 100",
          }}
        >
          <span style={{ fontSize: 32, lineHeight: "56px" }}>{dateRange}</span>
          <span style={{ fontSize: 16, lineHeight: "56px" }}>{duration}</span>
        </div>
      </div>

      {/* Body */}
      <div
        style={{
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 400,
          fontSize: 16,
          color: "rgba(18,14,30,0.5)",
          letterSpacing: "-0.4px",
          lineHeight: "28px",
          fontVariationSettings: "'opsz' 14,'wdth' 100",
          width: "100%",
        }}
      >
        <ul style={{ listStyleType: "disc", margin: 0, padding: 0 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginLeft: 24, marginBottom: 0 }}>
              {b}
            </li>
          ))}
        </ul>
        {collaboration && collaboration.length > 0 && (
          <>
            <p style={{ margin: "8px 0 0", fontWeight: 500, color: "rgba(18,14,30,0.7)", whiteSpace: "pre-wrap" }}>
              Collaboration &amp; Delivery:
            </p>
            <ul style={{ listStyleType: "disc", margin: 0, padding: 0 }}>
              {collaboration.map((b, i) => (
                <li key={i} style={{ marginLeft: 24, marginBottom: 0 }}>
                  {b}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

function WorkExperienceSection() {
  return (
    <div className="w-full" style={{ background: "#f5f1ef" }}>
      <div className="w-full flex justify-center">
        <div
          className="w-full flex flex-col"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 112, paddingBottom: 112, gap: 72 }}
        >
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            <div className="flex items-center" style={{ gap: 10 }}>
              <p style={{ fontFamily: "'Savoye LET',cursive", fontSize: 32, color: "#ec0b43", lineHeight: "normal", margin: 0, whiteSpace: "nowrap" }}>
                work experience
              </p>
              <div style={{ flex: 1, height: 1, background: "rgba(18,14,30,0.25)" }} />
            </div>
            <p
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontWeight: 400,
                fontSize: 36,
                color: "#120e1e",
                letterSpacing: "-1.8px",
                lineHeight: "57.6px",
                margin: 0,
                fontVariationSettings: "'opsz' 14,'wdth' 100",
              }}
            >
              In a 🔩 shell – 2.8+ years of shaping seamless experiences
            </p>
          </div>

          {/* Entries */}
          <div className="flex flex-col" style={{ gap: 32 }}>
            <WorkEntry
              company="Innovatech Technology Solutions"
              role="UI UX Designer"
              type="Full Time"
              dateRange="Mar 2025 — Present"
              duration="1.1 Years"
              bullets={[
                "Designed UX for Abu Dhabi Department of Energy (DoE) modules, including Gas Inspection workflows and compliance dashboards",
                " Worked on enterprise dashboards and data-heavy interfaces, focusing on clarity and usability for internal users",
                " Designed ActiveProperties CRM (real estate platform) with workflow-driven interfaces for agents and operations",
                " Contributed to AI-powered Document Management System (DMS) using Figma Make for rapid UI generation and iteration",
              ]}
              collaboration={[
                " Co-designed Procurement system and TAQA Water Solutions platform with team lead",
                " Delivered production-ready designs currently live and actively used (TAQA, ActiveProperties)",
              ]}
            />
            <WorkEntry
              company="North North Software Solutions"
              role="Product Designer"
              type="Contract"
              dateRange="Nov 2024 — Jan 2025"
              duration="3 Months"
              bullets={[
                "Designed UX for CyberSkul, an online course-selling SaaS platform",
                " Created end-to-end user flows for course browsing, enrollment, and user management",
                " Designed responsive UI and prototypes for web platform",
                " Worked closely with developers to ensure smooth design-to-development handoff",
              ]}
            />
            <WorkEntry
              company="Mindwave Solutions"
              role="UI/UX Designer"
              type="Full time"
              dateRange="Jul 2023 — Oct 2024"
              duration="1.4 Years"
              bullets={[
                "Designed UX for multiple B2C and B2B2C products across domains like healthcare, real estate, and media",
                " Worked on platforms such as Medical Share (healthcare), Urban Nest Pro (property management), Musidy (music streaming)",
                " Created responsive UI designs for web and mobile applications",
                " Collaborated with cross-functional teams to deliver user-centered solutions",
              ]}
              isLast
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CASE STUDIES ─── */
function ReadBtn() {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ background: "#fff", padding: "12px 16px", borderRadius: 12 }}
    >
      <span
        style={{
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 500,
          fontSize: 15.25,
          color: "#292534",
          letterSpacing: "-0.32px",
          lineHeight: "22.4px",
          whiteSpace: "nowrap",
        }}
      >
        Read Case study
      </span>
    </div>
  );
}

function ProtectedBadge() {
  return (
    <div
      className="absolute flex items-center"
      style={{ top: 26, right: 36, background: "#fff", padding: "0 10px", borderRadius: 13, border: "0.823px solid #06a904", gap: 6 }}
    >
      <span
        style={{
          fontFamily: "'Bricolage Grotesque',sans-serif",
          fontWeight: 400,
          fontSize: 9.877,
          color: "#06a904",
          letterSpacing: "-0.33px",
          lineHeight: "23px",
          whiteSpace: "nowrap",
        }}
      >
        CASE STUDY PROTECTED
      </span>
      <svg width="11.5" height="11.5" viewBox="0 0 11.5237 11.5237" fill="none">
        <path d={svgPaths.p2f19bb00} fill="#06A904" />
      </svg>
    </div>
  );
}

function CaseStudiesSection() {
  const cardText = {
    fontFamily: "'Bricolage Grotesque',sans-serif",
    fontVariationSettings: "'opsz' 14,'wdth' 100",
  };

  return (
    <div className="w-full" style={{ background: "#090909", borderRadius: 64 }}>
      <div className="w-full flex justify-center">
        <div
          className="w-full flex flex-col"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 112, paddingBottom: 112, gap: 24 }}
        >
          {/* Header */}
          <div className="flex flex-col" style={{ gap: 24 }}>
            <div className="flex items-center" style={{ gap: 10 }}>
              <p style={{ fontFamily: "'Savoye LET',cursive", fontSize: 24, color: "#faf8f7", lineHeight: "normal", margin: 0, whiteSpace: "nowrap" }}>
                Selected Works
              </p>
              <div style={{ flex: 1, height: 1, background: "rgba(18,14,30,0.25)" }} />
            </div>
            <span style={{ ...cardText, fontWeight: 500, fontSize: 24, color: "#fff", letterSpacing: "-1.2px", lineHeight: "57.6px" }}>
              Case Studies
            </span>
          </div>

          {/* Row 1 */}
          <div className="flex" style={{ gap: 24 }}>
            {/* Activ Properties – wide */}
            <div
              className="flex flex-col shrink-0"
              style={{ width: 703, borderRadius: 32.925, boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.16)", overflow: "hidden" }}
            >
              <div
                className="relative overflow-hidden flex items-center justify-end"
                style={{ height: 359, borderRadius: "32px 32px 0 0", background: "linear-gradient(117.011deg,rgb(114,115,118) 1.87%,rgb(139,140,144) 100%)" }}
              >
                <img alt="Activ Properties" src={imgMacBookPro1} style={{ width: 604, height: 349, objectFit: "cover", display: "block" }} />
              </div>
              <div className="flex flex-col" style={{ gap: 6.585, padding: 24 }}>
                <p style={{ ...cardText, fontWeight: 500, fontSize: 13.17, color: "rgba(250,248,247,0.6)", letterSpacing: "-0.33px", textTransform: "uppercase", lineHeight: 1, marginBottom: 13, margin: "0 0 13px" }}>
                  Real Estate · CRM
                </p>
                <div className="flex items-center justify-between">
                  <span style={{ ...cardText, fontWeight: 400, fontSize: 29.632, color: "#faf8f7", letterSpacing: "-1.15px", lineHeight: "67px" }}>
                    Activ Properties
                  </span>
                  <ReadBtn />
                </div>
                <p style={{ ...cardText, fontWeight: 400, fontSize: 13.17, color: "rgba(254,254,254,0.5)", letterSpacing: "-0.33px", lineHeight: "23px", margin: 0 }}>
                  End-to-end real estate CRM — agent workflows, deal tracking, and commission management. Independently designed.
                </p>
              </div>
            </div>

            {/* Taqa Water – narrow */}
            <div
              className="flex flex-col"
              style={{ flex: 1, borderRadius: 32.925, boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.16)", overflow: "hidden" }}
            >
              <div
                className="relative overflow-hidden flex items-end justify-center"
                style={{ height: 359, borderRadius: "32px 32px 0 0", background: "linear-gradient(108.932deg,rgb(131,132,134) 1.87%,rgb(53,52,53) 100%)" }}
              >
                <div className="flex items-end justify-center w-full h-full" style={{ paddingTop: 49, paddingLeft: 98, paddingRight: 98 }}>
                  <img alt="Taqa" src={imgMacBookPro2} style={{ width: 345, height: 273, objectFit: "contain", display: "block" }} />
                </div>
              </div>
              <div className="flex flex-col" style={{ gap: 6.585, padding: 24 }}>
                <p style={{ ...cardText, fontWeight: 500, fontSize: 13.17, color: "rgba(250,248,247,0.6)", letterSpacing: "-0.33px", textTransform: "uppercase", lineHeight: 1, margin: "0 0 13px" }}>
                  Enterprise · Regulatory · SaaS
                </p>
                <span style={{ ...cardText, fontWeight: 400, fontSize: 29.632, color: "#fff", letterSpacing: "-1.15px", lineHeight: "67px", display: "block" }}>
                  Taqa Water Solutions
                </span>
                <p style={{ ...cardText, fontWeight: 400, fontSize: 13.17, color: "rgba(250,248,247,0.6)", letterSpacing: "-0.33px", lineHeight: "23px", margin: 0 }}>
                  Wastewater management & compliance platform tracking DOE license conditions, reporting workflows, and operational KPIs across treatment and distribution systems.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex" style={{ gap: 24 }}>
            {/* Abu Dhabi DoE – narrow */}
            <div
              className="flex flex-col shrink-0"
              style={{ width: 473, borderRadius: 32.925, boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.16)", overflow: "hidden" }}
            >
              <div
                className="relative overflow-hidden flex items-end justify-center"
                style={{ height: 272, borderRadius: "32px 32px 0 0", background: "linear-gradient(114.398deg,rgb(131,132,134) 1.87%,rgb(53,52,53) 100%)" }}
              >
                <div className="flex items-end justify-center w-full h-full" style={{ paddingTop: 49, paddingLeft: 98, paddingRight: 98 }}>
                  <img alt="Abu Dhabi DoE" src={imgIMac24} style={{ width: 183, height: 200, objectFit: "contain", display: "block" }} />
                </div>
                <ProtectedBadge />
              </div>
              <div className="flex flex-col" style={{ gap: 6.585, padding: 24 }}>
                <p style={{ ...cardText, fontWeight: 500, fontSize: 13.17, color: "#a5a3a9", letterSpacing: "-0.33px", textTransform: "uppercase", lineHeight: 1, margin: "0 0 13px" }}>
                  Government · Regulatory
                </p>
                <span style={{ ...cardText, fontWeight: 400, fontSize: 29.632, color: "#faf8f7", letterSpacing: "-1.15px", lineHeight: "67px", display: "block" }}>
                  Abu Dhabi Deptarment of Energy
                </span>
                <p style={{ ...cardText, fontWeight: 400, fontSize: 13.17, color: "#a5a3a9", letterSpacing: "-0.33px", lineHeight: "23px", margin: 0 }}>
                  Licensing, compliance tracking, inspection management, and regulatory reporting modules for a government energy authority.
                </p>
              </div>
            </div>

            {/* MedicalShare – wide */}
            <div
              className="flex flex-col"
              style={{ flex: 1, borderRadius: 32.925, boxShadow: "0px 1px 6px 0px rgba(0,0,0,0.16)", overflow: "hidden" }}
            >
              <div
                className="relative overflow-hidden flex items-end justify-center"
                style={{ height: 273, borderRadius: "32px 32px 0 0", background: "linear-gradient(123.888deg,rgb(131,132,134) 1.87%,rgb(53,52,53) 100%)" }}
              >
                <div className="flex items-end justify-center w-full h-full" style={{ paddingTop: 49, paddingLeft: 98, paddingRight: 98 }}>
                  <img alt="MedicalShare" src={imgImage19} style={{ width: 317, height: 252, objectFit: "contain", display: "block" }} />
                </div>
              </div>
              <div className="flex flex-col" style={{ gap: 6.585, padding: 24 }}>
                <p style={{ ...cardText, fontWeight: 500, fontSize: 13.17, color: "#a5a3a9", letterSpacing: "-0.33px", textTransform: "uppercase", lineHeight: 1, margin: "0 0 13px" }}>
                  Healthcare · Mobile App
                </p>
                <div className="flex items-center justify-between">
                  <span style={{ ...cardText, fontWeight: 400, fontSize: 29.632, color: "#faf8f7", letterSpacing: "-1.15px", lineHeight: "67px" }}>
                    MedicalShare App
                  </span>
                  <ReadBtn />
                </div>
                <p style={{ ...cardText, fontWeight: 400, fontSize: 13.17, color: "#a5a3a9", letterSpacing: "-0.33px", lineHeight: "23px", margin: 0 }}>
                  A peer-to-peer platform to borrow, share, and buy medical equipment. Designed for trust, locality, and ease of use.
                </p>
              </div>
            </div>
          </div>

          {/* Behance CTA */}
          <div
            className="w-full flex flex-col items-center justify-center"
            style={{ height: 260, borderRadius: 20, border: "1px solid #f1f1f2", boxShadow: "0px 1px 4px rgba(0,0,0,0.07),0px 1px 2px rgba(0,0,0,0.04)", gap: 16 }}
          >
            <span style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 400, fontSize: 32, color: "#ec0b43", lineHeight: "52.8px" }}>✦</span>
            <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 17.6, color: "#faf8f7", letterSpacing: "-0.317px", lineHeight: "19.71px", whiteSpace: "nowrap" }}>
              See all work on Behance
            </span>
            <div style={{ opacity: 0.72, textAlign: "center" }}>
              <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 13.1, color: "#aeacb1", lineHeight: "20.99px", margin: 0 }}>
                More case studies, explorations & UI
              </p>
              <p style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 13.1, color: "#aeacb1", lineHeight: "20.99px", margin: 0 }}>
                experiments.
              </p>
            </div>
            <div style={{ border: "1px solid #f3efec", padding: "12px 16px", borderRadius: 12 }}>
              <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 10.1, color: "#fff", letterSpacing: "0.806px", lineHeight: "16.63px", whiteSpace: "nowrap" }}>
                View on Behance
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── STACKS ─── */
function StacksSection() {
  return (
    <div className="w-full" style={{ background: "#f5f1ef" }}>
      <div className="w-full flex justify-center">
        <div
          className="w-full flex flex-col"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 112, paddingBottom: 112, gap: 64 }}
        >
          {/* Header */}
          <div className="flex items-center" style={{ gap: 10 }}>
            <p style={{ fontFamily: "'Savoye LET',cursive", fontSize: 24, color: "#120e1e", lineHeight: "normal", margin: 0, whiteSpace: "nowrap" }}>
              Stacks
            </p>
            <div style={{ flex: 1, height: 1, background: "rgba(18,14,30,0.25)" }} />
          </div>

          {/* Row 1 */}
          <div className="flex" style={{ gap: 120 }}>
            {[
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100, borderRadius: 2, overflow: "hidden" }}>
                    <img alt="" src={imgFigma} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                  </div>
                ),
                name: "Figma",
                sub: "product design",
              },
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100 }}>
                    <img alt="" src={imgImage12} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ),
                name: "Framer",
                sub: "Website developments",
              },
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100, overflow: "hidden" }}>
                    <img alt="" src={imgFigma} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                    <div style={{ position: "absolute", left: -45.24, top: 0.04, width: 190.476, height: 100 }}>
                      <img alt="" src={imgImage13} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                ),
                name: "Adobe Photoshop",
                sub: "Graphic Design",
              },
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100, overflow: "hidden" }}>
                    <img alt="" src={imgFigma} style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                    <div style={{ position: "absolute", left: -1.24, top: -0.46, width: 102.471, height: 100 }}>
                      <img alt="" src={imgImage14} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                ),
                name: "Adobe Illustrator",
                sub: "Logo design",
              },
            ].map(({ icon, name, sub }) => (
              <div key={name} className="flex flex-col" style={{ flex: 1, gap: 28 }}>
                {icon}
                <div className="flex flex-col">
                  <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 20, color: "#120e1e", letterSpacing: "-0.4px", lineHeight: "35px" }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 300, fontSize: 14, color: "#120e1e", lineHeight: "14px", whiteSpace: "nowrap" }}>
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex items-center justify-center" style={{ gap: 120 }}>
            {[
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100 }}>
                    <div style={{ position: "absolute", inset: 0, background: "#fff" }} />
                    <div style={{ position: "absolute", left: 15.2, top: 15.2, width: 69.596, height: 69.596 }}>
                      <img alt="" src={imgImage16} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                ),
                name: "HTML",
                sub: "product design",
              },
              {
                icon: (
                  <div style={{ position: "relative", width: 95.238, height: 100 }}>
                    <img alt="" src={imgImage17} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ),
                name: "CSS",
                sub: "Website developments",
              },
              {
                icon: (
                  <div style={{ position: "relative", width: 100, height: 100 }}>
                    <img alt="" src={imgImage20} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ),
                name: "Notion",
                sub: "project management",
              },
            ].map(({ icon, name, sub }) => (
              <div key={name} className="flex flex-col items-center" style={{ width: 210, gap: 28 }}>
                {icon}
                <div className="flex flex-col items-center">
                  <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 400, fontSize: 20, color: "#120e1e", letterSpacing: "-0.4px", lineHeight: "35px" }}>
                    {name}
                  </span>
                  <span style={{ fontFamily: "'Bricolage Grotesque',sans-serif", fontWeight: 300, fontSize: 14, color: "#120e1e", lineHeight: "14px", whiteSpace: "nowrap" }}>
                    {sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── FREELANCE CTA ─── */
function FreelanceCTA() {
  return (
    <div className="w-full" style={{ background: "#fefefe" }}>
      <div className="w-full flex justify-center">
        <div
          className="w-full flex items-center justify-center"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 112, paddingBottom: 112 }}
        >
          <div
            style={{
              fontFamily: "'Manrope',sans-serif",
              fontWeight: 500,
              fontSize: 64,
              letterSpacing: "-2.7px",
              lineHeight: "86.4px",
              textAlign: "center",
              background: "linear-gradient(47.3043deg,rgba(0,0,0,0.25) 0%,rgb(0,0,0) 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            <p style={{ margin: "0 0 0" }}>i'm open for freelance projects, feel free to &nbsp;</p>
            <p style={{ margin: 0 }}>email me to see how can we collaborate</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── CONTACT ─── */
function ContactSection() {
  return (
    <div
      className="w-full"
      style={{ background: "#f5f1ef", borderRadius: "64px 64px 0 0", borderBottom: "2px solid #faf8f7" }}
    >
      <div className="w-full flex justify-center">
        <div
          className="w-full flex flex-col items-center"
          style={{ maxWidth: 1440, paddingLeft: 120, paddingRight: 120, paddingTop: 112, paddingBottom: 112, gap: 56 }}
        >
          {/* Say Hello + divider */}
          <div className="flex items-center" style={{ width: 632, gap: 10 }}>
            <p style={{ fontFamily: "'Savoye LET',cursive", fontSize: 24, color: "#ed2355", lineHeight: "normal", margin: 0, whiteSpace: "nowrap" }}>
              Say Hello
            </p>
            <div style={{ flex: 1, height: 1, background: "rgba(18,14,30,0.25)" }} />
          </div>

          {/* Big heading + buttons */}
          <div className="flex flex-col items-center" style={{ gap: 24, width: "100%" }}>
            <div
              style={{
                fontFamily: "'Bricolage Grotesque',sans-serif",
                fontSize: 70,
                color: "#120e1e",
                letterSpacing: "-1.4px",
                lineHeight: "84px",
                textAlign: "center",
                width: "100%",
              }}
            >
              <p style={{ margin: 0, fontWeight: 400 }}>Let's Build Something </p>
              <p style={{ margin: 0, fontWeight: 700 }}>Cool together</p>
            </div>

            <div className="flex items-center" style={{ gap: 64 }}>
              {/* LinkedIn */}
              <div style={{ width: 50, height: 50, borderRadius: 16, overflow: "hidden", position: "relative" }}>
                <div style={{ position: "absolute", inset: 0, background: "#333", borderRadius: 16 }} />
                <div style={{ position: "absolute", inset: 0, background: "#0a66c2", borderRadius: 16 }} />
                <div style={{ position: "absolute", left: 13, top: 13, width: 24, height: 24, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d={svgPaths.p34481000} fill="white" />
                  </svg>
                </div>
              </div>

              {/* Email */}
              <button
                style={{
                  background: "#e3e3e3",
                  height: 52,
                  width: 229,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 16,
                  padding: "16px 24px",
                  borderRadius: 8,
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontFamily: "'Gaegu',cursive", fontWeight: 400, fontSize: 14, color: "#120e1e", lineHeight: "16.8px", whiteSpace: "nowrap" }}>
                  ganeshjannu05@gmail.com
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── ROOT ─── */
export default function App() {
  return (
    <div style={{ background: "#fff", display: "flex", flexDirection: "column", alignItems: "stretch", width: "100%", minHeight: "100vh" }}>
      <Navbar />
      <HeroSection />
      <WorkExperienceSection />
      <CaseStudiesSection />
      <StacksSection />
      <FreelanceCTA />
      <ContactSection />
    </div>
  );
}
