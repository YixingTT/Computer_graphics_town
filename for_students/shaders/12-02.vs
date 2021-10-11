// world with islands - displacement map based on the green channel

varying vec2 v_uv;
uniform sampler2D colormap;

void main() {
    // the main output of the shader (the vertex position)
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    v_uv = uv;
}

