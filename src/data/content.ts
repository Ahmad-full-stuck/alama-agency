export type Bilingual = { ar: string; en: string };

export const brand = {
  nameAr: "علامة",
  nameEn: "ALAMA",
  fullNameAr: "وكالة علامة",
  fullNameEn: "Alama Agency",
};

export const nav: { key: string; label: Bilingual; href: string }[] = [
  { key: "home", label: { ar: "الرئيسية", en: "Home" }, href: "#home" },
  { key: "services", label: { ar: "خدماتنا", en: "Services" }, href: "#services" },
  { key: "work", label: { ar: "أعمالنا", en: "Work" }, href: "#work" },
  { key: "about", label: { ar: "من نحن", en: "About" }, href: "#about" },
  { key: "contact", label: { ar: "تواصل معنا", en: "Contact" }, href: "#contact" },
];

export const hero = {
  eyebrow: { ar: "وكالة إعلانات وصناعة محتوى", en: "Advertising & Content Agency" } as Bilingual,
  titleLine1: { ar: "نسوي حملات", en: "We build campaigns" } as Bilingual,
  titleHighlight: { ar: "الناس تحچي عنها", en: "people actually talk about" } as Bilingual,
  titleLine2: { ar: "مو تحچي عليها", en: "not just campaigns about them" } as Bilingual,
  subtitle: {
    ar: "خلّي شغلك يوصل، مو بس ينشاف. فريق علامة يشتغل على الفكرة والتنفيذ والنتيجة سوا، من أول جلسة إلى يوم تشوف الأثر بعينك.",
    en: "Make your work land — not just get seen. Alama's team works on the idea, the execution, and the outcome together, from the first session to the day you see the impact.",
  } as Bilingual,
  ctaPrimary: { ar: "خلنا نسوي شي كبير", en: "Let's build something big" } as Bilingual,
  ctaSecondary: { ar: "شوف أعمالنا", en: "See our work" } as Bilingual,
  floatingTag1: { ar: "إعلانات ممولة", en: "Paid Media" } as Bilingual,
  floatingTag2: { ar: "صناعة محتوى", en: "Content" } as Bilingual,
  floatingTag3: { ar: "رصد ترندات", en: "Trends" } as Bilingual,
};

export const stats: { value: string; labelAr: string; labelEn: string }[] = [
  { value: "+120", labelAr: "حملة منفّذة", labelEn: "Campaigns shipped" },
  { value: "+45", labelAr: "براند وثق بنا", labelEn: "Brands trusted us" },
  { value: "×3.4", labelAr: "متوسط نمو النتائج", labelEn: "Average results growth" },
  { value: "24/7", labelAr: "متابعة وتقارير", labelEn: "Monitoring & reporting" },
];

export const tickerItems: Bilingual[] = [
  { ar: "إعلانات ممولة", en: "Paid Ads" },
  { ar: "صناعة محتوى", en: "Content" },
  { ar: "هوية بصرية", en: "Identity" },
  { ar: "رصد الترندات", en: "Trends" },
  { ar: "تصوير ومونتاج", en: "Production" },
  { ar: "استراتيجيات نمو", en: "Growth" },
  { ar: "حملات إبداعية", en: "Creative" },
];

export const strengths: { titleAr: string; titleEn: string; descAr: string; descEn: string }[] = [
  {
    titleAr: "الفكرة قبل كل شي",
    titleEn: "Idea comes first",
    descAr: "ما نبدأ بالتنفيذ قبل ما نضمن إن الفكرة قوية وتستاهل وقتك وفلوسك.",
    descEn: "We never execute before making sure the idea is strong enough to deserve your time and budget.",
  },
  {
    titleAr: "نلتزم بالوقت",
    titleEn: "We respect deadlines",
    descAr: "خطة زمنية واضحة من أول يوم، وتسليم يحترم جدولك.",
    descEn: "A clear timeline from day one, with delivery that respects your schedule.",
  },
  {
    titleAr: "عين على الترند",
    titleEn: "Eye on the trend",
    descAr: "نراقب السوشيال ميديا أول بأول ونحول أي تحرك لفرصة تخدم براندك.",
    descEn: "We watch social media constantly and turn every shift into an opportunity for your brand.",
  },
  {
    titleAr: "نتائج نكدر نوريها",
    titleEn: "Results we can show",
    descAr: "نشتغل بشفافية، وتقارير واضحة تبين وين واصل الشغل.",
    descEn: "We work with full transparency and clear reporting on where the work stands.",
  },
];

