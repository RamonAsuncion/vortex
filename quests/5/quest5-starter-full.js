const _0x354e87 = _0x2d5c;
(function (_0x1001ef, _0xb5b92) {
  const _0x1d4f88 = _0x2d5c,
    _0x2db3bb = _0x1001ef();
  while (!![]) {
    try {
      const _0x5b61e9 =
        (parseInt(_0x1d4f88(0x175)) / 0x1) *
          (parseInt(_0x1d4f88(0x122)) / 0x2) +
        (parseInt(_0x1d4f88(0x155)) / 0x3) * (parseInt(_0x1d4f88(0xed)) / 0x4) +
        parseInt(_0x1d4f88(0x10d)) / 0x5 +
        -parseInt(_0x1d4f88(0xf7)) / 0x6 +
        -parseInt(_0x1d4f88(0xff)) / 0x7 +
        (-parseInt(_0x1d4f88(0x19f)) / 0x8) *
          (-parseInt(_0x1d4f88(0x176)) / 0x9) +
        parseInt(_0x1d4f88(0x144)) / 0xa;
      if (_0x5b61e9 === _0xb5b92) break;
      else _0x2db3bb["push"](_0x2db3bb["shift"]());
    } catch (_0x5b3e5a) {
      _0x2db3bb["push"](_0x2db3bb["shift"]());
    }
  }
})(_0x365e, 0x363a1);
class Renderer {
  constructor(_0x500131) {
    const _0x252848 = _0x2d5c;
    (this["_canvas"] = _0x500131),
      (this[_0x252848(0x16b)] = []),
      (this["_clearColor"] = {
        r: 0x0,
        g: 0x38 / 0xff,
        b: 0x65 / 0xff,
        a: 0x1,
      });
  }
  async [_0x354e87(0x1ad)]() {
    const _0x102d6d = _0x354e87;
    if (!navigator[_0x102d6d(0x12e)]) throw Error(_0x102d6d(0x1b3));
    const _0x4e47c5 = await navigator[_0x102d6d(0x12e)][_0x102d6d(0x182)]();
    if (!_0x4e47c5) throw Error(_0x102d6d(0x136));
    (this[_0x102d6d(0x11a)] = await _0x4e47c5[_0x102d6d(0x170)]()),
      (this["_context"] = this[_0x102d6d(0x119)][_0x102d6d(0x108)](
        _0x102d6d(0x17a)
      )),
      (this["_canvasFormat"] = navigator["gpu"][_0x102d6d(0xfc)]()),
      this[_0x102d6d(0x149)][_0x102d6d(0x150)]({
        device: this[_0x102d6d(0x11a)],
        format: this[_0x102d6d(0x138)],
      }),
      this["resizeCanvas"](),
      window[_0x102d6d(0x1a8)](
        _0x102d6d(0x137),
        this["resizeCanvas"]["bind"](this)
      );
  }
  [_0x354e87(0x1b6)]() {
    const _0x504cb6 = _0x354e87,
      _0xce6ec4 = window[_0x504cb6(0x166)] || 0x1,
      _0x26638e = window["innerWidth"] * _0xce6ec4,
      _0x221933 = window[_0x504cb6(0x116)] * _0xce6ec4;
    (this[_0x504cb6(0x119)][_0x504cb6(0x129)] = _0x26638e),
      (this[_0x504cb6(0x119)]["height"] = _0x221933),
      (this[_0x504cb6(0x119)][_0x504cb6(0x19d)]["width"] =
        window[_0x504cb6(0x139)] + "px"),
      (this[_0x504cb6(0x119)][_0x504cb6(0x19d)][_0x504cb6(0xe2)] =
        window[_0x504cb6(0x116)] + "px"),
      (this[_0x504cb6(0x119)][_0x504cb6(0x19d)][_0x504cb6(0x15e)] =
        _0x504cb6(0x152)),
      this[_0x504cb6(0x12d)]();
  }
  async [_0x354e87(0x121)](_0x1f0408) {
    const _0x1be090 = _0x354e87;
    await _0x1f0408[_0x1be090(0x1ad)](),
      this[_0x1be090(0x16b)][_0x1be090(0x193)](_0x1f0408);
  }
  [_0x354e87(0x172)](_0x53d74e) {
    const _0x627918 = _0x354e87;
    for (const _0x3ebd5e of this[_0x627918(0x16b)]) {
      _0x3ebd5e?.["updateGeometry"]();
    }
    let _0x26d4e7 = this[_0x627918(0x11a)]["createCommandEncoder"]();
    const _0x1aa63e = _0x26d4e7[_0x627918(0x128)]({
      colorAttachments: [
        {
          view: _0x53d74e,
          clearValue: this[_0x627918(0x15c)],
          loadOp: _0x627918(0x17c),
          storeOp: _0x627918(0x177),
        },
      ],
    });
    for (const _0x415d61 of this[_0x627918(0x16b)]) {
      _0x415d61?.[_0x627918(0x12d)](_0x1aa63e);
    }
    _0x1aa63e[_0x627918(0x148)]();
    const _0x31b4ca = _0x26d4e7[_0x627918(0x118)]();
    for (const _0x2893f7 of this[_0x627918(0x16b)]) {
      _0x2893f7?.[_0x627918(0xf4)](_0x31b4ca);
    }
    _0x31b4ca[_0x627918(0x148)]();
    const _0x4ab997 = _0x26d4e7[_0x627918(0x1ae)]();
    this["_device"][_0x627918(0x15b)][_0x627918(0x1a5)]([_0x4ab997]);
  }
  ["render"]() {
    const _0x3bed45 = _0x354e87;
    this["renderToSelectedView"](
      this[_0x3bed45(0x149)][_0x3bed45(0x101)]()[_0x3bed45(0x126)]()
    );
  }
}
class SceneObject {
  static [_0x354e87(0xe3)] = 0x0;
  constructor(_0x111c71, _0x3b74a3) {
    const _0x2f2e55 = _0x354e87;
    if (this[_0x2f2e55(0xe5)] == SceneObject) throw new Error(_0x2f2e55(0x114));
    (this["_device"] = _0x111c71),
      (this["_canvasFormat"] = _0x3b74a3),
      (SceneObject[_0x2f2e55(0xe3)] += 0x1);
  }
  ["getName"]() {
    const _0x365621 = _0x354e87;
    return (
      this[_0x365621(0xe5)]["name"] +
      "\x20" +
      SceneObject[_0x365621(0xe3)]["toString"]()
    );
  }
  async [_0x354e87(0x1ad)]() {
    const _0x22e061 = _0x354e87;
    await this[_0x22e061(0x180)](),
      await this[_0x22e061(0x1ac)](),
      await this[_0x22e061(0x123)](),
      await this[_0x22e061(0xfd)]();
  }
  async [_0x354e87(0x180)]() {
    throw new Error(
      "Method\x20\x27createGeometry()\x27\x20must\x20be\x20implemented."
    );
  }
  [_0x354e87(0x125)]() {}
  [_0x354e87(0xe4)](_0x4a943b) {
    return new Promise((_0xa68097, _0x20fb84) => {
      const _0x15dddf = _0x2d5c,
        _0x513f93 = new XMLHttpRequest();
      _0x513f93["open"]("GET", _0x4a943b),
        _0x513f93[_0x15dddf(0x1a2)](_0x15dddf(0x145), _0x15dddf(0x133)),
        (_0x513f93[_0x15dddf(0x130)] = function () {
          const _0x45f72f = _0x15dddf;
          _0x513f93[_0x45f72f(0x192)] === XMLHttpRequest[_0x45f72f(0x14d)] &&
          _0x513f93[_0x45f72f(0x1b5)] === 0xc8
            ? _0xa68097(_0x513f93[_0x45f72f(0xf0)])
            : _0x20fb84({
                status: _0x513f93[_0x45f72f(0x1b5)],
                statusText: _0x513f93[_0x45f72f(0x174)],
              });
        }),
        (_0x513f93[_0x15dddf(0xee)] = function () {
          const _0x2ca1b7 = _0x15dddf;
          _0x20fb84({
            status: _0x513f93[_0x2ca1b7(0x1b5)],
            statusText: _0x513f93["statusText"],
          });
        }),
        _0x513f93["send"]();
    });
  }
  async [_0x354e87(0x1ac)]() {
    throw new Error(
      "Method\x20\x27createShaders()\x27\x20must\x20be\x20implemented."
    );
  }
  async [_0x354e87(0x123)]() {
    const _0x35b5a1 = _0x354e87;
    throw new Error(_0x35b5a1(0xe8));
  }
  [_0x354e87(0x12d)](_0x4114fe) {
    throw new Error(
      "Method\x20\x27render(pass)\x27\x20must\x20be\x20implemented."
    );
  }
  async [_0x354e87(0xfd)]() {
    const _0x553b3b = _0x354e87;
    throw new Error(_0x553b3b(0x19a));
  }
  [_0x354e87(0xf4)](_0x5eb489) {
    throw new Error(
      "Method\x20\x27compute(pass)\x27\x20must\x20be\x20implemented."
    );
  }
}
class PolygonIO {
  constructor() {}
  static [_0x354e87(0x112)](_0x3bb18b) {
    return new Promise((_0x9603da, _0x5abf62) => {
      const _0x329613 = _0x2d5c,
        _0x149c04 = new XMLHttpRequest();
      _0x149c04[_0x329613(0x154)]("GET", _0x3bb18b),
        _0x149c04[_0x329613(0x1a2)](_0x329613(0x145), _0x329613(0x133)),
        (_0x149c04[_0x329613(0x1b1)] = _0x329613(0x167)),
        (_0x149c04[_0x329613(0x130)] = function () {
          const _0x19e727 = _0x329613;
          _0x149c04[_0x19e727(0x192)] === XMLHttpRequest[_0x19e727(0x14d)] &&
          _0x149c04["status"] === 0xc8
            ? _0x9603da(_0x149c04[_0x19e727(0x162)])
            : _0x5abf62(
                new Error(_0x19e727(0xef) + _0x149c04[_0x19e727(0x1b5)])
              );
        }),
        (_0x149c04[_0x329613(0xee)] = function () {
          const _0x489ea7 = _0x329613;
          _0x5abf62(new Error(_0x489ea7(0x117)));
        }),
        _0x149c04["send"]();
    });
  }
  static async [_0x354e87(0x161)](_0x45f7a1) {
    const _0x55a03e = _0x354e87;
    let _0x5412d2 = await PolygonIO[_0x55a03e(0x112)](_0x45f7a1),
      _0x926b3a = new TextDecoder()["decode"](_0x5412d2);
    const _0x2c58c5 = [],
      _0x8a2a17 = _0x926b3a[_0x55a03e(0x179)]("\x0a"),
      _0x24f691 = _0x8a2a17[0x0]["trim"]()["split"](",");
    for (
      let _0x2f016c = 0x1;
      _0x2f016c < _0x8a2a17[_0x55a03e(0x131)];
      ++_0x2f016c
    ) {
      const _0x3fe966 = _0x8a2a17[_0x2f016c]["trim"]();
      if (_0x3fe966 !== "")
        _0x2c58c5[_0x55a03e(0x193)](
          _0x3fe966[_0x55a03e(0x179)](",")[_0x55a03e(0x18e)](parseFloat)
        );
    }
    return _0x2c58c5;
  }
  static async [_0x354e87(0x12b)](_0xa862ac, _0x263b50) {
    const _0x3bcb5a = _0x354e87;
    var _0x4d11b2 = "";
    if (_0xa862ac[0x0][_0x3bcb5a(0x131)] == 0x2) _0x4d11b2 = _0x3bcb5a(0xe7);
    else _0x4d11b2 = _0x3bcb5a(0x163);
    for (let _0x4d6c8f = 0x0; _0x4d6c8f < _0xa862ac["length"]; ++_0x4d6c8f) {
      _0x4d11b2 += _0xa862ac[_0x4d6c8f]["join"](",") + "\x0a";
    }
    const _0x3222ed = new Blob([_0x4d11b2], { type: "text/plain" }),
      _0x5d99da = document["createElement"]("a");
    (_0x5d99da["href"] = URL[_0x3bcb5a(0x135)](_0x3222ed)),
      (_0x5d99da[_0x3bcb5a(0x142)] = _0x3bcb5a(0x18f)),
      _0x5d99da["click"](),
      URL[_0x3bcb5a(0x16e)](_0x5d99da[_0x3bcb5a(0x191)]);
  }
}
class PGA2D {
  static [_0x354e87(0x15d)](_0x5b85c5, _0x4b0945) {
    return [
      _0x5b85c5[0x0] * _0x4b0945[0x0] - _0x5b85c5[0x1] * _0x4b0945[0x1],
      _0x5b85c5[0x0] * _0x4b0945[0x1] + _0x5b85c5[0x1] * _0x4b0945[0x0],
      _0x5b85c5[0x0] * _0x4b0945[0x2] +
        _0x5b85c5[0x1] * _0x4b0945[0x3] +
        _0x5b85c5[0x2] * _0x4b0945[0x0] -
        _0x5b85c5[0x3] * _0x4b0945[0x1],
      _0x5b85c5[0x0] * _0x4b0945[0x3] -
        _0x5b85c5[0x1] * _0x4b0945[0x2] +
        _0x5b85c5[0x2] * _0x4b0945[0x1] +
        _0x5b85c5[0x3] * _0x4b0945[0x0],
    ];
  }
  static [_0x354e87(0x1aa)](_0x3349d7) {
    return [_0x3349d7[0x0], -_0x3349d7[0x1], -_0x3349d7[0x2], -_0x3349d7[0x3]];
  }
  static [_0x354e87(0xe9)](_0x49f12a, _0xfd0d69) {
    const _0x4546cb = _0x354e87;
    return PGA2D[_0x4546cb(0x15d)](
      _0xfd0d69,
      PGA2D[_0x4546cb(0x15d)](_0x49f12a, PGA2D["reverse"](_0xfd0d69))
    );
  }
  static [_0x354e87(0x1b4)](_0x311c93) {
    const _0x52f41b = _0x354e87;
    return Math[_0x52f41b(0x16a)](
      _0x311c93[0x0] * _0x311c93[0x0] +
        _0x311c93[0x1] * _0x311c93[0x1] +
        _0x311c93[0x2] * _0x311c93[0x2] +
        _0x311c93[0x3] * _0x311c93[0x3]
    );
  }
  static [_0x354e87(0x17d)](_0x31b7a5, _0x969b8b) {
    return [0x1, 0x0, -_0x31b7a5 / 0x2, -_0x969b8b / 0x2];
  }
  static [_0x354e87(0x198)](_0x3dac5f, _0x30f870 = 0x0, _0x2943fa = 0x0) {
    const _0x3b6446 = _0x354e87;
    let _0x1e20aa = PGA2D[_0x3b6446(0x1a3)](_0x30f870, _0x2943fa);
    return [
      Math["cos"](_0x3dac5f / 0x2),
      Math[_0x3b6446(0x13a)](_0x3dac5f / 0x2) * _0x1e20aa[0x1],
      Math[_0x3b6446(0x13a)](_0x3dac5f / 0x2) * _0x1e20aa[0x2],
      Math["sin"](_0x3dac5f / 0x2) * _0x1e20aa[0x3],
    ];
  }
  static [_0x354e87(0x1a3)](_0x5a7457, _0xb3a2cf) {
    return [0x0, 0x1, _0xb3a2cf, -_0x5a7457];
  }
  static [_0x354e87(0x105)](_0x3bd56b) {
    return [-_0x3bd56b[0x3] / _0x3bd56b[0x1], _0x3bd56b[0x2] / _0x3bd56b[0x1]];
  }
  static [_0x354e87(0x190)](_0x270baa) {
    const _0x299a58 = _0x354e87;
    let _0x4efc7b = PGA2D[_0x299a58(0x1b4)](_0x270baa);
    if (_0x4efc7b == 0x0) return [0x1, 0x0, 0x0, 0x0];
    return [
      _0x270baa[0x0] / _0x4efc7b,
      _0x270baa[0x1] / _0x4efc7b,
      _0x270baa[0x2] / _0x4efc7b,
      _0x270baa[0x3] / _0x4efc7b,
    ];
  }
  static [_0x354e87(0x146)](_0x4aac17, _0x1fdacf) {
    const _0x5c2ce2 = _0x354e87;
    let _0x2779cc = PGA2D["applyMotor"](
      PGA2D[_0x5c2ce2(0x1a3)](_0x4aac17[0x0], _0x4aac17[0x1]),
      _0x1fdacf
    );
    return PGA2D[_0x5c2ce2(0x105)](_0x2779cc);
  }
  static [_0x354e87(0x1a7)](_0x579f7f, _0x454e04, _0x2415d8) {
    const _0x4ef386 = _0x354e87,
      _0x3edac4 = PGA2D["createPoint"](
        _0x454e04[0x0] - _0x579f7f[0x0],
        _0x454e04[0x1] - _0x579f7f[0x1]
      ),
      _0x5d058d = PGA2D[_0x4ef386(0x1a3)](
        _0x2415d8[0x0] - _0x579f7f[0x0],
        _0x2415d8[0x1] - _0x579f7f[0x1]
      );
    return (
      (_0x454e04[0x0] - _0x579f7f[0x0]) * (_0x2415d8[0x1] - _0x579f7f[0x1]) -
        (_0x454e04[0x1] - _0x579f7f[0x1]) * (_0x2415d8[0x0] - _0x579f7f[0x0]) >
      0x0
    );
  }
}
function _0x365e() {
  const _0x1e0c67 = [
    "surfaceArea",
    "fillStyle",
    "configure",
    "_width",
    "center",
    "absolute",
    "open",
    "268719NDvSuS",
    "body",
    "_fontSize",
    "\x0aMouse\x20inside:\x20",
    "_lines",
    "_textFont",
    "queue",
    "_clearColor",
    "geometricProduct",
    "transformOrigin",
    "_textCanvas",
    "inside",
    "read",
    "response",
    "#\x20x,\x20y,\x20z\x0a",
    "10px",
    "rgba(1,\x201,\x201,\x200.5)",
    "devicePixelRatio",
    "arraybuffer",
    "Render\x20Pipeline\x20",
    "measureText",
    "sqrt",
    "_objects",
    "Something\x20is\x20wrong!\x20The\x20surface\x20area\x20is\x20not\x20as\x20expected!",
    "_vertices",
    "revokeObjectURL",
    "fill",
    "requestDevice",
    "getElementById",
    "renderToSelectedView",
    "Loaded\x20in\x20",
    "statusText",
    "2pKAWwT",
    "14868EdsyRX",
    "store",
    "createBuffer",
    "split",
    "webgpu",
    "userAgent",
    "clear",
    "createTranslator",
    "STORAGE",
    "./box.polygon",
    "createGeometry",
    "dense",
    "requestAdapter",
    "updateText",
    "clearRect",
    "winding",
    "1px\x20solid\x20red",
    "toLowerCase",
    "canvas",
    "getMappedRange",
    ")\x20is\x20",
    "set",
    "_paddingtop",
    "clientX",
    "map",
    "download.polygon",
    "normaliozeMotor",
    "href",
    "readyState",
    "push",
    "flat",
    "catch",
    "setVertexBuffer",
    "_renderPipeline",
    "createRotor",
    "_textContext",
    "Method\x20\x27createComputePipeline()\x27\x20must\x20be\x20implemented.",
    "_paddingx",
    "max",
    "style",
    "human",
    "616gJerQx",
    "createShaderModule",
    "./star.polygon",
    "setRequestHeader",
    "createPoint",
    "font",
    "submit",
    "outside",
    "isInside",
    "addEventListener",
    "Shader\x20",
    "reverse",
    "VERTEX",
    "createShaders",
    "init",
    "finish",
    "float32x",
    "_polygon",
    "responseType",
    "./dense.polygon",
    "WebGPU\x20is\x20not\x20supported\x20in\x20this\x20browser.",
    "motorNorm",
    "status",
    "resizeCanvas",
    "left",
    "fps:\x20",
    "BYTES_PER_ELEMENT",
    "height",
    "_objectCnt",
    "loadShader",
    "constructor",
    "now",
    "#\x20x,\x20y\x0a",
    "Method\x20\x27createRenderPipeline()\x27\x20must\x20be\x20implemented.",
    "applyMotor",
    "Point\x20(",
    "clientY",
    "50px",
    "4oPTIJR",
    "onerror",
    "Error\x20loading\x20Polygon\x20file:\x20",
    "responseText",
    "_height",
    "ceil",
    "message",
    "compute",
    "setPipeline",
    "_numV",
    "2000412MhZjfB",
    "line-strip",
    "abs",
    "_canvasWidth",
    "box",
    "getPreferredCanvasFormat",
    "createComputePipeline",
    "match",
    "2675407HOjGCZ",
    "key",
    "getCurrentTexture",
    "_shaderModule",
    "toFixed",
    "_center",
    "extractPoint",
    "fillText",
    "centerOfMass",
    "getContext",
    "unmap",
    "_canvasHeight",
    "toString",
    "this\x20formula\x20works\x20only\x20for\x202D\x20Polygons.",
    "1066820VExHwU",
    "./optimized_standard2d.wgsl",
    "_vertexBufferLayout",
    "top",
    "star",
    "readBinary",
    "_scaleFactor",
    "Abstract\x20classes\x20can\x27t\x20be\x20instantiated.",
    "forEach",
    "innerHeight",
    "Network\x20error\x20loading\x20Polygon\x20file",
    "beginComputePass",
    "_canvas",
    "_device",
    "log",
    ".polygon",
    "basic",
    "_vertexBuffer",
    "white",
    "renderCanvas",
    "appendSceneObject",
    "367756SUzQqf",
    "createRenderPipeline",
    "vertexMain",
    "updateGeometry",
    "createView",
    "_dim",
    "beginRenderPass",
    "width",
    "createElement",
    "write",
    "reversePolygon",
    "render",
    "gpu",
    "window",
    "onload",
    "length",
    "draw",
    "no-cache,\x20no-store,\x20max-age=0",
    "refinePolygon",
    "createObjectURL",
    "Couldn\x27t\x20request\x20WebGPU\x20adapter.",
    "resize",
    "_canvasFormat",
    "innerWidth",
    "sin",
    "innerHTML",
    "pow",
    "getName",
    "Shape:\x0a\x20\x20Non-convex:\x0a\x20\x20\x20\x20H\x20/\x20h\x20-\x20Human\x0a\x20\x20\x20\x20S\x20/\x20s\x20-\x20Star\x0a\x20\x20\x20\x20D\x20/\x20d\x20-\x20Dense\x20human\x0a\x20\x20Convex:\x0a\x20\x20\x20\x20B\x20/\x20b\x20-\x20Box\x0a\x20\x20\x20\x20C\x20/\x20c\x20-\x20Circle\x27\x0a\x0aDetection:\x0a\x20\x201\x20-\x20Basic\x20(isInside)\x0a\x20\x202\x20-\x20Winding\x20number\x0a\x0aControls:\x0a\x20\x20Q\x20/\x20q\x20-\x20Hide\x20window\x0a\x0aCurrent\x20detection:\x20",
    "updateTextRegion",
    "position",
    "appendChild",
    "download",
    "normalizePolygon",
    "1398190BAkpax",
    "Cache-Control",
    "applyMotorToPoint",
    "_area",
    "end",
    "_context",
    "_filename",
    "fillRect",
    "circle",
    "DONE",
  ];
  _0x365e = function () {
    return _0x1e0c67;
  };
  return _0x365e();
}
class Polygon {
  constructor(_0x2e281e) {
    const _0x36f322 = _0x354e87;
    this[_0x36f322(0x14a)] = _0x2e281e;
  }
  [_0x354e87(0x107)]() {
    const _0x3c0095 = _0x354e87;
    let _0x3848a1 = Array(this[_0x3c0095(0x127)])[_0x3c0095(0x16f)](0x0);
    for (
      let _0x17476b = 0x0;
      _0x17476b < this[_0x3c0095(0xf6)] - 0x1;
      ++_0x17476b
    ) {
      for (let _0x468d7d = 0x0; _0x468d7d < this["_dim"]; ++_0x468d7d) {
        _0x3848a1[_0x468d7d] += this[_0x3c0095(0x1b0)][_0x17476b][_0x468d7d];
      }
    }
    for (let _0x364712 = 0x0; _0x364712 < this[_0x3c0095(0x127)]; ++_0x364712) {
      _0x3848a1[_0x364712] /= this["_numV"];
    }
    return _0x3848a1;
  }
  ["surfaceArea"]() {
    const _0x2e8f36 = _0x354e87,
      _0x375f43 = (_0x2840dc, _0x123112) =>
        Math[_0x2e8f36(0x16a)](
          Math[_0x2e8f36(0x13c)](_0x123112[0x0] - _0x2840dc[0x0], 0x2) +
            Math[_0x2e8f36(0x13c)](_0x123112[0x1] - _0x2840dc[0x1], 0x2) +
            Math[_0x2e8f36(0x13c)](_0x123112[0x2] - _0x2840dc[0x2], 0x2)
        ),
      _0x260d77 = (_0x389c47, _0x3b339b, _0x476f89, _0x42c1ed) =>
        Math[_0x2e8f36(0x16a)](
          _0x42c1ed *
            (_0x42c1ed - _0x389c47) *
            (_0x42c1ed - _0x3b339b) *
            (_0x42c1ed - _0x476f89)
        );
    let _0x28d7ac = 0x0;
    var _0x351d26 = [...this[_0x2e8f36(0x107)]()];
    if (_0x351d26[_0x2e8f36(0x131)] == 0x2) _0x351d26[_0x2e8f36(0x193)](0x0);
    for (
      let _0x473e9a = 0x0;
      _0x473e9a < this[_0x2e8f36(0x1b0)][_0x2e8f36(0x131)] - 0x1;
      ++_0x473e9a
    ) {
      var _0x2c3910 = [...this[_0x2e8f36(0x1b0)][_0x473e9a]];
      if (_0x2c3910[_0x2e8f36(0x131)] == 0x2) _0x2c3910[_0x2e8f36(0x193)](0x0);
      var _0x1e6b01 = [...this[_0x2e8f36(0x1b0)][_0x473e9a + 0x1]];
      if (_0x1e6b01[_0x2e8f36(0x131)] == 0x2) _0x1e6b01[_0x2e8f36(0x193)](0x0);
      const _0x1d773d = _0x375f43(_0x351d26, _0x2c3910),
        _0x14618a = _0x375f43(_0x2c3910, _0x1e6b01),
        _0x3db0e3 = _0x375f43(_0x1e6b01, _0x351d26),
        _0x517bfc = (_0x1d773d + _0x14618a + _0x3db0e3) / 0x2;
      _0x28d7ac += _0x260d77(_0x1d773d, _0x14618a, _0x3db0e3, _0x517bfc);
    }
    return _0x28d7ac;
  }
  [_0x354e87(0x143)]() {
    const _0x209065 = _0x354e87;
    this[_0x209065(0x104)] = this[_0x209065(0x107)]();
    for (
      let _0x4eada1 = 0x0;
      _0x4eada1 < this[_0x209065(0x1b0)][_0x209065(0x131)];
      ++_0x4eada1
    ) {
      for (
        let _0x25f91f = 0x0;
        _0x25f91f < this[_0x209065(0x127)];
        ++_0x25f91f
      ) {
        this[_0x209065(0x1b0)][_0x4eada1][_0x25f91f] -=
          this[_0x209065(0x104)][_0x25f91f];
      }
    }
    this[_0x209065(0x147)] = this[_0x209065(0x14e)]();
    const _0x5ddf96 = 0x1;
    this[_0x209065(0x113)] = Math[_0x209065(0x16a)](
      (0x1 / this[_0x209065(0x147)]) * _0x5ddf96
    );
    for (
      let _0x504b4f = 0x0;
      _0x504b4f < this["_polygon"][_0x209065(0x131)];
      ++_0x504b4f
    ) {
      for (
        let _0x249121 = 0x0;
        _0x249121 < this[_0x209065(0x127)];
        ++_0x249121
      ) {
        this[_0x209065(0x1b0)][_0x504b4f][_0x249121] *= this["_scaleFactor"];
      }
    }
    Math[_0x209065(0xf9)](this[_0x209065(0x14e)]() - _0x5ddf96) > 0.0001 &&
      console[_0x209065(0x11b)](_0x209065(0x16c));
  }
  [_0x354e87(0x134)]() {
    const _0x1837a4 = _0x354e87;
    var _0x195217 = [];
    for (
      let _0x538a4c = 0x0;
      _0x538a4c < this["_polygon"][_0x1837a4(0x131)] - 0x1;
      ++_0x538a4c
    ) {
      var _0x306592 = [...this[_0x1837a4(0x1b0)][_0x538a4c]],
        _0x394b67 = [...this["_polygon"][_0x538a4c + 0x1]];
      _0x195217[_0x1837a4(0x193)](_0x306592);
      let _0x271751 = Array(this[_0x1837a4(0x127)])[_0x1837a4(0x16f)](0x0);
      for (
        let _0x3473ac = 0x0;
        _0x3473ac < this[_0x1837a4(0x127)];
        ++_0x3473ac
      ) {
        _0x271751[_0x3473ac] =
          (_0x306592[_0x3473ac] + _0x394b67[_0x3473ac]) / 0x2;
      }
      _0x195217[_0x1837a4(0x193)](_0x271751);
    }
    _0x195217["push"](this[_0x1837a4(0x1b0)][0x0]),
      (this[_0x1837a4(0x1b0)] = _0x195217),
      (this[_0x1837a4(0xf6)] = this[_0x1837a4(0x1b0)][_0x1837a4(0x131)]),
      this["normalizePolygon"]();
  }
  [_0x354e87(0x12c)]() {
    const _0x1b991b = _0x354e87;
    var _0x581818 = [];
    for (
      let _0x38ef2c = this["_polygon"]["length"] - 0x1;
      _0x38ef2c >= 0x0;
      --_0x38ef2c
    ) {
      _0x581818[_0x1b991b(0x193)](this[_0x1b991b(0x1b0)][_0x38ef2c]);
    }
    (this["_polygon"] = _0x581818),
      (this["_numV"] = this[_0x1b991b(0x1b0)][_0x1b991b(0x131)]),
      this[_0x1b991b(0x143)]();
  }
  [_0x354e87(0x1a7)](_0x2cef63, _0x5dce78, _0x27ccf3) {
    const _0x1f22a7 = _0x354e87;
    if (this[_0x1f22a7(0x1b0)][0x0]["length"] != 0x2)
      throw new Error(_0x1f22a7(0x10c));
    return PGA2D[_0x1f22a7(0x1a7)](_0x2cef63, _0x5dce78, _0x27ccf3);
  }
  async ["init"]() {
    const _0x577cf6 = _0x354e87;
    (this["_polygon"] = await PolygonIO[_0x577cf6(0x161)](
      this[_0x577cf6(0x14a)]
    )),
      (this[_0x577cf6(0xf6)] = this[_0x577cf6(0x1b0)]["length"]),
      (this["_dim"] = this[_0x577cf6(0x1b0)][0x0][_0x577cf6(0x131)]),
      this["normalizePolygon"]();
  }
}
class PolygonObject extends SceneObject {
  constructor(_0x1f3b1c, _0x7c45d3, _0x2748c7) {
    const _0x1cbab0 = _0x354e87;
    super(_0x1f3b1c, _0x7c45d3),
      (this[_0x1cbab0(0x1b0)] = new Polygon(_0x2748c7));
  }
  async ["createGeometry"]() {
    const _0x4e67ce = _0x354e87;
    await this["_polygon"]["init"](),
      (this["_numV"] = this[_0x4e67ce(0x1b0)]["_numV"]),
      (this[_0x4e67ce(0x127)] = this[_0x4e67ce(0x1b0)]["_dim"]),
      (this[_0x4e67ce(0x16d)] =
        this[_0x4e67ce(0x1b0)][_0x4e67ce(0x1b0)][_0x4e67ce(0x194)]()),
      (this[_0x4e67ce(0x11e)] = this[_0x4e67ce(0x11a)][_0x4e67ce(0x178)]({
        label: "Vertices\x20Normals\x20and\x20More\x20" + this["getName"](),
        size:
          this[_0x4e67ce(0x16d)][_0x4e67ce(0x131)] *
          Float32Array["BYTES_PER_ELEMENT"],
        usage:
          GPUBufferUsage[_0x4e67ce(0x1ab)] |
          GPUBufferUsage[_0x4e67ce(0x17e)] |
          GPUBufferUsage["COPY_DST"],
        mappedAtCreation: !![],
      })),
      new Float32Array(this[_0x4e67ce(0x11e)][_0x4e67ce(0x189)]())[
        _0x4e67ce(0x18b)
      ](this[_0x4e67ce(0x16d)]),
      this[_0x4e67ce(0x11e)][_0x4e67ce(0x109)](),
      (this[_0x4e67ce(0x10f)] = {
        arrayStride: this["_dim"] * Float32Array[_0x4e67ce(0xe1)],
        attributes: [
          {
            format:
              _0x4e67ce(0x1af) + this[_0x4e67ce(0x127)][_0x4e67ce(0x10b)](),
            offset: 0x0,
            shaderLocation: 0x0,
          },
        ],
      });
  }
  async [_0x354e87(0x1ac)]() {
    const _0xa66d2f = _0x354e87;
    let _0x60fdb7 = await this[_0xa66d2f(0xe4)](_0xa66d2f(0x10e));
    this[_0xa66d2f(0x102)] = this["_device"][_0xa66d2f(0x1a0)]({
      label: _0xa66d2f(0x1a9) + this["getName"](),
      code: _0x60fdb7,
    });
  }
  async [_0x354e87(0x123)]() {
    const _0x1cecab = _0x354e87;
    this[_0x1cecab(0x197)] = this[_0x1cecab(0x11a)][_0x1cecab(0x123)]({
      label: _0x1cecab(0x168) + this[_0x1cecab(0x13d)](),
      layout: "auto",
      vertex: {
        module: this[_0x1cecab(0x102)],
        entryPoint: _0x1cecab(0x124),
        buffers: [this[_0x1cecab(0x10f)]],
      },
      fragment: {
        module: this["_shaderModule"],
        entryPoint: "fragmentMain",
        targets: [{ format: this["_canvasFormat"] }],
      },
      primitive: { topology: _0x1cecab(0xf8) },
    });
  }
  [_0x354e87(0x12d)](_0x173c19) {
    const _0x583d24 = _0x354e87;
    _0x173c19[_0x583d24(0xf5)](this[_0x583d24(0x197)]),
      _0x173c19[_0x583d24(0x196)](0x0, this[_0x583d24(0x11e)]),
      _0x173c19[_0x583d24(0x132)](this[_0x583d24(0xf6)]);
  }
  async [_0x354e87(0xfd)]() {}
  ["compute"](_0x47c5ef) {}
}
class StandardTextObject {
  constructor(
    _0x5f139b,
    _0x5d5baf = 0x5,
    _0x1e0032 = "18px\x20Arial",
    _0x40016b = "0"
  ) {
    const _0x532544 = _0x354e87;
    (this[_0x532544(0x15a)] = _0x1e0032),
      (this["_lineSpacing"] = _0x5d5baf),
      (this["_textCanvas"] = document[_0x532544(0x12a)](_0x532544(0x188))),
      (this[_0x532544(0x199)] = this[_0x532544(0x15f)]["getContext"]("2d")),
      this[_0x532544(0x13f)](_0x5f139b),
      this[_0x532544(0x183)](_0x5f139b),
      (this[_0x532544(0x15f)][_0x532544(0x19d)][_0x532544(0x140)] =
        _0x532544(0x153)),
      (this["_textCanvas"][_0x532544(0x19d)]["top"] = _0x532544(0x164)),
      (this[_0x532544(0x15f)][_0x532544(0x19d)][_0x532544(0x1b7)] =
        _0x532544(0x164)),
      (this[_0x532544(0x15f)]["style"]["border"] = _0x532544(0x186)),
      (this[_0x532544(0x15f)]["style"]["marginTop"] = _0x40016b),
      document[_0x532544(0x156)][_0x532544(0x141)](this[_0x532544(0x15f)]);
  }
  ["toggleVisibility"]() {
    const _0x479235 = _0x354e87;
    this[_0x479235(0x15f)]["hidden"] = !this[_0x479235(0x15f)]["hidden"];
  }
  [_0x354e87(0x13f)](_0x4f0ff2) {
    const _0x2a2685 = _0x354e87;
    (this[_0x2a2685(0x199)][_0x2a2685(0x1a4)] = this[_0x2a2685(0x15a)]),
      (this[_0x2a2685(0x159)] = _0x4f0ff2[_0x2a2685(0x179)]("\x0a")),
      (this["_width"] = Math[_0x2a2685(0x19c)](
        ...this[_0x2a2685(0x159)][_0x2a2685(0x18e)](
          (_0x2be899) =>
            this[_0x2a2685(0x199)][_0x2a2685(0x169)](_0x2be899)["width"]
        )
      ));
    const _0x518ea1 = this[_0x2a2685(0x15a)][_0x2a2685(0xfe)](/(\d+)px/);
    _0x518ea1
      ? (this[_0x2a2685(0x157)] = parseInt(_0x518ea1[0x1], 0xa))
      : ((this[_0x2a2685(0x157)] = 0x12),
        (this["_textFont"] = "18px\x20Arial")),
      (this[_0x2a2685(0xf1)] =
        this[_0x2a2685(0x159)][_0x2a2685(0x131)] *
        (this[_0x2a2685(0x157)] + this["_lineSpacing"])),
      (this[_0x2a2685(0x19b)] = 0x5),
      (this[_0x2a2685(0x18c)] = 0x3),
      (this[_0x2a2685(0xfa)] = Math[_0x2a2685(0xf2)](
        this[_0x2a2685(0x151)] + this["_paddingx"] * 0x2
      )),
      (this[_0x2a2685(0x10a)] = Math[_0x2a2685(0xf2)](
        this["_height"] + this[_0x2a2685(0x18c)]
      )),
      (this[_0x2a2685(0x15f)][_0x2a2685(0x129)] = this[_0x2a2685(0xfa)]),
      (this[_0x2a2685(0x15f)][_0x2a2685(0xe2)] = this[_0x2a2685(0x10a)]),
      (this["_textContext"][_0x2a2685(0x1a4)] = this[_0x2a2685(0x15a)]),
      (this[_0x2a2685(0x199)]["textBaseline"] = _0x2a2685(0x110));
  }
  [_0x354e87(0x183)](_0x40ef0c) {
    const _0x1da7ab = _0x354e87;
    (this[_0x1da7ab(0x159)] = _0x40ef0c[_0x1da7ab(0x179)]("\x0a")),
      (this[_0x1da7ab(0x199)][_0x1da7ab(0x14f)] = _0x1da7ab(0x165)),
      this[_0x1da7ab(0x199)][_0x1da7ab(0x184)](
        0x0,
        0x0,
        this[_0x1da7ab(0xfa)],
        this["_canvasHeight"]
      ),
      this[_0x1da7ab(0x199)][_0x1da7ab(0x14b)](
        0x0,
        0x0,
        this[_0x1da7ab(0xfa)],
        this[_0x1da7ab(0x10a)]
      ),
      (this["_textContext"][_0x1da7ab(0x14f)] = _0x1da7ab(0x11f)),
      this[_0x1da7ab(0x159)][_0x1da7ab(0x115)]((_0xfdebf7, _0x2dafd0) => {
        const _0x5786e1 = _0x1da7ab,
          _0x385cbb = this[_0x5786e1(0x19b)],
          _0x3d5b3c =
            this[_0x5786e1(0x18c)] +
            _0x2dafd0 * (this[_0x5786e1(0x157)] + this["_lineSpacing"]);
        this[_0x5786e1(0x199)][_0x5786e1(0x106)](
          _0xfdebf7,
          _0x385cbb,
          _0x3d5b3c
        );
      });
  }
}
async function init() {
  const _0x398361 = _0x354e87,
    _0x2d5625 = document["createElement"]("canvas");
  (_0x2d5625["id"] = _0x398361(0x120)),
    document[_0x398361(0x156)][_0x398361(0x141)](_0x2d5625);
  const _0x4ae990 = new Renderer(_0x2d5625);
  await _0x4ae990[_0x398361(0x1ad)]();
  const _0x4da8b3 = new PolygonObject(
    _0x4ae990[_0x398361(0x11a)],
    _0x4ae990[_0x398361(0x138)],
    _0x398361(0x17f)
  );
  await _0x4ae990[_0x398361(0x121)](_0x4da8b3);
  let _0x55bc3d = "??",
    _0x3a87b0 = _0x398361(0xfb),
    _0x26c720 = "basic",
    _0xa1d9e0,
    _0x194dfb = ![];
  const _0x4ac47c = () => {
    const _0x4c90e1 = _0x398361;
    return _0x4c90e1(0x13e) + _0x26c720 + _0x4c90e1(0x158) + _0xa1d9e0;
  };
  var _0x45910f = new StandardTextObject(_0x398361(0xe0) + _0x55bc3d),
    _0x478162 = new StandardTextObject(
      _0x4ac47c(),
      undefined,
      undefined,
      _0x398361(0xec)
    );
  addEventListener("keydown", async function (_0x1b2512) {
    const _0x377dd4 = _0x398361;
    if (_0x1b2512["defaultPrevented"]) return;
    switch (_0x1b2512[_0x377dd4(0x100)][_0x377dd4(0x187)]()) {
      case "b":
        _0x3a87b0 !== _0x377dd4(0xfb) &&
          ((_0x3a87b0 = "box"),
          _0x5af11e(_0x3a87b0),
          (_0x4da8b3[_0x377dd4(0x1b0)][_0x377dd4(0x14a)] = _0x377dd4(0x17f)),
          await _0x18ca27());
        break;
      case "c":
        _0x3a87b0 !== _0x377dd4(0x14c) &&
          ((_0x3a87b0 = _0x377dd4(0x14c)),
          _0x5af11e(_0x3a87b0),
          (_0x4da8b3[_0x377dd4(0x1b0)][_0x377dd4(0x14a)] = "./circle.polygon"),
          await _0x18ca27());
        break;
      case "h":
        _0x3a87b0 !== _0x377dd4(0x19e) &&
          ((_0x3a87b0 = _0x377dd4(0x19e)),
          _0x5af11e(_0x3a87b0),
          (_0x4da8b3["_polygon"][_0x377dd4(0x14a)] = "./human.polygon"),
          await _0x18ca27());
        break;
      case "s":
        _0x3a87b0 !== _0x377dd4(0x111) &&
          ((_0x3a87b0 = _0x377dd4(0x111)),
          _0x5af11e(_0x3a87b0),
          (_0x4da8b3[_0x377dd4(0x1b0)][_0x377dd4(0x14a)] = _0x377dd4(0x1a1)),
          await _0x18ca27());
        break;
      case "d":
        _0x3a87b0 !== _0x377dd4(0x181) &&
          ((_0x3a87b0 = _0x377dd4(0x181)),
          _0x5af11e(_0x3a87b0),
          (_0x4da8b3[_0x377dd4(0x1b0)][_0x377dd4(0x14a)] = _0x377dd4(0x1b2)),
          await _0x18ca27());
        break;
      case "1":
        _0x26c720 = _0x377dd4(0x11d);
        break;
      case "2":
        _0x26c720 = _0x377dd4(0x185);
        break;
      case "q":
        (_0x194dfb = !_0x194dfb), _0x478162["toggleVisibility"]();
        break;
    }
    async function _0x5af11e(_0x1b0aab) {
      const _0x2d75cf = _0x377dd4;
      console["log"](_0x2d75cf(0x173) + _0x1b0aab + _0x2d75cf(0x11c));
    }
    async function _0x18ca27() {
      const _0x106306 = _0x377dd4;
      await _0x4da8b3[_0x106306(0x1b0)]["init"](),
        await _0x4da8b3[_0x106306(0x180)](),
        await _0x4da8b3["createShaders"](),
        await _0x4da8b3[_0x106306(0x123)]();
    }
    _0x478162[_0x377dd4(0x183)](_0x4ac47c());
  }),
    (onmousemove = function (_0x3374a7) {
      const _0x4b4d9b = _0x398361;
      let _0x20dd6a =
          (_0x3374a7[_0x4b4d9b(0x18d)] / this["window"][_0x4b4d9b(0x139)]) *
            0x2 -
          0x1,
        _0x5164ac =
          (-_0x3374a7[_0x4b4d9b(0xeb)] /
            this[_0x4b4d9b(0x12f)][_0x4b4d9b(0x116)]) *
            0x2 +
          0x1,
        _0x220810 = [_0x20dd6a, _0x5164ac];
      (_0xa1d9e0 = !![]),
        _0x26c720 === _0x4b4d9b(0x11d)
          ? (_0xa1d9e0 = basicCollisionDetection(_0x4da8b3, _0x220810))
          : (_0xa1d9e0 = windingNumberDetection(_0x4da8b3, _0x220810)),
        _0x478162[_0x4b4d9b(0x183)](_0x4ac47c()),
        _0x194dfb &&
          console["log"](
            _0x4b4d9b(0xea) +
              _0x20dd6a[_0x4b4d9b(0x103)](0x2) +
              ",\x20" +
              _0x5164ac["toFixed"](0x2) +
              _0x4b4d9b(0x18a) +
              (_0xa1d9e0 ? _0x4b4d9b(0x160) : _0x4b4d9b(0x1a6))
          );
    });
  var _0x2c349f = 0x0,
    _0x7360ab = 0x3c,
    _0x15b96d = 0x1 / _0x7360ab,
    _0x5eee82 = _0x15b96d * 0x3e8,
    _0x536497;
  let _0x4664a9 = () => {
    const _0x1eaac3 = _0x398361;
    let _0x3e8188 = Date[_0x1eaac3(0xe6)]() - _0x536497;
    _0x3e8188 > _0x5eee82 &&
      (++_0x2c349f,
      (_0x536497 = Date[_0x1eaac3(0xe6)]() - (_0x3e8188 % _0x5eee82)),
      _0x4ae990[_0x1eaac3(0x12d)]()),
      requestAnimationFrame(_0x4664a9);
  };
  return (
    (_0x536497 = Date[_0x398361(0xe6)]()),
    _0x4664a9(),
    setInterval(() => {
      const _0x558837 = _0x398361;
      _0x45910f[_0x558837(0x183)](_0x558837(0xe0) + _0x2c349f),
        (_0x2c349f = 0x0);
    }, 0x3e8),
    _0x4ae990
  );
}
function _0x2d5c(_0x776125, _0x64275d) {
  const _0x365e54 = _0x365e();
  return (
    (_0x2d5c = function (_0x2d5c54, _0x147561) {
      _0x2d5c54 = _0x2d5c54 - 0xe0;
      let _0x1f3cc2 = _0x365e54[_0x2d5c54];
      return _0x1f3cc2;
    }),
    _0x2d5c(_0x776125, _0x64275d)
  );
}
init()
  ["then"]((_0x55f663) => {
    const _0x1ebd66 = _0x354e87;
    console[_0x1ebd66(0x11b)](_0x55f663);
  })
  [_0x354e87(0x195)]((_0x1f5112) => {
    const _0x5703da = _0x354e87,
      _0x3fa7a9 = document[_0x5703da(0x12a)]("p");
    (_0x3fa7a9[_0x5703da(0x13b)] =
      navigator[_0x5703da(0x17b)] + "</br>" + _0x1f5112[_0x5703da(0xf3)]),
      document[_0x5703da(0x156)][_0x5703da(0x141)](_0x3fa7a9),
      document[_0x5703da(0x171)]("renderCanvas")["remove"]();
  });
