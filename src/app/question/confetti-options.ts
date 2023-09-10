import { ConfettiOptions } from 'tsparticles-confetti';

const defaultConfettiOptions = {
  spread: 360,
  ticks: 200,
  gravity: 0,
  decay: 0.94,
  startVelocity: 30,
};

export const emojiConfettiOptions: ConfettiOptions = {
  ...defaultConfettiOptions,
  shapes: ['text'],
  shapeOptions: {
    text: { value: ['🦄', '🌈', '🌎'] },
    size: 5,
  },
  scalar: 2,
  particleCount: 75,
};

export const normalConfettiOptions: ConfettiOptions = {
  ...defaultConfettiOptions,
  shapes: ['circle', 'pentagon', 'square'],
  // colors: ['#12abdb', ' #2b0a3d', '#ff304c', '#95e616', '#ffffff'],
  scalar: 1.2,
  particleCount: 100,
};
