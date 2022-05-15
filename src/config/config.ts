import * as dotenv from 'dotenv';

dotenv.config();

export const { PORT, TYPEORM_HOST, TYPEORM_USERNAME, TYPEORM_PASSWORD, TYPEORM_DATABASE } = process.env;