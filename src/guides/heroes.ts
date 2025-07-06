import { SECT } from './SectBadge';

/* eslint-disable @typescript-eslint/no-unused-vars */
const {
  ATTACK,
  CRIT,
  EVADE,
  FURY,
  HEALTH,
  FROST,
  VULNERABLE,
  POISON,
  REGEN,
  ULTI,
  WARD,
  SHIELD,
  CHAOS,
  NONE,
} = SECT;
/* eslint-enable @typescript-eslint/no-unused-vars */

export enum Rank {
  S = 'S',
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

type GuideSet = {
  sects: SECT[];
  description?: string;
};

export type Hero = {
  name: string;
  rank: Rank;
  sects: SECT[];
  image: string;
  guides: GuideSet[];
};

export const heroes: Hero[] = [
  {
    name: '剑圣',
    rank: Rank.A,
    sects: [ATTACK, CRIT],
    image: require('./images/heroes/Juggernaut.webp'),
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '剑姬',
    rank: Rank.A,
    sects: [FURY],
    image: require('./images/heroes/jianji.jpeg'),
    guides: [
      { sects: [ULTI, FURY], description: '右右右' },
      { sects: [ATTACK, FURY], description: '左左左+晶' },
    ],
  },
  {
    name: '魔尊',
    rank: Rank.B,
    sects: [CHAOS],
    image: require('./images/heroes/mozun.jpeg'),
    guides: [
      { sects: [HEALTH, CHAOS], description: '右右右+晶' },
      { sects: [HEALTH, CHAOS], description: '右左右' },
    ],
  },
  {
    name: '锤妹',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/chuimei.jpeg'),
    guides: [
      { sects: [ULTI, SHIELD], description: '左左右+晶' },
      { sects: [CRIT, SHIELD], description: '左左右' },
    ],
  },
  {
    name: '和尚',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/heshang.jpeg'),
    guides: [{ sects: [ULTI, ATTACK], description: '右右左' }],
  },
  {
    name: '电音',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/dianyin.jpeg'),
    guides: [
      { sects: [ULTI, REGEN], description: '左左左' },
      { sects: [ULTI, REGEN], description: '左左右' },
    ],
  },
];