export const about = {
  eyebrow: { ar: "من نحن", en: "About Us" } as Bilingual,
  title: { ar: "مو وكالة تسوي بوستات وتخلص", en: "Not just an agency that posts and disappears" } as Bilingual,
  paragraph1: {
    ar: "علامة وكالة إبداعية تشتغل على المحتوى والإعلان من جذوره: ليش هذا المحتوى؟ مين يشوفه؟ وشلون يخليه يتحرك؟ نجمع بين الإبداع اللي يوقف الناس عن السكرول، والاستراتيجية اللي توصلك لهدفك التجاري.",
    en: "Alama is a creative agency that works on content and advertising from the root: why this content, who sees it, and how does it move? We combine creativity that stops the scroll with strategy that reaches your business goal.",
  } as Bilingual,
  paragraph2: {
    ar: "من أول جلسة نفهم فيها براندك وجمهورك، إلى آخر تقرير نحلل فيه النتيجة — كل خطوة مدروسة، وكل فكرة إلها هدف.",
    en: "From the first session where we understand your brand and audience, to the final report where we analyze the outcome — every step is deliberate, and every idea has a purpose.",
  } as Bilingual,
  quote: {
    ar: "الفكرة مو بس إعلان، الفكرة شلون تخلي الناس تتذكرك.",
    en: "An idea isn't just an ad — it's how you make people remember you.",
  } as Bilingual,
  tags: [
    { ar: "بولد وواثقة", en: "Bold & Confident" },
    { ar: "حادة بأفكارها", en: "Sharp Thinking" },
    { ar: "مودرن دايماً", en: "Always Modern" },
    { ar: "نتائج فوق الكلام", en: "Results Over Talk" },
  ],
};

export const services: {
  icon: "megaphone" | "camera" | "trend" | "identity" | "growth";
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}[] = [
  {
    icon: "megaphone",
    titleAr: "إعلانات ممولة",
    titleEn: "Paid Advertising",
    descAr: "نبني حملات ممولة تعرف وين تحط فلوسك بالضبط، لنتيجة تكدر تلمسها مو بس تشوفها.",
    descEn: "Paid campaigns that know exactly where to place your budget — for results you can feel, not just see.",
  },
  {
    icon: "camera",
    titleAr: "صناعة محتوى",
    titleEn: "Content Production",
    descAr: "من الفكرة للتصوير للمونتاج، محتوى يوقف السكرول ويخلي براندك يحچي بصوته الحقيقي.",
    descEn: "From concept to shoot to edit — content that stops the scroll and gives your brand its real voice.",
  },
  {
    icon: "trend",
    titleAr: "رصد الترندات",
    titleEn: "Trend Monitoring",
    descAr: "نراقب كل تحرك بالسوشيال ميديا ونحول الترند لفرصة تخدم براندك قبل ما يفوتك الوقت.",
    descEn: "We track every move on social media and turn trends into opportunities before your moment passes.",
  },
  {
    icon: "identity",
    titleAr: "الهوية البصرية",
    titleEn: "Brand Identity",
    descAr: "نبني هوية بصرية واضحة وقوية تخلي براندك ينعرف من أول نظرة بين أي زحمة.",
    descEn: "A clear, strong visual identity that makes your brand recognizable at first glance, anywhere.",
  },
  {
    icon: "growth",
    titleAr: "استراتيجيات النمو",
    titleEn: "Growth Strategy",
    descAr: "خطة نمو مدروسة تربط بين المحتوى والإعلان والمبيعات، خطوة بخطوة لهدف واضح.",
    descEn: "A deliberate growth roadmap connecting content, advertising, and sales — step by step toward a clear goal.",
  },
];

