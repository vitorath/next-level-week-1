import { json, Router } from "express";
import { v4 as uuid } from 'uuid';
import { ensuredAuthenticated } from "./middleware";

const router = Router();

interface ProductsDTO {
  name: string;
  description: string;
  price: number;
  id: string;
}

const products: ProductsDTO[] = [];

router.get("/products/findByName", (request, response) => {
  const { name } = request.query;
  const product = products.filter((p) => p.name.includes(String(name)));
  return response.json(product);
});

router.get("/products/:id", (request, response) => {
  const { id } = request.params;
  const product = products.filter((p) => p.id = id);
  return response.json(product);
});

router.post("/products", ensuredAuthenticated, (request, response) => {
  const { name, description, price } = request.body;

  const productAlreadyExists = products.find((p) => p.name = name);

  if (productAlreadyExists) {
    return response.status(400).json({ message: "Product already exists!" });
  }

  const product: ProductsDTO = {
    description,
    name,
    price,
    id: uuid()
  };
  
  products.push(product);

  return response.json(product);
});

router.put("/products/:id", ensuredAuthenticated, (request, response) => {
  const { id } = request.params;
  const { name, description, price } = request.body;

  const productIndex = products.findIndex((p) => p.id == id);

  if (productIndex == -1) {
    return response.json(400).json({ message: "Product doesn't exists!" });
  }

  const product: ProductsDTO = Object.assign({
    id,
    name,
    description,
    price
  });

  products[productIndex] = product;

  return response.json(product);
});

export { router };

