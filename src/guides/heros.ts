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
];
