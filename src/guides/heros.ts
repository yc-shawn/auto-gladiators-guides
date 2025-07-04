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

type Hero = {
  name: string;
  rank: Rank;
  sects: SECT[];
  image: string;
  guides: GuideSet[];
};

export const heros: Hero[] = [
  {
    name: '剑圣',
    rank: Rank.A,
    sects: [ATTACK, CRIT],
    image: require('./images/heros/Juggernaut.webp'),
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '剑姬',
    rank: Rank.A,
    sects: [FURY],
    image: require('./images/heros/jianji.png'),
    guides: [
      { sects: [ULTI, FURY], description: '右右右' },
      { sects: [ATTACK, FURY], description: '左左左+晶' },
    ],
  },
  {
    name: '魔尊',
    rank: Rank.B,
    sects: [CHAOS],
    image: require('./images/heros/mozun.png'),
    guides: [
      { sects: [HEALTH, CHAOS], description: '右右右+晶' },
      { sects: [HEALTH, CHAOS], description: '右左右' },
    ],
  },
  {
    name: '锤妹',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heros/chuimei.png'),
    guides: [
      { sects: [ULTI, SHIELD], description: '左左右+晶' },
      { sects: [CRIT, SHIELD], description: '左左右' },
    ],
  },
  {
    name: '和尚',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heros/heshang.png'),
    guides: [{ sects: [ULTI, ATTACK], description: '右右左' }],
  },
  {
    name: '电音',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heros/dianyin.png'),
    guides: [
      { sects: [ULTI, REGEN], description: '左左左' },
      { sects: [ULTI, REGEN], description: '左左右' },
    ],
  },
];
