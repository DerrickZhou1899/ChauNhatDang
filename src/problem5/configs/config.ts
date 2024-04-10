import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });
export class ConfigService {
  static get(key: string): string {
    return process.env[key];
  }
}