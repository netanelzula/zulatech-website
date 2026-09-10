/**
 * הגדרות מרכזיות של האתר
 * כל פרטי העסק והניווט במקום אחד
 */

export const site = {
  name: "Zulatech",
  slogan: "העסק והבית שלך בידיים טובות.",
  phone: "054-420-2284",
  phoneHref: "tel:+972544202284",
  whatsapp: "https://wa.me/972544202284",
  address: "השושנים 6, חדרה",
  hours: "א'-ה' 09:00–17:00 · ו' וערבי חג 09:00–14:00",
  googleProfile: "https://maps.app.goo.gl/tvhLiUNe1o8iRGFZ8",
  rating: "5.0",
  reviewCount: 63,
  yearsExperience: 20,
  social: {
    facebook: "https://www.facebook.com/zulatech9/",
    instagram: "https://www.instagram.com/zulatech_/",
  },
  badges: ["טכנאי מחשבים", "CCNA", "חשמלאי בעל רישיון"],
} as const;

export type NavLink = { label: string; href: string };

/** קישורי הניווט - הסדר שאושר: מחשבים, תקשורת, חשמל, מצלמות */
export const nav = {
  audiences: [
    { label: "לבית", href: "/labayit" },
    { label: "לעסק", href: "/lesek" },
    { label: "לאדריכלים", href: "/adrichalim" },
    { label: "למעצבי פנים", href: "/adrichalim" },
    { label: "לקבלנים", href: "/kablanim" },
  ] as NavLink[],
  services: [
    { label: "מעבדת מחשבים", href: "/machshevim" },
    { label: "תקשורת ורשתות", href: "/tikshoret" },
    { label: "חשמל", href: "/chashmal" },
    { label: "מצלמות אבטחה", href: "/matzlamot" },
  ] as NavLink[],
  areas: [
    { label: "כל אזורי השירות", href: "/ezorei-sherut" },
    { label: "חדרה והסביבה", href: "/ezorei-sherut#hadera" },
    { label: "חיפה והסביבה", href: "/ezorei-sherut#haifa" },
    { label: "השרון", href: "/ezorei-sherut#sharon" },
    { label: "מרכז", href: "/ezorei-sherut#merkaz" },
  ] as NavLink[],
  main: [
    { label: "פרויקטים", href: "/proyektim" },
    { label: "עלינו", href: "/alenu" },
    { label: "בלוג", href: "/blog" },
  ] as NavLink[],
  legal: [
    { label: "מדיניות פרטיות", href: "/mediniyut-privatiyut" },
    { label: "הצהרת נגישות", href: "/hatzharat-negishut" },
  ] as NavLink[],
};

/** טקסט הכפתור הצף לפי עמוד - מוצג בדסקטופ בלבד */
export const ctaLabels: Record<string, string> = {
  "/chashmal": "יש תקלת חשמל? חייגו: ",
  "/machshevim": "המחשב תקוע? חייגו: ",
  "/tikshoret": "בעיית רשת? חייגו: ",
  "/matzlamot": "רוצים מצלמות? חייגו: ",
};
