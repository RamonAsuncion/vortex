/*!
 * Copyright (c) 2025 SingChun LEE @ Bucknell University. CC BY-NC 4.0.
 *
 * This code is provided mainly for educational purposes at Bucknell University.
 *
 * This code is licensed under the Creative Commons Attribution-NonCommerical 4.0
 * International License. To view a copy of the license, visit
 *   https://creativecommons.org/licenses/by-nc/4.0/
 * or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 *
 * You are free to:
 *  - Share: copy and redistribute the material in any medium or format.
 *  - Adapt: remix, transform, and build upon the material.
 *
 * Under the following terms:
 *  - Attribution: You must give appropriate credit, provide a link to the license,
 *                 and indicate if changes where made.
 *  - NonCommerical: You may not use the material for commerical purposes.
 *  - No additional restrictions: You may not apply legal terms or technological
 *                                measures that legally restrict others from doing
 *                                anything the license permits.
 */

import SceneObject from "../DSViz/SceneObject.js";

export default class Standard2DVertexTextureObject extends SceneObject {
  constructor(device, canvasFormat, vertices, textureURL, pose = null) {
    super(device, canvasFormat);
    // This assume each vertex has (x, y, u, v)
    this._vertices = vertices;
    this._textureURL = textureURL;
    this._pose = pose; // optional
    this._texture = null;
    this._sampler = null;
  }

  async createGeometry() {
    // Create vertex buffer to store the vertices in GPU
    this._vertexBuffer = this._device.createBuffer({
      label: "Vertices " + this.getName(),
      size: this._vertices.byteLength,
      usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
    });
    // Copy from CPU to GPU
    this._device.queue.writeBuffer(this._vertexBuffer, 0, this._vertices);
    // Define vertex buffer layout - how the GPU should read the buffer
    this._vertexBufferLayout = {
      arrayStride: 4 * Float32Array.BYTES_PER_ELEMENT,
      attributes: [
        {
          shaderLocation: 0, // position in shader
          format: "float32x2", // (x, y))
          offset: 0,
        },
        {
          shaderLocation: 1, // texture coordinates
          format: "float32x2", // (u, v))
          offset: 2 * Float32Array.BYTES_PER_ELEMENT,
        },
      ],
    };

    if (this._pose) {
      this._poseBuffer = this._device.createBuffer({
        label: "Pose " + this.getName(),
        size: this._pose.byteLength,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
      });
      // Copy from CPU to GPU
      this._device.queue.writeBuffer(this._poseBuffer, 0, this._pose);
    }

    await this.loadTexture(this._textureURL);
  }

  updateGeometry() {
    if (this._poseBuffer) {
      this._device.queue.writeBuffer(this._poseBuffer, 0, this._pose);
    }
  }

  async loadTexture(textureURL) {
    const img = new Image();
    img.src = textureURL;

    await img.decode();

    const bitmap = await createImageBitmap(img);

    this._texture = this._device.createTexture({
      label: "Texture " + this.getName(),
      size: [bitmap.width, bitmap.height, 1],
      format: this._canvasFormat,
      usage:
        GPUTextureUsage.TEXTURE_BINDING |
        GPUTextureUsage.COPY_DST |
        GPUTextureUsage.RENDER_ATTACHMENT,
    });

    this._device.queue.copyExternalImageToTexture(
      { source: bitmap },
      { texture: this._texture },
      [bitmap.width, bitmap.height]
    );

    this._sampler = this._device.createSampler({
      magFilter: "linear",
      minFilter: "linear",
    });
  }

  async createShaders() {
    let shaderCode = await this.loadShader("./shaders/standard2dtexture.wgsl");
    this._shaderModule = this._device.createShaderModule({
      label: " Shader " + this.getName(),
      code: shaderCode,
    });
  }

  async createRenderPipeline() {
    this._renderPipeline = this._device.createRenderPipeline({
      label: "Render Pipeline " + this.getName(),
      layout: "auto",
      vertex: {
        module: this._shaderModule, // the shader code
        entryPoint: "vertexMain", // the shader function
        buffers: [this._vertexBufferLayout], // the binded buffer layout
      },
      fragment: {
        module: this._shaderModule, // the shader code
        entryPoint: "fragmentMain", // the shader function
        targets: [
          {
            format: this._canvasFormat, // the target canvas format
          },
        ],
      },
    });

    if (this._poseBuffer) {
      this._bindGroup = this._device.createBindGroup({
        label: "Render Bind Group " + this.getName(),
        layout: this._renderPipeline.getBindGroupLayout(0),
        entries: [
          {
            binding: 0,
            resource: { buffer: this._poseBuffer },
          },
          {
            binding: 1,
            resource: this._texture.createView(),
          },
          {
            binding: 2,
            resource: this._sampler,
          },
        ],
      });
    } else {
      // Create a bind group to bind the texture and sampler.
      this._bindGroup = this._device.createBindGroup({
        label: "My bindgroup",
        layout: this._renderPipeline.getBindGroupLayout(0),
        entries: [
          {
            binding: 0,
            resource: this._texture.createView(),
          },
          {
            binding: 1,
            resource: this._sampler,
          },
        ],
      });
    }
  }

  render(pass) {
    // add to render pass to draw the object
    pass.setPipeline(this._renderPipeline); // which render pipeline to use
    pass.setVertexBuffer(0, this._vertexBuffer); // how the buffer are binded
    pass.setBindGroup(0, this._bindGroup);
    pass.draw(this._vertices.length / 4); // (x, y, u, v)
  }

  async createComputePipeline() {}

  compute(pass) {}

  destroy() {
    if (this._texture) {
      this._texture.destroy();
      this._texture = null;
    }
    if (this._sampler) {
      this._sampler.destroy();
      this._sampler = null;
    }
    if (this._vertexBuffer) {
      this._vertexBuffer.destroy();
      this._vertexBuffer = null;
    }
    if (this._poseBuffer) {
      this._poseBuffer.destroy();
      this._poseBuffer = null;
    }
  }
}
