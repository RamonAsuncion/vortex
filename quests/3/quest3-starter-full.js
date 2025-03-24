const _0x23072d = _0x6d36;
(function (_0x12e75f, _0x3fcbca) {
  const _0x1ce032 = _0x6d36,
    _0x4b0b9e = _0x12e75f();
  while (!![]) {
    try {
      const _0x2613d4 =
        (-parseInt(_0x1ce032(0x13f)) / 0x1) *
          (-parseInt(_0x1ce032(0x125)) / 0x2) +
        parseInt(_0x1ce032(0x16e)) / 0x3 +
        (-parseInt(_0x1ce032(0x168)) / 0x4) *
          (parseInt(_0x1ce032(0x17e)) / 0x5) +
        (parseInt(_0x1ce032(0xfc)) / 0x6) * (-parseInt(_0x1ce032(0xf1)) / 0x7) +
        (-parseInt(_0x1ce032(0x119)) / 0x8) *
          (parseInt(_0x1ce032(0xd2)) / 0x9) +
        -parseInt(_0x1ce032(0xca)) / 0xa +
        (parseInt(_0x1ce032(0xc6)) / 0xb) * (parseInt(_0x1ce032(0xf5)) / 0xc);
      if (_0x2613d4 === _0x3fcbca) break;
      else _0x4b0b9e["push"](_0x4b0b9e["shift"]());
    } catch (_0x3ca389) {
      _0x4b0b9e["push"](_0x4b0b9e["shift"]());
    }
  }
})(_0x41b6, 0x30362);
class Renderer {
  constructor(_0x164908) {
    const _0x5b1895 = _0x6d36;
    (this[_0x5b1895(0xc9)] = _0x164908),
      (this[_0x5b1895(0xf9)] = []),
      (this[_0x5b1895(0xf0)] = { r: 0x0, g: 0x0, b: 0x0, a: 0x1 });
  }
  async [_0x23072d(0x156)]() {
    const _0x248153 = _0x23072d;
    if (!navigator[_0x248153(0xdb)]) throw Error(_0x248153(0x126));
    const _0x421579 = await navigator[_0x248153(0xdb)][_0x248153(0x18d)]();
    if (!_0x421579) throw Error(_0x248153(0x10d));
    (this["_device"] = await _0x421579[_0x248153(0x160)]()),
      (this[_0x248153(0xed)] = this[_0x248153(0xc9)]["getContext"](
        _0x248153(0xe0)
      )),
      (this["_canvasFormat"] =
        navigator[_0x248153(0xdb)]["getPreferredCanvasFormat"]()),
      this[_0x248153(0xed)][_0x248153(0x111)]({
        device: this[_0x248153(0x123)],
        format: this[_0x248153(0x187)],
      }),
      this["resizeCanvas"](),
      window[_0x248153(0x100)](
        _0x248153(0x184),
        this["resizeCanvas"]["bind"](this)
      );
  }
  [_0x23072d(0xc4)]() {
    const _0x3744e6 = _0x23072d,
      _0x428e0d = window[_0x3744e6(0xd7)] || 0x1,
      _0x1b0d05 = window["innerWidth"] * _0x428e0d,
      _0x8e5f49 = window[_0x3744e6(0x18f)] * _0x428e0d;
    (this[_0x3744e6(0xc9)][_0x3744e6(0xd8)] = _0x1b0d05),
      (this[_0x3744e6(0xc9)]["height"] = _0x8e5f49),
      (this[_0x3744e6(0xc9)][_0x3744e6(0x164)]["width"] =
        window["innerWidth"] + "px"),
      (this[_0x3744e6(0xc9)]["style"]["height"] = window["innerHeight"] + "px"),
      (this[_0x3744e6(0xc9)][_0x3744e6(0x164)][_0x3744e6(0x141)] =
        _0x3744e6(0x12e)),
      this[_0x3744e6(0x15b)]();
  }
  async [_0x23072d(0xe6)](_0x274f72) {
    const _0xd6fa94 = _0x23072d;
    await _0x274f72[_0xd6fa94(0x156)](),
      this[_0xd6fa94(0xf9)][_0xd6fa94(0x17d)](_0x274f72);
  }
  ["renderToSelectedView"](_0x33c83f) {
    const _0x2f538b = _0x23072d;
    for (const _0x4900db of this[_0x2f538b(0xf9)]) {
      _0x4900db?.[_0x2f538b(0x11d)]();
    }
    let _0x531cf2 = this[_0x2f538b(0x123)][_0x2f538b(0x103)]();
    const _0x53fbaa = _0x531cf2[_0x2f538b(0x113)]({
      colorAttachments: [
        {
          view: _0x33c83f,
          clearValue: this[_0x2f538b(0xf0)],
          loadOp: "clear",
          storeOp: _0x2f538b(0x105),
        },
      ],
    });
    for (const _0x5b0f7f of this["_objects"]) {
      _0x5b0f7f?.[_0x2f538b(0x15b)](_0x53fbaa);
    }
    _0x53fbaa[_0x2f538b(0x186)]();
    const _0xff0e3d = _0x531cf2[_0x2f538b(0x180)]();
    for (const _0x565c26 of this[_0x2f538b(0xf9)]) {
      _0x565c26?.[_0x2f538b(0x198)](_0xff0e3d);
    }
    _0xff0e3d[_0x2f538b(0x186)]();
    const _0x14970c = _0x531cf2["finish"]();
    this["_device"]["queue"][_0x2f538b(0x17c)]([_0x14970c]);
  }
  [_0x23072d(0x15b)]() {
    const _0x1968ca = _0x23072d;
    this[_0x1968ca(0x108)](
      this["_context"]["getCurrentTexture"]()["createView"]()
    );
  }
}
class PGA2D {
  static ["geometricProduct"](_0x405f01, _0xb32636) {
    return [
      _0x405f01[0x0] * _0xb32636[0x0] - _0x405f01[0x1] * _0xb32636[0x1],
      _0x405f01[0x0] * _0xb32636[0x1] + _0x405f01[0x1] * _0xb32636[0x0],
      _0x405f01[0x0] * _0xb32636[0x2] +
        _0x405f01[0x1] * _0xb32636[0x3] +
        _0x405f01[0x2] * _0xb32636[0x0] -
        _0x405f01[0x3] * _0xb32636[0x1],
      _0x405f01[0x0] * _0xb32636[0x3] -
        _0x405f01[0x1] * _0xb32636[0x2] +
        _0x405f01[0x2] * _0xb32636[0x1] +
        _0x405f01[0x3] * _0xb32636[0x0],
    ];
  }
  static [_0x23072d(0x128)](_0x2eb991) {
    return [_0x2eb991[0x0], -_0x2eb991[0x1], -_0x2eb991[0x2], -_0x2eb991[0x3]];
  }
  static [_0x23072d(0x15a)](_0x4e65a5, _0x19fe56) {
    const _0x1ca8d7 = _0x23072d;
    return PGA2D[_0x1ca8d7(0xf7)](
      _0x19fe56,
      PGA2D[_0x1ca8d7(0xf7)](_0x4e65a5, PGA2D[_0x1ca8d7(0x128)](_0x19fe56))
    );
  }
  static [_0x23072d(0xee)](_0x601b2d) {
    const _0x326950 = _0x23072d;
    return Math[_0x326950(0x15e)](
      _0x601b2d[0x0] * _0x601b2d[0x0] +
        _0x601b2d[0x1] * _0x601b2d[0x1] +
        _0x601b2d[0x2] * _0x601b2d[0x2] +
        _0x601b2d[0x3] * _0x601b2d[0x3]
    );
  }
  static [_0x23072d(0x131)](_0x346e2b, _0x166ade) {
    return [0x1, 0x0, _0x166ade / 0x2, -_0x346e2b / 0x2];
  }
  static [_0x23072d(0x135)](_0x3c9b5a, _0x36d22f = 0x0, _0x37d36d = 0x0) {
    const _0x259b77 = _0x23072d;
    return [
      Math[_0x259b77(0x193)](_0x3c9b5a / 0x2),
      -Math["sin"](_0x3c9b5a / 0x2),
      -_0x36d22f * Math["sin"](_0x3c9b5a / 0x2),
      -_0x37d36d * Math[_0x259b77(0xdc)](_0x3c9b5a / 0x2),
    ];
  }
  static [_0x23072d(0xfe)](_0x15d5eb) {
    const _0x97697c = _0x23072d;
    let _0x23b72b = PGA2D[_0x97697c(0xee)](_0x15d5eb);
    if (_0x23b72b == 0x0) return [0x1, 0x0, 0x0, 0x0];
    return [
      _0x15d5eb[0x0] / _0x23b72b,
      _0x15d5eb[0x1] / _0x23b72b,
      _0x15d5eb[0x2] / _0x23b72b,
      _0x15d5eb[0x3] / _0x23b72b,
    ];
  }
  static ["applyMotorToPoint"](_0x18c5ab, _0x12093d) {
    const _0x586284 = _0x23072d;
    let _0x1a29d8 = PGA2D[_0x586284(0x15a)](
      [0x0, 0x1, _0x18c5ab[0x0], _0x18c5ab[0x1]],
      _0x12093d
    );
    return [_0x1a29d8[0x2] / _0x1a29d8[0x1], _0x1a29d8[0x3] / _0x1a29d8[0x1]];
  }
}
class Camera {
  constructor() {
    this["_pose"] = new Float32Array([0x1, 0x0, 0x0, 0x0, 0x1, 0x1]);
  }
  ["resetPose"]() {
    const _0x1c4b02 = _0x23072d;
    (this[_0x1c4b02(0x112)][0x0] = 0x1),
      (this["_pose"][0x1] = 0x0),
      (this[_0x1c4b02(0x112)][0x2] = 0x0),
      (this[_0x1c4b02(0x112)][0x3] = 0x0),
      (this[_0x1c4b02(0x112)][0x4] = 0x1),
      (this[_0x1c4b02(0x112)][0x5] = 0x1);
  }
  [_0x23072d(0x14b)](_0x3a1847) {
    const _0x429ed3 = _0x23072d;
    (this[_0x429ed3(0x112)][0x0] = _0x3a1847[0x0]),
      (this["_pose"][0x1] = _0x3a1847[0x1]),
      (this[_0x429ed3(0x112)][0x2] = _0x3a1847[0x2]),
      (this["_pose"][0x3] = _0x3a1847[0x3]);
  }
  [_0x23072d(0x190)](_0x2ee21c) {
    const _0x2d6a51 = _0x23072d,
      _0x58f695 = Math[_0x2d6a51(0x116)](0x0, (this["_pose"][0x4] - 0x1) * 0.5);
    if (this[_0x2d6a51(0x112)][0x2] <= -_0x58f695) return;
    let _0x242040 = PGA2D["createTranslator"](-_0x2ee21c, 0x0),
      _0x3f7fbb = PGA2D[_0x2d6a51(0xfe)](
        PGA2D[_0x2d6a51(0xf7)](_0x242040, [
          this[_0x2d6a51(0x112)][0x0],
          this[_0x2d6a51(0x112)][0x1],
          this[_0x2d6a51(0x112)][0x2],
          this[_0x2d6a51(0x112)][0x3],
        ])
      );
    this["updatePose"](_0x3f7fbb);
  }
  ["moveRight"](_0x309f9e) {
    const _0x48d968 = _0x23072d,
      _0x2f8046 = Math["max"](0x0, (this[_0x48d968(0x112)][0x4] - 0x1) * 0.5);
    if (this[_0x48d968(0x112)][0x2] >= _0x2f8046) return;
    let _0x1d4902 = PGA2D[_0x48d968(0x131)](_0x309f9e, 0x0),
      _0x50fe3a = PGA2D[_0x48d968(0xfe)](
        PGA2D["geometricProduct"](_0x1d4902, [
          this[_0x48d968(0x112)][0x0],
          this["_pose"][0x1],
          this["_pose"][0x2],
          this["_pose"][0x3],
        ])
      );
    this["updatePose"](_0x50fe3a);
  }
  ["moveUp"](_0x16e107) {
    const _0x2a601c = _0x23072d,
      _0x5940b5 = Math[_0x2a601c(0x116)](0x0, (this["_pose"][0x5] - 0x1) * 0.5);
    if (this["_pose"][0x3] >= _0x5940b5) return;
    let _0x58ce43 = PGA2D[_0x2a601c(0x131)](0x0, _0x16e107),
      _0x2be0b1 = PGA2D[_0x2a601c(0xfe)](
        PGA2D[_0x2a601c(0xf7)](_0x58ce43, [
          this[_0x2a601c(0x112)][0x0],
          this[_0x2a601c(0x112)][0x1],
          this[_0x2a601c(0x112)][0x2],
          this[_0x2a601c(0x112)][0x3],
        ])
      );
    this[_0x2a601c(0x14b)](_0x2be0b1);
  }
  [_0x23072d(0x101)](_0x4d002a) {
    const _0x310d9d = _0x23072d,
      _0x3d65ed = Math[_0x310d9d(0x116)](
        0x0,
        (this[_0x310d9d(0x112)][0x5] - 0x1) * 0.5
      );
    if (this[_0x310d9d(0x112)][0x3] <= -_0x3d65ed) return;
    let _0x54ffb9 = PGA2D["createTranslator"](0x0, -_0x4d002a),
      _0x58d987 = PGA2D[_0x310d9d(0xfe)](
        PGA2D[_0x310d9d(0xf7)](_0x54ffb9, [
          this["_pose"][0x0],
          this[_0x310d9d(0x112)][0x1],
          this["_pose"][0x2],
          this["_pose"][0x3],
        ])
      );
    this[_0x310d9d(0x14b)](_0x58d987);
  }
  [_0x23072d(0xea)]() {
    const _0x551549 = _0x23072d,
      _0x319226 = 0xa;
    this["_pose"][0x4] * 1.1 <= _0x319226 &&
      this[_0x551549(0x112)][0x5] * 1.1 <= _0x319226 &&
      ((this[_0x551549(0x112)][0x4] *= 1.1),
      (this[_0x551549(0x112)][0x5] *= 1.1));
  }
  [_0x23072d(0xf8)]() {
    const _0x48f882 = _0x23072d,
      _0x5127b7 = 0x1;
    this["_pose"][0x4] / 1.1 >= _0x5127b7 &&
      this[_0x48f882(0x112)][0x5] / 1.1 >= _0x5127b7 &&
      (this[_0x48f882(0x112)][0x4] / 1.1 < 1.1 &&
        ((this["_pose"][0x2] = 0x0), (this[_0x48f882(0x112)][0x3] = 0x0)),
      (this[_0x48f882(0x112)][0x4] /= 1.1),
      (this["_pose"][0x5] /= 1.1));
  }
}
class SceneObject {
  static [_0x23072d(0x12c)] = 0x0;
  constructor(_0xc51610, _0x385431) {
    const _0x19b9fe = _0x23072d;
    if (this["constructor"] == SceneObject)
      throw new Error("Abstract\x20classes\x20can\x27t\x20be\x20instantiated.");
    (this[_0x19b9fe(0x123)] = _0xc51610),
      (this[_0x19b9fe(0x187)] = _0x385431),
      (SceneObject[_0x19b9fe(0x12c)] += 0x1);
  }
  [_0x23072d(0x140)]() {
    const _0x431f7e = _0x23072d;
    return (
      this[_0x431f7e(0x148)][_0x431f7e(0xfd)] +
      "\x20" +
      SceneObject[_0x431f7e(0x12c)][_0x431f7e(0x127)]()
    );
  }
  async [_0x23072d(0x156)]() {
    const _0xdf96cd = _0x23072d;
    await this[_0xdf96cd(0x11f)](),
      await this[_0xdf96cd(0x118)](),
      await this[_0xdf96cd(0x134)](),
      await this["createComputePipeline"]();
  }
  async [_0x23072d(0x11f)]() {
    throw new Error(
      "Method\x20\x27createGeometry()\x27\x20must\x20be\x20implemented."
    );
  }
  [_0x23072d(0x11d)]() {}
  [_0x23072d(0x14a)](_0x5274c7) {
    return new Promise((_0x313113, _0x2418d7) => {
      const _0x18035f = _0x6d36,
        _0x324b6a = new XMLHttpRequest();
      _0x324b6a[_0x18035f(0x165)](_0x18035f(0x185), _0x5274c7),
        _0x324b6a[_0x18035f(0x133)]("Cache-Control", _0x18035f(0x19a)),
        (_0x324b6a[_0x18035f(0xcc)] = function () {
          const _0x203b55 = _0x18035f;
          _0x324b6a["readyState"] === XMLHttpRequest[_0x203b55(0x115)] &&
          _0x324b6a[_0x203b55(0x19c)] === 0xc8
            ? _0x313113(_0x324b6a["responseText"])
            : _0x2418d7({
                status: _0x324b6a["status"],
                statusText: _0x324b6a["statusText"],
              });
        }),
        (_0x324b6a[_0x18035f(0x129)] = function () {
          const _0x462744 = _0x18035f;
          _0x2418d7({
            status: _0x324b6a[_0x462744(0x19c)],
            statusText: _0x324b6a[_0x462744(0x181)],
          });
        }),
        _0x324b6a[_0x18035f(0x15f)]();
    });
  }
  async [_0x23072d(0x118)]() {
    const _0xa05a42 = _0x23072d;
    throw new Error(_0xa05a42(0xd9));
  }
  async ["createRenderPipeline"]() {
    const _0xda9c7d = _0x23072d;
    throw new Error(_0xda9c7d(0x158));
  }
  ["render"](_0x522bfc) {
    const _0x2c1356 = _0x23072d;
    throw new Error(_0x2c1356(0xce));
  }
  async ["createComputePipeline"]() {
    const _0x26a454 = _0x23072d;
    throw new Error(_0x26a454(0x18c));
  }
  ["compute"](_0xdd5f9f) {
    throw new Error(
      "Method\x20\x27compute(pass)\x27\x20must\x20be\x20implemented."
    );
  }
}
class CameraLineStrip2DAliveDeadObject extends SceneObject {
  constructor(_0x325f7b, _0x5d2415, _0x5b1c49, _0x3ca228) {
    const _0x412555 = _0x23072d;
    super(_0x325f7b, _0x5d2415), (this["_cameraPose"] = _0x5b1c49);
    if (typeof this["_vertices"] === Float32Array)
      this["_vertices"] = _0x3ca228;
    else this["_vertices"] = new Float32Array(_0x3ca228);
    (this["_isPaused"] = ![]),
      (this[_0x412555(0xd4)] = 0x400),
      (this[_0x412555(0xfb)] = 0.5),
      (this[_0x412555(0x154)] = 0x0),
      (this[_0x412555(0x173)] = 0.35);
  }
  async [_0x23072d(0x11f)]() {
    const _0xd323a7 = _0x23072d;
    (this[_0xd323a7(0x13b)] = this[_0xd323a7(0x123)][_0xd323a7(0x13d)]({
      label: _0xd323a7(0x14c) + this[_0xd323a7(0x140)](),
      size: this[_0xd323a7(0xe8)][_0xd323a7(0x167)],
      usage:
        GPUBufferUsage[_0xd323a7(0x12a)] | GPUBufferUsage[_0xd323a7(0x174)],
    })),
      this["_device"][_0xd323a7(0x19b)][_0xd323a7(0xd1)](
        this[_0xd323a7(0x13b)],
        0x0,
        this[_0xd323a7(0xe8)]
      ),
      (this[_0xd323a7(0x13c)] = {
        arrayStride: 0x2 * Float32Array[_0xd323a7(0x10c)],
        attributes: [{ shaderLocation: 0x0, format: "float32x2", offset: 0x0 }],
      }),
      (this[_0xd323a7(0x130)] = this[_0xd323a7(0x123)]["createBuffer"]({
        label: _0xd323a7(0xdd) + this[_0xd323a7(0x140)](),
        size: this["_cameraPose"]["byteLength"],
        usage:
          GPUBufferUsage[_0xd323a7(0x16c)] | GPUBufferUsage[_0xd323a7(0x174)],
      })),
      this[_0xd323a7(0x123)]["queue"]["writeBuffer"](
        this["_cameraPoseBuffer"],
        0x0,
        this[_0xd323a7(0x106)]
      ),
      (this["_cellStatus"] = new Uint32Array(
        this[_0xd323a7(0xd4)] * this[_0xd323a7(0xd4)]
      ));
    for (
      let _0x33945f = 0x0;
      _0x33945f < this[_0xd323a7(0x104)][_0xd323a7(0x149)];
      _0x33945f++
    ) {
      this[_0xd323a7(0x104)][_0x33945f] =
        Math[_0xd323a7(0x161)]() > this[_0xd323a7(0x173)] ? 0x1 : 0x0;
    }
    const _0x186c48 = 0x1f4;
    for (let _0x21901e = 0x0; _0x21901e < _0x186c48; _0x21901e++) {
      const _0x516286 = Math[_0xd323a7(0x170)](
          Math[_0xd323a7(0x161)]() * this[_0xd323a7(0xd4)]
        ),
        _0x4ede01 = Math[_0xd323a7(0x170)](
          Math[_0xd323a7(0x161)]() * this[_0xd323a7(0xd4)]
        );
      this[_0xd323a7(0x104)][
        _0x4ede01 * this[_0xd323a7(0xd4)] + _0x516286
      ] = 0x2;
    }
    const _0x4d0252 = 0x1f4;
    for (let _0x5dbe24 = 0x0; _0x5dbe24 < _0x4d0252; _0x5dbe24++) {
      const _0x2db22e = Math["floor"](
          Math[_0xd323a7(0x161)]() * this[_0xd323a7(0xd4)]
        ),
        _0x180af1 = Math[_0xd323a7(0x170)](
          Math[_0xd323a7(0x161)]() * this["_gridSize"]
        );
      this[_0xd323a7(0x104)][
        _0x180af1 * this[_0xd323a7(0xd4)] + _0x2db22e
      ] = 0x3;
    }
    (this[_0xd323a7(0xf4)] = [
      this[_0xd323a7(0x123)][_0xd323a7(0x13d)]({
        label: _0xd323a7(0x13a) + this[_0xd323a7(0x140)](),
        size: this[_0xd323a7(0x104)][_0xd323a7(0x167)],
        usage: GPUBufferUsage[_0xd323a7(0x147)] | GPUBufferUsage["COPY_DST"],
      }),
      this[_0xd323a7(0x123)]["createBuffer"]({
        label: "Grid\x20status\x20Buffer\x202\x20" + this[_0xd323a7(0x140)](),
        size: this["_cellStatus"][_0xd323a7(0x167)],
        usage:
          GPUBufferUsage[_0xd323a7(0x147)] | GPUBufferUsage[_0xd323a7(0x174)],
      }),
    ]),
      (this[_0xd323a7(0x18e)] = this[_0xd323a7(0x123)][_0xd323a7(0x13d)]({
        label: _0xd323a7(0xd5) + this[_0xd323a7(0x140)](),
        size: 0x4,
        usage: GPUBufferUsage[_0xd323a7(0x16c)] | GPUBufferUsage["COPY_DST"],
      }));
    const _0x3ab4ef = new Uint32Array([this[_0xd323a7(0xd4)]]);
    this[_0xd323a7(0x123)]["queue"][_0xd323a7(0xd1)](
      this[_0xd323a7(0x18e)],
      0x0,
      _0x3ab4ef
    ),
      this[_0xd323a7(0x123)][_0xd323a7(0x19b)]["writeBuffer"](
        this[_0xd323a7(0xf4)][0x0],
        0x0,
        this["_cellStatus"]
      ),
      (this["_step"] = 0x0);
  }
  [_0x23072d(0x166)]() {
    const _0xe4e5de = _0x23072d;
    (this["_simulationSpeed"] = Math[_0xe4e5de(0x145)](
      0x2,
      this[_0xe4e5de(0xfb)] * 1.25
    )),
      console["log"](_0xe4e5de(0xc3), this[_0xe4e5de(0xfb)]);
  }
  [_0x23072d(0xde)]() {
    const _0x46a131 = _0x23072d;
    (this[_0x46a131(0xfb)] = Math[_0x46a131(0x116)](
      0.005,
      this[_0x46a131(0xfb)] / 1.25
    )),
      console[_0x46a131(0xbf)](_0x46a131(0xc3), this[_0x46a131(0xfb)]);
  }
  [_0x23072d(0x110)]() {
    const _0x335530 = _0x23072d;
    this["_isPaused"] = !this[_0x335530(0x13e)];
  }
  [_0x23072d(0x107)]() {
    const _0xb84940 = _0x23072d;
    for (
      let _0x24649b = 0x0;
      _0x24649b < this["_cellStatus"][_0xb84940(0x149)];
      _0x24649b++
    ) {
      this["_cellStatus"][_0x24649b] =
        Math[_0xb84940(0x161)]() > this[_0xb84940(0x173)] ? 0x1 : 0x0;
    }
    const _0x46fd78 = 0x1f4;
    for (let _0x5260d8 = 0x0; _0x5260d8 < _0x46fd78; _0x5260d8++) {
      const _0x384c5e = Math["floor"](
          Math[_0xb84940(0x161)]() * this[_0xb84940(0xd4)]
        ),
        _0x5c6d9e = Math[_0xb84940(0x170)](
          Math[_0xb84940(0x161)]() * this["_gridSize"]
        );
      this[_0xb84940(0x104)][
        _0x5c6d9e * this[_0xb84940(0xd4)] + _0x384c5e
      ] = 0x2;
    }
    const _0x46de1f = 0x1f4;
    for (let _0x115e83 = 0x0; _0x115e83 < _0x46de1f; _0x115e83++) {
      const _0x1b2c68 = Math[_0xb84940(0x170)](
          Math[_0xb84940(0x161)]() * this[_0xb84940(0xd4)]
        ),
        _0x5d73aa = Math[_0xb84940(0x170)](
          Math["random"]() * this["_gridSize"]
        );
      this[_0xb84940(0x104)][
        _0x5d73aa * this[_0xb84940(0xd4)] + _0x1b2c68
      ] = 0x3;
    }
    this[_0xb84940(0x123)][_0xb84940(0x19b)][_0xb84940(0xd1)](
      this["_cellStateBuffers"][0x0],
      0x0,
      this[_0xb84940(0x104)]
    ),
      (this["_step"] = 0x0);
  }
  [_0x23072d(0x199)]() {
    const _0x52ba45 = _0x23072d;
    this["_device"][_0x52ba45(0x19b)][_0x52ba45(0xd1)](
      this[_0x52ba45(0x130)],
      0x0,
      this[_0x52ba45(0x106)]
    );
  }
  async ["createShaders"]() {
    const _0x5a5275 = _0x23072d;
    let _0x161247 = await this["loadShader"](_0x5a5275(0xcf));
    (this[_0x5a5275(0x15c)] = this[_0x5a5275(0x123)][_0x5a5275(0x109)]({
      label: "\x20Shader\x20" + this[_0x5a5275(0x140)](),
      code: _0x161247,
    })),
      (this[_0x5a5275(0x10b)] = this[_0x5a5275(0x123)][_0x5a5275(0x150)]({
        label: _0x5a5275(0xbe) + this[_0x5a5275(0x140)](),
        entries: [
          { binding: 0x0, visibility: GPUShaderStage["VERTEX"], buffer: {} },
          {
            binding: 0x1,
            visibility:
              GPUShaderStage[_0x5a5275(0x12a)] |
              GPUShaderStage[_0x5a5275(0x195)],
            buffer: { type: "read-only-storage" },
          },
          {
            binding: 0x2,
            visibility: GPUShaderStage[_0x5a5275(0x195)],
            buffer: { type: _0x5a5275(0x192) },
          },
          {
            binding: 0x3,
            visibility:
              GPUShaderStage[_0x5a5275(0x12a)] |
              GPUShaderStage[_0x5a5275(0x195)],
            buffer: { type: _0x5a5275(0x114) },
          },
        ],
      })),
      (this[_0x5a5275(0x14e)] = this[_0x5a5275(0x123)][_0x5a5275(0xcb)]({
        label: _0x5a5275(0x18b),
        bindGroupLayouts: [this["_bindGroupLayout"]],
      }));
  }
  async [_0x23072d(0x134)]() {
    const _0x2c5c94 = _0x23072d;
    (this["_renderPipeline"] = this["_device"]["createRenderPipeline"]({
      label: "Render\x20Pipeline\x20" + this[_0x2c5c94(0x140)](),
      layout: this[_0x2c5c94(0x14e)],
      vertex: {
        module: this[_0x2c5c94(0x15c)],
        entryPoint: _0x2c5c94(0x175),
        buffers: [this["_vertexBufferLayout"]],
      },
      fragment: {
        module: this[_0x2c5c94(0x15c)],
        entryPoint: _0x2c5c94(0xf6),
        targets: [{ format: this[_0x2c5c94(0x187)] }],
      },
      primitive: { topology: _0x2c5c94(0x143) },
    })),
      (this[_0x2c5c94(0x12f)] = [
        this[_0x2c5c94(0x123)][_0x2c5c94(0x102)]({
          label: _0x2c5c94(0x179) + this["getName"](),
          layout: this[_0x2c5c94(0x139)]["getBindGroupLayout"](0x0),
          entries: [
            { binding: 0x0, resource: { buffer: this[_0x2c5c94(0x130)] } },
            { binding: 0x1, resource: { buffer: this[_0x2c5c94(0xf4)][0x0] } },
            { binding: 0x2, resource: { buffer: this[_0x2c5c94(0xf4)][0x1] } },
            { binding: 0x3, resource: { buffer: this["_gridSizeBuffer"] } },
          ],
        }),
        this["_device"][_0x2c5c94(0x102)]({
          label: "Renderer\x20Bind\x20Group\x202\x20" + this["getName"](),
          layout: this[_0x2c5c94(0x139)][_0x2c5c94(0xc7)](0x0),
          entries: [
            { binding: 0x0, resource: { buffer: this[_0x2c5c94(0x130)] } },
            { binding: 0x1, resource: { buffer: this[_0x2c5c94(0xf4)][0x1] } },
            {
              binding: 0x2,
              resource: { buffer: this["_cellStateBuffers"][0x0] },
            },
            { binding: 0x3, resource: { buffer: this[_0x2c5c94(0x18e)] } },
          ],
        }),
      ]);
  }
  ["render"](_0x3d22e2) {
    const _0x209fca = _0x23072d;
    _0x3d22e2[_0x209fca(0x132)](this["_renderPipeline"]),
      _0x3d22e2["setVertexBuffer"](0x0, this["_vertexBuffer"]),
      _0x3d22e2["setBindGroup"](
        0x0,
        this[_0x209fca(0x12f)][this[_0x209fca(0x136)] % 0x2]
      ),
      _0x3d22e2[_0x209fca(0x144)](
        this["_vertices"][_0x209fca(0x149)] / 0x2,
        this["_gridSize"] * this[_0x209fca(0xd4)]
      );
  }
  async [_0x23072d(0x177)]() {
    const _0x797901 = _0x23072d;
    this["_computePipeline"] = this[_0x797901(0x123)][_0x797901(0x177)]({
      label: "Grid\x20update\x20pipeline\x20" + this[_0x797901(0x140)](),
      layout: this[_0x797901(0x14e)],
      compute: { module: this[_0x797901(0x15c)], entryPoint: _0x797901(0xe9) },
    });
  }
  ["compute"](_0x41e39a) {
    const _0x468a9a = _0x23072d;
    if (this["_isPaused"]) return;
    this[_0x468a9a(0x154)]++;
    const _0x41fbee = Math[_0x468a9a(0xf2)](0x1 / this[_0x468a9a(0xfb)]);
    if (this[_0x468a9a(0x154)] >= _0x41fbee) {
      this[_0x468a9a(0x154)] = 0x0;
      const _0xc01bc8 = 0x10;
      _0x41e39a["setPipeline"](this[_0x468a9a(0x117)]),
        _0x41e39a[_0x468a9a(0x146)](
          0x0,
          this[_0x468a9a(0x12f)][this["_step"] % 0x2]
        ),
        _0x41e39a[_0x468a9a(0x182)](
          Math[_0x468a9a(0xf2)](this[_0x468a9a(0xd4)] / _0xc01bc8),
          Math[_0x468a9a(0xf2)](this[_0x468a9a(0xd4)] / _0xc01bc8)
        ),
        ++this["_step"];
    }
  }
}
class StandardTextObject {
  constructor(_0x4f6052, _0x5d9979 = 0x5, _0x514a8b = _0x23072d(0x171)) {
    const _0x1eb181 = _0x23072d;
    (this[_0x1eb181(0xe7)] = _0x514a8b),
      (this[_0x1eb181(0xc5)] = _0x5d9979),
      (this["_textCanvas"] = document["createElement"](_0x1eb181(0x176))),
      (this[_0x1eb181(0x153)] = this[_0x1eb181(0x194)][_0x1eb181(0xec)]("2d")),
      this["updateTextRegion"](_0x4f6052),
      this[_0x1eb181(0x14f)](_0x4f6052),
      (this["_textCanvas"][_0x1eb181(0x164)][_0x1eb181(0x124)] =
        _0x1eb181(0x137)),
      (this[_0x1eb181(0x194)][_0x1eb181(0x164)][_0x1eb181(0x152)] = "10px"),
      (this["_textCanvas"][_0x1eb181(0x164)][_0x1eb181(0x120)] =
        _0x1eb181(0xff)),
      (this[_0x1eb181(0x194)][_0x1eb181(0x164)][_0x1eb181(0x155)] =
        _0x1eb181(0x151)),
      document[_0x1eb181(0xd6)][_0x1eb181(0xe3)](this[_0x1eb181(0x194)]);
  }
  [_0x23072d(0x138)]() {
    const _0x185a8e = _0x23072d;
    this[_0x185a8e(0x194)]["hidden"] = !this["_textCanvas"]["hidden"];
  }
  [_0x23072d(0x189)](_0x4228da) {
    const _0x3a7fb4 = _0x23072d;
    (this[_0x3a7fb4(0x153)][_0x3a7fb4(0x16a)] = this[_0x3a7fb4(0xe7)]),
      (this[_0x3a7fb4(0xc8)] = _0x4228da["split"]("\x0a")),
      (this[_0x3a7fb4(0x191)] = Math[_0x3a7fb4(0x116)](
        ...this[_0x3a7fb4(0xc8)]["map"](
          (_0x3222fe) =>
            this[_0x3a7fb4(0x153)][_0x3a7fb4(0x172)](_0x3222fe)["width"]
        )
      ));
    const _0x56bae8 = this[_0x3a7fb4(0xe7)][_0x3a7fb4(0x16f)](/(\d+)px/);
    _0x56bae8
      ? (this[_0x3a7fb4(0xdf)] = parseInt(_0x56bae8[0x1], 0xa))
      : ((this[_0x3a7fb4(0xdf)] = 0x12),
        (this[_0x3a7fb4(0xe7)] = _0x3a7fb4(0x171))),
      (this["_height"] =
        this[_0x3a7fb4(0xc8)][_0x3a7fb4(0x149)] *
        (this["_fontSize"] + this[_0x3a7fb4(0xc5)])),
      (this[_0x3a7fb4(0xc1)] = 0x5),
      (this[_0x3a7fb4(0x163)] = 0x3),
      (this[_0x3a7fb4(0x197)] = Math[_0x3a7fb4(0xf2)](
        this[_0x3a7fb4(0x191)] + this[_0x3a7fb4(0xc1)] * 0x2
      )),
      (this["_canvasHeight"] = Math["ceil"](
        this["_height"] + this["_paddingtop"]
      )),
      (this[_0x3a7fb4(0x194)]["width"] = this[_0x3a7fb4(0x197)]),
      (this[_0x3a7fb4(0x194)][_0x3a7fb4(0x11b)] = this[_0x3a7fb4(0xe4)]),
      (this[_0x3a7fb4(0x153)][_0x3a7fb4(0x16a)] = this[_0x3a7fb4(0xe7)]),
      (this[_0x3a7fb4(0x153)][_0x3a7fb4(0xeb)] = _0x3a7fb4(0x152));
  }
  [_0x23072d(0x14f)](_0x55cbab) {
    const _0xdac7d2 = _0x23072d;
    (this[_0xdac7d2(0xc8)] = _0x55cbab[_0xdac7d2(0xef)]("\x0a")),
      (this[_0xdac7d2(0x153)][_0xdac7d2(0xc2)] = "rgba(1,\x201,\x201,\x200.5)"),
      this[_0xdac7d2(0x153)][_0xdac7d2(0x11e)](
        0x0,
        0x0,
        this[_0xdac7d2(0x197)],
        this[_0xdac7d2(0xe4)]
      ),
      this[_0xdac7d2(0x153)][_0xdac7d2(0x10f)](
        0x0,
        0x0,
        this[_0xdac7d2(0x197)],
        this["_canvasHeight"]
      ),
      (this[_0xdac7d2(0x153)][_0xdac7d2(0xc2)] = "white"),
      this["_lines"][_0xdac7d2(0xc0)]((_0x3e5576, _0xdbfd06) => {
        const _0x5f0311 = _0xdac7d2,
          _0x5b1be5 = this[_0x5f0311(0xc1)],
          _0x577fdd =
            this[_0x5f0311(0x163)] +
            _0xdbfd06 * (this[_0x5f0311(0xdf)] + this[_0x5f0311(0xc5)]);
        this["_textContext"][_0x5f0311(0x12d)](_0x3e5576, _0x5b1be5, _0x577fdd);
      });
  }
}
function _0x41b6() {
  const _0x42e1d8 = [
    "12SlVnih",
    "fragmentMain",
    "geometricProduct",
    "zoomOut",
    "_objects",
    "keydown",
    "_simulationSpeed",
    "12OibnRb",
    "name",
    "normaliozeMotor",
    "10px",
    "addEventListener",
    "moveDown",
    "createBindGroup",
    "createCommandEncoder",
    "_cellStatus",
    "store",
    "_cameraPose",
    "resetSimulation",
    "renderToSelectedView",
    "createShaderModule",
    "fps:\x20??",
    "_bindGroupLayout",
    "BYTES_PER_ELEMENT",
    "Couldn\x27t\x20request\x20WebGPU\x20adapter.",
    "ArrowRight",
    "fillRect",
    "pauseGrid",
    "configure",
    "_pose",
    "beginRenderPass",
    "uniform",
    "DONE",
    "max",
    "_computePipeline",
    "createShaders",
    "24OvedBE",
    "s/↓:\x20Move\x20Down\x0a",
    "height",
    "ArrowLeft",
    "updateGeometry",
    "clearRect",
    "createGeometry",
    "left",
    "fps:\x20",
    "getBoundingClientRect",
    "_device",
    "position",
    "818aSaTMK",
    "WebGPU\x20is\x20not\x20supported\x20in\x20this\x20browser.",
    "toString",
    "reverse",
    "onerror",
    "VERTEX",
    "click",
    "_objectCnt",
    "fillText",
    "center",
    "_bindGroups",
    "_cameraPoseBuffer",
    "createTranslator",
    "setPipeline",
    "setRequestHeader",
    "createRenderPipeline",
    "createRotor",
    "_step",
    "absolute",
    "toggleVisibility",
    "_renderPipeline",
    "Grid\x20status\x20Buffer\x201\x20",
    "_vertexBuffer",
    "_vertexBufferLayout",
    "createBuffer",
    "_isPaused",
    "399xEGCFt",
    "getName",
    "transformOrigin",
    "<br/>",
    "triangle-strip",
    "draw",
    "min",
    "setBindGroup",
    "STORAGE",
    "constructor",
    "length",
    "loadShader",
    "updatePose",
    "Vertices\x20",
    "e:\x20Zoom\x20Out\x0a",
    "_pipelineLayout",
    "updateText",
    "createBindGroupLayout",
    "1px\x20solid\x20red",
    "top",
    "_textContext",
    "_frameCounter",
    "border",
    "init",
    "then",
    "Method\x20\x27createRenderPipeline()\x27\x20must\x20be\x20implemented.",
    "moveRight",
    "applyMotor",
    "render",
    "_shaderModule",
    "clientX",
    "sqrt",
    "send",
    "requestDevice",
    "random",
    "p:\x20Pause/Resume\x20Simulation\x0a",
    "_paddingtop",
    "style",
    "open",
    "speedUp",
    "byteLength",
    "314452AxahaS",
    "r:\x20Reset\x20Simulation\x0a",
    "font",
    "catch",
    "UNIFORM",
    "ArrowUp",
    "724662IEakHp",
    "match",
    "floor",
    "18px\x20Arial",
    "measureText",
    "_ODDS",
    "COPY_DST",
    "vertexMain",
    "canvas",
    "createComputePipeline",
    "now",
    "Renderer\x20Bind\x20Group\x201\x20",
    "userAgent",
    "i:\x20Toggle\x20Instructions",
    "submit",
    "push",
    "5TSWFgM",
    "createElement",
    "beginComputePass",
    "statusText",
    "dispatchWorkgroups",
    "f:\x20Toggle\x20FPS\x20Display\x0a",
    "resize",
    "GET",
    "end",
    "_canvasFormat",
    "message",
    "updateTextRegion",
    "clientY",
    "Grid\x20Pipeline\x20Layout",
    "Method\x20\x27createComputePipeline()\x27\x20must\x20be\x20implemented.",
    "requestAdapter",
    "_gridSizeBuffer",
    "innerHeight",
    "moveLeft",
    "_width",
    "storage",
    "cos",
    "_textCanvas",
    "COMPUTE",
    "key",
    "_canvasWidth",
    "compute",
    "updateCameraPose",
    "no-cache,\x20no-store,\x20max-age=0",
    "queue",
    "status",
    "Grid\x20Bind\x20Group\x20Layout\x20",
    "log",
    "forEach",
    "_paddingx",
    "fillStyle",
    "Simulation\x20speed:",
    "resizeCanvas",
    "_lineSpacing",
    "7214559LGRwcI",
    "getBindGroupLayout",
    "_lines",
    "_canvas",
    "2296700CZtPXZ",
    "createPipelineLayout",
    "onload",
    "getElementById",
    "Method\x20\x27render(pass)\x27\x20must\x20be\x20implemented.",
    "./optimized_camera2dalivedead.wgsl",
    "renderCanvas",
    "writeBuffer",
    "797337vGVRwP",
    "innerHTML",
    "_gridSize",
    "Grid\x20Size\x20",
    "body",
    "devicePixelRatio",
    "width",
    "Method\x20\x27createShaders()\x27\x20must\x20be\x20implemented.",
    "remove",
    "gpu",
    "sin",
    "Camera\x20Pose\x20",
    "slowDown",
    "_fontSize",
    "webgpu",
    "moveUp",
    "d/→:\x20Move\x20Right\x0a",
    "appendChild",
    "_canvasHeight",
    "w/↑:\x20Move\x20Up\x0a",
    "appendSceneObject",
    "_textFont",
    "_vertices",
    "computeMain",
    "zoomIn",
    "textBaseline",
    "getContext",
    "_context",
    "motorNorm",
    "split",
    "_clearColor",
    "1011773oYFlTk",
    "ceil",
    "Game\x20of\x20Life\x20Controls:\x0a",
    "_cellStateBuffers",
  ];
  _0x41b6 = function () {
    return _0x42e1d8;
  };
  return _0x41b6();
}
async function init() {
  const _0x5f41cb = _0x23072d,
    _0x51b9cc = document["createElement"](_0x5f41cb(0x176));
  (_0x51b9cc["id"] = _0x5f41cb(0xd0)),
    document[_0x5f41cb(0xd6)][_0x5f41cb(0xe3)](_0x51b9cc);
  const _0x3674ab = new Renderer(_0x51b9cc);
  await _0x3674ab["init"]();
  const _0x436f9e = new Camera(),
    _0x17d79c = new Float32Array([
      -0x1, -0x1, 0x1, -0x1, 0x1, 0x1, -0x1, 0x1, -0x1, -0x1,
    ]),
    _0x13d318 = new CameraLineStrip2DAliveDeadObject(
      _0x3674ab[_0x5f41cb(0x123)],
      _0x3674ab[_0x5f41cb(0x187)],
      _0x436f9e[_0x5f41cb(0x112)],
      _0x17d79c
    );
  await _0x3674ab[_0x5f41cb(0xe6)](_0x13d318);
  const _0x2c9327 = new StandardTextObject(_0x5f41cb(0x10a)),
    _0x2c3cfe = new StandardTextObject(
      _0x5f41cb(0xf3) +
        _0x5f41cb(0xe5) +
        "a/←:\x20Move\x20Left\x0a" +
        _0x5f41cb(0xe2) +
        _0x5f41cb(0x11a) +
        "q:\x20Zoom\x20In\x0a" +
        _0x5f41cb(0x14d) +
        _0x5f41cb(0x162) +
        _0x5f41cb(0x169) +
        "+/]:\x20Speed\x20Up\x20Simulation\x0a" +
        "-/[:\x20Slow\x20Down\x20Simulation\x0a" +
        _0x5f41cb(0x183) +
        _0x5f41cb(0x17b)
    );
  _0x2c3cfe["_textCanvas"][_0x5f41cb(0x164)][_0x5f41cb(0x152)] = "50px";
  let _0x330781 = 0x0,
    _0x54f72c;
  const _0x33df73 = 0x3c,
    _0x55c375 = 0x1 / _0x33df73,
    _0x19a950 = _0x55c375 * 0x3e8;
  setupKeyboardControls(_0x436f9e, _0x13d318, _0x2c9327, _0x2c3cfe),
    (_0x54f72c = Date["now"]()),
    requestAnimationFrame(function _0x1a5313() {
      const _0x3a41b3 = _0x5f41cb;
      let _0x2369e8 = Date["now"]() - _0x54f72c;
      _0x2369e8 > _0x19a950 &&
        (++_0x330781,
        (_0x54f72c = Date[_0x3a41b3(0x178)]() - (_0x2369e8 % _0x19a950)),
        _0x3674ab[_0x3a41b3(0x15b)]()),
        requestAnimationFrame(_0x1a5313);
    }),
    setInterval(() => {
      const _0x4e7ad9 = _0x5f41cb;
      _0x2c9327[_0x4e7ad9(0x14f)](_0x4e7ad9(0x121) + _0x330781),
        (_0x330781 = 0x0);
    }, 0x3e8);
}
function _0x6d36(_0x5b4e53, _0x146c51) {
  const _0x41b680 = _0x41b6();
  return (
    (_0x6d36 = function (_0x6d3658, _0x433ea0) {
      _0x6d3658 = _0x6d3658 - 0xbe;
      let _0x47739b = _0x41b680[_0x6d3658];
      return _0x47739b;
    }),
    _0x6d36(_0x5b4e53, _0x146c51)
  );
}
function setupKeyboardControls(_0x4ff538, _0x4462d7, _0x36d80e, _0x53f93c) {
  const _0x746361 = _0x23072d,
    _0x164e3c = 0.05;
  window["addEventListener"](_0x746361(0xfa), (_0x15ce99) => {
    const _0xdc41e6 = _0x746361;
    switch (_0x15ce99[_0xdc41e6(0x196)]) {
      case _0xdc41e6(0x16d):
      case "w":
        _0x4ff538[_0xdc41e6(0xe1)](_0x164e3c);
        break;
      case "ArrowDown":
      case "s":
        _0x4ff538[_0xdc41e6(0x101)](_0x164e3c);
        break;
      case _0xdc41e6(0x11c):
      case "a":
        _0x4ff538["moveLeft"](_0x164e3c);
        break;
      case _0xdc41e6(0x10e):
      case "d":
        _0x4ff538[_0xdc41e6(0x159)](_0x164e3c);
        break;
      case "q":
        _0x4ff538["zoomIn"]();
        break;
      case "e":
        _0x4ff538[_0xdc41e6(0xf8)]();
        break;
      case "f":
        _0x36d80e[_0xdc41e6(0x138)]();
        break;
      case "i":
        _0x53f93c[_0xdc41e6(0x138)]();
        break;
      case "p":
        _0x4462d7[_0xdc41e6(0x110)]();
        break;
      case "r":
        _0x4462d7[_0xdc41e6(0x107)]();
        break;
      case "]":
      case "+":
        _0x4462d7[_0xdc41e6(0x166)]();
        break;
      case "[":
      case "-":
        _0x4462d7[_0xdc41e6(0xde)]();
        break;
    }
    _0x4462d7["updateCameraPose"]();
  });
  const _0x371026 = document["getElementById"](_0x746361(0xd0));
  _0x371026[_0x746361(0x100)](_0x746361(0x12b), (_0x49c36b) => {
    const _0x54b31e = _0x746361,
      _0xd2ac9c = _0x371026[_0x54b31e(0x122)](),
      _0xa2e565 =
        ((_0x49c36b[_0x54b31e(0x15d)] - _0xd2ac9c[_0x54b31e(0x120)]) /
          _0xd2ac9c[_0x54b31e(0xd8)]) *
          0x2 -
        0x1,
      _0xa3e655 = -(
        ((_0x49c36b[_0x54b31e(0x18a)] - _0xd2ac9c[_0x54b31e(0x152)]) /
          _0xd2ac9c[_0x54b31e(0x11b)]) *
          0x2 -
        0x1
      );
  });
}
init()
  [_0x23072d(0x157)]((_0x19abba) => console[_0x23072d(0xbf)](_0x19abba))
  [_0x23072d(0x16b)]((_0x4c77a6) => {
    const _0x95e6a0 = _0x23072d,
      _0x4ee61b = document[_0x95e6a0(0x17f)]("p");
    (_0x4ee61b[_0x95e6a0(0xd3)] =
      navigator[_0x95e6a0(0x17a)] +
      _0x95e6a0(0x142) +
      _0x4c77a6[_0x95e6a0(0x188)]),
      document[_0x95e6a0(0xd6)][_0x95e6a0(0xe3)](_0x4ee61b),
      document[_0x95e6a0(0xcd)]("renderCanvas")[_0x95e6a0(0xda)]();
  });
