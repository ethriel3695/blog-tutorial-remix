import { Shader } from "./Shader";
import clsx from "clsx";

type ImagesAppBackgroundProps = {
  opacity?: number;
};

const softGradientBlobFragment = `
  precision mediump float;
  uniform vec2 uResolution;
  uniform float uTime;

  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;

export function ImagesAppBackground({ opacity }: ImagesAppBackgroundProps) {
  return (
    <div className={clsx("fixed inset-0 z-[-1]")} style={{ opacity }}>
      <Shader fs={softGradientBlobFragment} />
    </div>
  );
}
