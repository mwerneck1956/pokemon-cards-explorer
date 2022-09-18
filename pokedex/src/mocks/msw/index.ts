async function initMocks() {
  if (typeof window === "undefined") {
    const { mswServer } = await import("./mswServer");
    mswServer.listen();
  } else {
    const { mswWorker } = await import("./mswWorker");
    mswWorker.start();
  }
}

initMocks();

export {};
