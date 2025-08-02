export interface Module {
  id: string;
  title: string;
  description: string;
  previewContent: string;
  fullContent: string;
  isLocked: boolean;
  requiredTier: 'basic' | 'premium' | 'pro';
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  lessons: number;
}

export const modules: Module[] = [
  {
    id: 'technical-analysis',
    title: 'Análisis Técnico',
    description: 'Domina los gráficos y patrones de trading con análisis técnico profesional',
    previewContent: 'En este módulo aprenderás los fundamentos del análisis técnico, incluyendo soporte y resistencia, tendencias, y patrones básicos de velas japonesas...',
    fullContent: 'Contenido completo de análisis técnico con más de 50 patrones avanzados, estrategias de entrada y salida, gestión de riesgo, y casos prácticos reales del mercado cripto.',
    isLocked: true,
    requiredTier: 'basic',
    duration: '4 semanas',
    difficulty: 'beginner',
    lessons: 12
  },
  {
    id: 'fundamental-analysis',
    title: 'Análisis Fundamental',
    description: 'Evalúa proyectos cripto con métricas fundamentales profundas',
    previewContent: 'Descubre cómo evaluar la viabilidad de proyectos criptomonedas mediante el análisis de whitepapers, tokenomics, equipo y adopción...',
    fullContent: 'Análisis fundamental completo incluyendo evaluación de equipos, tecnología, tokenomics, comunidad, roadmap, y métricas on-chain avanzadas.',
    isLocked: true,
    requiredTier: 'premium',
    duration: '3 semanas',
    difficulty: 'intermediate',
    lessons: 8
  },
  {
    id: 'trading-signals',
    title: 'Señales de Trading',
    description: 'Recibe señales profesionales en tiempo real con alta precisión',
    previewContent: 'Accede a señales de trading generadas por algoritmos avanzados y análisis experto del mercado cripto...',
    fullContent: 'Señales diarias con análisis técnico y fundamental, puntos de entrada/salida precisos, gestión de riesgo, y actualizaciones en tiempo real.',
    isLocked: true,
    requiredTier: 'premium',
    duration: 'Continuo',
    difficulty: 'intermediate',
    lessons: 0
  },
  {
    id: 'risk-management',
    title: 'Gestión de Riesgo',
    description: 'Protege tu capital con estrategias avanzadas de gestión de riesgo',
    previewContent: 'Aprende a calcular el tamaño de posición, establecer stop-loss efectivos, y diversificar tu portafolio cripto...',
    fullContent: 'Gestión integral de riesgo incluyendo position sizing, stop-loss dinámicos, correlación de activos, hedging, y estrategias de preservación de capital.',
    isLocked: true,
    requiredTier: 'basic',
    duration: '2 semanas',
    difficulty: 'beginner',
    lessons: 6
  },
  {
    id: 'portfolio-management',
    title: 'Gestión de Portafolio',
    description: 'Optimiza tu portafolio cripto con técnicas profesionales',
    previewContent: 'Construye y gestiona un portafolio diversificado de criptomonedas con técnicas de asignación óptima...',
    fullContent: 'Gestión avanzada de portafolio incluyendo rebalancing, teoría moderna de portafolio, análisis de correlación, y estrategias de acumulación.',
    isLocked: true,
    requiredTier: 'pro',
    duration: '3 semanas',
    difficulty: 'advanced',
    lessons: 10
  },
  {
    id: 'market-psychology',
    title: 'Psicología del Mercado',
    description: 'Domina las emociones y toma decisiones racionales en trading',
    previewContent: 'Comprende los sesgos cognitivos en trading y desarrolla la disciplina mental necesaria para el éxito...',
    fullContent: 'Psicología del trading completa incluyendo control emocional, gestión del miedo y avaricia, desarrollo de sistemas, y creación de rutinas.',
    isLocked: true,
    requiredTier: 'premium',
    duration: '2 semanas',
    difficulty: 'intermediate',
    lessons: 8
  },
  {
    id: 'defi-strategies',
    title: 'Estrategias DeFi',
    description: 'Explora oportunidades en finanzas descentralizadas',
    previewContent: 'Descubre yield farming, liquidity mining, y otras estrategias avanzadas en el ecosistema DeFi...',
    fullContent: 'Estrategias DeFi avanzadas incluyendo yield farming optimizado, arbitraje entre DEXs, estrategias de lending, y análisis de riesgo en protocolos.',
    isLocked: true,
    requiredTier: 'pro',
    duration: '4 semanas',
    difficulty: 'advanced',
    lessons: 15
  },
  {
    id: 'nft-trading',
    title: 'Trading de NFTs',
    description: 'Estrategias profesionales para el mercado de NFTs',
    previewContent: 'Aprende a evaluar, comprar y vender NFTs con análisis de rareza y tendencias del mercado...',
    fullContent: 'Trading de NFTs completo incluyendo análisis de rareza, evaluación de colecciones, timing de mercado, y estrategias de flip y hold.',
    isLocked: true,
    requiredTier: 'pro',
    duration: '3 semanas',
    difficulty: 'advanced',
    lessons: 12
  }
];

export const subscriptionTiers = {
  basic: {
    name: 'Básico',
    price: 29,
    modules: ['technical-analysis', 'risk-management'],
    features: ['2 módulos esenciales', 'Soporte básico', 'Actualizaciones mensuales']
  },
  premium: {
    name: 'Premium',
    price: 79,
    modules: ['technical-analysis', 'risk-management', 'fundamental-analysis', 'trading-signals', 'market-psychology'],
    features: ['5 módulos avanzados', 'Señales diarias', 'Soporte prioritario', 'Actualizaciones semanales']
  },
  pro: {
    name: 'Profesional',
    price: 149,
    modules: 'all',
    features: ['Acceso completo', 'Todos los módulos', '1-on-1 coaching', 'Señales VIP', 'Actualizaciones diarias']
  }
};
