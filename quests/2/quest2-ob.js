const _0x4e7569 = _0x4e61;
(function (_0x5b0a92, _0x3794b5) {
  const _0x1fed78 = _0x4e61,
    _0x542270 = _0x5b0a92();
  while (!![]) {
    try {
      const _0x492657 =
        (-parseInt(_0x1fed78(0x12b)) / 0x1) *
          (parseInt(_0x1fed78(0x103)) / 0x2) +
        -parseInt(_0x1fed78(0x120)) / 0x3 +
        -parseInt(_0x1fed78(0x105)) / 0x4 +
        -parseInt(_0x1fed78(0x122)) / 0x5 +
        (parseInt(_0x1fed78(0x107)) / 0x6) *
          (parseInt(_0x1fed78(0x129)) / 0x7) +
        (parseInt(_0x1fed78(0x10f)) / 0x8) *
          (-parseInt(_0x1fed78(0x12a)) / 0x9) +
        (-parseInt(_0x1fed78(0xff)) / 0xa) *
          (-parseInt(_0x1fed78(0x110)) / 0xb);
      if (_0x492657 === _0x3794b5) break;
      else _0x542270["push"](_0x542270["shift"]());
    } catch (_0x59b8b3) {
      _0x542270["push"](_0x542270["shift"]());
    }
  }
})(_0x4681, 0x50bd0);
import _0x2e8f3c from "./lib/Viz/2DFilteredRenderer.js";
import _0x59c2be from "./lib/DSViz/Standard2DFullScreenObject.js";
import _0xc91dc2 from "./lib/DSViz/GrayscaleSplitFilter.js";
import _0x5e722c from "./lib/DSViz/Standard2DVertexTextureObject.js";
import _0xc76125 from "./lib/Math/PGA2D.js";
let textureCleanupQueue = [];
async function createCelestialObject(
  _0x2c846d,
  _0x2225ae,
  _0x493d77,
  _0x26122e,
  _0x346722
) {
  const _0x9e005f = _0x4e61;
  let _0x30f7c8 = [];
  const _0xa27d2b = 0x32;
  for (let _0x152a82 = 0x0; _0x152a82 < _0xa27d2b; ++_0x152a82) {
    let _0x14a6e4 = (_0x152a82 * 0x2 * Math["PI"]) / _0xa27d2b,
      _0x29b9b8 = ((_0x152a82 + 0x1) * 0x2 * Math["PI"]) / _0xa27d2b,
      _0x16862d = _0x2225ae + Math[_0x9e005f(0x118)](_0x14a6e4) * _0x26122e,
      _0xc9ef20 = _0x493d77 + Math[_0x9e005f(0x117)](_0x14a6e4) * _0x26122e,
      _0xf8f36f = _0x2225ae + Math["cos"](_0x29b9b8) * _0x26122e,
      _0x45258f = _0x493d77 + Math[_0x9e005f(0x117)](_0x29b9b8) * _0x26122e;
    const [_0x16f0f9, _0x3e901f] = calculateTextureCoords(
        _0x14a6e4,
        _0x26122e,
        _0xc9ef20,
        _0x493d77
      ),
      [_0x45a28f, _0x5bb88e] = calculateTextureCoords(
        _0x29b9b8,
        _0x26122e,
        _0x45258f,
        _0x493d77
      );
    _0x30f7c8["push"](
      _0x2225ae,
      _0x493d77,
      0.5,
      0.5,
      _0x16862d,
      _0xc9ef20,
      _0x16f0f9,
      _0x3e901f,
      _0xf8f36f,
      _0x45258f,
      _0x45a28f,
      _0x5bb88e
    );
  }
  const _0x379188 = new Float32Array(_0x30f7c8);
  await _0x2c846d["appendSceneObject"](
    new _0x5e722c(
      _0x2c846d["_device"],
      _0x2c846d[_0x9e005f(0x124)],
      _0x379188,
      _0x346722
    )
  );
}
function calculateTextureCoords(_0xd78147, _0x1028ef, _0x1e88e4, _0x300070) {
  let _0x59f2da = _0xd78147 / (0x2 * Math["PI"]),
    _0xc3d4e5 = (_0x1e88e4 - (_0x300070 - _0x1028ef)) / (0x2 * _0x1028ef);
  return [_0x59f2da, _0xc3d4e5];
}
async function createPlanet(
  _0x6cde84,
  _0x4fd92a,
  _0x1932d4,
  _0xe2bc16,
  _0x48fde3
) {
  const _0x2240f5 = _0x4e61;
  let _0x3cb5e4 = [];
  const _0x778773 = 0x1e;
  for (let _0x5e678b = 0x0; _0x5e678b < _0x778773; ++_0x5e678b) {
    let _0x1f534b = (_0x5e678b * 0x2 * Math["PI"]) / _0x778773,
      _0x103e5d = ((_0x5e678b + 0x1) * 0x2 * Math["PI"]) / _0x778773,
      _0x38b973 = _0x4fd92a + Math[_0x2240f5(0x118)](_0x1f534b) * _0xe2bc16,
      _0x3d06fd = _0x1932d4 + Math["sin"](_0x1f534b) * _0xe2bc16,
      _0x3bd543 = _0x4fd92a + Math[_0x2240f5(0x118)](_0x103e5d) * _0xe2bc16,
      _0x105a87 = _0x1932d4 + Math[_0x2240f5(0x117)](_0x103e5d) * _0xe2bc16;
    const [_0x19bcf9, _0x27da53] = calculateTextureCoords(
        _0x1f534b,
        _0xe2bc16,
        _0x3d06fd,
        _0x1932d4
      ),
      [_0x505c97, _0x3e2da6] = calculateTextureCoords(
        _0x103e5d,
        _0xe2bc16,
        _0x105a87,
        _0x1932d4
      );
    _0x3cb5e4[_0x2240f5(0x12d)](
      _0x4fd92a,
      _0x1932d4,
      0x0,
      0.5,
      _0x38b973,
      _0x3d06fd,
      _0x19bcf9,
      _0x27da53,
      _0x3bd543,
      _0x105a87,
      _0x505c97,
      _0x3e2da6
    );
  }
  const _0x5481a6 = new Float32Array(_0x3cb5e4);
  await _0x6cde84["appendSceneObject"](
    new _0x5e722c(
      _0x6cde84[_0x2240f5(0x133)],
      _0x6cde84[_0x2240f5(0x124)],
      _0x5481a6,
      _0x48fde3
    )
  );
}
const ANIMATION_SPEED = 0.001;
let lastTime = 0x0,
  planetMotors = [],
  planetObjects = [],
  planetTextures = [];
