# Documentation for Color Parser Program

## Overview

This Node.js program is designed to parse and display colors in different formats based on user input. It supports conversion to RGB and HEX formats and can process the colors either in parallel or sequentially.

## Installation

To use this program, you need to have Node.js installed on your machine. No external dependencies are required as the program uses an external API (`apiMock.js`) for demonstration purposes.

1. Clone the repository to your local machine.
2. Navigate to the directory containing the program.

## Usage

The program is executed via the command line and takes several arguments to define its behavior.

### Command Line Arguments

-   **Color Names**: You can specify any number of color names as arguments. These should be valid color names recognized by the `getColor` function in `apiMock.js`.
-   **Flags**:
    -   `--RGB` or `--HEX`: Specify the output format for the color. Only one of these should be used at a time.
    -   `--par` or `--seq`: Determine the processing order of the colors. Use `--par` for parallel processing or `--seq` for sequential processing.

### Running the Program

Use the following command structure to run the program:

```bash
node src/index.js [color1 color2 ...] --[RGB/HEX] --[par/seq]
```

For example:

```bash
node src/index.js red green blue --RGB --seq
```

This command will process the colors red, green, and blue sequentially and output their RGB values.

## Error Handling

The program will throw errors in the following cases:

-   If neither or both of the color flags (`--RGB`, `--HEX`) are specified.
-   If neither or both of the order flags (`--par`, `--seq`) are specified.

Ensure you specify exactly one color flag and one order flag.

## Notes

-   The program is designed for demonstration purposes and relies on the `apiMock.js` file to simulate color data retrieval.
-   Modify `apiMock.js` as needed to suit your testing or development needs.

## License

This project is unlicensed and is intended for educational and demonstration purposes only.
