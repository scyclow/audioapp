// @flow

/*
  TODO
    save hash to url

    UI - change BPM
    UI - change Noise properties on each track

    support macros
      variables start with @

    refactor into different files
    refactor code to be more declarative


*/

function someDec(klass) {
  return klass;
}



import Noise from './utils/Noise';
import dynamicInterval from './utils/dynamicInterval';
import random from './utils/random';
import { compact } from './utils/misc';
// TODO import babel polyfill


const isNumber = (num): booleant => !!(num === 0 || num && !isNaN(num))

const getNote = (a: number, i: number): number => a * (2 ** (i/12));

const a = 27.5;
const NOTES = {
  a_: getNote(a/2, 11),
  a,
  a$: getNote(a, 1),
  b_: getNote(a, 1),
  b : getNote(a, 2),
  c : getNote(a, 3),
  c$: getNote(a, 4),
  d_: getNote(a, 4),
  d : getNote(a, 5),
  d$: getNote(a, 6),
  e_: getNote(a, 6),
  e : getNote(a, 7),
  f : getNote(a, 8),
  f$: getNote(a, 9),
  g_: getNote(a, 9),
  g : getNote(a, 10),
  g$: getNote(a, 11),
};

// (note: string) -> number
function interpretNote(note: string): number {
  // get the frequency of the base note (ex. a sharp)
  const magIx = '$_'.includes(note[1]) ? 2 : 1;
  const baseNote = note.slice(0, magIx).toLowerCase();
  const freq = NOTES[baseNote];

  // find the magnitude of the note (what octave is it?)
  const defaultManitude = 4;
  let noteMagnitude = note.slice(magIx);

  // andjust for bullshit music notation
  if (isNumber(noteMagnitude) && 'cdefg'.includes(baseNote[0])) {
    noteMagnitude = Number(noteMagnitude) - 1;

  } else if (!isNumber(noteMagnitude)) {
    noteMagnitude = defaultManitude;

  } else {
    noteMagnitude = Number(noteMagnitude);
  }

  return freq * (2 ** noteMagnitude);
}

// let note modulate to next note
function flowNote(noise, note) {
  noise.unmute();
  noise.freq = note;
}

// change note, and then brief silance
function playNote(noise, note, dur) {
  flowNote(noise, note);
  setTimeout(() => noise.mute(), dur * 0.8);
}

function playSilence(noise) {
  noise.mute();
}

function bpm2ms(bpm: number): number {
  const bps = bpm / 60;
  const ms = 1000 / bps;

  return Math.round(ms);
}

const lastIx = (str: string | array): number => str.length - 1;
const last = (str: string | array): number => str[lastIx(str)];
const exceptLast = (str: string | array): number => str.slice(0, lastIx(str));

const isRawFreq = (note) => isNumber(note);

const isFlow = (note) => last(note) === '.';

function getPlayFn(note) {
  // is note a flow, or regular play? or just silence?
  let rawNote, playFn;
  if (note === '-') {
    rawNote = '0';
    playFn = playSilence;

  } else if (isFlow(note)) {
    rawNote = exceptLast(note);
    playFn = flowNote;

  } else {
    rawNote = note;
    playFn = playNote;
  }

  // find the frequency of the note
  const parsedNote: string = isRawFreq(rawNote) ? rawNote : interpretNote(rawNote);

  return (noise, dur) => {
    playFn(noise, parsedNote, dur)
  }
}

const playingTracks = {};

// execute each track
function loopTrack(noise, track, bpm) {
  // if track is currently running
  if (noise.state === 'RUNNING') {
    // kill the track
    clearInterval(playingTracks[track.number]);

  } else {
    noise.start();
  }

  let i = 0;

  const play = (dur: number = 0) => () => {
    // get all notes in measure
    const notes = track[i].split(' ');
    const durPerNote = dur / notes.length;

    // play each note in measure
    notes.forEach((note, ix) => {
      const playFn = getPlayFn(note);
      setTimeout(
        () => {
          playFn(noise, durPerNote)
          console.log(new Date, `(${track.number})`, note, durPerNote)
        },
        durPerNote * ix
      );
    })

    // contiuously loop over track
    if (++i >= track.length) i = 0;
  };

  const duration = bpm2ms(bpm);
  const update = dynamicInterval(
    play(duration),
    duration
  );

  const kill = update(duration)
  playingTracks[track.number] = kill;

  window.change = (t) => update(bpm2ms(t));

  play();
}
/////////////

const smooth = (key) => Math.round(key) + '.';



window.NOTES = NOTES

const noise1 = new Noise();
const noise2 = new Noise();
window.n = noise1;
window.n2 = noise1;

const testTrack = [
  'e2',
  'e2',
  'e4',
  'e2',

  'e4',
  'e2',
  'f2',
  'g2',

  'a2',
  'b2',
  'b1',
  'b1',
];

// const testTrack2 = [
//   500
// ];


// Application logic
const map$ = ($, fn)=> [].map.call($, fn);
const each$ = ($, fn)=> [].forEach.call($, fn);
const tracks = document.getElementsByClassName('track');
// get all the notes for each track
const cleanTrack = (track) => compact( track.value.split('\n') )

// make a noise for each track
const noises = map$(tracks, () => new Noise());

document.getElementById('start').onclick = () => {
  map$(tracks, cleanTrack).forEach((track, i) => {
    track.number = i;
    if (track.length) {
      const noise = noises[i];
      const bpm = 120;

      loopTrack(noise, track, bpm)
    }
  })
}

// loopTrack(noise2, testTrack2, 360);

// let a = 440;
// let getNote = (i) => a * (2 ** (i/12));

// const NOTES = {
//   a,
//   b: getNote(2),
//   c: getNote(3),
//   d: getNote(5),
//   e: getNote(7),
//   f: getNote(8),
//   g: getNote(10),
// }