function _0x4e61(_0x1e2417, _0x189476) {
  const _0x46811e = _0x4681();
  return (
    (_0x4e61 = function (_0x4e61b0, _0x2c0664) {
      _0x4e61b0 = _0x4e61b0 - 0xfb;
      let _0x397644 = _0x46811e[_0x4e61b0];
      return _0x397644;
    }),
    _0x4e61(_0x1e2417, _0x189476)
  );
}
async function init() {
  const _0x141667 = _0x4e61,
    _0x3b2930 = document[_0x141667(0x11c)](_0x141667(0x12f));
  (_0x3b2930["id"] = "renderCanvas"),
    document[_0x141667(0xfc)][_0x141667(0x10a)](_0x3b2930);
  const _0x5a80ff = new _0x2e8f3c(_0x3b2930);
  await _0x5a80ff["init"](),
    await _0x5a80ff[_0x141667(0x127)](
      new _0x59c2be(
        _0x5a80ff[_0x141667(0x133)],
        _0x5a80ff["_canvasFormat"],
        _0x141667(0x114)
      )
    );
  const _0x18ab36 = new _0xc91dc2(_0x5a80ff[_0x141667(0x133)]);
  await _0x5a80ff[_0x141667(0x116)](_0x18ab36),
    await createCelestialObject(_0x5a80ff, 0x0, 0x0, 0.2, _0x141667(0xfe));
  const _0x5d4d2f = [
    {
      name: _0x141667(0x125),
      radius: 0.035,
      orbitRadius: 0.25,
      texture: _0x141667(0x126),
    },
    {
      name: _0x141667(0x100),
      radius: 0.06,
      orbitRadius: 0.35,
      texture: _0x141667(0x108),
    },
    {
      name: _0x141667(0xfd),
      radius: 0.07,
      orbitRadius: 0.45,
      texture: _0x141667(0x10b),
    },
    {
      name: _0x141667(0x115),
      radius: 0.05,
      orbitRadius: 0.55,
      texture: "./assets/planets/mars.jpg",
    },
    {
      name: _0x141667(0x11a),
      radius: 0.15,
      orbitRadius: 0.72,
      texture: _0x141667(0x111),
    },
    {
      name: _0x141667(0x132),
      radius: 0.12,
      orbitRadius: 0.83,
      texture: "./assets/planets/saturn.jpg",
    },
    {
      name: _0x141667(0x101),
      radius: 0.09,
      orbitRadius: 0.9,
      texture: _0x141667(0x12c),
    },
    {
      name: _0x141667(0x128),
      radius: 0.08,
      orbitRadius: 0.97,
      texture: _0x141667(0x10e),
    },
  ];
  for (const _0x166b92 of _0x5d4d2f) {
    planetMotors[_0x141667(0x12d)]({
      angle: Math[_0x141667(0x112)]() * Math["PI"] * 0x2,
      speed: _0x166b92[_0x141667(0x130)] || 0x1,
      radius: _0x166b92[_0x141667(0x10c)],
    }),
      planetObjects[_0x141667(0x12d)](null);
  }
  async function _0x5122ee(_0x12f7b8) {
    const _0x1bd599 = _0x141667,
      _0x4d2cc7 = _0x12f7b8 - lastTime;
    (lastTime = _0x12f7b8),
      await _0x5a80ff["_device"][_0x1bd599(0x119)][_0x1bd599(0x11e)]();
    for (
      let _0x1324df = 0x0;
      _0x1324df < planetObjects[_0x1bd599(0x109)];
      _0x1324df++
    ) {
      planetObjects[_0x1324df] &&
        (planetObjects[_0x1324df]["destroy"](),
        (_0x5a80ff[_0x1bd599(0x102)] = _0x5a80ff[_0x1bd599(0x102)][
          _0x1bd599(0x106)
        ]((_0x4140df) => _0x4140df !== planetObjects[_0x1324df])),
        (planetObjects[_0x1324df] = null));
    }
    for (
      let _0x4a4212 = 0x0;
      _0x4a4212 < planetMotors[_0x1bd599(0x109)];
      _0x4a4212++
    ) {
      const _0xe51b69 = planetMotors[_0x4a4212];
      _0xe51b69[_0x1bd599(0x121)] +=
        _0xe51b69["speed"] * ANIMATION_SPEED * _0x4d2cc7;
      const _0x45ba4b = _0xc76125[_0x1bd599(0x11f)](_0xe51b69["angle"]),
        _0x2a4d3e = _0xc76125[_0x1bd599(0xfb)](
          [_0xe51b69[_0x1bd599(0x113)], 0x0],
          _0x45ba4b
        ),
        _0x23c2ea = _0x5d4d2f[_0x4a4212];
      planetObjects[_0x4a4212] = await createPlanet(
        _0x5a80ff,
        _0x2a4d3e[0x0],
        _0x2a4d3e[0x1],
        _0x23c2ea[_0x1bd599(0x113)],
        _0x23c2ea[_0x1bd599(0x12e)]
      );
    }
    _0x5a80ff[_0x1bd599(0x10d)](), requestAnimationFrame(_0x5122ee);
  }
  return requestAnimationFrame(_0x5122ee), _0x5a80ff;
}
init()
  [_0x4e7569(0x123)]((_0x4edd0a) => {
    const _0x4fb1dc = _0x4e7569;
    console[_0x4fb1dc(0x131)](_0x4edd0a);
  })
  ["catch"]((_0x1dbb73) => {
    const _0x44e90f = _0x4e7569,
      _0x21ded2 = document[_0x44e90f(0x11c)]("p");
    (_0x21ded2["innerHTML"] =
      navigator[_0x44e90f(0x11d)] + "</br>" + _0x1dbb73["message"]),
      document[_0x44e90f(0xfc)][_0x44e90f(0x10a)](_0x21ded2),
      document[_0x44e90f(0x11b)](_0x44e90f(0x104))["remove"]();
  });
