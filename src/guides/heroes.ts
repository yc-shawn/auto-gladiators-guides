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
  remoteImage?: string; // url to fast loading image from internet
  guides: GuideSet[];
};

export const heroes: Hero[] = [
  {
    name: '剑圣',
    rank: Rank.A,
    sects: [ATTACK, CRIT],
    image: require('./images/heroes/juggernaut.png'),
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '火枪',
    rank: Rank.A,
    sects: [CRIT],
    image: require('./images/heroes/sniper.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左右左' },
      { sects: [ULTI], description: '右左右' },
    ],
  },
  {
    name: '马西',
    rank: Rank.A,
    sects: [ATTACK],
    image: require('./images/heroes/marci.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '月骑',
    rank: Rank.A,
    sects: [ATTACK,ULTI],
    image: require('./images/heroes/luna.png'),
    guides: [
      { sects: [ATTACK, CRIT,VULNERABLE], description: '右右右' },
      { sects: [ULTI,ATTACK], description: '左左右' },
    ],
  },
  {
    name: '圣堂',
    rank: Rank.A,
    sects: [ATTACK,SHIELD],
    image: require('./images/heroes/templarassassin.png'),
    guides: [
      { sects: [SHIELD,EVADE], description: '左左左' },
      { sects: [ATTACK,SHIELD], description: '右左左' },
    ],
  },
  {
    name: '滚滚',
    rank: Rank.A,
    sects: [ATTACK,VULNERABLE],
    image: require('./images/heroes/pangolier.png'),
    guides: [
      { sects: [ATTACK,VULNERABLE], description: '右右右+晶' },
    ],
  },
  {
    name: '拍拍',
    rank: Rank.A,
    sects: [VULNERABLE],
    image: require('./images/heroes/ursa.png'),
    guides: [
      { sects: [HEALTH,VULNERABLE], description: '左右右' },
    ],
  },
  {
    name: '巫妖',
    rank: Rank.A,
    sects: [FROST],
    image: require('./images/heroes/lich.png'),
    guides: [
      { sects: [FROST,HEALTH,REGEN], description: '左左左' },
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
    name: '小骷髅',
    rank: Rank.A,
    sects: [FURY,WARD],
    image: require('./images/heroes/clinkz.png'),
    guides: [
      { sects: [ULTI], description: '左右左' },
      { sects: [FURY,WARD], description: '右右右' },
    ],
  },
  {
    name: '白虎',
    rank: Rank.A,
    sects: [WARD],
    image: require('./images/heroes/mirana.png'),
    guides: [
      { sects: [ULTI], description: '左左左+晶' },
      { sects: [WARD,POISON,VULNERABLE], description: '右左右' },
    ],
  },
  {
    name: '大树',
    rank: Rank.A,
    sects: [WARD],
    image: require('./images/heroes/treantprotector.png'),
    guides: [
      { sects: [WARD, CHAOS], description: '左左左' },
      { sects: [WARD, POISON, SHIELD], description: '左左左' },
    ],
  },
  {
    name: '尸王',
    rank: Rank.A,
    sects: [HEALTH, REGEN],
    image: require('./images/heroes/undying.png'),
    guides: [
      { sects: [REGEN, HEALTH], description: '左右右' },
    ],
  },
  {
    name: '小狗',
    rank: Rank.A,
    sects: [REGEN],
    image: require('./images/heroes/lifestealer.png'),
    guides: [
      { sects: [REGEN, ATTACK], description: '左左左+晶' },
      { sects: [REGEN, ULTI], description: '右右右' },
    ],
  },
  {
    name: '毒龙',
    rank: Rank.A,
    sects: [POISON],
    image: require('./images/heroes/viper.png'),
    guides: [
      { sects: [ULTI, POISON], description: '左左右' },
      { sects: [HEALTH, POISON], description: '右右右' },
    ],
  },
  {
    name: '女王',
    rank: Rank.A,
    sects: [POISON],
    image: require('./images/heroes/queenofpain.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
    ],
  },
  {
    name: '宙斯',
    rank: Rank.A,
    sects: [ULTI],
    image: require('./images/heroes/zeus.png'),
    guides: [
      { sects: [ATTACK], description: '左左左' },
      { sects: [ULTI], description: '右右右' },
    ],
  },
  {
    name: '莱恩',
    rank: Rank.A,
    sects: [CHAOS],
    image: require('./images/heroes/lion.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左左右+晶' },
      { sects: [CHAOS, FROST, FURY], description: '右右右' },
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
    name: '军团',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/legioncommander.png'),
    guides: [
      { sects: [ULTI, SHIELD], description: '右右左+晶' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '斧王',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/axe.png'),
    guides: [
      { sects: [ATTACK, SHIELD], description: '左左左' },
      { sects: [ULTI, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '亚巴顿',
    rank: Rank.B,
    sects: [REGEN, SHIELD],
    image: require('./images/heroes/abaddon.png'),
    guides: [
      { sects: [ULTI, SHIELD], description: '右左左' },
      { sects: [REGEN, SHIELD], description: '左右右' },
    ],
  },
  {
    name: 'NEC',
    rank: Rank.B,
    sects: [REGEN],
    image: require('./images/heroes/necrophos.png'),
    guides: [
      { sects: [ULTI, REGEN], description: '左右右' },
      { sects: [HEALTH, POISON], description: '右右右' },
    ],
  },
  {
    name: '天怒',
    rank: Rank.B,
    sects: [REGEN],
    image: require('./images/heroes/skywrathmage.png'),
    guides: [
      { sects: [ULTI], description: '左左左' },
      { sects: [CRIT, REGEN, FURY], description: '右右右' },
    ],
  },
  {
    name: '巫医',
    rank: Rank.B,
    sects: [REGEN, VULNERABLE],
    image: require('./images/heroes/witchdoctor.png'),
    guides: [
      { sects: [ULTI], description: '左左左' },
      { sects: [REGEN, VULNERABLE], description: '右右右' },
    ],
  },
  {
    name: '伐木机',
    rank: Rank.B,
    sects: [REGEN, CHAOS],
    image: require('./images/heroes/timbersaw.png'),
    guides: [
      { sects: [REGEN, HEALTH, CHAOS], description: '右右左' },
      { sects: [REGEN, EVADE, CHAOS], description: '左左左' },
    ],
  },
  {
    name: '冰魂',
    rank: Rank.B,
    sects: [FROST],
    image: require('./images/heroes/ancientapparition.png'),
    guides: [
      { sects: [ULTI], description: '右右右' },
    ],
  },
  {
    name: '冰女',
    rank: Rank.B,
    sects: [FROST],
    image: require('./images/heroes/crystalmaiden.png'),
    guides: [
      { sects: [CRIT, REGEN, FROST], description: '右右左' },
    ],
  },
  {
    name: '巨魔',
    rank: Rank.B,
    sects: [FROST, FURY],
    image: require('./images/heroes/trollwarlord.png'),
    guides: [
      { sects: [ATTACK, FURY], description: '左左左' },
      { sects: [FROST,HEALTH,VULNERABLE], description: '右右右' },
    ],
  },
  {
    name: '火女',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/lina.png'),
    guides: [
      { sects: [HEALTH, FURY], description: '左左左' },
      { sects: [ULTI], description: '左左右' },
    ],
  },
  {
    name: '神灵',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/huskar.png'),
    guides: [
      { sects: [HEALTH, FURY], description: '左左左' },
    ],
  },
  {
    name: '火猫',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/emberspirit.png'),
    guides: [
      { sects: [ULTI, FURY], description: '左左左' },
      { sects: [CRIT, FURY], description: '右右右' },
    ],
  },
  {
    name: '狼人',
    rank: Rank.B,
    sects: [WARD],
    image: require('./images/heroes/lycan.png'),
    guides: [
      { sects: [ATTACK, WARD], description: '左左左' },
      { sects: [ULTI, WARD], description: '右右右' },
    ],
  },
  {
    name: '邪影芳灵',
    rank: Rank.B,
    sects: [WARD],
    image: require('./images/heroes/darkwillow.png'),
    guides: [
      { sects: [WARD, ULTI], description: '右左左' },
    ],
  },
  {
    name: '猛犸',
    rank: Rank.B,
    sects: [HEALTH],
    image: require('./images/heroes/magnus.png'),
    guides: [
      { sects: [HEALTH, ATTACK], description: '左左左' },
    ],
  },
  {
    name: '船长',
    rank: Rank.B,
    sects: [HEALTH],
    image: require('./images/heroes/kunkka.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
      { sects: [HEALTH, VULNERABLE, CRIT], description: '左左左' },
    ],
  },
  {
    name: '屠夫',
    rank: Rank.B,
    sects: [POISON, HEALTH],
    image: require('./images/heroes/pudge.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
      { sects: [ULTI, HEALTH], description: '右左右' },
    ],
  },
  {
    name: '老鹿',
    rank: Rank.B,
    sects: [ULTI, HEALTH],
    image: require('./images/heroes/leshrac.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
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
    name: '几把脸',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/facelessvoid.png'),
    guides: [
      { sects: [ATTACK, ULTI], description: '左右右+晶' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '鸟人',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/kez.png'),
    guides: [{ sects: [ATTACK, CRIT], description: '右右右' }],
  },
  {
    name: '长矛手',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/phantomlancer.png'),
    guides: [{ sects: [ATTACK, POISON], description: '右右右' }],
  },
  {
    name: '老奶奶',
    rank: Rank.B,
    sects: [ATTACK, ULTI],
    image: require('./images/heroes/muerta.png'),
    guides: [
      { sects: [ATTACK, VULNERABLE], description: '左左左' },
      { sects: [ULTI, ATTACK], description: '左右右' }
    ],
  },
  {
    name: '墨客',
    rank: Rank.B,
    sects: [ULTI],
    image: require('./images/heroes/grimstroke.png'),
    guides: [
      { sects: [ULTI, EVADE], description: '左左左' },
      { sects: [ULTI], description: '右右右' }
    ],
  },
  {
    name: '蓝胖',
    rank: Rank.B,
    sects: [ULTI, CRIT],
    image: require('./images/heroes/ogremagi.png'),
    guides: [
      { sects: [ULTI, CRIT], description: '左左右' },
      { sects: [ATTACK], description: '右右右+晶' }
    ],
  },
  {
    name: '电棍',
    rank: Rank.B,
    sects: [VULNERABLE],
    image: require('./images/heroes/razor.png'),
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '左右左' }
    ],
  },
  {
    name: '紫猫',
    rank: Rank.B,
    sects: [VULNERABLE, SHIELD],
    image: require('./images/heroes/voidspirit.png'),
    guides: [
      { sects: [HEALTH, SHIELD, VULNERABLE], description: '左左左+晶' },
    ],
  },
  {
    name: '戴泽',
    rank: Rank.B,
    sects: [VULNERABLE, POISON],
    image: require('./images/heroes/dazzle.png'),
    guides: [
      { sects: [HEALTH, VULNERABLE], description: '左左左' },
      { sects: [HEALTH, POISON], description: '左右左' }
    ],
  },
  {
    name: '隐刺',
    rank: Rank.B,
    sects: [VULNERABLE, EVADE],
    image: require('./images/heroes/riki.png'),
    guides: [
      { sects: [HEALTH, EVADE, VULNERABLE], description: '右右右' },
    ],
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
  {
    name: '大圣',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/monkeyking.png'),
    guides: [
      { sects: [SHIELD, REGEN], description: '左右右' },
    ],
  },
  {
    name: '小松鼠',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/hoodwink.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
      { sects: [VULNERABLE, WARD], description: '左左左' },
    ],
  },
  {
    name: 'TK',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/tinker.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
      { sects: [HEALTH, FROST, FURY], description: '左右右' },
    ],
  },
  {
    name: '吕布',
    rank: Rank.B,
    sects: [CRIT, REGEN],
    image: require('./images/heroes/chaosknight.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '末日',
    rank: Rank.C,
    sects: [CHAOS],
    image: require('./images/heroes/doombringer.png'),
    guides: [
      { sects: [HEALTH, CHAOS], description: '右右右+晶' },
    ],
  },
  {
    name: '小牛',
    rank: Rank.B,
    sects: [CRIT],
    image: require('./images/heroes/earthshaker.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: 'PA',
    rank: Rank.C,
    sects: [ATTACK, CRIT],
    image: require('./images/heroes/phantomassassin.png'),
    guides: [
      { sects: [ATTACK, CRIT], description: '左右右' },
    ],
  },
  {
    name: '小强',
    rank: Rank.C,
    sects: [VULNERABLE],
    image: require('./images/heroes/nyxassassin.png'),
    guides: [
      { sects: [ULTI], description: '右右右' },
      { sects: [HEALTH, VULNERABLE], description: '右左左' },
    ],
  },
  {
    name: '百戏',
    rank: Rank.C,
    sects: [POISON],
    image: require('./images/heroes/ringmaster.png'),
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
    ],
  },
  {
    name: '幽鬼',
    rank: Rank.C,
    sects: [EVADE],
    image: require('./images/heroes/spectre.png'),
    guides: [
      { sects: [HEALTH, EVADE], description: '右左左' },
    ],
  },
  {
    name: '风行',
    rank: Rank.C,
    sects: [EVADE],
    image: require('./images/heroes/windrunner.png'),
    guides: [
      { sects: [ULTI, EVADE], description: '右右右' },
    ],
  },
  {
    name: '炼金',
    rank: Rank.C,
    sects: [NONE],
    image: require('./images/heroes/alchemist.png'),
    guides: [
      { sects: [ULTI, HEALTH], description: '右左左' },
      { sects: [NONE], description: '左左左+全随机' },
    ],
  },
  {
    name: '小小',
    rank: Rank.S,
    sects: [HEALTH],
    image: require('./images/heroes/tiny.png'),
    remoteImage:
      'https://tiermaker.com/images/template_images/2022/15700042/all-dota-2-heroes-732e-15700042/tinyiconpng.png',
    guides: [
      { sects: [HEALTH, ATTACK], description: '左左左' },
      { sects: [HEALTH, POISON,VULNERABLE], description: '左右右' },
    ],
  },
  {
    name: '全能',
    rank: Rank.S,
    sects: [REGEN],
    image: require('./images/heroes/omniknight.png'),
    guides: [
      { sects: [REGEN, HEALTH,SHIELD], description: '左右右' },
    ],
  },
  {
    name: '战神',
    rank: Rank.S,
    sects: [SHIELD],
    image: require('./images/heroes/mars.png'),
    guides: [
      { sects: [SHIELD, CRIT], description: '左右右' },
    ],
  },
  {
    name: '小黑',
    rank: Rank.S,
    sects: [FROST],
    image: require('./images/heroes/drowranger.png'),
    guides: [
      { sects: [FROST, CRIT], description: '左左右' },
      { sects: [FROST, ATTACK], description: '右右右' },
    ],
  },
  {
    name: '影魔',
    rank: Rank.S,
    sects: [ATTACK,ULTI],
    image: require('./images/heroes/shadowfiend.png'),
    guides: [
      { sects: [ULTI,CRIT,HEALTH], description: '右右右' },
    ],
  },
];
