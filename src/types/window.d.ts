interface Window {
  fbq: <T>(type = "track", event: string, payload?: T) => void;
}
