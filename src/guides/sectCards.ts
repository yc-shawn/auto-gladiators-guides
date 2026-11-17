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
  {
    sect: SECT.EVADE,
    title: '闪避',
    cards: [
      {
        id: 'nimble-evasion',
        name: '灵巧强化',
        image: require('./images/sects/nimble-evasion.png'),
        sects: [SECT.EVADE],
        description: '提升2/4/6/8/12点基础闪避',
      },
      {
        id: 'evasion-lock',
        name: '灵巧枷锁',
        image: require('./images/sects/evasion-lock.png'),
        sects: [SECT.EVADE],
        description: '有18%/24%/30%/36%/48%概率无视敌人闪避',
      },
      {
        id: 'invisible-wound',
        name: '无形伤口',
        image: require('./images/sects/invisible-wound.png'),
        sects: [SECT.EVADE, SECT.VULNERABLE],
        description: '每次闪避后，施加3/6/9/12/18层易伤',
      },
      {
        id: 'nimble-chaos',
        name: '灵巧混沌',
        image: require('./images/sects/nimble-chaos.png'),
        sects: [SECT.CHAOS, SECT.EVADE],
        description: '每3点闪避增加0.8/1.6/2.4/3.2/4.8点混沌伤害',
      },
      {
        id: 'invisible-edge',
        name: '无形锋刃',
        image: require('./images/sects/invisible-edge.png'),
        sects: [SECT.ATTACK, SECT.EVADE],
        description: '开战时，每3点基础闪避提供1%/2%/3%/4%/6%的攻击力',
      },
      {
        id: 'invisible-poison',
        name: '无形毒素',
        image: require('./images/sects/invisible-poison.png'),
        sects: [SECT.EVADE, SECT.POISON],
        description: '每次闪避时，施加4/8/12/16/24层中毒',
      },
      {
        id: 'invisible-frost',
        name: '无形冰霜',
        image: require('./images/sects/invisible-frost.png'),
        sects: [SECT.EVADE, SECT.FROST],
        description: '每次闪避时，施加5/10/15/20/30层寒霜',
      },
      {
        id: 'invisible-mana',
        name: '无形魔力',
        image: require('./images/sects/invisible-mana.png'),
        sects: [SECT.EVADE, SECT.ULTI],
        description: '每次闪避时，回复1.5/3/4.5/6/9点魔法值',
      },
      {
        id: 'invisible-healing',
        name: '无形治愈',
        image: require('./images/sects/invisible-healing.png'),
        sects: [SECT.EVADE, SECT.REGEN],
        description: '每次闪避时，回复10/20/30/40/60点生命',
      },
      {
        id: 'invisible-shield',
        name: '无形护盾',
        image: require('./images/sects/invisible-shield.png'),
        sects: [SECT.EVADE, SECT.SHIELD],
        description: '每次闪避时，获得4/8/12/16/24层护盾',
      },
      {
        id: 'nimble-body',
        name: '灵巧身躯',
        image: require('./images/sects/nimble-body.png'),
        sects: [SECT.EVADE, SECT.HEALTH],
        description:
          '提升40/80/120/160/240点生命值，每点闪避流经验额外提升1/2/3/4/6点',
      },
      {
        id: 'invisible-fury',
        name: '无形狂暴',
        image: require('./images/sects/invisible-fury.png'),
        sects: [SECT.EVADE, SECT.CRIT],
        description: '每3点闪避率提升1%/2%/3%/4%/6%暴击伤害',
      },
      {
        id: 'nimble-guard',
        name: '灵敏护卫',
        image: require('./images/sects/nimble-guard.png'),
        sects: [SECT.EVADE, SECT.WARD],
        description:
          '提升首发守卫40/80/120/160/240生命值，每点闪避流经验额外提升1/2/3/4/6点',
      },
      {
        id: 'invisible-rage',
        name: '无形怒火',
        image: require('./images/sects/invisible-rage.png'),
        sects: [SECT.FURY, SECT.EVADE],
        description: '每次闪避时获得5/10/15/20/30层怒火',
      },
      {
        id: 'mana-deflection',
        name: '魔力偏转',
        image: require('./images/sects/mana-deflection.png'),
        sects: [SECT.EVADE],
        description: '魔法伤害和混沌伤害可以被闪避，概率为当前闪避率的25%/40%/70%',
      },
      {
        id: 'invisible-counterattack',
        name: '无形反击',
        image: require('./images/sects/invisible-counterattack.png'),
        sects: [SECT.EVADE],
        description:
          '每次闪避时，对敌人造成12%/24%/48%减少伤害的流失生命值伤害',
      },
      {
        id: 'wind-stride',
        name: '风行',
        image: require('./images/sects/wind-stride.png'),
        sects: [SECT.EVADE],
        description: '永久提升5/8/14点闪避，开战后提升2/4/8点闪避，持续5秒',
      },
      {
        id: 'divine-reflection',
        name: '神圣反射',
        image: require('./images/sects/divine-reflection.png'),
        sects: [SECT.EVADE],
        description:
          '每次闪避时50%概率反弹本次伤害，造成魔法伤害，该伤害不能重复触发神圣反射',
      },
      {
        id: 'seventy-two-transformations',
        name: '七十二变',
        image: require('./images/sects/seventy-two-transformations.png'),
        sects: [SECT.EVADE],
        description:
          '受到任意伤害有[6% + 20%*闪避几率]的概率变形形态，期间免疫伤害，持续0.2秒。有0.5秒冷却',
      },
      {
        id: 'refraction',
        name: '折射',
        image: require('./images/sects/refraction.png'),
        sects: [SECT.EVADE],
        description:
          '+20%闪避减伤，受到可以被闪避的伤害却没有闪避时，有70%概率对敌方造成【40 + 该次伤害*75%*自身闪避%】的流失生命值伤害。',
      },
    ],
  },
];
