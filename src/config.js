import configJson from "./auth_config.json";

export function getConfig() {
  const audience =
    configJson.audience && configJson.audience !== configJson.audience
      ? configJson.audience
      : null;

  return {
    scope: configJson.scope,
    domain: configJson.domain,
    issuer: configJson.issuer,
    clientId: configJson.clientId,
    ...(audience ? { audience } : null),
  };
}
