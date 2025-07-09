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
    image: require('./images/heroes/juggernaut.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/juggernaut.jpg',
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '火枪',
    rank: Rank.A,
    sects: [CRIT],
    image: require('./images/heroes/sniper.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/sniper.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左右左' },
      { sects: [ULTI], description: '右左右' },
    ],
  },
  {
    name: '马西',
    rank: Rank.A,
    sects: [ATTACK],
    image: require('./images/heroes/marci.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/marci.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '月骑',
    rank: Rank.A,
    sects: [ATTACK,ULTI],
    image: require('./images/heroes/luna.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/luna.jpg',
    guides: [
      { sects: [ATTACK, CRIT,VULNERABLE], description: '右右右' },
      { sects: [ULTI,ATTACK], description: '左左右' },
    ],
  },
  {
    name: '圣堂',
    rank: Rank.A,
    sects: [ATTACK,SHIELD],
    image: require('./images/heroes/templarassassin.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/templarassassin.jpg',
    guides: [
      { sects: [SHIELD,EVADE], description: '左左左' },
      { sects: [ATTACK,SHIELD], description: '右左左' },
    ],
  },
  {
    name: '滚滚',
    rank: Rank.A,
    sects: [ATTACK,VULNERABLE],
    image: require('./images/heroes/pangolier.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/pangolier.jpg',
    guides: [
      { sects: [ATTACK,VULNERABLE], description: '右右右+晶' },
    ],
  },
  {
    name: '拍拍',
    rank: Rank.A,
    sects: [VULNERABLE],
    image: require('./images/heroes/ursa.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/ursa.jpg',
    guides: [
      { sects: [HEALTH,VULNERABLE], description: '左右右' },
    ],
  },
  {
    name: '巫妖',
    rank: Rank.A,
    sects: [FROST],
    image: require('./images/heroes/lich.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/lich.jpg',
    guides: [
      { sects: [FROST,HEALTH,REGEN], description: '左左左' },
    ],
  },
  {
    name: '剑姬',
    rank: Rank.A,
    sects: [FURY],
    image: require('./images/heroes/jianji.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/jianji.jjpg',
    guides: [
      { sects: [ULTI, FURY], description: '右右右' },
      { sects: [ATTACK, FURY], description: '左左左+晶' },
    ],
  },
  {
    name: '小骷髅',
    rank: Rank.A,
    sects: [FURY,WARD],
    image: require('./images/heroes/clinkz.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/clinkz.jpg',
    guides: [
      { sects: [ULTI], description: '左右左' },
      { sects: [FURY,WARD], description: '右右右' },
    ],
  },
  {
    name: '白虎',
    rank: Rank.A,
    sects: [WARD],
    image: require('./images/heroes/mirana.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/mirana.jpg',
    guides: [
      { sects: [ULTI], description: '左左左+晶' },
      { sects: [WARD,POISON,VULNERABLE], description: '右左右' },
    ],
  },
  {
    name: '大树',
    rank: Rank.A,
    sects: [WARD],
    image: require('./images/heroes/treantprotector.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/treantprotector.jpg',
    guides: [
      { sects: [WARD, CHAOS], description: '左左左' },
      { sects: [WARD, POISON, SHIELD], description: '左左左' },
    ],
  },
  {
    name: '尸王',
    rank: Rank.A,
    sects: [HEALTH, REGEN],
    image: require('./images/heroes/undying.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/undying.jpg',
    guides: [
      { sects: [REGEN, HEALTH], description: '左右右' },
    ],
  },
  {
    name: '小狗',
    rank: Rank.A,
    sects: [REGEN],
    image: require('./images/heroes/lifestealer.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/lifestealer.jpg',
    guides: [
      { sects: [REGEN, ATTACK], description: '左左左+晶' },
      { sects: [REGEN, ULTI], description: '右右右' },
    ],
  },
  {
    name: '毒龙',
    rank: Rank.A,
    sects: [POISON],
    image: require('./images/heroes/viper.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/viper.jpg',
    guides: [
      { sects: [ULTI, POISON], description: '左左右' },
      { sects: [HEALTH, POISON], description: '右右右' },
    ],
  },
  {
    name: '女王',
    rank: Rank.A,
    sects: [POISON],
    image: require('./images/heroes/queenofpain.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/queenofpain.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
    ],
  },
  {
    name: '宙斯',
    rank: Rank.A,
    sects: [ULTI],
    image: require('./images/heroes/zeus.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/zeus.jpg',
    guides: [
      { sects: [ATTACK], description: '左左左' },
      { sects: [ULTI], description: '右右右' },
    ],
  },
  {
    name: '莱恩',
    rank: Rank.A,
    sects: [CHAOS],
    image: require('./images/heroes/lion.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/lion.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左左右+晶' },
      { sects: [CHAOS, FROST, FURY], description: '右右右' },
    ],
  },
  {
    name: '魔尊',
    rank: Rank.B,
    sects: [CHAOS],
    image: require('./images/heroes/mozun.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/mozun.jjpg',
    guides: [
      { sects: [HEALTH, CHAOS], description: '右右右+晶' },
      { sects: [HEALTH, CHAOS], description: '右左右' },
    ],
  },
  {
    name: '锤妹',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/chuimei.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/chuimei.jjpg',
    guides: [
      { sects: [ULTI, SHIELD], description: '左左右+晶' },
      { sects: [CRIT, SHIELD], description: '左左右' },
    ],
  },
  {
    name: '军团',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/legioncommander.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/legioncommander.jpg',
    guides: [
      { sects: [ULTI, SHIELD], description: '右右左+晶' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '斧王',
    rank: Rank.B,
    sects: [SHIELD],
    image: require('./images/heroes/axe.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/axe.jpg',
    guides: [
      { sects: [ATTACK, SHIELD], description: '左左左' },
      { sects: [ULTI, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '亚巴顿',
    rank: Rank.B,
    sects: [REGEN, SHIELD],
    image: require('./images/heroes/abaddon.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/abaddon.jpg',
    guides: [
      { sects: [ULTI, SHIELD], description: '右左左' },
      { sects: [REGEN, SHIELD], description: '左右右' },
    ],
  },
  {
    name: 'NEC',
    rank: Rank.B,
    sects: [REGEN],
    image: require('./images/heroes/necrophos.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/necrophos.jpg',
    guides: [
      { sects: [ULTI, REGEN], description: '左右右' },
      { sects: [HEALTH, POISON], description: '右右右' },
    ],
  },
  {
    name: '天怒',
    rank: Rank.B,
    sects: [REGEN],
    image: require('./images/heroes/skywrathmage.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/skywrathmage.jpg',
    guides: [
      { sects: [ULTI], description: '左左左' },
      { sects: [CRIT, REGEN, FURY], description: '右右右' },
    ],
  },
  {
    name: '巫医',
    rank: Rank.B,
    sects: [REGEN, VULNERABLE],
    image: require('./images/heroes/witchdoctor.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/witchdoctor.jpg',
    guides: [
      { sects: [ULTI], description: '左左左' },
      { sects: [REGEN, VULNERABLE], description: '右右右' },
    ],
  },
  {
    name: '伐木机',
    rank: Rank.B,
    sects: [REGEN, CHAOS],
    image: require('./images/heroes/timbersaw.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/timbersaw.jpg',
    guides: [
      { sects: [REGEN, HEALTH, CHAOS], description: '右右左' },
      { sects: [REGEN, EVADE, CHAOS], description: '左左左' },
    ],
  },
  {
    name: '冰魂',
    rank: Rank.B,
    sects: [FROST],
    image: require('./images/heroes/ancientapparition.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/ancientapparition.jpg',
    guides: [
      { sects: [ULTI], description: '右右右' },
    ],
  },
  {
    name: '冰女',
    rank: Rank.B,
    sects: [FROST],
    image: require('./images/heroes/crystalmaiden.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/crystalmaiden.jpg',
    guides: [
      { sects: [CRIT, REGEN, FROST], description: '右右左' },
    ],
  },
  {
    name: '巨魔',
    rank: Rank.B,
    sects: [FROST, FURY],
    image: require('./images/heroes/trollwarlord.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/trollwarlord.jpg',
    guides: [
      { sects: [ATTACK, FURY], description: '左左左' },
      { sects: [FROST,HEALTH,VULNERABLE], description: '右右右' },
    ],
  },
  {
    name: '火女',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/lina.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/lina.jpg',
    guides: [
      { sects: [HEALTH, FURY], description: '左左左' },
      { sects: [ULTI], description: '左左右' },
    ],
  },
  {
    name: '神灵',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/huskar.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/huskar.jpg',
    guides: [
      { sects: [HEALTH, FURY], description: '左左左' },
    ],
  },
  {
    name: '火猫',
    rank: Rank.B,
    sects: [FURY],
    image: require('./images/heroes/emberspirit.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/emberspirit.jpg',
    guides: [
      { sects: [ULTI, FURY], description: '左左左' },
      { sects: [CRIT, FURY], description: '右右右' },
    ],
  },
  {
    name: '狼人',
    rank: Rank.B,
    sects: [WARD],
    image: require('./images/heroes/lycan.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/lycan.jpg',
    guides: [
      { sects: [ATTACK, WARD], description: '左左左' },
      { sects: [ULTI, WARD], description: '右右右' },
    ],
  },
  {
    name: '邪影芳灵',
    rank: Rank.B,
    sects: [WARD],
    image: require('./images/heroes/darkwillow.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/darkwillow.jpg',
    guides: [
      { sects: [WARD, ULTI], description: '右左左' },
    ],
  },
  {
    name: '猛犸',
    rank: Rank.B,
    sects: [HEALTH],
    image: require('./images/heroes/magnus.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/magnus.jpg',
    guides: [
      { sects: [HEALTH, ATTACK], description: '左左左' },
    ],
  },
  {
    name: '船长',
    rank: Rank.B,
    sects: [HEALTH],
    image: require('./images/heroes/kunkka.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/kunkka.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
      { sects: [HEALTH, VULNERABLE, CRIT], description: '左左左' },
    ],
  },
  {
    name: '屠夫',
    rank: Rank.B,
    sects: [POISON, HEALTH],
    image: require('./images/heroes/pudge.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/pudge.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
      { sects: [ULTI, HEALTH], description: '右左右' },
    ],
  },
  {
    name: '老鹿',
    rank: Rank.B,
    sects: [ULTI, HEALTH],
    image: require('./images/heroes/leshrac.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/leshrac.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
    ],
  },
  {
    name: '和尚',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/heshang.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/heshang.jjpg',
    guides: [{ sects: [ULTI, ATTACK], description: '右右左' }],
  },
  {
    name: '几把脸',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/facelessvoid.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/facelessvoid.jpg',
    guides: [
      { sects: [ATTACK, ULTI], description: '左右右+晶' },
      { sects: [ATTACK, CRIT], description: '左左左' },
    ],
  },
  {
    name: '鸟人',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/kez.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/kez.jpg',
    guides: [{ sects: [ATTACK, CRIT], description: '右右右' }],
  },
  {
    name: '长矛手',
    rank: Rank.B,
    sects: [ATTACK],
    image: require('./images/heroes/phantomlancer.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/phantomlancer.jpg',
    guides: [{ sects: [ATTACK, POISON], description: '右右右' }],
  },
  {
    name: '老奶奶',
    rank: Rank.B,
    sects: [ATTACK, ULTI],
    image: require('./images/heroes/muerta.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/muerta.jpg',
    guides: [
      { sects: [ATTACK, VULNERABLE], description: '左左左' },
      { sects: [ULTI, ATTACK], description: '左右右' }
    ],
  },
  {
    name: '墨客',
    rank: Rank.B,
    sects: [ULTI],
    image: require('./images/heroes/grimstroke.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/grimstroke.jpg',
    guides: [
      { sects: [ULTI, EVADE], description: '左左左' },
      { sects: [ULTI], description: '右右右' }
    ],
  },
  {
    name: '蓝胖',
    rank: Rank.B,
    sects: [ULTI, CRIT],
    image: require('./images/heroes/ogremagi.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/ogremagi.jpg',
    guides: [
      { sects: [ULTI, CRIT], description: '左左右' },
      { sects: [ATTACK], description: '右右右+晶' }
    ],
  },
  {
    name: '电棍',
    rank: Rank.B,
    sects: [VULNERABLE],
    image: require('./images/heroes/razor.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/razor.jpg',
    guides: [
      { sects: [ULTI, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '左右左' }
    ],
  },
  {
    name: '紫猫',
    rank: Rank.B,
    sects: [VULNERABLE, SHIELD],
    image: require('./images/heroes/voidspirit.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/voidspirit.jpg',
    guides: [
      { sects: [HEALTH, SHIELD, VULNERABLE], description: '左左左+晶' },
    ],
  },
  {
    name: '戴泽',
    rank: Rank.B,
    sects: [VULNERABLE, POISON],
    image: require('./images/heroes/dazzle.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/dazzle.jpg',
    guides: [
      { sects: [HEALTH, VULNERABLE], description: '左左左' },
      { sects: [HEALTH, POISON], description: '左右左' }
    ],
  },
  {
    name: '隐刺',
    rank: Rank.B,
    sects: [VULNERABLE, EVADE],
    image: require('./images/heroes/riki.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/riki.jpg',
    guides: [
      { sects: [HEALTH, EVADE, VULNERABLE], description: '右右右' },
    ],
  },
  {
    name: '电音',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/dianyin.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/dianyin.jjpg',
    guides: [
      { sects: [ULTI, REGEN], description: '左左左' },
      { sects: [ULTI, REGEN], description: '左左右' },
    ],
  },
  {
    name: '大圣',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/monkeyking.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/monkeyking.jpg',
    guides: [
      { sects: [SHIELD, REGEN], description: '左右右' },
    ],
  },
  {
    name: '小松鼠',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/hoodwink.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/hoodwink.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
      { sects: [VULNERABLE, WARD], description: '左左左' },
    ],
  },
  {
    name: 'TK',
    rank: Rank.B,
    sects: [NONE],
    image: require('./images/heroes/tinker.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/tinker.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '右右右' },
      { sects: [HEALTH, FROST, FURY], description: '左右右' },
    ],
  },
  {
    name: '吕布',
    rank: Rank.B,
    sects: [CRIT, REGEN],
    image: require('./images/heroes/chaosknight.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/chaosknight.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: '末日',
    rank: Rank.C,
    sects: [CHAOS],
    image: require('./images/heroes/doombringer.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/doombringer.jpg',
    guides: [
      { sects: [HEALTH, CHAOS], description: '右右右+晶' },
    ],
  },
  {
    name: '小牛',
    rank: Rank.B,
    sects: [CRIT],
    image: require('./images/heroes/earthshaker.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/earthshaker.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左左左' },
      { sects: [CRIT, REGEN, SHIELD], description: '右右右' },
    ],
  },
  {
    name: 'PA',
    rank: Rank.C,
    sects: [ATTACK, CRIT],
    image: require('./images/heroes/phantomassassin.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/phantomassassin.jpg',
    guides: [
      { sects: [ATTACK, CRIT], description: '左右右' },
    ],
  },
  {
    name: '小强',
    rank: Rank.C,
    sects: [VULNERABLE],
    image: require('./images/heroes/nyxassassin.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/nyxassassin.jpg',
    guides: [
      { sects: [ULTI], description: '右右右' },
      { sects: [HEALTH, VULNERABLE], description: '右左左' },
    ],
  },
  {
    name: '百戏',
    rank: Rank.C,
    sects: [POISON],
    image: require('./images/heroes/ringmaster.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/ringmaster.jpg',
    guides: [
      { sects: [HEALTH, POISON], description: '左左左' },
    ],
  },
  {
    name: '幽鬼',
    rank: Rank.C,
    sects: [EVADE],
    image: require('./images/heroes/spectre.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/spectre.jpg',
    guides: [
      { sects: [HEALTH, EVADE], description: '右左左' },
    ],
  },
  {
    name: '风行',
    rank: Rank.C,
    sects: [EVADE],
    image: require('./images/heroes/windrunner.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/windrunner.jpg',
    guides: [
      { sects: [ULTI, EVADE], description: '右右右' },
    ],
  },
  {
    name: '炼金',
    rank: Rank.C,
    sects: [NONE],
    image: require('./images/heroes/alchemist.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/alchemist.jpg',
    guides: [
      { sects: [ULTI, HEALTH], description: '右左左' },
      { sects: [NONE], description: '左左左+全随机' },
    ],
  },
  {
    name: '小小',
    rank: Rank.S,
    sects: [HEALTH],
    image: require('./images/heroes/tiny.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/tiny.jpg',
    guides: [
      { sects: [HEALTH, ATTACK], description: '左左左' },
      { sects: [HEALTH, POISON,VULNERABLE], description: '左右右' },
    ],
  },
  {
    name: '全能',
    rank: Rank.S,
    sects: [REGEN],
    image: require('./images/heroes/omniknight.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/omniknight.jpg',
    guides: [
      { sects: [REGEN, HEALTH,SHIELD], description: '左右右' },
    ],
  },
  {
    name: '战神',
    rank: Rank.S,
    sects: [SHIELD],
    image: require('./images/heroes/mars.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/mars.jpg',
    guides: [
      { sects: [SHIELD, CRIT], description: '左右右' },
    ],
  },
  {
    name: '小黑',
    rank: Rank.S,
    sects: [FROST],
    image: require('./images/heroes/drowranger.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/drowranger.jpg',
    guides: [
      { sects: [FROST, CRIT], description: '左左右' },
      { sects: [FROST, ATTACK], description: '右右右' },
    ],
  },
  {
    name: '影魔',
    rank: Rank.S,
    sects: [ATTACK,ULTI],
    image: require('./images/heroes/shadowfiend.jpg'),
    remoteImage: 'https://imgs-test.oss-cn-shanghai.aliyuncs.com/heroes/shadowfiend.jpg',
    guides: [
      { sects: [ULTI,CRIT,HEALTH], description: '右右右' },
    ],
  },
];
