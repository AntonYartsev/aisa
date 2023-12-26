import express, { Express, NextFunction, Request, Response } from "express";
import cors = require("cors");

var standartSize: machineSize = {
  id: 1,
  name: "standart",
  cover:
    "https://c.dns-shop.ru/thumb/st4/fit/wm/0/0/2ed99f32692a9a7edd5e09e7ce683780/647795bd1026bf2461cb5b176e120573925174565ad4ccb762c305cb75ebf805.jpg.webp",
};

var largeSize: machineSize = {
  id: 2,
  name: "large",
  cover:
    "https://c.dns-shop.ru/thumb/st1/fit/wm/0/0/5b84d7624ed565be189377f9dff94c51/92006f356e72757f0d3f8d338736c740610a538e149d541e541749b31aa2aa05.jpg.webp",
};

var sixDrinkSet: drinkSet = {
  id: 1,
  count: 6,
};

var eightDrinkSet: drinkSet = {
  id: 2,
  count: 8,
};

var twelveDrinkSet: drinkSet = {
  id: 3,
  count: 12,
};

var availableConfigurations: config = {
  availableSizes: [standartSize, largeSize],
  availableDrinkSets: [sixDrinkSet, eightDrinkSet, twelveDrinkSet],
};

const app: Express = express();
app.use(express.json());
app.use(cors());
const port = 3000;

app.get("/configs", (req: Request, res: Response) => {
  res.json(availableConfigurations);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

interface config {
  availableSizes: machineSize[];
  availableDrinkSets: drinkSet[];
}

interface machineSize {
  id: number;
  name: string;
  cover: string;
}

interface drinkSet {
  id: number;
  count: number;
}
