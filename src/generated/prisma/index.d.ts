
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model PlaygroundHistory
 * 
 */
export type PlaygroundHistory = $Result.DefaultSelection<Prisma.$PlaygroundHistoryPayload>
/**
 * Model PlaygroundResponse
 * 
 */
export type PlaygroundResponse = $Result.DefaultSelection<Prisma.$PlaygroundResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PlaygroundHistories
 * const playgroundHistories = await prisma.playgroundHistory.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more PlaygroundHistories
   * const playgroundHistories = await prisma.playgroundHistory.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.playgroundHistory`: Exposes CRUD operations for the **PlaygroundHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaygroundHistories
    * const playgroundHistories = await prisma.playgroundHistory.findMany()
    * ```
    */
  get playgroundHistory(): Prisma.PlaygroundHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playgroundResponse`: Exposes CRUD operations for the **PlaygroundResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaygroundResponses
    * const playgroundResponses = await prisma.playgroundResponse.findMany()
    * ```
    */
  get playgroundResponse(): Prisma.PlaygroundResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    PlaygroundHistory: 'PlaygroundHistory',
    PlaygroundResponse: 'PlaygroundResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "playgroundHistory" | "playgroundResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PlaygroundHistory: {
        payload: Prisma.$PlaygroundHistoryPayload<ExtArgs>
        fields: Prisma.PlaygroundHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaygroundHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaygroundHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          findFirst: {
            args: Prisma.PlaygroundHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaygroundHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          findMany: {
            args: Prisma.PlaygroundHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>[]
          }
          create: {
            args: Prisma.PlaygroundHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          createMany: {
            args: Prisma.PlaygroundHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaygroundHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>[]
          }
          delete: {
            args: Prisma.PlaygroundHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          update: {
            args: Prisma.PlaygroundHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PlaygroundHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaygroundHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaygroundHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>[]
          }
          upsert: {
            args: Prisma.PlaygroundHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundHistoryPayload>
          }
          aggregate: {
            args: Prisma.PlaygroundHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaygroundHistory>
          }
          groupBy: {
            args: Prisma.PlaygroundHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaygroundHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaygroundHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PlaygroundHistoryCountAggregateOutputType> | number
          }
        }
      }
      PlaygroundResponse: {
        payload: Prisma.$PlaygroundResponsePayload<ExtArgs>
        fields: Prisma.PlaygroundResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaygroundResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaygroundResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          findFirst: {
            args: Prisma.PlaygroundResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaygroundResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          findMany: {
            args: Prisma.PlaygroundResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>[]
          }
          create: {
            args: Prisma.PlaygroundResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          createMany: {
            args: Prisma.PlaygroundResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaygroundResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>[]
          }
          delete: {
            args: Prisma.PlaygroundResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          update: {
            args: Prisma.PlaygroundResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          deleteMany: {
            args: Prisma.PlaygroundResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaygroundResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaygroundResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>[]
          }
          upsert: {
            args: Prisma.PlaygroundResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaygroundResponsePayload>
          }
          aggregate: {
            args: Prisma.PlaygroundResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaygroundResponse>
          }
          groupBy: {
            args: Prisma.PlaygroundResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaygroundResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaygroundResponseCountArgs<ExtArgs>
            result: $Utils.Optional<PlaygroundResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    playgroundHistory?: PlaygroundHistoryOmit
    playgroundResponse?: PlaygroundResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlaygroundHistoryCountOutputType
   */

  export type PlaygroundHistoryCountOutputType = {
    responses: number
  }

  export type PlaygroundHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | PlaygroundHistoryCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * PlaygroundHistoryCountOutputType without action
   */
  export type PlaygroundHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistoryCountOutputType
     */
    select?: PlaygroundHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaygroundHistoryCountOutputType without action
   */
  export type PlaygroundHistoryCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaygroundResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model PlaygroundHistory
   */

  export type AggregatePlaygroundHistory = {
    _count: PlaygroundHistoryCountAggregateOutputType | null
    _min: PlaygroundHistoryMinAggregateOutputType | null
    _max: PlaygroundHistoryMaxAggregateOutputType | null
  }

  export type PlaygroundHistoryMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    timestamp: Date | null
  }

  export type PlaygroundHistoryMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    timestamp: Date | null
  }

  export type PlaygroundHistoryCountAggregateOutputType = {
    id: number
    prompt: number
    timestamp: number
    _all: number
  }


  export type PlaygroundHistoryMinAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
  }

  export type PlaygroundHistoryMaxAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
  }

  export type PlaygroundHistoryCountAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
    _all?: true
  }

  export type PlaygroundHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaygroundHistory to aggregate.
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundHistories to fetch.
     */
    orderBy?: PlaygroundHistoryOrderByWithRelationInput | PlaygroundHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaygroundHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaygroundHistories
    **/
    _count?: true | PlaygroundHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaygroundHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaygroundHistoryMaxAggregateInputType
  }

  export type GetPlaygroundHistoryAggregateType<T extends PlaygroundHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaygroundHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaygroundHistory[P]>
      : GetScalarType<T[P], AggregatePlaygroundHistory[P]>
  }




  export type PlaygroundHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaygroundHistoryWhereInput
    orderBy?: PlaygroundHistoryOrderByWithAggregationInput | PlaygroundHistoryOrderByWithAggregationInput[]
    by: PlaygroundHistoryScalarFieldEnum[] | PlaygroundHistoryScalarFieldEnum
    having?: PlaygroundHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaygroundHistoryCountAggregateInputType | true
    _min?: PlaygroundHistoryMinAggregateInputType
    _max?: PlaygroundHistoryMaxAggregateInputType
  }

  export type PlaygroundHistoryGroupByOutputType = {
    id: string
    prompt: string
    timestamp: Date
    _count: PlaygroundHistoryCountAggregateOutputType | null
    _min: PlaygroundHistoryMinAggregateOutputType | null
    _max: PlaygroundHistoryMaxAggregateOutputType | null
  }

  type GetPlaygroundHistoryGroupByPayload<T extends PlaygroundHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaygroundHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaygroundHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaygroundHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PlaygroundHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PlaygroundHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
    responses?: boolean | PlaygroundHistory$responsesArgs<ExtArgs>
    _count?: boolean | PlaygroundHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playgroundHistory"]>

  export type PlaygroundHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["playgroundHistory"]>

  export type PlaygroundHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
  }, ExtArgs["result"]["playgroundHistory"]>

  export type PlaygroundHistorySelectScalar = {
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
  }

  export type PlaygroundHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "timestamp", ExtArgs["result"]["playgroundHistory"]>
  export type PlaygroundHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    responses?: boolean | PlaygroundHistory$responsesArgs<ExtArgs>
    _count?: boolean | PlaygroundHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaygroundHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlaygroundHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlaygroundHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaygroundHistory"
    objects: {
      responses: Prisma.$PlaygroundResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      timestamp: Date
    }, ExtArgs["result"]["playgroundHistory"]>
    composites: {}
  }

  type PlaygroundHistoryGetPayload<S extends boolean | null | undefined | PlaygroundHistoryDefaultArgs> = $Result.GetResult<Prisma.$PlaygroundHistoryPayload, S>

  type PlaygroundHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaygroundHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaygroundHistoryCountAggregateInputType | true
    }

  export interface PlaygroundHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaygroundHistory'], meta: { name: 'PlaygroundHistory' } }
    /**
     * Find zero or one PlaygroundHistory that matches the filter.
     * @param {PlaygroundHistoryFindUniqueArgs} args - Arguments to find a PlaygroundHistory
     * @example
     * // Get one PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaygroundHistoryFindUniqueArgs>(args: SelectSubset<T, PlaygroundHistoryFindUniqueArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaygroundHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaygroundHistoryFindUniqueOrThrowArgs} args - Arguments to find a PlaygroundHistory
     * @example
     * // Get one PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaygroundHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaygroundHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaygroundHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryFindFirstArgs} args - Arguments to find a PlaygroundHistory
     * @example
     * // Get one PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaygroundHistoryFindFirstArgs>(args?: SelectSubset<T, PlaygroundHistoryFindFirstArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaygroundHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryFindFirstOrThrowArgs} args - Arguments to find a PlaygroundHistory
     * @example
     * // Get one PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaygroundHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaygroundHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaygroundHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaygroundHistories
     * const playgroundHistories = await prisma.playgroundHistory.findMany()
     * 
     * // Get first 10 PlaygroundHistories
     * const playgroundHistories = await prisma.playgroundHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playgroundHistoryWithIdOnly = await prisma.playgroundHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaygroundHistoryFindManyArgs>(args?: SelectSubset<T, PlaygroundHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaygroundHistory.
     * @param {PlaygroundHistoryCreateArgs} args - Arguments to create a PlaygroundHistory.
     * @example
     * // Create one PlaygroundHistory
     * const PlaygroundHistory = await prisma.playgroundHistory.create({
     *   data: {
     *     // ... data to create a PlaygroundHistory
     *   }
     * })
     * 
     */
    create<T extends PlaygroundHistoryCreateArgs>(args: SelectSubset<T, PlaygroundHistoryCreateArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaygroundHistories.
     * @param {PlaygroundHistoryCreateManyArgs} args - Arguments to create many PlaygroundHistories.
     * @example
     * // Create many PlaygroundHistories
     * const playgroundHistory = await prisma.playgroundHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaygroundHistoryCreateManyArgs>(args?: SelectSubset<T, PlaygroundHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaygroundHistories and returns the data saved in the database.
     * @param {PlaygroundHistoryCreateManyAndReturnArgs} args - Arguments to create many PlaygroundHistories.
     * @example
     * // Create many PlaygroundHistories
     * const playgroundHistory = await prisma.playgroundHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaygroundHistories and only return the `id`
     * const playgroundHistoryWithIdOnly = await prisma.playgroundHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaygroundHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaygroundHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaygroundHistory.
     * @param {PlaygroundHistoryDeleteArgs} args - Arguments to delete one PlaygroundHistory.
     * @example
     * // Delete one PlaygroundHistory
     * const PlaygroundHistory = await prisma.playgroundHistory.delete({
     *   where: {
     *     // ... filter to delete one PlaygroundHistory
     *   }
     * })
     * 
     */
    delete<T extends PlaygroundHistoryDeleteArgs>(args: SelectSubset<T, PlaygroundHistoryDeleteArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaygroundHistory.
     * @param {PlaygroundHistoryUpdateArgs} args - Arguments to update one PlaygroundHistory.
     * @example
     * // Update one PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaygroundHistoryUpdateArgs>(args: SelectSubset<T, PlaygroundHistoryUpdateArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaygroundHistories.
     * @param {PlaygroundHistoryDeleteManyArgs} args - Arguments to filter PlaygroundHistories to delete.
     * @example
     * // Delete a few PlaygroundHistories
     * const { count } = await prisma.playgroundHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaygroundHistoryDeleteManyArgs>(args?: SelectSubset<T, PlaygroundHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaygroundHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaygroundHistories
     * const playgroundHistory = await prisma.playgroundHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaygroundHistoryUpdateManyArgs>(args: SelectSubset<T, PlaygroundHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaygroundHistories and returns the data updated in the database.
     * @param {PlaygroundHistoryUpdateManyAndReturnArgs} args - Arguments to update many PlaygroundHistories.
     * @example
     * // Update many PlaygroundHistories
     * const playgroundHistory = await prisma.playgroundHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaygroundHistories and only return the `id`
     * const playgroundHistoryWithIdOnly = await prisma.playgroundHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaygroundHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaygroundHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaygroundHistory.
     * @param {PlaygroundHistoryUpsertArgs} args - Arguments to update or create a PlaygroundHistory.
     * @example
     * // Update or create a PlaygroundHistory
     * const playgroundHistory = await prisma.playgroundHistory.upsert({
     *   create: {
     *     // ... data to create a PlaygroundHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaygroundHistory we want to update
     *   }
     * })
     */
    upsert<T extends PlaygroundHistoryUpsertArgs>(args: SelectSubset<T, PlaygroundHistoryUpsertArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaygroundHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryCountArgs} args - Arguments to filter PlaygroundHistories to count.
     * @example
     * // Count the number of PlaygroundHistories
     * const count = await prisma.playgroundHistory.count({
     *   where: {
     *     // ... the filter for the PlaygroundHistories we want to count
     *   }
     * })
    **/
    count<T extends PlaygroundHistoryCountArgs>(
      args?: Subset<T, PlaygroundHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaygroundHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaygroundHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaygroundHistoryAggregateArgs>(args: Subset<T, PlaygroundHistoryAggregateArgs>): Prisma.PrismaPromise<GetPlaygroundHistoryAggregateType<T>>

    /**
     * Group by PlaygroundHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaygroundHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaygroundHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PlaygroundHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaygroundHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaygroundHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaygroundHistory model
   */
  readonly fields: PlaygroundHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaygroundHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaygroundHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    responses<T extends PlaygroundHistory$responsesArgs<ExtArgs> = {}>(args?: Subset<T, PlaygroundHistory$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaygroundHistory model
   */
  interface PlaygroundHistoryFieldRefs {
    readonly id: FieldRef<"PlaygroundHistory", 'String'>
    readonly prompt: FieldRef<"PlaygroundHistory", 'String'>
    readonly timestamp: FieldRef<"PlaygroundHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaygroundHistory findUnique
   */
  export type PlaygroundHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundHistory to fetch.
     */
    where: PlaygroundHistoryWhereUniqueInput
  }

  /**
   * PlaygroundHistory findUniqueOrThrow
   */
  export type PlaygroundHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundHistory to fetch.
     */
    where: PlaygroundHistoryWhereUniqueInput
  }

  /**
   * PlaygroundHistory findFirst
   */
  export type PlaygroundHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundHistory to fetch.
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundHistories to fetch.
     */
    orderBy?: PlaygroundHistoryOrderByWithRelationInput | PlaygroundHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaygroundHistories.
     */
    cursor?: PlaygroundHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaygroundHistories.
     */
    distinct?: PlaygroundHistoryScalarFieldEnum | PlaygroundHistoryScalarFieldEnum[]
  }

  /**
   * PlaygroundHistory findFirstOrThrow
   */
  export type PlaygroundHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundHistory to fetch.
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundHistories to fetch.
     */
    orderBy?: PlaygroundHistoryOrderByWithRelationInput | PlaygroundHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaygroundHistories.
     */
    cursor?: PlaygroundHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaygroundHistories.
     */
    distinct?: PlaygroundHistoryScalarFieldEnum | PlaygroundHistoryScalarFieldEnum[]
  }

  /**
   * PlaygroundHistory findMany
   */
  export type PlaygroundHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundHistories to fetch.
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundHistories to fetch.
     */
    orderBy?: PlaygroundHistoryOrderByWithRelationInput | PlaygroundHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaygroundHistories.
     */
    cursor?: PlaygroundHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundHistories.
     */
    skip?: number
    distinct?: PlaygroundHistoryScalarFieldEnum | PlaygroundHistoryScalarFieldEnum[]
  }

  /**
   * PlaygroundHistory create
   */
  export type PlaygroundHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaygroundHistory.
     */
    data: XOR<PlaygroundHistoryCreateInput, PlaygroundHistoryUncheckedCreateInput>
  }

  /**
   * PlaygroundHistory createMany
   */
  export type PlaygroundHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaygroundHistories.
     */
    data: PlaygroundHistoryCreateManyInput | PlaygroundHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaygroundHistory createManyAndReturn
   */
  export type PlaygroundHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many PlaygroundHistories.
     */
    data: PlaygroundHistoryCreateManyInput | PlaygroundHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaygroundHistory update
   */
  export type PlaygroundHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaygroundHistory.
     */
    data: XOR<PlaygroundHistoryUpdateInput, PlaygroundHistoryUncheckedUpdateInput>
    /**
     * Choose, which PlaygroundHistory to update.
     */
    where: PlaygroundHistoryWhereUniqueInput
  }

  /**
   * PlaygroundHistory updateMany
   */
  export type PlaygroundHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaygroundHistories.
     */
    data: XOR<PlaygroundHistoryUpdateManyMutationInput, PlaygroundHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlaygroundHistories to update
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * Limit how many PlaygroundHistories to update.
     */
    limit?: number
  }

  /**
   * PlaygroundHistory updateManyAndReturn
   */
  export type PlaygroundHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * The data used to update PlaygroundHistories.
     */
    data: XOR<PlaygroundHistoryUpdateManyMutationInput, PlaygroundHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PlaygroundHistories to update
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * Limit how many PlaygroundHistories to update.
     */
    limit?: number
  }

  /**
   * PlaygroundHistory upsert
   */
  export type PlaygroundHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaygroundHistory to update in case it exists.
     */
    where: PlaygroundHistoryWhereUniqueInput
    /**
     * In case the PlaygroundHistory found by the `where` argument doesn't exist, create a new PlaygroundHistory with this data.
     */
    create: XOR<PlaygroundHistoryCreateInput, PlaygroundHistoryUncheckedCreateInput>
    /**
     * In case the PlaygroundHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaygroundHistoryUpdateInput, PlaygroundHistoryUncheckedUpdateInput>
  }

  /**
   * PlaygroundHistory delete
   */
  export type PlaygroundHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
    /**
     * Filter which PlaygroundHistory to delete.
     */
    where: PlaygroundHistoryWhereUniqueInput
  }

  /**
   * PlaygroundHistory deleteMany
   */
  export type PlaygroundHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaygroundHistories to delete
     */
    where?: PlaygroundHistoryWhereInput
    /**
     * Limit how many PlaygroundHistories to delete.
     */
    limit?: number
  }

  /**
   * PlaygroundHistory.responses
   */
  export type PlaygroundHistory$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    where?: PlaygroundResponseWhereInput
    orderBy?: PlaygroundResponseOrderByWithRelationInput | PlaygroundResponseOrderByWithRelationInput[]
    cursor?: PlaygroundResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaygroundResponseScalarFieldEnum | PlaygroundResponseScalarFieldEnum[]
  }

  /**
   * PlaygroundHistory without action
   */
  export type PlaygroundHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundHistory
     */
    select?: PlaygroundHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundHistory
     */
    omit?: PlaygroundHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundHistoryInclude<ExtArgs> | null
  }


  /**
   * Model PlaygroundResponse
   */

  export type AggregatePlaygroundResponse = {
    _count: PlaygroundResponseCountAggregateOutputType | null
    _avg: PlaygroundResponseAvgAggregateOutputType | null
    _sum: PlaygroundResponseSumAggregateOutputType | null
    _min: PlaygroundResponseMinAggregateOutputType | null
    _max: PlaygroundResponseMaxAggregateOutputType | null
  }

  export type PlaygroundResponseAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
  }

  export type PlaygroundResponseSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
  }

  export type PlaygroundResponseMinAggregateOutputType = {
    id: string | null
    modelId: string | null
    text: string | null
    historyId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
    createdAt: Date | null
  }

  export type PlaygroundResponseMaxAggregateOutputType = {
    id: string | null
    modelId: string | null
    text: string | null
    historyId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
    createdAt: Date | null
  }

  export type PlaygroundResponseCountAggregateOutputType = {
    id: number
    modelId: number
    text: number
    historyId: number
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt: number
    _all: number
  }


  export type PlaygroundResponseAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
  }

  export type PlaygroundResponseSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
  }

  export type PlaygroundResponseMinAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    historyId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
  }

  export type PlaygroundResponseMaxAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    historyId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
  }

  export type PlaygroundResponseCountAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    historyId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
    _all?: true
  }

  export type PlaygroundResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaygroundResponse to aggregate.
     */
    where?: PlaygroundResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundResponses to fetch.
     */
    orderBy?: PlaygroundResponseOrderByWithRelationInput | PlaygroundResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaygroundResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaygroundResponses
    **/
    _count?: true | PlaygroundResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaygroundResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaygroundResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaygroundResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaygroundResponseMaxAggregateInputType
  }

  export type GetPlaygroundResponseAggregateType<T extends PlaygroundResponseAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaygroundResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaygroundResponse[P]>
      : GetScalarType<T[P], AggregatePlaygroundResponse[P]>
  }




  export type PlaygroundResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaygroundResponseWhereInput
    orderBy?: PlaygroundResponseOrderByWithAggregationInput | PlaygroundResponseOrderByWithAggregationInput[]
    by: PlaygroundResponseScalarFieldEnum[] | PlaygroundResponseScalarFieldEnum
    having?: PlaygroundResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaygroundResponseCountAggregateInputType | true
    _avg?: PlaygroundResponseAvgAggregateInputType
    _sum?: PlaygroundResponseSumAggregateInputType
    _min?: PlaygroundResponseMinAggregateInputType
    _max?: PlaygroundResponseMaxAggregateInputType
  }

  export type PlaygroundResponseGroupByOutputType = {
    id: string
    modelId: string
    text: string
    historyId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt: Date
    _count: PlaygroundResponseCountAggregateOutputType | null
    _avg: PlaygroundResponseAvgAggregateOutputType | null
    _sum: PlaygroundResponseSumAggregateOutputType | null
    _min: PlaygroundResponseMinAggregateOutputType | null
    _max: PlaygroundResponseMaxAggregateOutputType | null
  }

  type GetPlaygroundResponseGroupByPayload<T extends PlaygroundResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaygroundResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaygroundResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaygroundResponseGroupByOutputType[P]>
            : GetScalarType<T[P], PlaygroundResponseGroupByOutputType[P]>
        }
      >
    >


  export type PlaygroundResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    historyId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playgroundResponse"]>

  export type PlaygroundResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    historyId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playgroundResponse"]>

  export type PlaygroundResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    historyId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playgroundResponse"]>

  export type PlaygroundResponseSelectScalar = {
    id?: boolean
    modelId?: boolean
    text?: boolean
    historyId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
  }

  export type PlaygroundResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "text" | "historyId" | "promptTokens" | "completionTokens" | "totalTokens" | "responseTime" | "estimatedCost" | "createdAt", ExtArgs["result"]["playgroundResponse"]>
  export type PlaygroundResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }
  export type PlaygroundResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }
  export type PlaygroundResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | PlaygroundHistoryDefaultArgs<ExtArgs>
  }

  export type $PlaygroundResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaygroundResponse"
    objects: {
      history: Prisma.$PlaygroundHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelId: string
      text: string
      historyId: string
      promptTokens: number
      completionTokens: number
      totalTokens: number
      responseTime: number
      estimatedCost: number
      createdAt: Date
    }, ExtArgs["result"]["playgroundResponse"]>
    composites: {}
  }

  type PlaygroundResponseGetPayload<S extends boolean | null | undefined | PlaygroundResponseDefaultArgs> = $Result.GetResult<Prisma.$PlaygroundResponsePayload, S>

  type PlaygroundResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaygroundResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaygroundResponseCountAggregateInputType | true
    }

  export interface PlaygroundResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaygroundResponse'], meta: { name: 'PlaygroundResponse' } }
    /**
     * Find zero or one PlaygroundResponse that matches the filter.
     * @param {PlaygroundResponseFindUniqueArgs} args - Arguments to find a PlaygroundResponse
     * @example
     * // Get one PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaygroundResponseFindUniqueArgs>(args: SelectSubset<T, PlaygroundResponseFindUniqueArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlaygroundResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaygroundResponseFindUniqueOrThrowArgs} args - Arguments to find a PlaygroundResponse
     * @example
     * // Get one PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaygroundResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaygroundResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaygroundResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseFindFirstArgs} args - Arguments to find a PlaygroundResponse
     * @example
     * // Get one PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaygroundResponseFindFirstArgs>(args?: SelectSubset<T, PlaygroundResponseFindFirstArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlaygroundResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseFindFirstOrThrowArgs} args - Arguments to find a PlaygroundResponse
     * @example
     * // Get one PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaygroundResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaygroundResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlaygroundResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaygroundResponses
     * const playgroundResponses = await prisma.playgroundResponse.findMany()
     * 
     * // Get first 10 PlaygroundResponses
     * const playgroundResponses = await prisma.playgroundResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playgroundResponseWithIdOnly = await prisma.playgroundResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaygroundResponseFindManyArgs>(args?: SelectSubset<T, PlaygroundResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlaygroundResponse.
     * @param {PlaygroundResponseCreateArgs} args - Arguments to create a PlaygroundResponse.
     * @example
     * // Create one PlaygroundResponse
     * const PlaygroundResponse = await prisma.playgroundResponse.create({
     *   data: {
     *     // ... data to create a PlaygroundResponse
     *   }
     * })
     * 
     */
    create<T extends PlaygroundResponseCreateArgs>(args: SelectSubset<T, PlaygroundResponseCreateArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlaygroundResponses.
     * @param {PlaygroundResponseCreateManyArgs} args - Arguments to create many PlaygroundResponses.
     * @example
     * // Create many PlaygroundResponses
     * const playgroundResponse = await prisma.playgroundResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaygroundResponseCreateManyArgs>(args?: SelectSubset<T, PlaygroundResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlaygroundResponses and returns the data saved in the database.
     * @param {PlaygroundResponseCreateManyAndReturnArgs} args - Arguments to create many PlaygroundResponses.
     * @example
     * // Create many PlaygroundResponses
     * const playgroundResponse = await prisma.playgroundResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlaygroundResponses and only return the `id`
     * const playgroundResponseWithIdOnly = await prisma.playgroundResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaygroundResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaygroundResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlaygroundResponse.
     * @param {PlaygroundResponseDeleteArgs} args - Arguments to delete one PlaygroundResponse.
     * @example
     * // Delete one PlaygroundResponse
     * const PlaygroundResponse = await prisma.playgroundResponse.delete({
     *   where: {
     *     // ... filter to delete one PlaygroundResponse
     *   }
     * })
     * 
     */
    delete<T extends PlaygroundResponseDeleteArgs>(args: SelectSubset<T, PlaygroundResponseDeleteArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlaygroundResponse.
     * @param {PlaygroundResponseUpdateArgs} args - Arguments to update one PlaygroundResponse.
     * @example
     * // Update one PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaygroundResponseUpdateArgs>(args: SelectSubset<T, PlaygroundResponseUpdateArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlaygroundResponses.
     * @param {PlaygroundResponseDeleteManyArgs} args - Arguments to filter PlaygroundResponses to delete.
     * @example
     * // Delete a few PlaygroundResponses
     * const { count } = await prisma.playgroundResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaygroundResponseDeleteManyArgs>(args?: SelectSubset<T, PlaygroundResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaygroundResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaygroundResponses
     * const playgroundResponse = await prisma.playgroundResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaygroundResponseUpdateManyArgs>(args: SelectSubset<T, PlaygroundResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaygroundResponses and returns the data updated in the database.
     * @param {PlaygroundResponseUpdateManyAndReturnArgs} args - Arguments to update many PlaygroundResponses.
     * @example
     * // Update many PlaygroundResponses
     * const playgroundResponse = await prisma.playgroundResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlaygroundResponses and only return the `id`
     * const playgroundResponseWithIdOnly = await prisma.playgroundResponse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlaygroundResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaygroundResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlaygroundResponse.
     * @param {PlaygroundResponseUpsertArgs} args - Arguments to update or create a PlaygroundResponse.
     * @example
     * // Update or create a PlaygroundResponse
     * const playgroundResponse = await prisma.playgroundResponse.upsert({
     *   create: {
     *     // ... data to create a PlaygroundResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaygroundResponse we want to update
     *   }
     * })
     */
    upsert<T extends PlaygroundResponseUpsertArgs>(args: SelectSubset<T, PlaygroundResponseUpsertArgs<ExtArgs>>): Prisma__PlaygroundResponseClient<$Result.GetResult<Prisma.$PlaygroundResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlaygroundResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseCountArgs} args - Arguments to filter PlaygroundResponses to count.
     * @example
     * // Count the number of PlaygroundResponses
     * const count = await prisma.playgroundResponse.count({
     *   where: {
     *     // ... the filter for the PlaygroundResponses we want to count
     *   }
     * })
    **/
    count<T extends PlaygroundResponseCountArgs>(
      args?: Subset<T, PlaygroundResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaygroundResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaygroundResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaygroundResponseAggregateArgs>(args: Subset<T, PlaygroundResponseAggregateArgs>): Prisma.PrismaPromise<GetPlaygroundResponseAggregateType<T>>

    /**
     * Group by PlaygroundResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaygroundResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaygroundResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaygroundResponseGroupByArgs['orderBy'] }
        : { orderBy?: PlaygroundResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaygroundResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaygroundResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaygroundResponse model
   */
  readonly fields: PlaygroundResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaygroundResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaygroundResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends PlaygroundHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaygroundHistoryDefaultArgs<ExtArgs>>): Prisma__PlaygroundHistoryClient<$Result.GetResult<Prisma.$PlaygroundHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlaygroundResponse model
   */
  interface PlaygroundResponseFieldRefs {
    readonly id: FieldRef<"PlaygroundResponse", 'String'>
    readonly modelId: FieldRef<"PlaygroundResponse", 'String'>
    readonly text: FieldRef<"PlaygroundResponse", 'String'>
    readonly historyId: FieldRef<"PlaygroundResponse", 'String'>
    readonly promptTokens: FieldRef<"PlaygroundResponse", 'Int'>
    readonly completionTokens: FieldRef<"PlaygroundResponse", 'Int'>
    readonly totalTokens: FieldRef<"PlaygroundResponse", 'Int'>
    readonly responseTime: FieldRef<"PlaygroundResponse", 'Float'>
    readonly estimatedCost: FieldRef<"PlaygroundResponse", 'Float'>
    readonly createdAt: FieldRef<"PlaygroundResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlaygroundResponse findUnique
   */
  export type PlaygroundResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundResponse to fetch.
     */
    where: PlaygroundResponseWhereUniqueInput
  }

  /**
   * PlaygroundResponse findUniqueOrThrow
   */
  export type PlaygroundResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundResponse to fetch.
     */
    where: PlaygroundResponseWhereUniqueInput
  }

  /**
   * PlaygroundResponse findFirst
   */
  export type PlaygroundResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundResponse to fetch.
     */
    where?: PlaygroundResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundResponses to fetch.
     */
    orderBy?: PlaygroundResponseOrderByWithRelationInput | PlaygroundResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaygroundResponses.
     */
    cursor?: PlaygroundResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaygroundResponses.
     */
    distinct?: PlaygroundResponseScalarFieldEnum | PlaygroundResponseScalarFieldEnum[]
  }

  /**
   * PlaygroundResponse findFirstOrThrow
   */
  export type PlaygroundResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundResponse to fetch.
     */
    where?: PlaygroundResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundResponses to fetch.
     */
    orderBy?: PlaygroundResponseOrderByWithRelationInput | PlaygroundResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaygroundResponses.
     */
    cursor?: PlaygroundResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaygroundResponses.
     */
    distinct?: PlaygroundResponseScalarFieldEnum | PlaygroundResponseScalarFieldEnum[]
  }

  /**
   * PlaygroundResponse findMany
   */
  export type PlaygroundResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter, which PlaygroundResponses to fetch.
     */
    where?: PlaygroundResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaygroundResponses to fetch.
     */
    orderBy?: PlaygroundResponseOrderByWithRelationInput | PlaygroundResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaygroundResponses.
     */
    cursor?: PlaygroundResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaygroundResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaygroundResponses.
     */
    skip?: number
    distinct?: PlaygroundResponseScalarFieldEnum | PlaygroundResponseScalarFieldEnum[]
  }

  /**
   * PlaygroundResponse create
   */
  export type PlaygroundResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaygroundResponse.
     */
    data: XOR<PlaygroundResponseCreateInput, PlaygroundResponseUncheckedCreateInput>
  }

  /**
   * PlaygroundResponse createMany
   */
  export type PlaygroundResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaygroundResponses.
     */
    data: PlaygroundResponseCreateManyInput | PlaygroundResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlaygroundResponse createManyAndReturn
   */
  export type PlaygroundResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * The data used to create many PlaygroundResponses.
     */
    data: PlaygroundResponseCreateManyInput | PlaygroundResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaygroundResponse update
   */
  export type PlaygroundResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaygroundResponse.
     */
    data: XOR<PlaygroundResponseUpdateInput, PlaygroundResponseUncheckedUpdateInput>
    /**
     * Choose, which PlaygroundResponse to update.
     */
    where: PlaygroundResponseWhereUniqueInput
  }

  /**
   * PlaygroundResponse updateMany
   */
  export type PlaygroundResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaygroundResponses.
     */
    data: XOR<PlaygroundResponseUpdateManyMutationInput, PlaygroundResponseUncheckedUpdateManyInput>
    /**
     * Filter which PlaygroundResponses to update
     */
    where?: PlaygroundResponseWhereInput
    /**
     * Limit how many PlaygroundResponses to update.
     */
    limit?: number
  }

  /**
   * PlaygroundResponse updateManyAndReturn
   */
  export type PlaygroundResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * The data used to update PlaygroundResponses.
     */
    data: XOR<PlaygroundResponseUpdateManyMutationInput, PlaygroundResponseUncheckedUpdateManyInput>
    /**
     * Filter which PlaygroundResponses to update
     */
    where?: PlaygroundResponseWhereInput
    /**
     * Limit how many PlaygroundResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlaygroundResponse upsert
   */
  export type PlaygroundResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaygroundResponse to update in case it exists.
     */
    where: PlaygroundResponseWhereUniqueInput
    /**
     * In case the PlaygroundResponse found by the `where` argument doesn't exist, create a new PlaygroundResponse with this data.
     */
    create: XOR<PlaygroundResponseCreateInput, PlaygroundResponseUncheckedCreateInput>
    /**
     * In case the PlaygroundResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaygroundResponseUpdateInput, PlaygroundResponseUncheckedUpdateInput>
  }

  /**
   * PlaygroundResponse delete
   */
  export type PlaygroundResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
    /**
     * Filter which PlaygroundResponse to delete.
     */
    where: PlaygroundResponseWhereUniqueInput
  }

  /**
   * PlaygroundResponse deleteMany
   */
  export type PlaygroundResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaygroundResponses to delete
     */
    where?: PlaygroundResponseWhereInput
    /**
     * Limit how many PlaygroundResponses to delete.
     */
    limit?: number
  }

  /**
   * PlaygroundResponse without action
   */
  export type PlaygroundResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaygroundResponse
     */
    select?: PlaygroundResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlaygroundResponse
     */
    omit?: PlaygroundResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaygroundResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const PlaygroundHistoryScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    timestamp: 'timestamp'
  };

  export type PlaygroundHistoryScalarFieldEnum = (typeof PlaygroundHistoryScalarFieldEnum)[keyof typeof PlaygroundHistoryScalarFieldEnum]


  export const PlaygroundResponseScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    text: 'text',
    historyId: 'historyId',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    totalTokens: 'totalTokens',
    responseTime: 'responseTime',
    estimatedCost: 'estimatedCost',
    createdAt: 'createdAt'
  };

  export type PlaygroundResponseScalarFieldEnum = (typeof PlaygroundResponseScalarFieldEnum)[keyof typeof PlaygroundResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PlaygroundHistoryWhereInput = {
    AND?: PlaygroundHistoryWhereInput | PlaygroundHistoryWhereInput[]
    OR?: PlaygroundHistoryWhereInput[]
    NOT?: PlaygroundHistoryWhereInput | PlaygroundHistoryWhereInput[]
    id?: StringFilter<"PlaygroundHistory"> | string
    prompt?: StringFilter<"PlaygroundHistory"> | string
    timestamp?: DateTimeFilter<"PlaygroundHistory"> | Date | string
    responses?: PlaygroundResponseListRelationFilter
  }

  export type PlaygroundHistoryOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    responses?: PlaygroundResponseOrderByRelationAggregateInput
  }

  export type PlaygroundHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaygroundHistoryWhereInput | PlaygroundHistoryWhereInput[]
    OR?: PlaygroundHistoryWhereInput[]
    NOT?: PlaygroundHistoryWhereInput | PlaygroundHistoryWhereInput[]
    prompt?: StringFilter<"PlaygroundHistory"> | string
    timestamp?: DateTimeFilter<"PlaygroundHistory"> | Date | string
    responses?: PlaygroundResponseListRelationFilter
  }, "id">

  export type PlaygroundHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    _count?: PlaygroundHistoryCountOrderByAggregateInput
    _max?: PlaygroundHistoryMaxOrderByAggregateInput
    _min?: PlaygroundHistoryMinOrderByAggregateInput
  }

  export type PlaygroundHistoryScalarWhereWithAggregatesInput = {
    AND?: PlaygroundHistoryScalarWhereWithAggregatesInput | PlaygroundHistoryScalarWhereWithAggregatesInput[]
    OR?: PlaygroundHistoryScalarWhereWithAggregatesInput[]
    NOT?: PlaygroundHistoryScalarWhereWithAggregatesInput | PlaygroundHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaygroundHistory"> | string
    prompt?: StringWithAggregatesFilter<"PlaygroundHistory"> | string
    timestamp?: DateTimeWithAggregatesFilter<"PlaygroundHistory"> | Date | string
  }

  export type PlaygroundResponseWhereInput = {
    AND?: PlaygroundResponseWhereInput | PlaygroundResponseWhereInput[]
    OR?: PlaygroundResponseWhereInput[]
    NOT?: PlaygroundResponseWhereInput | PlaygroundResponseWhereInput[]
    id?: StringFilter<"PlaygroundResponse"> | string
    modelId?: StringFilter<"PlaygroundResponse"> | string
    text?: StringFilter<"PlaygroundResponse"> | string
    historyId?: StringFilter<"PlaygroundResponse"> | string
    promptTokens?: IntFilter<"PlaygroundResponse"> | number
    completionTokens?: IntFilter<"PlaygroundResponse"> | number
    totalTokens?: IntFilter<"PlaygroundResponse"> | number
    responseTime?: FloatFilter<"PlaygroundResponse"> | number
    estimatedCost?: FloatFilter<"PlaygroundResponse"> | number
    createdAt?: DateTimeFilter<"PlaygroundResponse"> | Date | string
    history?: XOR<PlaygroundHistoryScalarRelationFilter, PlaygroundHistoryWhereInput>
  }

  export type PlaygroundResponseOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    historyId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
    history?: PlaygroundHistoryOrderByWithRelationInput
  }

  export type PlaygroundResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlaygroundResponseWhereInput | PlaygroundResponseWhereInput[]
    OR?: PlaygroundResponseWhereInput[]
    NOT?: PlaygroundResponseWhereInput | PlaygroundResponseWhereInput[]
    modelId?: StringFilter<"PlaygroundResponse"> | string
    text?: StringFilter<"PlaygroundResponse"> | string
    historyId?: StringFilter<"PlaygroundResponse"> | string
    promptTokens?: IntFilter<"PlaygroundResponse"> | number
    completionTokens?: IntFilter<"PlaygroundResponse"> | number
    totalTokens?: IntFilter<"PlaygroundResponse"> | number
    responseTime?: FloatFilter<"PlaygroundResponse"> | number
    estimatedCost?: FloatFilter<"PlaygroundResponse"> | number
    createdAt?: DateTimeFilter<"PlaygroundResponse"> | Date | string
    history?: XOR<PlaygroundHistoryScalarRelationFilter, PlaygroundHistoryWhereInput>
  }, "id">

  export type PlaygroundResponseOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    historyId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
    _count?: PlaygroundResponseCountOrderByAggregateInput
    _avg?: PlaygroundResponseAvgOrderByAggregateInput
    _max?: PlaygroundResponseMaxOrderByAggregateInput
    _min?: PlaygroundResponseMinOrderByAggregateInput
    _sum?: PlaygroundResponseSumOrderByAggregateInput
  }

  export type PlaygroundResponseScalarWhereWithAggregatesInput = {
    AND?: PlaygroundResponseScalarWhereWithAggregatesInput | PlaygroundResponseScalarWhereWithAggregatesInput[]
    OR?: PlaygroundResponseScalarWhereWithAggregatesInput[]
    NOT?: PlaygroundResponseScalarWhereWithAggregatesInput | PlaygroundResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaygroundResponse"> | string
    modelId?: StringWithAggregatesFilter<"PlaygroundResponse"> | string
    text?: StringWithAggregatesFilter<"PlaygroundResponse"> | string
    historyId?: StringWithAggregatesFilter<"PlaygroundResponse"> | string
    promptTokens?: IntWithAggregatesFilter<"PlaygroundResponse"> | number
    completionTokens?: IntWithAggregatesFilter<"PlaygroundResponse"> | number
    totalTokens?: IntWithAggregatesFilter<"PlaygroundResponse"> | number
    responseTime?: FloatWithAggregatesFilter<"PlaygroundResponse"> | number
    estimatedCost?: FloatWithAggregatesFilter<"PlaygroundResponse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlaygroundResponse"> | Date | string
  }

  export type PlaygroundHistoryCreateInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    responses?: PlaygroundResponseCreateNestedManyWithoutHistoryInput
  }

  export type PlaygroundHistoryUncheckedCreateInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    responses?: PlaygroundResponseUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type PlaygroundHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PlaygroundResponseUpdateManyWithoutHistoryNestedInput
  }

  export type PlaygroundHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: PlaygroundResponseUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type PlaygroundHistoryCreateManyInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
  }

  export type PlaygroundHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseCreateInput = {
    id?: string
    modelId: string
    text: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
    history: PlaygroundHistoryCreateNestedOneWithoutResponsesInput
  }

  export type PlaygroundResponseUncheckedCreateInput = {
    id?: string
    modelId: string
    text: string
    historyId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PlaygroundResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: PlaygroundHistoryUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type PlaygroundResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseCreateManyInput = {
    id?: string
    modelId: string
    text: string
    historyId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PlaygroundResponseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    historyId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PlaygroundResponseListRelationFilter = {
    every?: PlaygroundResponseWhereInput
    some?: PlaygroundResponseWhereInput
    none?: PlaygroundResponseWhereInput
  }

  export type PlaygroundResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaygroundHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
  }

  export type PlaygroundHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
  }

  export type PlaygroundHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PlaygroundHistoryScalarRelationFilter = {
    is?: PlaygroundHistoryWhereInput
    isNot?: PlaygroundHistoryWhereInput
  }

  export type PlaygroundResponseCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    historyId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaygroundResponseAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
  }

  export type PlaygroundResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    historyId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaygroundResponseMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    historyId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PlaygroundResponseSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlaygroundResponseCreateNestedManyWithoutHistoryInput = {
    create?: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput> | PlaygroundResponseCreateWithoutHistoryInput[] | PlaygroundResponseUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PlaygroundResponseCreateOrConnectWithoutHistoryInput | PlaygroundResponseCreateOrConnectWithoutHistoryInput[]
    createMany?: PlaygroundResponseCreateManyHistoryInputEnvelope
    connect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
  }

  export type PlaygroundResponseUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput> | PlaygroundResponseCreateWithoutHistoryInput[] | PlaygroundResponseUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PlaygroundResponseCreateOrConnectWithoutHistoryInput | PlaygroundResponseCreateOrConnectWithoutHistoryInput[]
    createMany?: PlaygroundResponseCreateManyHistoryInputEnvelope
    connect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlaygroundResponseUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput> | PlaygroundResponseCreateWithoutHistoryInput[] | PlaygroundResponseUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PlaygroundResponseCreateOrConnectWithoutHistoryInput | PlaygroundResponseCreateOrConnectWithoutHistoryInput[]
    upsert?: PlaygroundResponseUpsertWithWhereUniqueWithoutHistoryInput | PlaygroundResponseUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: PlaygroundResponseCreateManyHistoryInputEnvelope
    set?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    disconnect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    delete?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    connect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    update?: PlaygroundResponseUpdateWithWhereUniqueWithoutHistoryInput | PlaygroundResponseUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: PlaygroundResponseUpdateManyWithWhereWithoutHistoryInput | PlaygroundResponseUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: PlaygroundResponseScalarWhereInput | PlaygroundResponseScalarWhereInput[]
  }

  export type PlaygroundResponseUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput> | PlaygroundResponseCreateWithoutHistoryInput[] | PlaygroundResponseUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: PlaygroundResponseCreateOrConnectWithoutHistoryInput | PlaygroundResponseCreateOrConnectWithoutHistoryInput[]
    upsert?: PlaygroundResponseUpsertWithWhereUniqueWithoutHistoryInput | PlaygroundResponseUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: PlaygroundResponseCreateManyHistoryInputEnvelope
    set?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    disconnect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    delete?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    connect?: PlaygroundResponseWhereUniqueInput | PlaygroundResponseWhereUniqueInput[]
    update?: PlaygroundResponseUpdateWithWhereUniqueWithoutHistoryInput | PlaygroundResponseUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: PlaygroundResponseUpdateManyWithWhereWithoutHistoryInput | PlaygroundResponseUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: PlaygroundResponseScalarWhereInput | PlaygroundResponseScalarWhereInput[]
  }

  export type PlaygroundHistoryCreateNestedOneWithoutResponsesInput = {
    create?: XOR<PlaygroundHistoryCreateWithoutResponsesInput, PlaygroundHistoryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PlaygroundHistoryCreateOrConnectWithoutResponsesInput
    connect?: PlaygroundHistoryWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlaygroundHistoryUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<PlaygroundHistoryCreateWithoutResponsesInput, PlaygroundHistoryUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PlaygroundHistoryCreateOrConnectWithoutResponsesInput
    upsert?: PlaygroundHistoryUpsertWithoutResponsesInput
    connect?: PlaygroundHistoryWhereUniqueInput
    update?: XOR<XOR<PlaygroundHistoryUpdateToOneWithWhereWithoutResponsesInput, PlaygroundHistoryUpdateWithoutResponsesInput>, PlaygroundHistoryUncheckedUpdateWithoutResponsesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PlaygroundResponseCreateWithoutHistoryInput = {
    id?: string
    modelId: string
    text: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PlaygroundResponseUncheckedCreateWithoutHistoryInput = {
    id?: string
    modelId: string
    text: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PlaygroundResponseCreateOrConnectWithoutHistoryInput = {
    where: PlaygroundResponseWhereUniqueInput
    create: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput>
  }

  export type PlaygroundResponseCreateManyHistoryInputEnvelope = {
    data: PlaygroundResponseCreateManyHistoryInput | PlaygroundResponseCreateManyHistoryInput[]
    skipDuplicates?: boolean
  }

  export type PlaygroundResponseUpsertWithWhereUniqueWithoutHistoryInput = {
    where: PlaygroundResponseWhereUniqueInput
    update: XOR<PlaygroundResponseUpdateWithoutHistoryInput, PlaygroundResponseUncheckedUpdateWithoutHistoryInput>
    create: XOR<PlaygroundResponseCreateWithoutHistoryInput, PlaygroundResponseUncheckedCreateWithoutHistoryInput>
  }

  export type PlaygroundResponseUpdateWithWhereUniqueWithoutHistoryInput = {
    where: PlaygroundResponseWhereUniqueInput
    data: XOR<PlaygroundResponseUpdateWithoutHistoryInput, PlaygroundResponseUncheckedUpdateWithoutHistoryInput>
  }

  export type PlaygroundResponseUpdateManyWithWhereWithoutHistoryInput = {
    where: PlaygroundResponseScalarWhereInput
    data: XOR<PlaygroundResponseUpdateManyMutationInput, PlaygroundResponseUncheckedUpdateManyWithoutHistoryInput>
  }

  export type PlaygroundResponseScalarWhereInput = {
    AND?: PlaygroundResponseScalarWhereInput | PlaygroundResponseScalarWhereInput[]
    OR?: PlaygroundResponseScalarWhereInput[]
    NOT?: PlaygroundResponseScalarWhereInput | PlaygroundResponseScalarWhereInput[]
    id?: StringFilter<"PlaygroundResponse"> | string
    modelId?: StringFilter<"PlaygroundResponse"> | string
    text?: StringFilter<"PlaygroundResponse"> | string
    historyId?: StringFilter<"PlaygroundResponse"> | string
    promptTokens?: IntFilter<"PlaygroundResponse"> | number
    completionTokens?: IntFilter<"PlaygroundResponse"> | number
    totalTokens?: IntFilter<"PlaygroundResponse"> | number
    responseTime?: FloatFilter<"PlaygroundResponse"> | number
    estimatedCost?: FloatFilter<"PlaygroundResponse"> | number
    createdAt?: DateTimeFilter<"PlaygroundResponse"> | Date | string
  }

  export type PlaygroundHistoryCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
  }

  export type PlaygroundHistoryUncheckedCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
  }

  export type PlaygroundHistoryCreateOrConnectWithoutResponsesInput = {
    where: PlaygroundHistoryWhereUniqueInput
    create: XOR<PlaygroundHistoryCreateWithoutResponsesInput, PlaygroundHistoryUncheckedCreateWithoutResponsesInput>
  }

  export type PlaygroundHistoryUpsertWithoutResponsesInput = {
    update: XOR<PlaygroundHistoryUpdateWithoutResponsesInput, PlaygroundHistoryUncheckedUpdateWithoutResponsesInput>
    create: XOR<PlaygroundHistoryCreateWithoutResponsesInput, PlaygroundHistoryUncheckedCreateWithoutResponsesInput>
    where?: PlaygroundHistoryWhereInput
  }

  export type PlaygroundHistoryUpdateToOneWithWhereWithoutResponsesInput = {
    where?: PlaygroundHistoryWhereInput
    data: XOR<PlaygroundHistoryUpdateWithoutResponsesInput, PlaygroundHistoryUncheckedUpdateWithoutResponsesInput>
  }

  export type PlaygroundHistoryUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundHistoryUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseCreateManyHistoryInput = {
    id?: string
    modelId: string
    text: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PlaygroundResponseUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaygroundResponseUncheckedUpdateManyWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}