"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, description, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Review = /** @class */ (function () {
    function Review(id, productId, timestamp, user, rating, comment) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.comment = comment;
    }
    return Review;
}());
exports.Review = Review;
function getProducts(params) {
    if (params === void 0) { params = {}; }
    var result = products;
    if (params.title) {
        result = result.filter(function (p) { return p.title.toLowerCase().indexOf(params.title.toLowerCase()) !== -1; });
    }
    if (parseInt(params.price) && result.length > 0) {
        result = result.filter(function (p) { return p.price <= parseInt(params.price); });
    }
    if (params.category && result.length > 0) {
        result = result.filter(function (p) { return p.categories.indexOf(params.category.toLowerCase()) !== -1; });
    }
    return result;
}
exports.getProducts = getProducts;
function getProductById(productId) {
    return products.find(function (p) { return p.id === productId; });
}
exports.getProductById = getProductById;
function getReviewsByProductId(productId) {
    return reviews.filter(function (r) { return r.productId === productId; });
}
exports.getReviewsByProductId = getReviewsByProductId;
var products = [
    {
        "id": 0,
        "title": 'Pierwszy produkt',
        "price": 24.99,
        "rating": 4.3,
        "description": 'To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        "categories": ['electronics', 'hardware']
    },
    {
        "id": 1,
        "title": "Drugi produkt",
        "price": 64.99,
        "rating": 3.5,
        "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    },
    {
        "id": 2,
        "title": "Trzeci produkt",
        "price": 74.99,
        "rating": 4.2,
        "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics"]
    },
    {
        "id": 3,
        "title": "Czwarty produkt",
        "price": 84.99,
        "rating": 3.9,
        "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["hardware"]
    },
    {
        "id": 4,
        "title": "Piąty produkt",
        "price": 94.99,
        "rating": 5,
        "description": "To jest krótki opis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["electronics", "hardware"]
    },
    {
        "id": 5,
        "title": "Sixth Product",
        "price": 54.99,
        "rating": 4.6,
        "description": "This is a short description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "categories": ["books"]
    }
];
var reviews = [
    {
        "id": 0,
        "productId": 0,
        "timestamp": "2014-05-20T02:17:00+00:00",
        "user": "Użytkownik 1",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 1,
        "productId": 0,
        "timestamp": "2014-05-20T02:53:00+00:00",
        "user": "Użytkownik 2",
        "rating": 3,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 2,
        "productId": 0,
        "timestamp": "2014-05-20T05:26:00+00:00",
        "user": "Użytkownik 3",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 3,
        "productId": 0,
        "timestamp": "2014-05-20T07:20:00+00:00",
        "user": "Użytkownik 4",
        "rating": 4,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 4,
        "productId": 0,
        "timestamp": "2014-05-20T11:35:00+00:00",
        "user": "Użytkownik 5",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    },
    {
        "id": 5,
        "productId": 0,
        "timestamp": "2014-05-20T11:42:00+00:00",
        "user": "Użytkownik 6",
        "rating": 5,
        "comment": "Aenean vestibulum velit id placerat posuere. Praesent placerat mi ut massa tempor, sed rutrum metus rutrum. Fusce lacinia blandit ligula eu cursus. Proin in lobortis mi. Praesent pellentesque auctor dictum. Nunc volutpat id nibh quis malesuada. Curabitur tincidunt luctus leo, quis condimentum mi aliquet eu. Vivamus eros metus, convallis eget rutrum nec, ultrices quis mauris. Praesent non lectus nec dui venenatis pretium."
    }
];
