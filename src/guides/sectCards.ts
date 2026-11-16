import { SECT } from './SectBadge';

export type SectCard = {
  id: string;
  name: string;
  image: string;
  sects: SECT[];
  description: string;
};

export type SectCardSection = {
  sect: SECT;
  title: string;
  cards: SectCard[];
};

export const sectCardSections: SectCardSection[] = [
  {
    sect: SECT.ATTACK,
    title: '普攻',
    cards: [
      {
        id: 'keen-edge',
        name: '锐利锋刃',
        image: require('./images/sects/keen-edge.png'),
        sects: [SECT.ATTACK],
        description: '提升5/10/15/20/30点基础攻击力',
      },
      {
        id: 'worn-edge',
        name: '磨损锋刃',
        image: require('./images/sects/worn-edge.png'),
        sects: [SECT.ATTACK, SECT.EVADE],
        description:
          '敌人的攻击有12%/16%/20%/24%/32%的概率被格挡，减少8%/16%/24%/32%/40%攻击力',
      },
      {
        id: 'invisible-edge',
        name: '无形锋刃',
        image: require('./images/sects/invisible-edge.png'),
        sects: [SECT.ATTACK, SECT.EVADE],
        description: '开战时，每3点基础闪避提供1%/2%/3%/4%/6%的攻击力',
      },
      {
        id: 'burst-edge',
        name: '爆裂锋刃',
        image: require('./images/sects/burst-edge.png'),
        sects: [SECT.ATTACK, SECT.CRIT],
        description: '每次暴击时在3秒内提升6点攻击力，最多提升6/12/18/24/40点',
      },
      {
        id: 'healing-strike',
        name: '治愈之击',
        image: require('./images/sects/healing-strike.png'),
        sects: [SECT.ATTACK, SECT.REGEN],
        description: '每次攻击有60%概率回复10/20/30/40/60生命',
      },
      {
        id: 'venom-strike',
        name: '淬毒之击',
        image: require('./images/sects/venom-strike.png'),
        sects: [SECT.ATTACK, SECT.POISON],
        description: '每次攻击有60%概率施加4/8/12/16/24层中毒',
      },
      {
        id: 'arcane-edge',
        name: '奥术锋刃',
        image: require('./images/sects/arcane-edge.png'),
        sects: [SECT.ATTACK, SECT.ULTI],
        description: '每次攻击有60%概率回复1.5/3/4.5/6/9点魔法值',
      },
      {
        id: 'frost-strike',
        name: '冰霜之击',
        image: require('./images/sects/frost-strike.png'),
        sects: [SECT.ATTACK, SECT.FROST],
        description: '每次攻击有60%概率施加5/10/15/20/30层寒霜',
      },
      {
        id: 'shield-strike',
        name: '护盾之击',
        image: require('./images/sects/shield-strike.png'),
        sects: [SECT.ATTACK, SECT.SHIELD],
        description: '每次攻击有60%概率获得4/8/12/16/24层护盾',
      },
      {
        id: 'blood-edge',
        name: '鲜血锋刃',
        image: require('./images/sects/blood-edge.png'),
        sects: [SECT.ATTACK, SECT.HEALTH],
        description: '提升40/80/120/160/240点生命值，每点普攻流经验额外提升1/2/3/4/6点',
      },
      {
        id: 'vulnerability-strike',
        name: '易伤之击',
        image: require('./images/sects/vulnerability-strike.png'),
        sects: [SECT.ATTACK, SECT.VULNERABLE],
        description: '每次攻击有60%概率施加3/6/9/12/18层易伤',
      },
      {
        id: 'armed-guard',
        name: '武装守卫',
        image: require('./images/sects/armed-guard.png'),
        sects: [SECT.ATTACK, SECT.WARD],
        description: '提升首发守卫40/80/120/160/240生命值，每点普攻流经验额外提升1/2/3/4/6点',
      },
      {
        id: 'fury-strike',
        name: '怒火之击',
        image: require('./images/sects/fury-strike.png'),
        sects: [SECT.FURY, SECT.ATTACK],
        description: '每次攻击时60%概率获得5/10/15/20/30层怒火',
      },
      {
        id: 'chaos-strike',
        name: '混沌之击',
        image: require('./images/sects/chaos-strike.png'),
        sects: [SECT.CHAOS, SECT.ATTACK],
        description: '普攻60%概率时获得6/12/18/24/36层混沌点',
      },
      {
        id: 'bloodthirsty-strike',
        name: '嗜血打击',
        image: require('./images/sects/bloodthirsty-strike.png'),
        sects: [SECT.ATTACK],
        description: '每次攻击提升4%/8%/16%攻击力，最多叠加5层',
      },
      {
        id: 'hot-blooded-soul',
        name: '热血战魂',
        image: require('./images/sects/hot-blooded-soul.png'),
        sects: [SECT.ATTACK],
        description: '每次攻击提升10点攻速，最多叠加3/6/12层',
      },
      {
        id: 'courage-cloak',
        name: '勇气之裘',
        image: require('./images/sects/courage-cloak.png'),
        sects: [SECT.ATTACK],
        description: '受到伤害时100%概率立刻触发一次反击攻击，有1.8/1.4/0.6秒冷却',
      },
      {
        id: 'fearless-combo',
        name: '无畏连击',
        image: require('./images/sects/fearless-combo.png'),
        sects: [SECT.ATTACK],
        description: '攻击后35%概率额外攻击一次',
      },
      {
        id: 'revenge-aura',
        name: '复仇光环',
        image: require('./images/sects/revenge-aura.png'),
        sects: [SECT.ATTACK],
        description: '提升25%攻击力。死亡后进入2.2秒灵魂状态，保留50%最大生命值，只能进行攻击。',
      },
      {
        id: 'battle-focus',
        name: '战斗专注',
        image: require('./images/sects/battle-focus.png'),
        sects: [SECT.ATTACK],
        description:
          '-0.1秒攻击间隔。获得30%吸血，生命值首次低于50%时额外获得40%吸血和60攻速，持续3秒',
      },
    ],
  },
];
