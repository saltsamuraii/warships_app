import React from 'react';
import { render, screen } from '@testing-library/react';
import ShipList from './ship-list';
import { Ship } from '../ship';

describe('ShipList', () => {
    let ships: Ship[];
    beforeEach(() => {
        ships = [{
        id: '1',
        name: 'ship name',
        nation: 'US',
        tags: [],
        level: 5,
    
        icons: {
          local_contour: 'string',
          contour_alive: 'string',
          medium: 'https://glossary-wows-global.gcdn.co/icons/test_icon.png',
          default: 'string',
          local_small: 'string',
          contour_dead: 'string',
          large: 'string',
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
      }, 
      {
        id: '2',
        name: 'ship name2',
        nation: 'RU',
        tags: [],
        level: 5,
    
        icons: {
          local_contour: 'string',
          contour_alive: 'string',
          medium: 'https://glossary-wows-global.gcdn.co/icons/test_icon.png',
          default: 'string',
          local_small: 'string',
          contour_dead: 'string',
          large: 'string',
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
      }];
      
    });
  it('displays a loading message when ships equal null', () => {
    render(<ShipList ships={[]} isLoading />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays the list of ships', () => {
    render(<ShipList ships={ships} isLoading={false} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(2);
    expect(screen.getByText('RU')).toBeInTheDocument();
  });
});


