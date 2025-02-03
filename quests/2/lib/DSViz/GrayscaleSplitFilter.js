import ImageFilterObject from "./ImageFilterObject.js";

export default class GrayscaleSplitFilter extends ImageFilterObject {
  async createShaders() {
    let shaderCode = await this.loadShader(
      "./shaders/computegrayscalesplit.wgsl"
    );
    this._shaderModule = this._device.createShaderModule({
      label: "Grayscale Split Filter Shader",
      code: shaderCode,
    });
  }
}
