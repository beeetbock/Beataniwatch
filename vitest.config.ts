import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        name: "beataniwatch",
        environment: "node",
        testTimeout: 15000,
        reporters: "default",
    },
});
