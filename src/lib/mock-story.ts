import type { ISbStoryData } from "storyblok-js-client";

/** Fallback story when STORYBLOK_ACCESS_TOKEN is unset — matches blok-clad structure. */
export function getMockBlokCladStory(locale: string): ISbStoryData {
  const copy = getLocalizedCopy(locale);

  return {
    name: "Blok Clad",
    created_at: "2026-01-01T00:00:00.000Z",
    published_at: "2026-01-01T00:00:00.000Z",
    id: 225765700865026,
    uuid: "70932b98-57df-42df-9a1b-8ab8fdbb852b",
    content: {
      _uid: "root",
      component: "product_landing",
      body: [
        {
          _uid: "hero-1",
          component: "plp_hero",
          headline: copy.heroHeadline,
          subheadline: copy.heroSub,
          cta_label: copy.waitlistCta,
          cta_anchor: "#waitlist",
          default_finish: "brushed_steel",
          image: {
            filename:
              "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=80",
            alt: "Blok Clad cookware",
          },
        },
        {
          _uid: "proof-1",
          component: "plp_proof_strip",
          items: copy.proofItems,
        },
        {
          _uid: "material-1",
          component: "plp_material_story",
          title: copy.materialTitle,
          body: copy.materialBody,
          image: {
            filename:
              "https://images.unsplash.com/photo-1585515320310-259814833e62?w=1200&q=80",
            alt: "Material craftsmanship",
          },
        },
        {
          _uid: "benefits-1",
          component: "plp_benefits",
          title: copy.benefitsTitle,
          items: copy.benefitItems.map((b, i) => ({
            _uid: `benefit-${i}`,
            component: "plp_benefit_item",
            title: b.title,
            description: b.description,
          })),
        },
        {
          _uid: "inbox-1",
          component: "plp_inbox",
          title: copy.inboxTitle,
          body: copy.inboxBody,
        },
        {
          _uid: "finishes-1",
          component: "plp_finishes",
          title: copy.finishesTitle,
          default_finish: "brushed_steel",
          items: [
            {
              _uid: "finish-steel",
              component: "plp_finish_item",
              name: copy.finishSteel,
              slug: "brushed_steel",
              swatch_color: "#8A9199",
            },
            {
              _uid: "finish-copper",
              component: "plp_finish_item",
              name: copy.finishCopper,
              slug: "copper",
              swatch_color: "#B87333",
            },
            {
              _uid: "finish-obsidian",
              component: "plp_finish_item",
              name: copy.finishObsidian,
              slug: "obsidian",
              swatch_color: "#2A2826",
            },
          ],
        },
        {
          _uid: "reviews-1",
          component: "plp_reviews",
          title: copy.reviewsTitle,
          items: copy.reviewItems.map((r, i) => ({
            _uid: `review-${i}`,
            component: "plp_review_item",
            quote: r.quote,
            author: r.author,
            rating: 5,
          })),
        },
        {
          _uid: "specs-1",
          component: "plp_specs",
          title: copy.specsTitle,
          rows: copy.specRows.map((row, i) => ({
            _uid: `spec-${i}`,
            component: "plp_spec_row",
            label: row.label,
            value: row.value,
          })),
        },
        {
          _uid: "waitlist-1",
          component: "plp_waitlist",
          title: copy.waitlistTitle,
          subtitle: copy.waitlistSubtitle,
          cta_label: copy.waitlistCta,
          success_message: copy.waitlistSuccess,
        },
        {
          _uid: "seo-1",
          component: "plp_seo",
          title: copy.seoTitle,
          description: copy.seoDescription,
          og_image: {
            filename:
              "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80",
          },
        },
      ],
      sticky_teaser: {
        _uid: "sticky-1",
        component: "plp_sticky_teaser",
        message: copy.stickyMessage,
        cta_label: copy.waitlistCta,
        cta_anchor: "#waitlist",
      },
      footer: {
        _uid: "footer-1",
        component: "plp_footer",
        copyright: copy.footerCopyright,
        links: copy.footerLinks,
      },
    },
    slug: "blok-clad",
    full_slug: `${locale}/blok-clad`,
    sort_by_date: null,
    position: 0,
    tag_list: [],
    is_startpage: false,
    parent_id: 0,
    meta_data: null,
    group_id: "",
    first_published_at: "2026-01-01T00:00:00.000Z",
    release_id: null,
    lang: locale,
    path: undefined,
    alternates: [],
    default_full_slug: undefined,
    translated_slugs: undefined,
  } as ISbStoryData;
}

