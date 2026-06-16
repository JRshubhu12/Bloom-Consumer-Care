// Procedural Sound Synthesis using Web Audio API
// Ensures zero bundle weight from external audio assets and zero network fetch latency.

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

function isSoundEnabled(): boolean {
  return localStorage.getItem("bloom_nature_sounds") === "true";
}

export function playWoodClick() {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // Warm wooden sound uses a triangle wave
    osc.type = "triangle";
    const now = ctx.currentTime;

    // Pitch sweep: fast decay from 800Hz to 120Hz
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(120, now + 0.08);

    // Volume envelope: fast decay
    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.start(now);
    osc.stop(now + 0.09);
  } catch (e) {
    console.warn("Web Audio API not supported or blocked", e);
  }
}

export function playPaperRustle() {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const duration = 0.12;
    const bufferSize = ctx.sampleRate * duration;
    
    // Create white noise buffer
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    // Filter white noise to mimic paper rustling frequencies (medium/high band)
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.setValueAtTime(4500, now);
    filter.frequency.exponentialRampToValueAtTime(1800, now + duration);
    filter.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.04, now);
    // Envelope for rustle with slight swell and decay
    gain.gain.linearRampToValueAtTime(0.06, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    noiseNode.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noiseNode.start(now);
    noiseNode.stop(now + duration + 0.02);
  } catch (e) {
    console.warn("Web Audio API not supported or blocked", e);
  }
}

export function playSeedDrop() {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // High pitched, short resonance like a seed dropping
    osc.type = "sine";
    
    // Slight organic pitch modulation
    osc.frequency.setValueAtTime(2200, now);
    osc.frequency.exponentialRampToValueAtTime(1400, now + 0.06);

    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

    osc.start(now);
    osc.stop(now + 0.08);
  } catch (e) {
    console.warn("Web Audio API not supported or blocked", e);
  }
}
