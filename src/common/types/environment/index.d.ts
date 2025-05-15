declare namespace NodeJS{
    interface ProcessEnv{
        PORT: number;
        MONGO_URI: string;
        DB_NAME: string;
    }
}