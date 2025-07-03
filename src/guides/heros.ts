import { SECT } from './SectBadge';

const { FURY, ULTI, ATTACK } = SECT;

export const heros = [
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
