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
  { key: "contact", label: { ar: "تواصل معنا", en: "Contact" }, href: "#contact" },
];

export const hero = {
  eyebrow: {
    ar: "وكالة تسويق وإعلانات متكاملة · العراق",
    en: "Full-service marketing & advertising · Iraq",
  } as Bilingual,
  titleLine1: { ar: "نصنع حملات", en: "We build campaigns" } as Bilingual,
  titleHighlight: { ar: "تحجي الناس عنها..", en: "people talk about" } as Bilingual,
  titleLine2: { ar: "مو تحجي عليها!", en: "— not the other way around." } as Bilingual,
  subtitle: {
    ar: "وكالة إعلانية متكاملة.. من الفكرة للترند. إحنا هنا حتى نخلي علامتك التجارية تترك بصمة ما تنمسح.",
    en: "A full-service agency — from idea to trend. We're here to make your brand leave a mark that never fades.",
  } as Bilingual,
  ctaPrimary: { ar: "خلينا نسولف بمشروعك", en: "Let's talk about your project" } as Bilingual,
  ctaSecondary: { ar: "شوف أعمالنا", en: "See our work" } as Bilingual,
  scrollHint: { ar: "اسحب لأسفل", en: "Scroll" } as Bilingual,
};

export const stats: { value: string; labelAr: string; labelEn: string }[] = [
  { value: "+100", labelAr: "عميل راضي", labelEn: "Happy clients" },
  { value: "+500", labelAr: "حملة ناجحة", labelEn: "Successful campaigns" },
  { value: "+3M", labelAr: "متابع وصلناله", labelEn: "Followers reached" },
];

export const servicesHeading = {
  eyebrow: { ar: "خدماتنا", en: "What We Do" } as Bilingual,
  titleA: { ar: "شنو ", en: "What can we " } as Bilingual,
  titleB: { ar: "نكدر", en: "do" } as Bilingual,
  titleC: { ar: " نسويلك؟", en: " for you?" } as Bilingual,
  description: {
    ar: "خدمات إعلانية شاملة تغطي كل احتياجات علامتك التجارية",
    en: "Complete advertising services covering every need of your brand",
  } as Bilingual,
};

export const services: {
  icon: "flame" | "camera" | "chart" | "pen";
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}[] = [
  {
    icon: "flame",
    titleAr: "صناعة الترندات",
    titleEn: "Trend Making",
    descAr: "نحول فكرتك لمحتوى ينتشر بسرعة الضوء — تريند حقيقي يحجي الناس عنه مو عليه",
    descEn: "We turn your idea into content that spreads at the speed of light — a real trend people talk about, not just look at.",
  },
  {
    icon: "camera",
    titleAr: "تصوير وإخراج",
    titleEn: "Filming & Directing",
    descAr: "إنتاج فيديو احترافي بأعلى جودة — من التصوير للمونتاج نخلي شغلك يشعل الشاشة",
    descEn: "Professional video at the highest quality — from shoot to edit, we make your work light up the screen.",
  },
  {
    icon: "chart",
    titleAr: "إستراتيجيات ديجيتال",
    titleEn: "Digital Strategies",
    descAr: "خطط تسويقية مبنية على بيانات وأرقام حقيقية تودي علامتك للمكان الصح",
    descEn: "Marketing plans built on real data and numbers that take your brand to the right place.",
  },
  {
    icon: "pen",
    titleAr: "إدارة المحتوى",
    titleEn: "Content Management",
    descAr: "محتوى يومي منظم وجذاب يبقي جمهورك متفاعل وعلامتك دايماً في الصورة",
    descEn: "Daily, engaging content that keeps your audience active and your brand always in the picture.",
  },
];

export const workHeading = {
  eyebrow: { ar: "أعمالنا", en: "Our Work" } as Bilingual,
  title: { ar: "شغلنا يحجي عنا", en: "Our work speaks for us" } as Bilingual,
  description: {
    ar: "نتائج حقيقية لعملاء حقيقيين — كل مشروع قصة نجاح",
    en: "Real results for real clients — every project is a success story",
  } as Bilingual,
  viewAll: { ar: "شوف كل الأعمال", en: "View all projects" } as Bilingual,
};

