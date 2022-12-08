import { getRoot } from "../../lib/main.ts";
import { readline } from "https://deno.land/x/readline@v1.1.0/mod.ts";

const INPUT_FILEPATH = `${getRoot()}/src/days/1/input.txt`;

function getNextMax(parsed: number, current = 0, max = 0) {
  if (!Number.isNaN(parsed)) {
    current += parsed;

    if (current > max) max = current;
  } else current = 0;

  return [current, max];
}

async function main() {
  const file = await Deno.open(INPUT_FILEPATH);
  const decoder = new TextDecoder();
  let current, result;

  for await (const line of readline(file)) {
    const parsed = parseInt(decoder.decode(line));

    [current, result] = getNextMax(parsed, current, result);
  }

  console.log(result);

  file.close();
}

main();
