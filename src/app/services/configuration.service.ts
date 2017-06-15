export abstract class ConfigurationService {
    public abstract getConfig(): any;
    public abstract getConfigKey(key: string): string;
}
