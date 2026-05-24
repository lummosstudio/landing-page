export const animationVariants = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    whileInView: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  staggerContainer: {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: false, amount: 0.3 },
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  staggerItem: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export const hoverVariants = {
  buttonHover: {
    scale: 1.05,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
  cardHover: {
    y: -10,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  iconHover: {
    scale: 1.15,
    rotate: 10,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
};

export const tapVariants = {
  scale: 0.98,
  transition: { duration: 0.1, ease: 'easeInOut' },
};
