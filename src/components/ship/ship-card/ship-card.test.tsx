import React from 'react';
import { render, screen } from '@testing-library/react';
import ShipCard from './ship-card';
import { Ship } from '../ship';

describe('ShipCard', () => {
  let shipData: Ship;
  beforeEach(() => {
    shipData = {
      id: '1',
      name: 'ship name',
      nation: 'US',
      tags: [],
      level: 5,

      icons: {
        local_contour: 'string',
        contour_alive: 'string',
        medium: 'medium_image',
        default: 'string',
        local_small: 'string',
        contour_dead: 'string',
        large: 'large_image',
        local_contour_dead: 'string',
        local_contour_alive: 'string',
        small: 'string',
        contour: 'string',
      },
      localization: {
        shortmark: {
          ru: 'ru',
          fr: 'fr',
          en: 'ship shortmark en',
          nl: 'nl',
          th: 'th',
          pt_br: 'pt_br',
          zh_cn: 'zn_cn',
          ko: 'ko',
          de: 'de',
          tr: 'tr',
          it: 'it',
          zh_sg: 'zh_sg',
          uk: 'string',
          es: 'string',
          cs: 'string',
          es_mx: 'string',
          ja: 'string',
          pl: 'string',
          zh_tw: 'string',
        },
        description: {
          ru: 'ship description',
          fr: 'string',
          en: 'string',
          nl: 'string',
          th: 'string',
          zh_cn: 'string',
          ko: 'string',
          de: 'string',
          tr: 'string',
          it: 'string',
          zh_sg: 'string',
          uk: 'string',
          es: 'string',
          cs: 'string',
          es_mx: 'string',
          ja: 'string',
          pl: 'string',
          zh_tw: 'string',
        },
        mark: {
          ru: 'string',
          fr: 'string',
          en: 'en',
          nl: 'string',
          th: 'string',
          pt_br: 'string',
          zh_cn: 'string',
          ko: 'string',
          de: 'string',
          tr: 'string',
          it: 'string',
          zh_sg: 'string',
          uk: 'string',
          es: 'string',
          cs: 'string',
          es_mx: 'string',
          ja: 'string',
          pl: 'string',
          zh_tw: 'string',
        },
      },
    };
  });
  it('should displays the ship name, description, and nation', () => {
    render(<ShipCard ship={shipData} />);

    expect(screen.getByText('ship name')).toBeInTheDocument();
    expect(screen.getByText('ship shortmark en')).toBeInTheDocument();
    expect(screen.getByText('US')).toBeInTheDocument();
  });

  it('should show the image has a right link parameter', () => {
    render(<ShipCard ship={shipData} />);
    expect(screen.getByRole('presentation')).toHaveAttribute(
      'src',
      'https://glossary-wows-global.gcdn.co/icons/large_image'
    );
  });
});
