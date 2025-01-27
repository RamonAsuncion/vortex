const _0x105f23 = _0x342c;
(function (_0x3ef861, _0x546612) {
  const _0x529c1e = _0x342c,
    _0x29e772 = _0x3ef861();
  while (!![]) {
    try {
      const _0x319010 =
        (-parseInt(_0x529c1e(0x114)) / 0x1) *
          (parseInt(_0x529c1e(0x11e)) / 0x2) +
        -parseInt(_0x529c1e(0x128)) / 0x3 +
        (-parseInt(_0x529c1e(0x12f)) / 0x4) *
          (-parseInt(_0x529c1e(0x129)) / 0x5) +
        parseInt(_0x529c1e(0x12b)) / 0x6 +
        parseInt(_0x529c1e(0x111)) / 0x7 +
        (-parseInt(_0x529c1e(0x119)) / 0x8) *
          (-parseInt(_0x529c1e(0x13f)) / 0x9) +
        (parseInt(_0x529c1e(0x10f)) / 0xa) *
          (-parseInt(_0x529c1e(0x130)) / 0xb);
      if (_0x319010 === _0x546612) break;
      else _0x29e772["push"](_0x29e772["shift"]());
    } catch (_0x1eabb7) {
      _0x29e772["push"](_0x29e772["shift"]());
    }
  }
})(_0x2941, 0x98859);
function _0x2941() {
  const _0x5267f9 = [
    "body",
    "getElementById",
    "font",
    "offsetY",
    "1470WuDamE",
    "fillStyle",
    "isPointInPath",
    "The\x20Lost\x20Shapes.",
    "height",
    "fillText",
    "offsetX",
    "userAgent",
    "overlayCanvas",
    "href",
    "3553950oRcvCc",
    "10RdgEAu",
    "createElement",
    "4788600OpAUtp",
    "fill",
    "textAlign",
    "then",
    "1700092EatYUI",
    "11WLPdgM",
    "textBaseline",
    "remove",
    "24px\x20Arial",
    "log",
    "renderCanvas",
    "random",
    "forEach",
    "style",
    "top",
    "width",
    "appendSceneObject",
    "lightgrey",
    "appendChild",
    "canvas",
    "9YaAjXm",
    "rect",
    "absolute",
    "innerWidth",
    "init",
    "_canvasFormat",
    "addEventListener",
    "8385880ZXfmcx",
    "position",
    "602126ncAMZU",
    "innerHTML",
    "Back",
    "196gzbIgi",
    "black",
    "_device",
    "render",
    "getContext",
    "8462904LQzlRq",
  ];
  _0x2941 = function () {
    return _0x5267f9;
  };
  return _0x2941();
}
import _0xb2d27a from "./lib/Viz/2DRenderer.js";
import _0x76732d from "./lib/DSViz/Standard2DVertexObject.js";
let renderer;
async function init() {
  const _0x1d1d1a = _0x342c,
    _0x4d0de6 = document[_0x1d1d1a(0x12a)](_0x1d1d1a(0x13e));
  (_0x4d0de6["id"] = _0x1d1d1a(0x135)),
    document["body"][_0x1d1d1a(0x13d)](_0x4d0de6),
    (renderer = new _0xb2d27a(_0x4d0de6)),
    await renderer[_0x1d1d1a(0x10c)]();
  const _0x231713 = document["createElement"](_0x1d1d1a(0x13e));
  (_0x231713["id"] = _0x1d1d1a(0x126)),
    (_0x231713["width"] = _0x4d0de6[_0x1d1d1a(0x13a)]),
    (_0x231713[_0x1d1d1a(0x122)] = _0x4d0de6[_0x1d1d1a(0x122)]),
    (_0x231713[_0x1d1d1a(0x138)][_0x1d1d1a(0x110)] = _0x1d1d1a(0x141)),
    (_0x231713["style"][_0x1d1d1a(0x139)] = "0"),
    (_0x231713[_0x1d1d1a(0x138)]["left"] = "0"),
    document[_0x1d1d1a(0x11a)][_0x1d1d1a(0x13d)](_0x231713);
  const _0x5d45b9 = new Float32Array([0.3, 0.2, 0.1, 0x1]),
    _0x1cc811 = new Float32Array([
      -0x1,
      -0x1,
      ..._0x5d45b9,
      0x1,
      -0x1,
      ..._0x5d45b9,
      -0x1,
      -0.8,
      ..._0x5d45b9,
      0x1,
      -0.8,
      ..._0x5d45b9,
      0x1,
      -0x1,
      ..._0x5d45b9,
      -0x1,
      -0.8,
      ..._0x5d45b9,
    ]);
  await renderer["appendSceneObject"](
    new _0x76732d(
      renderer[_0x1d1d1a(0x116)],
      renderer[_0x1d1d1a(0x10d)],
      _0x1cc811
    )
  ),
    generateRandomTrees(0x14);
  const _0x39360a = new Float32Array([0x0, 0x0, 0x1, 0x1]),
    _0x1614d8 = new Float32Array([
      0x0,
      0.8,
      ..._0x39360a,
      0.4,
      0.8,
      ..._0x39360a,
      0.4,
      0.4,
      ..._0x39360a,
      0x0,
      0.8,
      ..._0x39360a,
      0.4,
      0.4,
      ..._0x39360a,
      0x0,
      0.4,
      ..._0x39360a,
    ]);
  await renderer[_0x1d1d1a(0x13b)](
    new _0x76732d(
      renderer[_0x1d1d1a(0x116)],
      renderer[_0x1d1d1a(0x10d)],
      _0x1614d8
    )
  );
  const _0x5c1c88 = new Float32Array([0x0, 0x1, 0x0, 0x1]),
    _0x2297d0 = new Float32Array([
      0.6,
      0.8,
      ..._0x5c1c88,
      0.9,
      0.4,
      ..._0x5c1c88,
      0.6,
      0.4,
      ..._0x5c1c88,
    ]);
  await renderer[_0x1d1d1a(0x13b)](
    new _0x76732d(
      renderer[_0x1d1d1a(0x116)],
      renderer[_0x1d1d1a(0x10d)],
      _0x2297d0
    )
  );
  const _0x556d4c = new Float32Array([0x1, 0x0, 0x0, 0x1]),
    _0x4999ed = new Float32Array([
      -0.2,
      0.1,
      ..._0x556d4c,
      0.2,
      0.1,
      ..._0x556d4c,
      -0.3,
      -0.1,
      ..._0x556d4c,
      0.2,
      0.1,
      ..._0x556d4c,
      0.3,
      -0.1,
      ..._0x556d4c,
      -0.3,
      -0.1,
      ..._0x556d4c,
    ]);
  await renderer[_0x1d1d1a(0x13b)](
    new _0x76732d(
      renderer[_0x1d1d1a(0x116)],
      renderer["_canvasFormat"],
      _0x4999ed
    )
  );
  const _0x3f39d4 = new Float32Array([0x1, 0x0, 0x1, 0x1]),
    _0x3da2a8 = new Float32Array([
      0.6,
      0.2,
      ..._0x3f39d4,
      0.85,
      0.2,
      ..._0x3f39d4,
      0.725,
      0.36,
      ..._0x3f39d4,
      0.6,
      0.2,
      ..._0x3f39d4,
      0.725,
      0.36,
      ..._0x3f39d4,
      0.472,
      0.36,
      ..._0x3f39d4,
      0.6,
      0.2,
      ..._0x3f39d4,
      0.472,
      0.36,
      ..._0x3f39d4,
      0.35,
      0.2,
      ..._0x3f39d4,
      0.6,
      0.2,
      ..._0x3f39d4,
      0.85,
      0.2,
      ..._0x3f39d4,
      0.725,
      0x0,
      ..._0x3f39d4,
      0.6,
      0.2,
      ..._0x3f39d4,
      0.725,
      0x0,
      ..._0x3f39d4,
      0.472,
      0x0,
      ..._0x3f39d4,
      0.6,
      0.2,
      ..._0x3f39d4,
      0.472,
      0x0,
      ..._0x3f39d4,
      0.35,
      0.2,
      ..._0x3f39d4,
    ]);
  await renderer["appendSceneObject"](
    new _0x76732d(
      renderer[_0x1d1d1a(0x116)],
      renderer[_0x1d1d1a(0x10d)],
      _0x3da2a8
    )
  ),
    renderer[_0x1d1d1a(0x117)]();
  const _0x460ff8 = _0x231713[_0x1d1d1a(0x118)]("2d");
  (_0x460ff8[_0x1d1d1a(0x11c)] = _0x1d1d1a(0x133)),
    _0x460ff8[_0x1d1d1a(0x123)](_0x1d1d1a(0x121), 0xa, 0x32);
  const _0x295a07 = 0x28,
    _0x5d5a1f = 0x64,
    _0x3422ac = window[_0x1d1d1a(0x10b)] - _0x5d5a1f - 0xa,
    _0xdc8788 = 0x14;
  _0x460ff8["fillStyle"] = _0x1d1d1a(0x13c);
  const _0x19f983 = new Path2D();
  return (
    _0x19f983[_0x1d1d1a(0x140)](_0x3422ac, _0xdc8788, _0x5d5a1f, _0x295a07),
    _0x460ff8[_0x1d1d1a(0x12c)](_0x19f983),
    (_0x460ff8[_0x1d1d1a(0x11c)] = _0x1d1d1a(0x133)),
    (_0x460ff8[_0x1d1d1a(0x11f)] = _0x1d1d1a(0x115)),
    (_0x460ff8[_0x1d1d1a(0x12d)] = "center"),
    (_0x460ff8[_0x1d1d1a(0x131)] = "middle"),
    _0x460ff8[_0x1d1d1a(0x123)](
      _0x1d1d1a(0x113),
      _0x3422ac + 0.5 * _0x5d5a1f,
      _0xdc8788 + 0.5 * _0x295a07
    ),
    _0x231713[_0x1d1d1a(0x10e)]("mousedown", function (_0x1d962a) {
      const _0x527c25 = _0x1d1d1a;
      _0x460ff8[_0x527c25(0x120)](
        _0x19f983,
        _0x1d962a[_0x527c25(0x124)],
        _0x1d962a[_0x527c25(0x11d)]
      ) && (window["location"][_0x527c25(0x127)] = "/");
    }),
    renderer
  );
}
function createTree(_0x1861a1, _0x337fcf, _0x2553e3) {
  const _0x37af5a = _0x342c,
    _0x53d8be = new Float32Array([0.55, 0.27, 0.07, 0x1]),
    _0x2e865a = new Float32Array([
      _0x1861a1 - 0.05 / 0x2,
      _0x337fcf,
      ..._0x53d8be,
      _0x1861a1 + 0.05 / 0x2,
      _0x337fcf,
      ..._0x53d8be,
      _0x1861a1 - 0.05 / 0x2,
      _0x337fcf + _0x2553e3,
      ..._0x53d8be,
      _0x1861a1 + 0.05 / 0x2,
      _0x337fcf,
      ..._0x53d8be,
      _0x1861a1 + 0.05 / 0x2,
      _0x337fcf + _0x2553e3,
      ..._0x53d8be,
      _0x1861a1 - 0.05 / 0x2,
      _0x337fcf + _0x2553e3,
      ..._0x53d8be,
    ]),
    _0x2c4177 = new Float32Array([0.13, 0.55, 0.13, 0x1]),
    _0x378667 = 0.2,
    _0x27432b = new Float32Array([
      _0x1861a1,
      _0x337fcf + _0x2553e3 + _0x378667,
      ..._0x2c4177,
      _0x1861a1 - 0.15,
      _0x337fcf + _0x2553e3,
      ..._0x2c4177,
      _0x1861a1 + 0.15,
      _0x337fcf + _0x2553e3,
      ..._0x2c4177,
    ]);
  return [
    new _0x76732d(
      renderer[_0x37af5a(0x116)],
      renderer[_0x37af5a(0x10d)],
      _0x2e865a
    ),
    new _0x76732d(
      renderer[_0x37af5a(0x116)],
      renderer[_0x37af5a(0x10d)],
      _0x27432b
    ),
  ];
}
function generateRandomTrees(_0x215703) {
  const _0x5ef693 = _0x342c;
  for (let _0x33077c = 0x0; _0x33077c < _0x215703; _0x33077c++) {
    const _0x42a64d = Math["random"]() * 0x2 - 0x1,
      _0x506edb = -0.8,
      _0x4960ba = Math[_0x5ef693(0x136)]() * 0.3 + 0.2,
      _0x579f39 = createTree(_0x42a64d, _0x506edb, _0x4960ba);
    _0x579f39[_0x5ef693(0x137)]((_0x2008f3) => {
      renderer["appendSceneObject"](_0x2008f3);
    });
  }
}
function _0x342c(_0x141412, _0x158c01) {
  const _0x29410c = _0x2941();
  return (
    (_0x342c = function (_0x342c36, _0x58d296) {
      _0x342c36 = _0x342c36 - 0x10b;
      let _0x2d26f7 = _0x29410c[_0x342c36];
      return _0x2d26f7;
    }),
    _0x342c(_0x141412, _0x158c01)
  );
}
init()
  [_0x105f23(0x12e)]((_0x13c3d7) => {
    const _0x30d17c = _0x105f23;
    console[_0x30d17c(0x134)](_0x13c3d7);
  })
  ["catch"]((_0x12fed8) => {
    const _0x457ab6 = _0x105f23,
      _0x2d77c0 = document[_0x457ab6(0x12a)]("p");
    (_0x2d77c0[_0x457ab6(0x112)] =
      navigator[_0x457ab6(0x125)] + "</br>" + _0x12fed8["message"]),
      document[_0x457ab6(0x11a)][_0x457ab6(0x13d)](_0x2d77c0),
      document[_0x457ab6(0x11b)](_0x457ab6(0x135))[_0x457ab6(0x132)]();
  });