export const workCategories: { key: string; ar: string; en: string }[] = [
  { key: "all", ar: "كل الأعمال", en: "All work" },
  { key: "identity", ar: "هوية بصرية", en: "Identity" },
  { key: "content", ar: "محتوى وتصوير", en: "Content" },
  { key: "campaign", ar: "حملات ممولة", en: "Campaigns" },
];

export const work: {
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  cat: string;
  image: string;
}[] = [
  {
    tagAr: "إطلاق براند",
    tagEn: "Brand Launch",
    titleAr: "إطلاق ستارت أب تقني",
    titleEn: "Tech Startup Launch",
    categoryAr: "هوية بصرية + حملة إطلاق",
    categoryEn: "Identity + Launch Campaign",
    cat: "identity",
    image: "images/work-1.jpg",
  },
  {
    tagAr: "محتوى",
    tagEn: "Content",
    titleAr: "مطعم كافيه فيرور",
    titleEn: "Café Fervour",
    categoryAr: "صناعة محتوى وتصوير احترافي",
    categoryEn: "Content Production & Photography",
    cat: "content",
    image: "images/work-2.jpg",
  },
  {
    tagAr: "حملة ممولة",
    tagEn: "Paid Campaign",
    titleAr: "حملة موسمية",
    titleEn: "Seasonal Campaign",
    categoryAr: "إعلانات ممولة عبر السوشيال ميديا",
    categoryEn: "Paid Social Media Advertising",
    cat: "campaign",
    image: "images/work-3.jpg",
  },
  {
    tagAr: "معرض أعمال",
    tagEn: "Exhibition",
    titleAr: "معرض الأنيق للأعمال",
    titleEn: "Al-Aniq Art Exhibition",
    categoryAr: "هوية بصرية وتغطية إعلامية",
    categoryEn: "Brand Identity & Media Coverage",
    cat: "identity",
    image: "images/work-4.jpg",
  },
];

export const process: { num: string; titleAr: string; titleEn: string; descAr: string; descEn: string }[] = [
  {
    num: "01",
    titleAr: "نفهم",
    titleEn: "Discover",
    descAr: "نغوص بعالم براندك: منافسينك، جمهورك، وشنو يخليك مختلف.",
    descEn: "We dive into your brand's world: competitors, audience, and what makes you different.",
  },
  {
    num: "02",
    titleAr: "نخطط",
    titleEn: "Plan",
    descAr: "نحط استراتيجية واضحة: شنو نحچي، وين نحچيه، ومتى بالضبط.",
    descEn: "We build a clear strategy: what to say, where to say it, and exactly when.",
  },
  {
    num: "03",
    titleAr: "ننفذ",
    titleEn: "Execute",
    descAr: "نطلع المحتوى والحملة بجودة عالية وسرعة تحترم وقتك.",
    descEn: "We deliver content and campaigns with high quality and speed that respects your time.",
  },
  {
    num: "04",
    titleAr: "نحسّن",
    titleEn: "Optimize",
    descAr: "نراقب الأرقام ونعدل الاتجاه أول بأول، ما نوقف عند أول نتيجة.",
    descEn: "We watch the numbers and adjust direction continuously — we never stop at the first result.",
  },
];

export const finalCta = {
  title: { ar: "عندك فكرة؟ خل نسوي منها حملة.", en: "Got an idea? Let's turn it into a campaign." } as Bilingual,
  subtitle: {
    ar: "احچيلنا عن مشروعك، وخلي الباقي علينا.",
    en: "Tell us about your project, and leave the rest to us.",
  } as Bilingual,
  cta: { ar: "ابدأ المشروع", en: "Start Your Project" } as Bilingual,
};

export const footer = {
  blurb: {
    ar: "وكالة إبداعية تصنع حملات وإعلانات ومحتوى يخلي براندك يتحچى عنه، مو بس يتشاف.",
    en: "A creative agency crafting campaigns, ads, and content that make your brand talked about — not just seen.",
  } as Bilingual,
  linksTitle: { ar: "روابط سريعة", en: "Quick Links" } as Bilingual,
  servicesTitle: { ar: "خدماتنا", en: "Services" } as Bilingual,
  contactTitle: { ar: "تواصل معنا", en: "Contact" } as Bilingual,
  rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" } as Bilingual,
};
