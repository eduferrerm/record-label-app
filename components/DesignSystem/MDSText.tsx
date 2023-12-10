const MDSFonts = {
  sans: "font-mds-sans",
  condMed: "font-mds-sans-cond-med",
  condBold: "font-mds-sans-cond-bold",
};

const MDSTextStyles = {
  // General
  ["title"]: `${MDSFonts.condBold} mds-text-5 leading-none`,
  ["subtitle"]: `${MDSFonts.condMed} mds-text-3 leading-none`,
  ["primary-label"]: `${MDSFonts.condBold} mds-text-1 leading-none`,
  ["meta-data"]: `${MDSFonts.condMed} mds-text-1 leading-none`,
  ["paragraph"]: `${MDSFonts.sans} mds-text-2 leading-relaxed`,
  // Hero
  ["hero-card-band"]: `${MDSFonts.condBold} mds-text-1 leading-none uppercase bg-mds-grey-600 text-mds-grey-50 px-2 py-1`,
  ["hero-card-song-name"]: `${MDSFonts.condBold} mds-text-4 leading-none`,
  // Hero Card Details
  ["hero-card-detail-song-name"]: `${MDSFonts.condBold} mds-text-7 leading-none`,
  ["hero-card-detail-grid-title"]: `${MDSFonts.condBold} mds-text-1 leading-none`,
  ["hero-card-detail-grid-description"]: `${MDSFonts.condMed} mds-text-1 leading-none`,
  ["band-profile-name"]: `${MDSFonts.condBold} mds-text-1 leading-none`,
};

const MDSTextColor = {
  ["mds-grey-50"]: "text-mds-grey-50",
  ["mds-grey-100"]: "text-mds-grey-100",
  ["mds-grey-200"]: "text-mds-grey-200",
  ["mds-grey-300"]: "text-mds-grey-300",
  ["mds-grey-400"]: "text-mds-grey-400",
  ["mds-grey-500"]: "text-mds-grey-500",
  ["mds-grey-600"]: "text-mds-grey-600",
};

type MDSTextStyleNames = keyof typeof MDSTextStyles;

type MDSTextColorNames = keyof typeof MDSTextColor;

interface MDSTextType {
  text: string;
  styleName: MDSTextStyleNames;
  color?: MDSTextColorNames;
}

function getStyle(style: MDSTextStyleNames): string {
  return MDSTextStyles[style];
}

function getColor(style: MDSTextColorNames): string {
  return MDSTextColor[style];
}

export default function MDSText({ text, styleName, color }: MDSTextType) {
  return (
    <span className={`${getStyle(styleName)} ${color && getColor(color)}`}>
      {text}
    </span>
  );
}