function getLocalizedCopy(locale: string) {
  const en = {
    heroHeadline: "Quiet heat. Elevated craft.",
    heroSub:
      "Blok Clad — luxury tri-ply cookware engineered for even heat and timeless form.",
    waitlistCta: "Join the waitlist",
    proofItems: ["Michelin kitchens", "Lifetime warranty", "Ships 2026"],
    materialTitle: "The material story",
    materialBody:
      "Five layers of surgical steel and aluminum conduct heat silently across every surface — no hot spots, no compromise.",
    benefitsTitle: "Why Blok Clad",
    benefitItems: [
      {
        title: "Even heat",
        description: "Tri-ply core distributes temperature in seconds.",
      },
      {
        title: "Quiet release",
        description: "Brushed steel finish releases without effort.",
      },
      {
        title: "Built to heirloom",
        description: "Hand-finished handles and rivets made to last generations.",
      },
    ],
    inboxTitle: "From our inbox",
    inboxBody:
      "“The first pan that feels as considered as the food we plate.” — Chef L. Morales",
    finishesTitle: "Finishes",
    finishSteel: "Brushed steel",
    finishCopper: "Copper accent",
    finishObsidian: "Obsidian",
    reviewsTitle: "Early voices",
    reviewItems: [
      {
        quote: "Finally cookware that matches the restraint of our menu.",
        author: "Elena R.",
      },
      {
        quote: "The weight, the balance — it disappears in the hand.",
        author: "James T.",
      },
    ],
    specsTitle: "Specifications",
    specRows: [
      { label: "Construction", value: "5-ply stainless & aluminum" },
      { label: "Compatibility", value: "Induction, gas, electric, oven to 500°F" },
      { label: "Origin", value: "Designed in NYC, crafted in Solingen" },
    ],
    waitlistTitle: "Be first to cook with Blok Clad",
    waitlistSubtitle: "Limited first run — reserve your set and choose your finish.",
    waitlistSuccess: "You're on the list. We'll reach out before launch.",
    seoTitle: "Blok Clad — Luxury Cookware",
    seoDescription:
      "Editorial luxury cookware with quiet heat technology. Join the waitlist for Blok Clad.",
    stickyMessage: "First run ships soon — reserve your finish.",
    footerCopyright: "© 2026 Blok Clad",
    footerLinks: [
      { label: "Privacy", href: "#" },
      { label: "Contact", href: "#" },
    ],
  };

  if (locale === "es") {
    return {
      ...en,
      heroHeadline: "Calor silencioso. Artesanía elevada.",
      heroSub:
        "Blok Clad — utensilios de lujo tri-capas diseñados para un calor uniforme y una forma atemporal.",
      waitlistCta: "Unirse a la lista de espera",
      proofItems: ["Cocinas Michelin", "Garantía de por vida", "Envíos 2026"],
      materialTitle: "La historia del material",
      materialBody:
        "Cinco capas de acero quirúrgico y aluminio conducen el calor sin esfuerzo — sin puntos calientes.",
      benefitsTitle: "Por qué Blok Clad",
      benefitItems: [
        {
          title: "Calor uniforme",
          description: "Núcleo tri-capas distribuye la temperatura en segundos.",
        },
        {
          title: "Liberación suave",
          description: "Acabado en acero cepillado que suelta sin esfuerzo.",
        },
        {
          title: "Hecho para heredar",
          description: "Mangos y remaches acabados a mano para generaciones.",
        },
      ],
      inboxTitle: "De nuestra bandeja",
      inboxBody:
        "«La primera sartén que se siente tan cuidada como lo que servimos.» — Chef L. Morales",
      finishesTitle: "Acabados",
      finishSteel: "Acero cepillado",
      finishCopper: "Acento cobre",
      finishObsidian: "Obsidiana",
      reviewsTitle: "Primeras voces",
      reviewItems: [
        {
          quote: "Por fin utensilios que igualan la sobriedad de nuestro menú.",
          author: "Elena R.",
        },
        {
          quote: "El peso, el equilibrio — desaparece en la mano.",
          author: "James T.",
        },
      ],
      specsTitle: "Especificaciones",
      specRows: [
        { label: "Construcción", value: "Acero inoxidable y aluminio 5 capas" },
        {
          label: "Compatibilidad",
          value: "Inducción, gas, eléctrico, horno hasta 260°C",
        },
        { label: "Origen", value: "Diseñado en NYC, fabricado en Solingen" },
      ],
      waitlistTitle: "Sé el primero en cocinar con Blok Clad",
      waitlistSubtitle:
        "Primera edición limitada — reserva tu set y elige tu acabado.",
      waitlistSuccess: "Estás en la lista. Te contactaremos antes del lanzamiento.",
      seoTitle: "Blok Clad — Utensilios de lujo",
      seoDescription:
        "Utensilios de lujo con tecnología de calor silencioso. Únete a la lista de espera.",
      stickyMessage: "El primer envío llega pronto — reserva tu acabado.",
      footerCopyright: "© 2026 Blok Clad",
      footerLinks: [
        { label: "Privacidad", href: "#" },
        { label: "Contacto", href: "#" },
      ],
    };
  }

  if (locale === "ja") {
    return {
      ...en,
      heroHeadline: "静かな熱。研ぎ澄まされたクラフト。",
      heroSub:
        "Blok Clad — 均一加熱と時代を超えるフォルムのためのラグジュアリー三层鍋。",
      waitlistCta: "ウェイトリストに参加",
      proofItems: ["ミシュラン厨房", "生涯保証", "2026年発送"],
      materialTitle: "素材の物語",
      materialBody:
        "外科用ステンレスとアルミの五層構造が、ホットスポットのない静かな熱を届けます。",
      benefitsTitle: "Blok Cladの理由",
      benefitItems: [
        {
          title: "均一加熱",
          description: "三層コアが数秒で温度を均一に分配。",
        },
        {
          title: "静かな離型",
          description: "ブラッシュドスチール仕上げでスムーズに離型。",
        },
        {
          title: "受け継ぐ品質",
          description: "手仕上げのハンドルとリベットが世代を超えて。",
        },
      ],
      inboxTitle: "受信箱から",
      inboxBody:
        "「盛り付ける料理と同じくらい、完成度の高いフライパン。」 — シェフ L. モラレス",
      finishesTitle: "仕上げ",
      finishSteel: "ブラッシュドスチール",
      finishCopper: "コッパーアクセント",
      finishObsidian: "オブシディアン",
      reviewsTitle: "初期の声",
      reviewItems: [
        {
          quote: "メニューの抑制的な美学にようやく合う調理器具。",
          author: "エレナ R.",
        },
        {
          quote: "重さとバランス — 手に馴染む感覚。",
          author: "ジェームズ T.",
        },
      ],
      specsTitle: "仕様",
      specRows: [
        { label: "構造", value: "5層ステンレス＆アルミ" },
        { label: "対応", value: "IH・ガス・電気・オーブン260°Cまで" },
        { label: "原産", value: "NYCデザイン、ゾーリンゲン製造" },
      ],
      waitlistTitle: "Blok Cladをいち早く",
      waitlistSubtitle: "限定初回ロット — セットを予約し仕上げを選択。",
      waitlistSuccess: "リストに登録しました。発売前にご連絡します。",
      seoTitle: "Blok Clad — ラグジュアリー調理器具",
      seoDescription:
        "静かな熱技術を備えたラグジュアリー調理器具。ウェイトリストに参加してください。",
      stickyMessage: "初回発送間近 — 仕上げを予約してください。",
      footerCopyright: "© 2026 Blok Clad",
      footerLinks: [
        { label: "プライバシー", href: "#" },
        { label: "お問い合わせ", href: "#" },
      ],
    };
  }

  return en;
}
