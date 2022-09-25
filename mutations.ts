/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      cartProduct {
        id
        userSub
        quantity
        options
        ProductId
        product {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productCartProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartProductProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCartProductId
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      cartProduct {
        id
        userSub
        quantity
        options
        ProductId
        product {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productCartProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartProductProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCartProductId
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      title
      description
      image
      images
      options
      avgRating
      ratings
      price
      oldPrice
      cartProduct {
        id
        userSub
        quantity
        options
        ProductId
        product {
          id
          title
          description
          image
          images
          options
          avgRating
          ratings
          price
          oldPrice
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          productCartProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        cartProductProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      productCartProductId
    }
  }
`;
export const createCartProduct = /* GraphQL */ `
  mutation CreateCartProduct(
    $input: CreateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    createCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      options
      ProductId
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        cartProduct {
          id
          userSub
          quantity
          options
          ProductId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartProductProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productCartProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const updateCartProduct = /* GraphQL */ `
  mutation UpdateCartProduct(
    $input: UpdateCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    updateCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      options
      ProductId
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        cartProduct {
          id
          userSub
          quantity
          options
          ProductId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartProductProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productCartProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
export const deleteCartProduct = /* GraphQL */ `
  mutation DeleteCartProduct(
    $input: DeleteCartProductInput!
    $condition: ModelCartProductConditionInput
  ) {
    deleteCartProduct(input: $input, condition: $condition) {
      id
      userSub
      quantity
      options
      ProductId
      product {
        id
        title
        description
        image
        images
        options
        avgRating
        ratings
        price
        oldPrice
        cartProduct {
          id
          userSub
          quantity
          options
          ProductId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          cartProductProductId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        productCartProductId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      cartProductProductId
    }
  }
`;
