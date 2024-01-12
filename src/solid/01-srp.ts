(() => {

  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log('Product: ', { id, name: 'OLED TV' });
    }

    saveProduct(product: Product) {
      console.log('Saving product in database', product);
    }

  }

  class Mailer {
    private masterEmail: string = 'braham.gc@gmail.com';

    sendEmail(emailList: string[], template: 'to-client' | 'to-admin') {
      console.log('Sending email', emailList, template);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Adding to car ', productId);
    }
  }

  // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;

    /**
     *
     */
    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      this.productService.getProduct(id);
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.mailer.sendEmail(['agallardo@tekssolutions'], 'to-client');
    }

  }

  const cartBloc = new CartBloc();
  const productService = new ProductService();
  const mailer = new Mailer();
  const productBloc = new ProductBloc(productService, mailer);

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cartBloc.onAddToCart(10);


})();