export const work: {
  slug: string;
  tagAr: string;
  tagEn: string;
  titleAr: string;
  titleEn: string;
  categoryAr: string;
  categoryEn: string;
  descAr: string;
  descEn: string;
  image: string;
}[] = [
  {
    slug: "ramadan-golden-campaign",
    tagAr: "حملة موسمية",
    tagEn: "Seasonal Campaign",
    titleAr: "حملة رمضان الذهبية",
    titleEn: "Golden Ramadan Campaign",
    categoryAr: "سوشيال ميديا",
    categoryEn: "Social Media",
    descAr:
      "حملة رمضانية مبنية على هوية بصرية أحمر وذهبي، بمحتوى يومي يليق بروح الشهر ويجبر الناس يوقفون عند السكرول.",
    descEn:
      "A Ramadan campaign built on a red-and-gold identity, with daily content that fits the spirit of the month and stops the scroll.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&fit=crop&auto=format",
  },
  {
    slug: "brand-identity",
    tagAr: "هوية بصرية",
    tagEn: "Brand Identity",
    titleAr: "هوية علامة تجارية",
    titleEn: "Brand Identity",
    categoryAr: "برندنغ",
    categoryEn: "Branding",
    descAr:
      "بناء هوية كاملة من الصفر: الألوان، الخطوط، وقواعد الاستخدام — حتى ينعرف براندك من أول نظرة.",
    descEn:
      "A complete identity from scratch: colors, typography, and usage rules — so your brand is recognized at first glance.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&fit=crop&auto=format",
  },
  {
    slug: "product-launch",
    tagAr: "إطلاق براند",
    tagEn: "Brand Launch",
    titleAr: "إطلاق منتج جديد",
    titleEn: "Product Launch",
    categoryAr: "تصوير وإخراج",
    categoryEn: "Filming & Directing",
    descAr:
      "لقطات إعلانية بجودة سينمائية تعرّف الجمهور بالمنتج قبل ما ينزل — من الكونسبت للمونتاج.",
    descEn:
      "Cinematic ad shots that introduce the product before it lands — from concept to final cut.",
    image: "images/work-1.jpg",
  },
  {
    slug: "social-media-campaign",
    tagAr: "حملة محتوى",
    tagEn: "Content Campaign",
    titleAr: "حملة التواصل الاجتماعي",
    titleEn: "Social Media Campaign",
    categoryAr: "إدارة المحتوى",
    categoryEn: "Content Management",
    descAr:
      "محتوى يومي للسوشيال ميديا يبني حضور ثابت ويجبر المتابعين يتفاعلون، مو بس يسحبون لأسفل.",
    descEn:
      "Daily social content that builds a steady presence and makes followers engage — not just scroll.",
    image: "images/work-2.jpg",
  },
  {
    slug: "summer-trend",
    tagAr: "صناعة ترند",
    tagEn: "Trend Making",
    titleAr: "ترند الصيف",
    titleEn: "Summer Trend",
    categoryAr: "صناعة الترندات",
    categoryEn: "Trend Making",
    descAr:
      "رصدنا الترند وبنينا عليه محتوى خليه ينتشر بسرعة — والبراند صار جزء من الحديث مو طالع منه.",
    descEn:
      "We tracked the trend, built content that spread fast — and made the brand part of the conversation, not outside it.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&fit=crop&auto=format",
  },
  {
    slug: "growth-strategy",
    tagAr: "إستراتيجية نمو",
    tagEn: "Growth Strategy",
    titleAr: "إستراتيجية النمو",
    titleEn: "Growth Strategy",
    categoryAr: "إستراتيجيات ديجيتال",
    categoryEn: "Digital Strategies",
    descAr:
      "خطة نمو تربط المحتوى والإعلان والمبيعات ببعض، وتحدد وين تحط فلوك خطوة بخطوة.",
    descEn:
      "A growth plan connecting content, ads, and sales — showing exactly where your budget goes, step by step.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&fit=crop&auto=format",
  },
];

export const workArchive = {
  back: { ar: "العودة للرئيسية", en: "Back to Home" } as Bilingual,
  titleA: { ar: "أرشيف", en: "Archive" } as Bilingual,
  titleB: { ar: "الأعمال", en: "Projects" } as Bilingual,
  description: {
    ar: "كل مشاريعنا بمكان واحد — من الهوية للحملة للتصوير.",
    en: "All our projects in one place — from identity to campaign to production.",
  } as Bilingual,
};

export const workDetail = {
  back: { ar: "العودة للأرشيف", en: "Back to Archive" } as Bilingual,
  serviceLabel: { ar: "الخدمة", en: "Service" } as Bilingual,
  typeLabel: { ar: "النوع", en: "Type" } as Bilingual,
  notFound: { ar: "المشروع مو موجود", en: "Project not found" } as Bilingual,
  next: { ar: "المشروع الجاي", en: "Next Project" } as Bilingual,
  viewAll: { ar: "شوف الأرشيف", en: "View Archive" } as Bilingual,
  ctaTitle: { ar: "عندك مشروع مثل هاي؟", en: "Got a project like this?" } as Bilingual,
  cta: { ar: "خلنا نسولف", en: "Let's talk" } as Bilingual,
};

export const finalCta = {
  available: { ar: "متاحين لمشروعك", en: "Open for new projects" } as Bilingual,
  titleA: { ar: "عندك ", en: "You've got " } as Bilingual,
  titleHighlight: { ar: "متابعين", en: "followers" } as Bilingual,
  titleB: { ar: "بس ماكو زبائن؟", en: " but no customers?" } as Bilingual,
  lead: { ar: "إحنا نحل هاي المشكلة.", en: "We solve this." } as Bilingual,
  paragraph: {
    ar: "مو بس متابعين — إحنا نحولهم لزبائن حقيقيين يرجعون ويجيبون ناس ثانية معاهم.",
    en: "Not just followers — we turn them into real customers who come back and bring others along.",
  } as Bilingual,
  cta: { ar: "ابدي ويانا هسه", en: "Start with us now" } as Bilingual,
  chips: [
    { icon: "pin" as const, ar: "بغداد، العراق", en: "Baghdad, Iraq" },
    { icon: "clock" as const, ar: "متوفرين 24/7", en: "Available 24/7" },
    { icon: "spark" as const, ar: "استشارة مجانية", en: "Free consultation" },
  ],
};

export const footer = {
  blurb: {
    ar: "وكالة إبداعية تصنع حملات وإعلانات ومحتوى يخلي براندك يتحجى عنه، مو بس يتشاف.",
    en: "A creative agency crafting campaigns, ads, and content that make your brand talked about — not just seen.",
  } as Bilingual,
  linksTitle: { ar: "روابط سريعة", en: "Quick Links" } as Bilingual,
  servicesTitle: { ar: "خدماتنا", en: "Services" } as Bilingual,
  contactTitle: { ar: "تواصل معنا", en: "Contact" } as Bilingual,
  rights: { ar: "جميع الحقوق محفوظة", en: "All rights reserved" } as Bilingual,
};
