/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query datasetByType($locale: String!, $type: String!) {\n    allFirstSpiritDataset(filter: {_locale: {eq: $locale}, entityType: {eq: $type}}) {\n      nodes {\n        id\n        entityType\n        route\n        data\n      }\n    }\n  }\n": types.DatasetByTypeDocument,
    "\n  query pageByRoute($locale: String!, $route: String!) {\n    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {\n      layout\n      name\n      id\n      data\n      pageBodies {\n        children {\n          ... on FirstSpiritSection {\n            __typename\n            id\n            sectionType\n            data\n          }\n        }\n        name\n        previewId\n      }\n    }\n  }\n": types.PageByRouteDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query datasetByType($locale: String!, $type: String!) {\n    allFirstSpiritDataset(filter: {_locale: {eq: $locale}, entityType: {eq: $type}}) {\n      nodes {\n        id\n        entityType\n        route\n        data\n      }\n    }\n  }\n"): (typeof documents)["\n  query datasetByType($locale: String!, $type: String!) {\n    allFirstSpiritDataset(filter: {_locale: {eq: $locale}, entityType: {eq: $type}}) {\n      nodes {\n        id\n        entityType\n        route\n        data\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query pageByRoute($locale: String!, $route: String!) {\n    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {\n      layout\n      name\n      id\n      data\n      pageBodies {\n        children {\n          ... on FirstSpiritSection {\n            __typename\n            id\n            sectionType\n            data\n          }\n        }\n        name\n        previewId\n      }\n    }\n  }\n"): (typeof documents)["\n  query pageByRoute($locale: String!, $route: String!) {\n    firstSpiritPage(_locale: {eq: $locale}, route: {eq: $route}) {\n      layout\n      name\n      id\n      data\n      pageBodies {\n        children {\n          ... on FirstSpiritSection {\n            __typename\n            id\n            sectionType\n            data\n          }\n        }\n        name\n        previewId\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;