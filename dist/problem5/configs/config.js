import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
export class ConfigService {
    static get(key) {
        return process.env[key];
    }
}
ConfigService.MONGO_URL = 'mongodb://localhost:3000/99tech';
ConfigService.API_PORT = 3000;
//# sourceMappingURL=config.js.map