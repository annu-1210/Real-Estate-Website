import p1_img from './p1_img.jpg';
import p2_img from './p2_img.jpg';
import p3_img from './p3_img.jpg';
import p4_img from './p4_img.jpg';
import p5_img from './p5_img.jpg';
import p6_img from './p6_img.jpg';
import p7_img from './p7_img.jpg';
import p8_img from './p8_img.jpg';
import p9_img from './p9_img.jpg';
import p10_img from './p10_img.jpg';


let data = [

  {
    id: 1,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur",
    image: p1_img,
    price: 295000
  },
  {
    id: 2,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Assati Garden City",
    address: "39 Sterling ave, White Plains,Assati Garden City, Sawangan, Depok, Jawa Barat",
    image: p2_img,
    price: 445000
  },
  {
    id: 3,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Citralan Puri Serang",
    address: "62 Highland St, Eastchester,Serang, Ciracus, Block A7, Ruko Puri Indah",
    image: p7_img,
    price: 325000
  },
  {
    id: 4,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Assati Garden City",
    address: "33 Alden Pl, Bronxville,Cakung. Pulo Gadung, Jakarta Timur",
    image: p10_img,
    price: 665000
  },
  {
    id: 5,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p5_img,
    price: 265000
  },
  {
    id: 6,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p6_img,
    price: 265000
  },
  {
    id: 7,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p3_img,
    price: 265000
  },
  {
    id: 8,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p8_img,
    price: 265000
  },
  {
    id: 9,
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p9_img,
    price: 265000
  },
  {
    id: 10,
    descriptio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum ipsa et a ad sequi quo numquam ea, ratione voluptate ex, minima alias laborum mollitia. Totam veniam perspiciatis qui libero accusamus illum. Quis iure cupiditate a tempore aliquam vero? Sequi, quam. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, quidem voluptatibus. A atque voluptates dignissimos culpa laborum architecto numquam fuga, qui ex! Libero sunt eius vero nemo? Provident molestias aspernatur quam corporis eius vel ut aliquid! Magnam aut harum nulla tempora saepe velit? Nemo enim ullam dolorem aperiam facilis officia, fuga consectetur iste illo quae necessitatibus, doloremque molestias vel modi.",
    name: "Aliva Priva Jardin",
    address: "6 Garth rd, Scarsdale, Cakung. Pulo Gadung, Jakarta Timur, Mamaroneck",
    image: p4_img,
    price: 265000
  }
]

export default data;