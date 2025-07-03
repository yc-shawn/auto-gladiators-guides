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

type GuideSet = {
  sets: SECT[];
  description?: string;
};

type Hero = {
  name: string;
  sects: SECT[];
  image: string;
  guides: GuideSet[];
};

export const heros: Hero[] = [
  {
    name: '剑圣',
    sects: [ATTACK, CRIT],
    image: require('./images/heros/Juggernaut.webp'),
    guides: [{ sets: [ULTI, CRIT], description: '左左左' }],
  },
  {
    name: '剑姬',
    sects: [FURY],
    image: require('./images/heros/jianji.png'),
    guides: [
      { sets: [ULTI, FURY], description: '右右右' },
      { sets: [ATTACK, FURY], description: '左左左' },
    ],
  },
];