function _0x4681() {
  const _0xc2f44c = [
    "speed",
    "log",
    "Saturn",
    "_device",
    "applyMotorToPoint",
    "body",
    "Earth",
    "./assets/planets/sun.jpg",
    "19226540ROiiHN",
    "Venus",
    "Uranus",
    "_objects",
    "38DEyhJO",
    "renderCanvas",
    "2261608lUbuNF",
    "filter",
    "426WnmzFn",
    "./assets/planets/venus.jpg",
    "length",
    "appendChild",
    "./assets/planets/earth.jpg",
    "orbitRadius",
    "render",
    "./assets/planets/neptune.jpg",
    "40CdYwwu",
    "11JRbNPf",
    "./assets/planets/jupiter.jpg",
    "random",
    "radius",
    "./assets/stars.png",
    "Mars",
    "appendFilterObject",
    "sin",
    "cos",
    "queue",
    "Jupiter",
    "getElementById",
    "createElement",
    "userAgent",
    "onSubmittedWorkDone",
    "createRotor",
    "1121952Vrwfgv",
    "angle",
    "2281665TJIcLX",
    "then",
    "_canvasFormat",
    "Mercury",
    "./assets/planets/mercury.jpg",
    "appendSceneObject",
    "Neptune",
    "5173lpPlBp",
    "271530XaUctc",
    "5150BBLljD",
    "./assets/planets/uranus.jpg",
    "push",
    "texture",
    "canvas",
  ];
  _0x4681 = function () {
    return _0xc2f44c;
  };
  return _0x4681();
}
