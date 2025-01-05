
```markdown
# Simpliest Logger

A lightweight and extensible logger for Node.js with TypeScript support. Designed for simplicity, modularity, and customizability, this logger is perfect for small to medium-sized projects.

---

## Features

- 📄 **Multiple Outputs**: Supports console and file outputs.
- 🖍 **Color-Coded Logs**: Enhanced console readability with colored log levels.
- 📦 **TypeScript Support**: Includes full TypeScript type definitions.
- 🔧 **Configurable**: Easily set log levels, output targets, and more.
- 📅 **Consistent Formatting**: Aligns log levels and timestamps for improved readability.

---

## Installation

Install the package using npm or yarn:

```bash
npm install simpliest-logger
# or
yarn add simpliest-logger
```

---

## Usage

Here's how you can use the logger in your project:

### Basic Example

```typescript
import { SimpliestLogger } from 'simpliest-logger';
import { ConsoleOutput } from 'simpliest-logger/outputs/ConsoleOutput';
import { FileOutput } from 'simpliest-logger/outputs/FileOutput';
import { LogLevel } from 'simpliest-logger/core/LogLevel';

const logger = new SimpliestLogger({
  level: LogLevel.DEBUG,
  outputs: [
    new ConsoleOutput(),
    new FileOutput('./logs/app.log'),
  ],
});

logger.info('This is an informational message');
logger.error('An error occurred!', { errorCode: 500 });
```

### Output Example

#### Console:
```plaintext
[2025-01-04 14:30:45] [INFO  ] This is an informational message
[2025-01-04 14:30:46] [ERROR ] An error occurred! | Metadata: {"errorCode":500}
```

#### File (`app.log`):
```plaintext
[2025-01-04 14:30:45] [INFO  ] This is an informational message
[2025-01-04 14:30:46] [ERROR ] An error occurred! | Metadata: {"errorCode":500}
```

---

## Configuration

### Logger Configuration
You can customize the logger using the following options:

| Option        | Type                  | Default     | Description                                  |
|---------------|-----------------------|-------------|----------------------------------------------|
| `level`       | `LogLevel`            | `LogLevel.INFO` | Minimum log level to record (`DEBUG`, `INFO`, `WARN`, `ERROR`). |
| `outputs`     | `LogOutput[]`         | `[]`        | List of outputs to send logs to.             |

### Log Levels

Available log levels:
- `DEBUG`
- `INFO`
- `WARN`
- `ERROR`

---

## Custom Outputs

You can create your own custom output by implementing the `LogOutput` interface.

---

## TypeScript Support

The package includes TypeScript type definitions for all components:
- `SimpliestLogger`: Main logger class.
- `LogLevel`: Enum for log levels.
- `LogOutput`: Interface for custom outputs.

---

## Development

### Building the Project
To compile the TypeScript source code into JavaScript:
```bash
npm run build
```

