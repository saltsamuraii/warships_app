export interface Ship {
  id: string;
  name: string;
  nation: string;
  tags: string[];
  level: number;

  icons: {
    local_contour: string;
    contour_alive: string;
    medium: string;
    default: string;
    local_small: string;
    contour_dead: string;
    large: string;
    local_contour_dead: string;
    local_contour_alive: string;
    small: string;
    contour: string;
  };

  localization: {
    shortmark: {
      ru: string;
      fr: string;
      en: string;
      nl: string;
      th: string;
      pt_br: string;
      zh_cn: string;
      ko: string;
      de: string;
      tr: string;
      it: string;
      zh_sg: string;
      uk: string;
      es: string;
      cs: string;
      es_mx: string;
      ja: string;
      pl: string;
      zh_tw: string;
    };
    description: {
      ru: string;
      fr: string;
      en: string;
      nl: string;
      th: string;
      zh_cn: string;
      ko: string;
      de: string;
      tr: string;
      it: string;
      zh_sg: string;
      uk: string;
      es: string;
      cs: string;
      es_mx: string;
      ja: string;
      pl: string;
      zh_tw: string;
    };
    mark: {
      ru: string;
      fr: string;
      en: string;
      nl: string;
      th: string;
      pt_br: string;
      zh_cn: string;
      ko: string;
      de: string;
      tr: string;
      it: string;
      zh_sg: string;
      uk: string;
      es: string;
      cs: string;
      es_mx: string;
      ja: string;
      pl: string;
      zh_tw: string;
    };
  };
};
