const MAX_PARTICLES : u32 = 1000;

const GRAVITY : vec2f = vec2f(0.0, -(0.00050000000000000001));

struct Particle {
  p : vec2f,
  ip : vec2f,
  v : vec2f,
  life : vec2f,
}

struct Uniforms {
  mp : vec2f,
  p : vec2f,
  m : i32,
}

@group(1) @binding(0) var<uniform> uniforms : Uniforms;

@group(0) @binding(0) var<storage> particlesIn : array<Particle>;

@group(0) @binding(1) var<storage, read_write> particlesOut : array<Particle>;

const WIND_FREQUENCY : f32 = 1.0;

const WIND_STRENGTH : f32 = 0.0001;

fn wrapCoordinate(value : f32) -> f32 {
  if ((value < -(1.0))) {
    return (value + 2.0);
  } else if ((value > 1.0)) {
    return (value - 2.0);
  }
  return value;
}

fn generateWind(pos : f32) -> vec2f {
  let angle = (sin((pos * WIND_FREQUENCY)) * 3.14159265000000020862);
  return (vec2f(cos(angle), sin(angle)) * WIND_STRENGTH);
}

@vertex
fn vertexMain(@builtin(instance_index) idx : u32, @builtin(vertex_index) vIdx : u32) -> @builtin(position) vec4f {
  let particle = particlesIn[idx];
  if (((particle.life.x <= 0.0) || (idx >= MAX_PARTICLES))) {
    return vec4f(0.0, 0.0, 0.0, 0.0);
  }
  let fade_effect = (particle.life.x / particle.life.y);
  let size = (0.01250000000000000069 * fade_effect);
  let pi = 3.14159265000000020862;
  let theta = (((2.0 * pi) / 8.0) * f32(vIdx));
  let x = (cos(theta) * size);
  let y = (sin(theta) * size);
  return vec4f((x + particle.p.x), (y + particle.p.y), 0.0, 1.0);
}

@fragment
fn fragmentMain() -> @location(0) vec4f {
  return vec4f((238.0f / 255), (118.0f / 255), (35.0f / 255), 1);
}

@compute @workgroup_size(256)
fn computeMain(@builtin(global_invocation_id) global_id : vec3u) {
  let idx = global_id.x;
  if (((idx < arrayLength(&(particlesIn))) && (idx < MAX_PARTICLES))) {
    particlesOut[idx] = particlesIn[idx];
    particlesOut[idx].v = (particlesIn[idx].v * 0.98999999999999999112);
    if ((particlesIn[idx].life.x > 0.0)) {
      let wind = generateWind(particlesIn[idx].p.x);
      particlesOut[idx].v = ((particlesIn[idx].v + GRAVITY) + wind);
      particlesOut[idx].p = (particlesIn[idx].p + particlesIn[idx].v);
      particlesOut[idx].p.x = wrapCoordinate(particlesOut[idx].p.x);
      particlesOut[idx].life.x = (particlesIn[idx].life.x - 1.0);
    }
    if ((((((particlesOut[idx].p.x < -(1.0)) || (particlesOut[idx].p.x > 1.0)) || (particlesOut[idx].p.y < -(1.0))) || (particlesOut[idx].p.y > 1.0)) || (particlesOut[idx].life.x <= 0.0))) {
      particlesOut[idx].p = particlesOut[idx].ip;
      particlesOut[idx].v = vec2f(0.0, 0.0);
      particlesOut[idx].life.x = particlesOut[idx].life.y;
    }
    if ((uniforms.m == 1)) {
      let mouse = (uniforms.mp - particlesOut[idx].p);
      let distance = length(mouse);
      if ((distance > 0.00100000000000000002)) {
        particlesOut[idx].v += (normalize(mouse) * 0.0001);
      }
    }
    if ((uniforms.m == 2)) {
      particlesOut[idx].p = uniforms.mp;
      particlesOut[idx].ip = uniforms.mp;
      particlesOut[idx].v = vec2f(0.0, 0.0);
      particlesOut[idx].life = vec2f(100.0, 100.0);
    }
  }
}
