// copied mainly from compute_.wsgl files.
@group(0) @binding(0) var inputTexture: texture_2d<f32>;
@group(0) @binding(1) var outputTexture: texture_storage_2d<rgba8unorm,write>;

@compute
@workgroup_size(8, 8)
fn computeMain(@builtin(global_invocation_id) id: vec3u) {
    let dimensions = textureDimensions(inputTexture);
    if (id.x >= dimensions.x || id.y >= dimensions.y) {
        return;
    }

    let coords = vec2f(f32(id.x) + 0.5, f32(id.y) + 0.5) / vec2f(dimensions);
    var color = textureLoad(inputTexture, vec2u(id.xy), 0);

    if (coords.x < 0.5) {
        // Extract the grayscale information from a color image
        // https://en.wikipedia.org/wiki/Luma_(video)
        let gray = dot(color.rgb, vec3f(0.299, 0.587, 0.114));
        color = vec4f(gray, gray, gray, color.a);
    }

    textureStore(outputTexture, vec2u(id.xy), color);
}