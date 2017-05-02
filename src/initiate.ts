import { ServerType } from "./core/types";

export default function(server: ServerType) {
  const listener = server.listen(process.env.PORT || 3000, function() {
    const { port } = listener.address();
    console.log(`Listening on http://localhost:${port}/ 🌎  .`);
  });
}
