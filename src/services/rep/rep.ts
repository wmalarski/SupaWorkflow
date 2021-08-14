import { Replicache } from "replicache";
import mutators from "./mutators";

const rep = new Replicache({
  pushURL: "/api/replicache-push",
  pullURL: "/api/replicache-pull",
  wasmModule: "/replicache.wasm",
  mutators,
});

export default rep;
