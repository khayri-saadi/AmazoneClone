/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
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
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCartProduct = /* GraphQL */ `
  query GetCartProduct($id: ID!) {
    getCartProduct(id: $id) {
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
export const listCartProducts = /* GraphQL */ `
  query ListCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCartProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCartProducts = /* GraphQL */ `
  query SyncCartProducts(
    $filter: ModelCartProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCartProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
