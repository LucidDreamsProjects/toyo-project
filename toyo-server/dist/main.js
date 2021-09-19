"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const helmet = require("helmet");
const compression = require("compression");
(0, dotenv_1.config)();
async function bootstrap() {
    const PORT = process.env.PORT || 8081;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(helmet());
    app.use(compression());
    app.useStaticAssets((0, path_1.join)(__dirname, '..', '/build'));
    app.enableCors();
    app.init();
    await app.listen(`${PORT}`, () => {
        console.log(`⚡️ [server]: Server is running at ${process.env.BASE_URL_PRODUCTION}:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map