# NodeJS application configuration files loader

* NodeJS, Typescript
* Config chaining (hierarchy)
* Multiple environments support, local overwrites
* JSON/JS configs, JS is to use environment variables
* Validation using class-validator library
* Configs are typed


## Usage
Load config:
```typescript
    const configSource = new ConfigFileChain(
      path.resolve(__dirname, '../config'),
      process.env.PROJECT_ENV as string,
    );
    const configFactory = new ConfigFactory(configSource);

    const serverConfig = await configFactory.create<ServerConfig>(ServerConfig);

```

Create your own config type:
```typescript
export class ExampleConfig extends Config {
  @IsNotEmpty()
  public value!: string;

  public getName(): string {
    return 'example';
  }
}
```
