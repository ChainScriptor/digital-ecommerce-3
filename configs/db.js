import { drizzle } from 'drizzle-orm/neon-http';

 export const db = drizzle(process.NEXT_PUBLIC_DATABASE_URL);