function basicCollisionDetection(_0x181f7a, _0x333d2b) {
  const _0x5c9b3f = _0x354e87;
  let _0xdfec12 = !![],
    _0x23135e = _0x181f7a[_0x5c9b3f(0x1b0)]["_polygon"];
  for (
    let _0x219a99 = 0x0;
    _0x219a99 < _0x23135e[_0x5c9b3f(0x131)] - 0x1;
    ++_0x219a99
  ) {
    let _0x12011a = _0x23135e[_0x219a99],
      _0x2f1869 = _0x23135e[_0x219a99 + 0x1];
    if (
      !_0x181f7a[_0x5c9b3f(0x1b0)][_0x5c9b3f(0x1a7)](
        _0x12011a,
        _0x2f1869,
        _0x333d2b
      )
    ) {
      _0xdfec12 = ![];
      break;
    }
  }
  return _0xdfec12;
}
function windingNumberDetection(_0x4745de, _0x4c43dc) {
  const _0x296048 = _0x354e87,
    _0x3b8330 = _0x4745de[_0x296048(0x1b0)][_0x296048(0x1b0)];
  let _0x19d4b0 = 0x0,
    _0xc8f8f9 = 0x0;
  const _0x11bd97 = _0x4c43dc[0x0],
    _0x2842f7 = _0x4c43dc[0x1];
  for (
    let _0x1f3e96 = 0x0;
    _0x1f3e96 < _0x3b8330["length"] - 0x1;
    _0x1f3e96++
  ) {
    const _0xc67130 = _0x3b8330[_0x1f3e96],
      _0xd49b27 = _0x3b8330[_0x1f3e96 + 0x1],
      _0x48088f = _0xc67130[0x0],
      _0x5ee10e = _0xc67130[0x1],
      _0x45a6c0 = _0xd49b27[0x0],
      _0x111adf = _0xd49b27[0x1];
    if (
      (_0x5ee10e <= _0x2842f7 && _0x2842f7 < _0x111adf) ||
      (_0x111adf <= _0x2842f7 && _0x2842f7 < _0x5ee10e)
    ) {
      const _0x485fe2 = (_0x2842f7 - _0x5ee10e) / (_0x111adf - _0x5ee10e),
        _0x3cd7c8 = _0x48088f + _0x485fe2 * (_0x45a6c0 - _0x48088f);
      if (_0x3cd7c8 >= _0x11bd97) {
        const _0x1f4db7 = _0x111adf > _0x5ee10e ? 0x1 : -0x1;
        _0x19d4b0 += _0x1f4db7;
      }
      if (_0x3cd7c8 <= _0x11bd97) {
        const _0x24d51f = _0x111adf > _0x5ee10e ? 0x1 : -0x1;
        _0xc8f8f9 += _0x24d51f;
      }
    }
  }
  return _0x19d4b0 !== 0x0 && _0xc8f8f9 !== 0x0;
}
