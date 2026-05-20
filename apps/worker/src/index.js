const words = [
  'algorithm', 'beacon', 'cascade', 'diode', 'echo', 'flux', 'gravity', 'horizon',
  'interface', 'junction', 'kinetic', 'lattice', 'momentum', 'nucleus', 'orbit',
  'photon', 'quantum', 'resonance', 'spectrum', 'tensor', 'ultraviolet', 'velocity',
  'wavelength', 'xenon', 'yield', 'zenith'
];

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function logWorkerOutput() {
  const timestamp = new Date().toISOString();
  const word = getRandomWord();
  console.log(`[${timestamp}] Random word: ${word}`);
}

// Run immediately on start
logWorkerOutput();

// Then every 10 seconds
setInterval(logWorkerOutput, 10000);

console.log('Worker started, outputting every 10 seconds...');
