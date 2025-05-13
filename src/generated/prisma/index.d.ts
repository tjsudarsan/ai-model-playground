
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
 * Model Prompt
 * 
 */
export type Prompt = $Result.DefaultSelection<Prisma.$PromptPayload>
/**
 * Model PromptInputMessage
 * 
 */
export type PromptInputMessage = $Result.DefaultSelection<Prisma.$PromptInputMessagePayload>
/**
 * Model PromptResponse
 * 
 */
export type PromptResponse = $Result.DefaultSelection<Prisma.$PromptResponsePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Prompts
 * const prompts = await prisma.prompt.findMany()
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
   * // Fetch zero or more Prompts
   * const prompts = await prisma.prompt.findMany()
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
   * `prisma.prompt`: Exposes CRUD operations for the **Prompt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Prompts
    * const prompts = await prisma.prompt.findMany()
    * ```
    */
  get prompt(): Prisma.PromptDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptInputMessage`: Exposes CRUD operations for the **PromptInputMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptInputMessages
    * const promptInputMessages = await prisma.promptInputMessage.findMany()
    * ```
    */
  get promptInputMessage(): Prisma.PromptInputMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promptResponse`: Exposes CRUD operations for the **PromptResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PromptResponses
    * const promptResponses = await prisma.promptResponse.findMany()
    * ```
    */
  get promptResponse(): Prisma.PromptResponseDelegate<ExtArgs, ClientOptions>;
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
    Prompt: 'Prompt',
    PromptInputMessage: 'PromptInputMessage',
    PromptResponse: 'PromptResponse'
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
      modelProps: "prompt" | "promptInputMessage" | "promptResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Prompt: {
        payload: Prisma.$PromptPayload<ExtArgs>
        fields: Prisma.PromptFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findFirst: {
            args: Prisma.PromptFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          findMany: {
            args: Prisma.PromptFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          create: {
            args: Prisma.PromptCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          createMany: {
            args: Prisma.PromptCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          delete: {
            args: Prisma.PromptDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          update: {
            args: Prisma.PromptUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          deleteMany: {
            args: Prisma.PromptDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>[]
          }
          upsert: {
            args: Prisma.PromptUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptPayload>
          }
          aggregate: {
            args: Prisma.PromptAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrompt>
          }
          groupBy: {
            args: Prisma.PromptGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptCountArgs<ExtArgs>
            result: $Utils.Optional<PromptCountAggregateOutputType> | number
          }
        }
      }
      PromptInputMessage: {
        payload: Prisma.$PromptInputMessagePayload<ExtArgs>
        fields: Prisma.PromptInputMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptInputMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptInputMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          findFirst: {
            args: Prisma.PromptInputMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptInputMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          findMany: {
            args: Prisma.PromptInputMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>[]
          }
          create: {
            args: Prisma.PromptInputMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          createMany: {
            args: Prisma.PromptInputMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptInputMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>[]
          }
          delete: {
            args: Prisma.PromptInputMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          update: {
            args: Prisma.PromptInputMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          deleteMany: {
            args: Prisma.PromptInputMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptInputMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptInputMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>[]
          }
          upsert: {
            args: Prisma.PromptInputMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptInputMessagePayload>
          }
          aggregate: {
            args: Prisma.PromptInputMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptInputMessage>
          }
          groupBy: {
            args: Prisma.PromptInputMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptInputMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptInputMessageCountArgs<ExtArgs>
            result: $Utils.Optional<PromptInputMessageCountAggregateOutputType> | number
          }
        }
      }
      PromptResponse: {
        payload: Prisma.$PromptResponsePayload<ExtArgs>
        fields: Prisma.PromptResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromptResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromptResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findFirst: {
            args: Prisma.PromptResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromptResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          findMany: {
            args: Prisma.PromptResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          create: {
            args: Prisma.PromptResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          createMany: {
            args: Prisma.PromptResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromptResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          delete: {
            args: Prisma.PromptResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          update: {
            args: Prisma.PromptResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          deleteMany: {
            args: Prisma.PromptResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromptResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromptResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>[]
          }
          upsert: {
            args: Prisma.PromptResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromptResponsePayload>
          }
          aggregate: {
            args: Prisma.PromptResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromptResponse>
          }
          groupBy: {
            args: Prisma.PromptResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromptResponseCountArgs<ExtArgs>
            result: $Utils.Optional<PromptResponseCountAggregateOutputType> | number
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
    prompt?: PromptOmit
    promptInputMessage?: PromptInputMessageOmit
    promptResponse?: PromptResponseOmit
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
   * Count Type PromptCountOutputType
   */

  export type PromptCountOutputType = {
    messages: number
    responses: number
  }

  export type PromptCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | PromptCountOutputTypeCountMessagesArgs
    responses?: boolean | PromptCountOutputTypeCountResponsesArgs
  }

  // Custom InputTypes
  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptCountOutputType
     */
    select?: PromptCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptInputMessageWhereInput
  }

  /**
   * PromptCountOutputType without action
   */
  export type PromptCountOutputTypeCountResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Prompt
   */

  export type AggregatePrompt = {
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  export type PromptAvgAggregateOutputType = {
    temperature: number | null
    maxTokens: number | null
    topP: number | null
    frequencyPenalty: number | null
    presencePenalty: number | null
  }

  export type PromptSumAggregateOutputType = {
    temperature: number | null
    maxTokens: number | null
    topP: number | null
    frequencyPenalty: number | null
    presencePenalty: number | null
  }

  export type PromptMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    timestamp: Date | null
    temperature: number | null
    maxTokens: number | null
    topP: number | null
    frequencyPenalty: number | null
    presencePenalty: number | null
  }

  export type PromptMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    timestamp: Date | null
    temperature: number | null
    maxTokens: number | null
    topP: number | null
    frequencyPenalty: number | null
    presencePenalty: number | null
  }

  export type PromptCountAggregateOutputType = {
    id: number
    prompt: number
    timestamp: number
    temperature: number
    maxTokens: number
    topP: number
    frequencyPenalty: number
    presencePenalty: number
    _all: number
  }


  export type PromptAvgAggregateInputType = {
    temperature?: true
    maxTokens?: true
    topP?: true
    frequencyPenalty?: true
    presencePenalty?: true
  }

  export type PromptSumAggregateInputType = {
    temperature?: true
    maxTokens?: true
    topP?: true
    frequencyPenalty?: true
    presencePenalty?: true
  }

  export type PromptMinAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
    temperature?: true
    maxTokens?: true
    topP?: true
    frequencyPenalty?: true
    presencePenalty?: true
  }

  export type PromptMaxAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
    temperature?: true
    maxTokens?: true
    topP?: true
    frequencyPenalty?: true
    presencePenalty?: true
  }

  export type PromptCountAggregateInputType = {
    id?: true
    prompt?: true
    timestamp?: true
    temperature?: true
    maxTokens?: true
    topP?: true
    frequencyPenalty?: true
    presencePenalty?: true
    _all?: true
  }

  export type PromptAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompt to aggregate.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Prompts
    **/
    _count?: true | PromptCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptMaxAggregateInputType
  }

  export type GetPromptAggregateType<T extends PromptAggregateArgs> = {
        [P in keyof T & keyof AggregatePrompt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrompt[P]>
      : GetScalarType<T[P], AggregatePrompt[P]>
  }




  export type PromptGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptWhereInput
    orderBy?: PromptOrderByWithAggregationInput | PromptOrderByWithAggregationInput[]
    by: PromptScalarFieldEnum[] | PromptScalarFieldEnum
    having?: PromptScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptCountAggregateInputType | true
    _avg?: PromptAvgAggregateInputType
    _sum?: PromptSumAggregateInputType
    _min?: PromptMinAggregateInputType
    _max?: PromptMaxAggregateInputType
  }

  export type PromptGroupByOutputType = {
    id: string
    prompt: string
    timestamp: Date
    temperature: number | null
    maxTokens: number | null
    topP: number | null
    frequencyPenalty: number | null
    presencePenalty: number | null
    _count: PromptCountAggregateOutputType | null
    _avg: PromptAvgAggregateOutputType | null
    _sum: PromptSumAggregateOutputType | null
    _min: PromptMinAggregateOutputType | null
    _max: PromptMaxAggregateOutputType | null
  }

  type GetPromptGroupByPayload<T extends PromptGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptGroupByOutputType[P]>
            : GetScalarType<T[P], PromptGroupByOutputType[P]>
        }
      >
    >


  export type PromptSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
    temperature?: boolean
    maxTokens?: boolean
    topP?: boolean
    frequencyPenalty?: boolean
    presencePenalty?: boolean
    messages?: boolean | Prompt$messagesArgs<ExtArgs>
    responses?: boolean | Prompt$responsesArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
    temperature?: boolean
    maxTokens?: boolean
    topP?: boolean
    frequencyPenalty?: boolean
    presencePenalty?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
    temperature?: boolean
    maxTokens?: boolean
    topP?: boolean
    frequencyPenalty?: boolean
    presencePenalty?: boolean
  }, ExtArgs["result"]["prompt"]>

  export type PromptSelectScalar = {
    id?: boolean
    prompt?: boolean
    timestamp?: boolean
    temperature?: boolean
    maxTokens?: boolean
    topP?: boolean
    frequencyPenalty?: boolean
    presencePenalty?: boolean
  }

  export type PromptOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "timestamp" | "temperature" | "maxTokens" | "topP" | "frequencyPenalty" | "presencePenalty", ExtArgs["result"]["prompt"]>
  export type PromptInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Prompt$messagesArgs<ExtArgs>
    responses?: boolean | Prompt$responsesArgs<ExtArgs>
    _count?: boolean | PromptCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PromptIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PromptIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PromptPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prompt"
    objects: {
      messages: Prisma.$PromptInputMessagePayload<ExtArgs>[]
      responses: Prisma.$PromptResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      timestamp: Date
      temperature: number | null
      maxTokens: number | null
      topP: number | null
      frequencyPenalty: number | null
      presencePenalty: number | null
    }, ExtArgs["result"]["prompt"]>
    composites: {}
  }

  type PromptGetPayload<S extends boolean | null | undefined | PromptDefaultArgs> = $Result.GetResult<Prisma.$PromptPayload, S>

  type PromptCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptCountAggregateInputType | true
    }

  export interface PromptDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prompt'], meta: { name: 'Prompt' } }
    /**
     * Find zero or one Prompt that matches the filter.
     * @param {PromptFindUniqueArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptFindUniqueArgs>(args: SelectSubset<T, PromptFindUniqueArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prompt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptFindUniqueOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptFindFirstArgs>(args?: SelectSubset<T, PromptFindFirstArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prompt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindFirstOrThrowArgs} args - Arguments to find a Prompt
     * @example
     * // Get one Prompt
     * const prompt = await prisma.prompt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Prompts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Prompts
     * const prompts = await prisma.prompt.findMany()
     * 
     * // Get first 10 Prompts
     * const prompts = await prisma.prompt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptWithIdOnly = await prisma.prompt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptFindManyArgs>(args?: SelectSubset<T, PromptFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prompt.
     * @param {PromptCreateArgs} args - Arguments to create a Prompt.
     * @example
     * // Create one Prompt
     * const Prompt = await prisma.prompt.create({
     *   data: {
     *     // ... data to create a Prompt
     *   }
     * })
     * 
     */
    create<T extends PromptCreateArgs>(args: SelectSubset<T, PromptCreateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Prompts.
     * @param {PromptCreateManyArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptCreateManyArgs>(args?: SelectSubset<T, PromptCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Prompts and returns the data saved in the database.
     * @param {PromptCreateManyAndReturnArgs} args - Arguments to create many Prompts.
     * @example
     * // Create many Prompts
     * const prompt = await prisma.prompt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Prompt.
     * @param {PromptDeleteArgs} args - Arguments to delete one Prompt.
     * @example
     * // Delete one Prompt
     * const Prompt = await prisma.prompt.delete({
     *   where: {
     *     // ... filter to delete one Prompt
     *   }
     * })
     * 
     */
    delete<T extends PromptDeleteArgs>(args: SelectSubset<T, PromptDeleteArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prompt.
     * @param {PromptUpdateArgs} args - Arguments to update one Prompt.
     * @example
     * // Update one Prompt
     * const prompt = await prisma.prompt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptUpdateArgs>(args: SelectSubset<T, PromptUpdateArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Prompts.
     * @param {PromptDeleteManyArgs} args - Arguments to filter Prompts to delete.
     * @example
     * // Delete a few Prompts
     * const { count } = await prisma.prompt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptDeleteManyArgs>(args?: SelectSubset<T, PromptDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptUpdateManyArgs>(args: SelectSubset<T, PromptUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Prompts and returns the data updated in the database.
     * @param {PromptUpdateManyAndReturnArgs} args - Arguments to update many Prompts.
     * @example
     * // Update many Prompts
     * const prompt = await prisma.prompt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Prompts and only return the `id`
     * const promptWithIdOnly = await prisma.prompt.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Prompt.
     * @param {PromptUpsertArgs} args - Arguments to update or create a Prompt.
     * @example
     * // Update or create a Prompt
     * const prompt = await prisma.prompt.upsert({
     *   create: {
     *     // ... data to create a Prompt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prompt we want to update
     *   }
     * })
     */
    upsert<T extends PromptUpsertArgs>(args: SelectSubset<T, PromptUpsertArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Prompts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptCountArgs} args - Arguments to filter Prompts to count.
     * @example
     * // Count the number of Prompts
     * const count = await prisma.prompt.count({
     *   where: {
     *     // ... the filter for the Prompts we want to count
     *   }
     * })
    **/
    count<T extends PromptCountArgs>(
      args?: Subset<T, PromptCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptAggregateArgs>(args: Subset<T, PromptAggregateArgs>): Prisma.PrismaPromise<GetPromptAggregateType<T>>

    /**
     * Group by Prompt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptGroupByArgs} args - Group by arguments.
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
      T extends PromptGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptGroupByArgs['orderBy'] }
        : { orderBy?: PromptGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prompt model
   */
  readonly fields: PromptFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prompt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Prompt$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    responses<T extends Prompt$responsesArgs<ExtArgs> = {}>(args?: Subset<T, Prompt$responsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Prompt model
   */
  interface PromptFieldRefs {
    readonly id: FieldRef<"Prompt", 'String'>
    readonly prompt: FieldRef<"Prompt", 'String'>
    readonly timestamp: FieldRef<"Prompt", 'DateTime'>
    readonly temperature: FieldRef<"Prompt", 'Float'>
    readonly maxTokens: FieldRef<"Prompt", 'Int'>
    readonly topP: FieldRef<"Prompt", 'Float'>
    readonly frequencyPenalty: FieldRef<"Prompt", 'Float'>
    readonly presencePenalty: FieldRef<"Prompt", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Prompt findUnique
   */
  export type PromptFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findUniqueOrThrow
   */
  export type PromptFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt findFirst
   */
  export type PromptFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findFirstOrThrow
   */
  export type PromptFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompt to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Prompts.
     */
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt findMany
   */
  export type PromptFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter, which Prompts to fetch.
     */
    where?: PromptWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Prompts to fetch.
     */
    orderBy?: PromptOrderByWithRelationInput | PromptOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Prompts.
     */
    cursor?: PromptWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Prompts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Prompts.
     */
    skip?: number
    distinct?: PromptScalarFieldEnum | PromptScalarFieldEnum[]
  }

  /**
   * Prompt create
   */
  export type PromptCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to create a Prompt.
     */
    data: XOR<PromptCreateInput, PromptUncheckedCreateInput>
  }

  /**
   * Prompt createMany
   */
  export type PromptCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt createManyAndReturn
   */
  export type PromptCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to create many Prompts.
     */
    data: PromptCreateManyInput | PromptCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Prompt update
   */
  export type PromptUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The data needed to update a Prompt.
     */
    data: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
    /**
     * Choose, which Prompt to update.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt updateMany
   */
  export type PromptUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt updateManyAndReturn
   */
  export type PromptUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * The data used to update Prompts.
     */
    data: XOR<PromptUpdateManyMutationInput, PromptUncheckedUpdateManyInput>
    /**
     * Filter which Prompts to update
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to update.
     */
    limit?: number
  }

  /**
   * Prompt upsert
   */
  export type PromptUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * The filter to search for the Prompt to update in case it exists.
     */
    where: PromptWhereUniqueInput
    /**
     * In case the Prompt found by the `where` argument doesn't exist, create a new Prompt with this data.
     */
    create: XOR<PromptCreateInput, PromptUncheckedCreateInput>
    /**
     * In case the Prompt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptUpdateInput, PromptUncheckedUpdateInput>
  }

  /**
   * Prompt delete
   */
  export type PromptDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
    /**
     * Filter which Prompt to delete.
     */
    where: PromptWhereUniqueInput
  }

  /**
   * Prompt deleteMany
   */
  export type PromptDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prompts to delete
     */
    where?: PromptWhereInput
    /**
     * Limit how many Prompts to delete.
     */
    limit?: number
  }

  /**
   * Prompt.messages
   */
  export type Prompt$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    where?: PromptInputMessageWhereInput
    orderBy?: PromptInputMessageOrderByWithRelationInput | PromptInputMessageOrderByWithRelationInput[]
    cursor?: PromptInputMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptInputMessageScalarFieldEnum | PromptInputMessageScalarFieldEnum[]
  }

  /**
   * Prompt.responses
   */
  export type Prompt$responsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    cursor?: PromptResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * Prompt without action
   */
  export type PromptDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prompt
     */
    select?: PromptSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prompt
     */
    omit?: PromptOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInclude<ExtArgs> | null
  }


  /**
   * Model PromptInputMessage
   */

  export type AggregatePromptInputMessage = {
    _count: PromptInputMessageCountAggregateOutputType | null
    _avg: PromptInputMessageAvgAggregateOutputType | null
    _sum: PromptInputMessageSumAggregateOutputType | null
    _min: PromptInputMessageMinAggregateOutputType | null
    _max: PromptInputMessageMaxAggregateOutputType | null
  }

  export type PromptInputMessageAvgAggregateOutputType = {
    order: number | null
  }

  export type PromptInputMessageSumAggregateOutputType = {
    order: number | null
  }

  export type PromptInputMessageMinAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    promptId: string | null
    order: number | null
  }

  export type PromptInputMessageMaxAggregateOutputType = {
    id: string | null
    role: string | null
    content: string | null
    promptId: string | null
    order: number | null
  }

  export type PromptInputMessageCountAggregateOutputType = {
    id: number
    role: number
    content: number
    promptId: number
    order: number
    _all: number
  }


  export type PromptInputMessageAvgAggregateInputType = {
    order?: true
  }

  export type PromptInputMessageSumAggregateInputType = {
    order?: true
  }

  export type PromptInputMessageMinAggregateInputType = {
    id?: true
    role?: true
    content?: true
    promptId?: true
    order?: true
  }

  export type PromptInputMessageMaxAggregateInputType = {
    id?: true
    role?: true
    content?: true
    promptId?: true
    order?: true
  }

  export type PromptInputMessageCountAggregateInputType = {
    id?: true
    role?: true
    content?: true
    promptId?: true
    order?: true
    _all?: true
  }

  export type PromptInputMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptInputMessage to aggregate.
     */
    where?: PromptInputMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptInputMessages to fetch.
     */
    orderBy?: PromptInputMessageOrderByWithRelationInput | PromptInputMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptInputMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptInputMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptInputMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptInputMessages
    **/
    _count?: true | PromptInputMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptInputMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptInputMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptInputMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptInputMessageMaxAggregateInputType
  }

  export type GetPromptInputMessageAggregateType<T extends PromptInputMessageAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptInputMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptInputMessage[P]>
      : GetScalarType<T[P], AggregatePromptInputMessage[P]>
  }




  export type PromptInputMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptInputMessageWhereInput
    orderBy?: PromptInputMessageOrderByWithAggregationInput | PromptInputMessageOrderByWithAggregationInput[]
    by: PromptInputMessageScalarFieldEnum[] | PromptInputMessageScalarFieldEnum
    having?: PromptInputMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptInputMessageCountAggregateInputType | true
    _avg?: PromptInputMessageAvgAggregateInputType
    _sum?: PromptInputMessageSumAggregateInputType
    _min?: PromptInputMessageMinAggregateInputType
    _max?: PromptInputMessageMaxAggregateInputType
  }

  export type PromptInputMessageGroupByOutputType = {
    id: string
    role: string
    content: string
    promptId: string
    order: number
    _count: PromptInputMessageCountAggregateOutputType | null
    _avg: PromptInputMessageAvgAggregateOutputType | null
    _sum: PromptInputMessageSumAggregateOutputType | null
    _min: PromptInputMessageMinAggregateOutputType | null
    _max: PromptInputMessageMaxAggregateOutputType | null
  }

  type GetPromptInputMessageGroupByPayload<T extends PromptInputMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptInputMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptInputMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptInputMessageGroupByOutputType[P]>
            : GetScalarType<T[P], PromptInputMessageGroupByOutputType[P]>
        }
      >
    >


  export type PromptInputMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    promptId?: boolean
    order?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptInputMessage"]>

  export type PromptInputMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    promptId?: boolean
    order?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptInputMessage"]>

  export type PromptInputMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    content?: boolean
    promptId?: boolean
    order?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptInputMessage"]>

  export type PromptInputMessageSelectScalar = {
    id?: boolean
    role?: boolean
    content?: boolean
    promptId?: boolean
    order?: boolean
  }

  export type PromptInputMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "role" | "content" | "promptId" | "order", ExtArgs["result"]["promptInputMessage"]>
  export type PromptInputMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type PromptInputMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type PromptInputMessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }

  export type $PromptInputMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptInputMessage"
    objects: {
      prompt: Prisma.$PromptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
      content: string
      promptId: string
      order: number
    }, ExtArgs["result"]["promptInputMessage"]>
    composites: {}
  }

  type PromptInputMessageGetPayload<S extends boolean | null | undefined | PromptInputMessageDefaultArgs> = $Result.GetResult<Prisma.$PromptInputMessagePayload, S>

  type PromptInputMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptInputMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptInputMessageCountAggregateInputType | true
    }

  export interface PromptInputMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptInputMessage'], meta: { name: 'PromptInputMessage' } }
    /**
     * Find zero or one PromptInputMessage that matches the filter.
     * @param {PromptInputMessageFindUniqueArgs} args - Arguments to find a PromptInputMessage
     * @example
     * // Get one PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptInputMessageFindUniqueArgs>(args: SelectSubset<T, PromptInputMessageFindUniqueArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptInputMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptInputMessageFindUniqueOrThrowArgs} args - Arguments to find a PromptInputMessage
     * @example
     * // Get one PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptInputMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptInputMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptInputMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageFindFirstArgs} args - Arguments to find a PromptInputMessage
     * @example
     * // Get one PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptInputMessageFindFirstArgs>(args?: SelectSubset<T, PromptInputMessageFindFirstArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptInputMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageFindFirstOrThrowArgs} args - Arguments to find a PromptInputMessage
     * @example
     * // Get one PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptInputMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptInputMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptInputMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptInputMessages
     * const promptInputMessages = await prisma.promptInputMessage.findMany()
     * 
     * // Get first 10 PromptInputMessages
     * const promptInputMessages = await prisma.promptInputMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptInputMessageWithIdOnly = await prisma.promptInputMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptInputMessageFindManyArgs>(args?: SelectSubset<T, PromptInputMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptInputMessage.
     * @param {PromptInputMessageCreateArgs} args - Arguments to create a PromptInputMessage.
     * @example
     * // Create one PromptInputMessage
     * const PromptInputMessage = await prisma.promptInputMessage.create({
     *   data: {
     *     // ... data to create a PromptInputMessage
     *   }
     * })
     * 
     */
    create<T extends PromptInputMessageCreateArgs>(args: SelectSubset<T, PromptInputMessageCreateArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptInputMessages.
     * @param {PromptInputMessageCreateManyArgs} args - Arguments to create many PromptInputMessages.
     * @example
     * // Create many PromptInputMessages
     * const promptInputMessage = await prisma.promptInputMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptInputMessageCreateManyArgs>(args?: SelectSubset<T, PromptInputMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptInputMessages and returns the data saved in the database.
     * @param {PromptInputMessageCreateManyAndReturnArgs} args - Arguments to create many PromptInputMessages.
     * @example
     * // Create many PromptInputMessages
     * const promptInputMessage = await prisma.promptInputMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptInputMessages and only return the `id`
     * const promptInputMessageWithIdOnly = await prisma.promptInputMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptInputMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptInputMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptInputMessage.
     * @param {PromptInputMessageDeleteArgs} args - Arguments to delete one PromptInputMessage.
     * @example
     * // Delete one PromptInputMessage
     * const PromptInputMessage = await prisma.promptInputMessage.delete({
     *   where: {
     *     // ... filter to delete one PromptInputMessage
     *   }
     * })
     * 
     */
    delete<T extends PromptInputMessageDeleteArgs>(args: SelectSubset<T, PromptInputMessageDeleteArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptInputMessage.
     * @param {PromptInputMessageUpdateArgs} args - Arguments to update one PromptInputMessage.
     * @example
     * // Update one PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptInputMessageUpdateArgs>(args: SelectSubset<T, PromptInputMessageUpdateArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptInputMessages.
     * @param {PromptInputMessageDeleteManyArgs} args - Arguments to filter PromptInputMessages to delete.
     * @example
     * // Delete a few PromptInputMessages
     * const { count } = await prisma.promptInputMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptInputMessageDeleteManyArgs>(args?: SelectSubset<T, PromptInputMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptInputMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptInputMessages
     * const promptInputMessage = await prisma.promptInputMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptInputMessageUpdateManyArgs>(args: SelectSubset<T, PromptInputMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptInputMessages and returns the data updated in the database.
     * @param {PromptInputMessageUpdateManyAndReturnArgs} args - Arguments to update many PromptInputMessages.
     * @example
     * // Update many PromptInputMessages
     * const promptInputMessage = await prisma.promptInputMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptInputMessages and only return the `id`
     * const promptInputMessageWithIdOnly = await prisma.promptInputMessage.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptInputMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptInputMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptInputMessage.
     * @param {PromptInputMessageUpsertArgs} args - Arguments to update or create a PromptInputMessage.
     * @example
     * // Update or create a PromptInputMessage
     * const promptInputMessage = await prisma.promptInputMessage.upsert({
     *   create: {
     *     // ... data to create a PromptInputMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptInputMessage we want to update
     *   }
     * })
     */
    upsert<T extends PromptInputMessageUpsertArgs>(args: SelectSubset<T, PromptInputMessageUpsertArgs<ExtArgs>>): Prisma__PromptInputMessageClient<$Result.GetResult<Prisma.$PromptInputMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptInputMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageCountArgs} args - Arguments to filter PromptInputMessages to count.
     * @example
     * // Count the number of PromptInputMessages
     * const count = await prisma.promptInputMessage.count({
     *   where: {
     *     // ... the filter for the PromptInputMessages we want to count
     *   }
     * })
    **/
    count<T extends PromptInputMessageCountArgs>(
      args?: Subset<T, PromptInputMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptInputMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptInputMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptInputMessageAggregateArgs>(args: Subset<T, PromptInputMessageAggregateArgs>): Prisma.PrismaPromise<GetPromptInputMessageAggregateType<T>>

    /**
     * Group by PromptInputMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptInputMessageGroupByArgs} args - Group by arguments.
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
      T extends PromptInputMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptInputMessageGroupByArgs['orderBy'] }
        : { orderBy?: PromptInputMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptInputMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptInputMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptInputMessage model
   */
  readonly fields: PromptInputMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptInputMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptInputMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PromptInputMessage model
   */
  interface PromptInputMessageFieldRefs {
    readonly id: FieldRef<"PromptInputMessage", 'String'>
    readonly role: FieldRef<"PromptInputMessage", 'String'>
    readonly content: FieldRef<"PromptInputMessage", 'String'>
    readonly promptId: FieldRef<"PromptInputMessage", 'String'>
    readonly order: FieldRef<"PromptInputMessage", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PromptInputMessage findUnique
   */
  export type PromptInputMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter, which PromptInputMessage to fetch.
     */
    where: PromptInputMessageWhereUniqueInput
  }

  /**
   * PromptInputMessage findUniqueOrThrow
   */
  export type PromptInputMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter, which PromptInputMessage to fetch.
     */
    where: PromptInputMessageWhereUniqueInput
  }

  /**
   * PromptInputMessage findFirst
   */
  export type PromptInputMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter, which PromptInputMessage to fetch.
     */
    where?: PromptInputMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptInputMessages to fetch.
     */
    orderBy?: PromptInputMessageOrderByWithRelationInput | PromptInputMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptInputMessages.
     */
    cursor?: PromptInputMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptInputMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptInputMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptInputMessages.
     */
    distinct?: PromptInputMessageScalarFieldEnum | PromptInputMessageScalarFieldEnum[]
  }

  /**
   * PromptInputMessage findFirstOrThrow
   */
  export type PromptInputMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter, which PromptInputMessage to fetch.
     */
    where?: PromptInputMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptInputMessages to fetch.
     */
    orderBy?: PromptInputMessageOrderByWithRelationInput | PromptInputMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptInputMessages.
     */
    cursor?: PromptInputMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptInputMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptInputMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptInputMessages.
     */
    distinct?: PromptInputMessageScalarFieldEnum | PromptInputMessageScalarFieldEnum[]
  }

  /**
   * PromptInputMessage findMany
   */
  export type PromptInputMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter, which PromptInputMessages to fetch.
     */
    where?: PromptInputMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptInputMessages to fetch.
     */
    orderBy?: PromptInputMessageOrderByWithRelationInput | PromptInputMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptInputMessages.
     */
    cursor?: PromptInputMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptInputMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptInputMessages.
     */
    skip?: number
    distinct?: PromptInputMessageScalarFieldEnum | PromptInputMessageScalarFieldEnum[]
  }

  /**
   * PromptInputMessage create
   */
  export type PromptInputMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptInputMessage.
     */
    data: XOR<PromptInputMessageCreateInput, PromptInputMessageUncheckedCreateInput>
  }

  /**
   * PromptInputMessage createMany
   */
  export type PromptInputMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptInputMessages.
     */
    data: PromptInputMessageCreateManyInput | PromptInputMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptInputMessage createManyAndReturn
   */
  export type PromptInputMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * The data used to create many PromptInputMessages.
     */
    data: PromptInputMessageCreateManyInput | PromptInputMessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptInputMessage update
   */
  export type PromptInputMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptInputMessage.
     */
    data: XOR<PromptInputMessageUpdateInput, PromptInputMessageUncheckedUpdateInput>
    /**
     * Choose, which PromptInputMessage to update.
     */
    where: PromptInputMessageWhereUniqueInput
  }

  /**
   * PromptInputMessage updateMany
   */
  export type PromptInputMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptInputMessages.
     */
    data: XOR<PromptInputMessageUpdateManyMutationInput, PromptInputMessageUncheckedUpdateManyInput>
    /**
     * Filter which PromptInputMessages to update
     */
    where?: PromptInputMessageWhereInput
    /**
     * Limit how many PromptInputMessages to update.
     */
    limit?: number
  }

  /**
   * PromptInputMessage updateManyAndReturn
   */
  export type PromptInputMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * The data used to update PromptInputMessages.
     */
    data: XOR<PromptInputMessageUpdateManyMutationInput, PromptInputMessageUncheckedUpdateManyInput>
    /**
     * Filter which PromptInputMessages to update
     */
    where?: PromptInputMessageWhereInput
    /**
     * Limit how many PromptInputMessages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptInputMessage upsert
   */
  export type PromptInputMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptInputMessage to update in case it exists.
     */
    where: PromptInputMessageWhereUniqueInput
    /**
     * In case the PromptInputMessage found by the `where` argument doesn't exist, create a new PromptInputMessage with this data.
     */
    create: XOR<PromptInputMessageCreateInput, PromptInputMessageUncheckedCreateInput>
    /**
     * In case the PromptInputMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptInputMessageUpdateInput, PromptInputMessageUncheckedUpdateInput>
  }

  /**
   * PromptInputMessage delete
   */
  export type PromptInputMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
    /**
     * Filter which PromptInputMessage to delete.
     */
    where: PromptInputMessageWhereUniqueInput
  }

  /**
   * PromptInputMessage deleteMany
   */
  export type PromptInputMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptInputMessages to delete
     */
    where?: PromptInputMessageWhereInput
    /**
     * Limit how many PromptInputMessages to delete.
     */
    limit?: number
  }

  /**
   * PromptInputMessage without action
   */
  export type PromptInputMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptInputMessage
     */
    select?: PromptInputMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptInputMessage
     */
    omit?: PromptInputMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptInputMessageInclude<ExtArgs> | null
  }


  /**
   * Model PromptResponse
   */

  export type AggregatePromptResponse = {
    _count: PromptResponseCountAggregateOutputType | null
    _avg: PromptResponseAvgAggregateOutputType | null
    _sum: PromptResponseSumAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  export type PromptResponseAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
  }

  export type PromptResponseSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
  }

  export type PromptResponseMinAggregateOutputType = {
    id: string | null
    modelId: string | null
    text: string | null
    promptId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
    createdAt: Date | null
  }

  export type PromptResponseMaxAggregateOutputType = {
    id: string | null
    modelId: string | null
    text: string | null
    promptId: string | null
    promptTokens: number | null
    completionTokens: number | null
    totalTokens: number | null
    responseTime: number | null
    estimatedCost: number | null
    createdAt: Date | null
  }

  export type PromptResponseCountAggregateOutputType = {
    id: number
    modelId: number
    text: number
    promptId: number
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt: number
    _all: number
  }


  export type PromptResponseAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
  }

  export type PromptResponseSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
  }

  export type PromptResponseMinAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    promptId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
  }

  export type PromptResponseMaxAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    promptId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
  }

  export type PromptResponseCountAggregateInputType = {
    id?: true
    modelId?: true
    text?: true
    promptId?: true
    promptTokens?: true
    completionTokens?: true
    totalTokens?: true
    responseTime?: true
    estimatedCost?: true
    createdAt?: true
    _all?: true
  }

  export type PromptResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponse to aggregate.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PromptResponses
    **/
    _count?: true | PromptResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromptResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromptResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromptResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromptResponseMaxAggregateInputType
  }

  export type GetPromptResponseAggregateType<T extends PromptResponseAggregateArgs> = {
        [P in keyof T & keyof AggregatePromptResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromptResponse[P]>
      : GetScalarType<T[P], AggregatePromptResponse[P]>
  }




  export type PromptResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromptResponseWhereInput
    orderBy?: PromptResponseOrderByWithAggregationInput | PromptResponseOrderByWithAggregationInput[]
    by: PromptResponseScalarFieldEnum[] | PromptResponseScalarFieldEnum
    having?: PromptResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromptResponseCountAggregateInputType | true
    _avg?: PromptResponseAvgAggregateInputType
    _sum?: PromptResponseSumAggregateInputType
    _min?: PromptResponseMinAggregateInputType
    _max?: PromptResponseMaxAggregateInputType
  }

  export type PromptResponseGroupByOutputType = {
    id: string
    modelId: string
    text: string
    promptId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt: Date
    _count: PromptResponseCountAggregateOutputType | null
    _avg: PromptResponseAvgAggregateOutputType | null
    _sum: PromptResponseSumAggregateOutputType | null
    _min: PromptResponseMinAggregateOutputType | null
    _max: PromptResponseMaxAggregateOutputType | null
  }

  type GetPromptResponseGroupByPayload<T extends PromptResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromptResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromptResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
            : GetScalarType<T[P], PromptResponseGroupByOutputType[P]>
        }
      >
    >


  export type PromptResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    promptId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    promptId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    modelId?: boolean
    text?: boolean
    promptId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promptResponse"]>

  export type PromptResponseSelectScalar = {
    id?: boolean
    modelId?: boolean
    text?: boolean
    promptId?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    totalTokens?: boolean
    responseTime?: boolean
    estimatedCost?: boolean
    createdAt?: boolean
  }

  export type PromptResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "modelId" | "text" | "promptId" | "promptTokens" | "completionTokens" | "totalTokens" | "responseTime" | "estimatedCost" | "createdAt", ExtArgs["result"]["promptResponse"]>
  export type PromptResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type PromptResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }
  export type PromptResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    prompt?: boolean | PromptDefaultArgs<ExtArgs>
  }

  export type $PromptResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PromptResponse"
    objects: {
      prompt: Prisma.$PromptPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      modelId: string
      text: string
      promptId: string
      promptTokens: number
      completionTokens: number
      totalTokens: number
      responseTime: number
      estimatedCost: number
      createdAt: Date
    }, ExtArgs["result"]["promptResponse"]>
    composites: {}
  }

  type PromptResponseGetPayload<S extends boolean | null | undefined | PromptResponseDefaultArgs> = $Result.GetResult<Prisma.$PromptResponsePayload, S>

  type PromptResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromptResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromptResponseCountAggregateInputType | true
    }

  export interface PromptResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PromptResponse'], meta: { name: 'PromptResponse' } }
    /**
     * Find zero or one PromptResponse that matches the filter.
     * @param {PromptResponseFindUniqueArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromptResponseFindUniqueArgs>(args: SelectSubset<T, PromptResponseFindUniqueArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PromptResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromptResponseFindUniqueOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromptResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, PromptResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromptResponseFindFirstArgs>(args?: SelectSubset<T, PromptResponseFindFirstArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PromptResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindFirstOrThrowArgs} args - Arguments to find a PromptResponse
     * @example
     * // Get one PromptResponse
     * const promptResponse = await prisma.promptResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromptResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, PromptResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PromptResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany()
     * 
     * // Get first 10 PromptResponses
     * const promptResponses = await prisma.promptResponse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromptResponseFindManyArgs>(args?: SelectSubset<T, PromptResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PromptResponse.
     * @param {PromptResponseCreateArgs} args - Arguments to create a PromptResponse.
     * @example
     * // Create one PromptResponse
     * const PromptResponse = await prisma.promptResponse.create({
     *   data: {
     *     // ... data to create a PromptResponse
     *   }
     * })
     * 
     */
    create<T extends PromptResponseCreateArgs>(args: SelectSubset<T, PromptResponseCreateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PromptResponses.
     * @param {PromptResponseCreateManyArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromptResponseCreateManyArgs>(args?: SelectSubset<T, PromptResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PromptResponses and returns the data saved in the database.
     * @param {PromptResponseCreateManyAndReturnArgs} args - Arguments to create many PromptResponses.
     * @example
     * // Create many PromptResponses
     * const promptResponse = await prisma.promptResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromptResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, PromptResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PromptResponse.
     * @param {PromptResponseDeleteArgs} args - Arguments to delete one PromptResponse.
     * @example
     * // Delete one PromptResponse
     * const PromptResponse = await prisma.promptResponse.delete({
     *   where: {
     *     // ... filter to delete one PromptResponse
     *   }
     * })
     * 
     */
    delete<T extends PromptResponseDeleteArgs>(args: SelectSubset<T, PromptResponseDeleteArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PromptResponse.
     * @param {PromptResponseUpdateArgs} args - Arguments to update one PromptResponse.
     * @example
     * // Update one PromptResponse
     * const promptResponse = await prisma.promptResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromptResponseUpdateArgs>(args: SelectSubset<T, PromptResponseUpdateArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PromptResponses.
     * @param {PromptResponseDeleteManyArgs} args - Arguments to filter PromptResponses to delete.
     * @example
     * // Delete a few PromptResponses
     * const { count } = await prisma.promptResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromptResponseDeleteManyArgs>(args?: SelectSubset<T, PromptResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromptResponseUpdateManyArgs>(args: SelectSubset<T, PromptResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PromptResponses and returns the data updated in the database.
     * @param {PromptResponseUpdateManyAndReturnArgs} args - Arguments to update many PromptResponses.
     * @example
     * // Update many PromptResponses
     * const promptResponse = await prisma.promptResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PromptResponses and only return the `id`
     * const promptResponseWithIdOnly = await prisma.promptResponse.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromptResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, PromptResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PromptResponse.
     * @param {PromptResponseUpsertArgs} args - Arguments to update or create a PromptResponse.
     * @example
     * // Update or create a PromptResponse
     * const promptResponse = await prisma.promptResponse.upsert({
     *   create: {
     *     // ... data to create a PromptResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PromptResponse we want to update
     *   }
     * })
     */
    upsert<T extends PromptResponseUpsertArgs>(args: SelectSubset<T, PromptResponseUpsertArgs<ExtArgs>>): Prisma__PromptResponseClient<$Result.GetResult<Prisma.$PromptResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PromptResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseCountArgs} args - Arguments to filter PromptResponses to count.
     * @example
     * // Count the number of PromptResponses
     * const count = await prisma.promptResponse.count({
     *   where: {
     *     // ... the filter for the PromptResponses we want to count
     *   }
     * })
    **/
    count<T extends PromptResponseCountArgs>(
      args?: Subset<T, PromptResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromptResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromptResponseAggregateArgs>(args: Subset<T, PromptResponseAggregateArgs>): Prisma.PrismaPromise<GetPromptResponseAggregateType<T>>

    /**
     * Group by PromptResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromptResponseGroupByArgs} args - Group by arguments.
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
      T extends PromptResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromptResponseGroupByArgs['orderBy'] }
        : { orderBy?: PromptResponseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromptResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromptResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PromptResponse model
   */
  readonly fields: PromptResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PromptResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromptResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    prompt<T extends PromptDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PromptDefaultArgs<ExtArgs>>): Prisma__PromptClient<$Result.GetResult<Prisma.$PromptPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PromptResponse model
   */
  interface PromptResponseFieldRefs {
    readonly id: FieldRef<"PromptResponse", 'String'>
    readonly modelId: FieldRef<"PromptResponse", 'String'>
    readonly text: FieldRef<"PromptResponse", 'String'>
    readonly promptId: FieldRef<"PromptResponse", 'String'>
    readonly promptTokens: FieldRef<"PromptResponse", 'Int'>
    readonly completionTokens: FieldRef<"PromptResponse", 'Int'>
    readonly totalTokens: FieldRef<"PromptResponse", 'Int'>
    readonly responseTime: FieldRef<"PromptResponse", 'Float'>
    readonly estimatedCost: FieldRef<"PromptResponse", 'Float'>
    readonly createdAt: FieldRef<"PromptResponse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PromptResponse findUnique
   */
  export type PromptResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findUniqueOrThrow
   */
  export type PromptResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse findFirst
   */
  export type PromptResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findFirstOrThrow
   */
  export type PromptResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponse to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PromptResponses.
     */
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse findMany
   */
  export type PromptResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter, which PromptResponses to fetch.
     */
    where?: PromptResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PromptResponses to fetch.
     */
    orderBy?: PromptResponseOrderByWithRelationInput | PromptResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PromptResponses.
     */
    cursor?: PromptResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PromptResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PromptResponses.
     */
    skip?: number
    distinct?: PromptResponseScalarFieldEnum | PromptResponseScalarFieldEnum[]
  }

  /**
   * PromptResponse create
   */
  export type PromptResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a PromptResponse.
     */
    data: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
  }

  /**
   * PromptResponse createMany
   */
  export type PromptResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PromptResponse createManyAndReturn
   */
  export type PromptResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to create many PromptResponses.
     */
    data: PromptResponseCreateManyInput | PromptResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse update
   */
  export type PromptResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a PromptResponse.
     */
    data: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
    /**
     * Choose, which PromptResponse to update.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse updateMany
   */
  export type PromptResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
  }

  /**
   * PromptResponse updateManyAndReturn
   */
  export type PromptResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * The data used to update PromptResponses.
     */
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyInput>
    /**
     * Filter which PromptResponses to update
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PromptResponse upsert
   */
  export type PromptResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the PromptResponse to update in case it exists.
     */
    where: PromptResponseWhereUniqueInput
    /**
     * In case the PromptResponse found by the `where` argument doesn't exist, create a new PromptResponse with this data.
     */
    create: XOR<PromptResponseCreateInput, PromptResponseUncheckedCreateInput>
    /**
     * In case the PromptResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromptResponseUpdateInput, PromptResponseUncheckedUpdateInput>
  }

  /**
   * PromptResponse delete
   */
  export type PromptResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
    /**
     * Filter which PromptResponse to delete.
     */
    where: PromptResponseWhereUniqueInput
  }

  /**
   * PromptResponse deleteMany
   */
  export type PromptResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PromptResponses to delete
     */
    where?: PromptResponseWhereInput
    /**
     * Limit how many PromptResponses to delete.
     */
    limit?: number
  }

  /**
   * PromptResponse without action
   */
  export type PromptResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PromptResponse
     */
    select?: PromptResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PromptResponse
     */
    omit?: PromptResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromptResponseInclude<ExtArgs> | null
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


  export const PromptScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    timestamp: 'timestamp',
    temperature: 'temperature',
    maxTokens: 'maxTokens',
    topP: 'topP',
    frequencyPenalty: 'frequencyPenalty',
    presencePenalty: 'presencePenalty'
  };

  export type PromptScalarFieldEnum = (typeof PromptScalarFieldEnum)[keyof typeof PromptScalarFieldEnum]


  export const PromptInputMessageScalarFieldEnum: {
    id: 'id',
    role: 'role',
    content: 'content',
    promptId: 'promptId',
    order: 'order'
  };

  export type PromptInputMessageScalarFieldEnum = (typeof PromptInputMessageScalarFieldEnum)[keyof typeof PromptInputMessageScalarFieldEnum]


  export const PromptResponseScalarFieldEnum: {
    id: 'id',
    modelId: 'modelId',
    text: 'text',
    promptId: 'promptId',
    promptTokens: 'promptTokens',
    completionTokens: 'completionTokens',
    totalTokens: 'totalTokens',
    responseTime: 'responseTime',
    estimatedCost: 'estimatedCost',
    createdAt: 'createdAt'
  };

  export type PromptResponseScalarFieldEnum = (typeof PromptResponseScalarFieldEnum)[keyof typeof PromptResponseScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type PromptWhereInput = {
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    id?: StringFilter<"Prompt"> | string
    prompt?: StringFilter<"Prompt"> | string
    timestamp?: DateTimeFilter<"Prompt"> | Date | string
    temperature?: FloatNullableFilter<"Prompt"> | number | null
    maxTokens?: IntNullableFilter<"Prompt"> | number | null
    topP?: FloatNullableFilter<"Prompt"> | number | null
    frequencyPenalty?: FloatNullableFilter<"Prompt"> | number | null
    presencePenalty?: FloatNullableFilter<"Prompt"> | number | null
    messages?: PromptInputMessageListRelationFilter
    responses?: PromptResponseListRelationFilter
  }

  export type PromptOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrderInput | SortOrder
    maxTokens?: SortOrderInput | SortOrder
    topP?: SortOrderInput | SortOrder
    frequencyPenalty?: SortOrderInput | SortOrder
    presencePenalty?: SortOrderInput | SortOrder
    messages?: PromptInputMessageOrderByRelationAggregateInput
    responses?: PromptResponseOrderByRelationAggregateInput
  }

  export type PromptWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptWhereInput | PromptWhereInput[]
    OR?: PromptWhereInput[]
    NOT?: PromptWhereInput | PromptWhereInput[]
    prompt?: StringFilter<"Prompt"> | string
    timestamp?: DateTimeFilter<"Prompt"> | Date | string
    temperature?: FloatNullableFilter<"Prompt"> | number | null
    maxTokens?: IntNullableFilter<"Prompt"> | number | null
    topP?: FloatNullableFilter<"Prompt"> | number | null
    frequencyPenalty?: FloatNullableFilter<"Prompt"> | number | null
    presencePenalty?: FloatNullableFilter<"Prompt"> | number | null
    messages?: PromptInputMessageListRelationFilter
    responses?: PromptResponseListRelationFilter
  }, "id">

  export type PromptOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrderInput | SortOrder
    maxTokens?: SortOrderInput | SortOrder
    topP?: SortOrderInput | SortOrder
    frequencyPenalty?: SortOrderInput | SortOrder
    presencePenalty?: SortOrderInput | SortOrder
    _count?: PromptCountOrderByAggregateInput
    _avg?: PromptAvgOrderByAggregateInput
    _max?: PromptMaxOrderByAggregateInput
    _min?: PromptMinOrderByAggregateInput
    _sum?: PromptSumOrderByAggregateInput
  }

  export type PromptScalarWhereWithAggregatesInput = {
    AND?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    OR?: PromptScalarWhereWithAggregatesInput[]
    NOT?: PromptScalarWhereWithAggregatesInput | PromptScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prompt"> | string
    prompt?: StringWithAggregatesFilter<"Prompt"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Prompt"> | Date | string
    temperature?: FloatNullableWithAggregatesFilter<"Prompt"> | number | null
    maxTokens?: IntNullableWithAggregatesFilter<"Prompt"> | number | null
    topP?: FloatNullableWithAggregatesFilter<"Prompt"> | number | null
    frequencyPenalty?: FloatNullableWithAggregatesFilter<"Prompt"> | number | null
    presencePenalty?: FloatNullableWithAggregatesFilter<"Prompt"> | number | null
  }

  export type PromptInputMessageWhereInput = {
    AND?: PromptInputMessageWhereInput | PromptInputMessageWhereInput[]
    OR?: PromptInputMessageWhereInput[]
    NOT?: PromptInputMessageWhereInput | PromptInputMessageWhereInput[]
    id?: StringFilter<"PromptInputMessage"> | string
    role?: StringFilter<"PromptInputMessage"> | string
    content?: StringFilter<"PromptInputMessage"> | string
    promptId?: StringFilter<"PromptInputMessage"> | string
    order?: IntFilter<"PromptInputMessage"> | number
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }

  export type PromptInputMessageOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    promptId?: SortOrder
    order?: SortOrder
    prompt?: PromptOrderByWithRelationInput
  }

  export type PromptInputMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptInputMessageWhereInput | PromptInputMessageWhereInput[]
    OR?: PromptInputMessageWhereInput[]
    NOT?: PromptInputMessageWhereInput | PromptInputMessageWhereInput[]
    role?: StringFilter<"PromptInputMessage"> | string
    content?: StringFilter<"PromptInputMessage"> | string
    promptId?: StringFilter<"PromptInputMessage"> | string
    order?: IntFilter<"PromptInputMessage"> | number
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }, "id">

  export type PromptInputMessageOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    promptId?: SortOrder
    order?: SortOrder
    _count?: PromptInputMessageCountOrderByAggregateInput
    _avg?: PromptInputMessageAvgOrderByAggregateInput
    _max?: PromptInputMessageMaxOrderByAggregateInput
    _min?: PromptInputMessageMinOrderByAggregateInput
    _sum?: PromptInputMessageSumOrderByAggregateInput
  }

  export type PromptInputMessageScalarWhereWithAggregatesInput = {
    AND?: PromptInputMessageScalarWhereWithAggregatesInput | PromptInputMessageScalarWhereWithAggregatesInput[]
    OR?: PromptInputMessageScalarWhereWithAggregatesInput[]
    NOT?: PromptInputMessageScalarWhereWithAggregatesInput | PromptInputMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptInputMessage"> | string
    role?: StringWithAggregatesFilter<"PromptInputMessage"> | string
    content?: StringWithAggregatesFilter<"PromptInputMessage"> | string
    promptId?: StringWithAggregatesFilter<"PromptInputMessage"> | string
    order?: IntWithAggregatesFilter<"PromptInputMessage"> | number
  }

  export type PromptResponseWhereInput = {
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    id?: StringFilter<"PromptResponse"> | string
    modelId?: StringFilter<"PromptResponse"> | string
    text?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    promptTokens?: IntFilter<"PromptResponse"> | number
    completionTokens?: IntFilter<"PromptResponse"> | number
    totalTokens?: IntFilter<"PromptResponse"> | number
    responseTime?: FloatFilter<"PromptResponse"> | number
    estimatedCost?: FloatFilter<"PromptResponse"> | number
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }

  export type PromptResponseOrderByWithRelationInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    promptId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
    prompt?: PromptOrderByWithRelationInput
  }

  export type PromptResponseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PromptResponseWhereInput | PromptResponseWhereInput[]
    OR?: PromptResponseWhereInput[]
    NOT?: PromptResponseWhereInput | PromptResponseWhereInput[]
    modelId?: StringFilter<"PromptResponse"> | string
    text?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    promptTokens?: IntFilter<"PromptResponse"> | number
    completionTokens?: IntFilter<"PromptResponse"> | number
    totalTokens?: IntFilter<"PromptResponse"> | number
    responseTime?: FloatFilter<"PromptResponse"> | number
    estimatedCost?: FloatFilter<"PromptResponse"> | number
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
    prompt?: XOR<PromptScalarRelationFilter, PromptWhereInput>
  }, "id">

  export type PromptResponseOrderByWithAggregationInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    promptId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
    _count?: PromptResponseCountOrderByAggregateInput
    _avg?: PromptResponseAvgOrderByAggregateInput
    _max?: PromptResponseMaxOrderByAggregateInput
    _min?: PromptResponseMinOrderByAggregateInput
    _sum?: PromptResponseSumOrderByAggregateInput
  }

  export type PromptResponseScalarWhereWithAggregatesInput = {
    AND?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    OR?: PromptResponseScalarWhereWithAggregatesInput[]
    NOT?: PromptResponseScalarWhereWithAggregatesInput | PromptResponseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PromptResponse"> | string
    modelId?: StringWithAggregatesFilter<"PromptResponse"> | string
    text?: StringWithAggregatesFilter<"PromptResponse"> | string
    promptId?: StringWithAggregatesFilter<"PromptResponse"> | string
    promptTokens?: IntWithAggregatesFilter<"PromptResponse"> | number
    completionTokens?: IntWithAggregatesFilter<"PromptResponse"> | number
    totalTokens?: IntWithAggregatesFilter<"PromptResponse"> | number
    responseTime?: FloatWithAggregatesFilter<"PromptResponse"> | number
    estimatedCost?: FloatWithAggregatesFilter<"PromptResponse"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PromptResponse"> | Date | string
  }

  export type PromptCreateInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    messages?: PromptInputMessageCreateNestedManyWithoutPromptInput
    responses?: PromptResponseCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    messages?: PromptInputMessageUncheckedCreateNestedManyWithoutPromptInput
    responses?: PromptResponseUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    messages?: PromptInputMessageUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    messages?: PromptInputMessageUncheckedUpdateManyWithoutPromptNestedInput
    responses?: PromptResponseUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateManyInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
  }

  export type PromptUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PromptUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type PromptInputMessageCreateInput = {
    id?: string
    role: string
    content: string
    order: number
    prompt: PromptCreateNestedOneWithoutMessagesInput
  }

  export type PromptInputMessageUncheckedCreateInput = {
    id?: string
    role: string
    content: string
    promptId: string
    order: number
  }

  export type PromptInputMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    prompt?: PromptUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type PromptInputMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptInputMessageCreateManyInput = {
    id?: string
    role: string
    content: string
    promptId: string
    order: number
  }

  export type PromptInputMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptInputMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptResponseCreateInput = {
    id?: string
    modelId: string
    text: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
    prompt: PromptCreateNestedOneWithoutResponsesInput
  }

  export type PromptResponseUncheckedCreateInput = {
    id?: string
    modelId: string
    text: string
    promptId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PromptResponseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    prompt?: PromptUpdateOneRequiredWithoutResponsesNestedInput
  }

  export type PromptResponseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    totalTokens?: IntFieldUpdateOperationsInput | number
    responseTime?: FloatFieldUpdateOperationsInput | number
    estimatedCost?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromptResponseCreateManyInput = {
    id?: string
    modelId: string
    text: string
    promptId: string
    promptTokens: number
    completionTokens: number
    totalTokens: number
    responseTime: number
    estimatedCost: number
    createdAt?: Date | string
  }

  export type PromptResponseUpdateManyMutationInput = {
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

  export type PromptResponseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    modelId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    promptId?: StringFieldUpdateOperationsInput | string
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PromptInputMessageListRelationFilter = {
    every?: PromptInputMessageWhereInput
    some?: PromptInputMessageWhereInput
    none?: PromptInputMessageWhereInput
  }

  export type PromptResponseListRelationFilter = {
    every?: PromptResponseWhereInput
    some?: PromptResponseWhereInput
    none?: PromptResponseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PromptInputMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromptCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    topP?: SortOrder
    frequencyPenalty?: SortOrder
    presencePenalty?: SortOrder
  }

  export type PromptAvgOrderByAggregateInput = {
    temperature?: SortOrder
    maxTokens?: SortOrder
    topP?: SortOrder
    frequencyPenalty?: SortOrder
    presencePenalty?: SortOrder
  }

  export type PromptMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    topP?: SortOrder
    frequencyPenalty?: SortOrder
    presencePenalty?: SortOrder
  }

  export type PromptMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    timestamp?: SortOrder
    temperature?: SortOrder
    maxTokens?: SortOrder
    topP?: SortOrder
    frequencyPenalty?: SortOrder
    presencePenalty?: SortOrder
  }

  export type PromptSumOrderByAggregateInput = {
    temperature?: SortOrder
    maxTokens?: SortOrder
    topP?: SortOrder
    frequencyPenalty?: SortOrder
    presencePenalty?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PromptScalarRelationFilter = {
    is?: PromptWhereInput
    isNot?: PromptWhereInput
  }

  export type PromptInputMessageCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    promptId?: SortOrder
    order?: SortOrder
  }

  export type PromptInputMessageAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PromptInputMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    promptId?: SortOrder
    order?: SortOrder
  }

  export type PromptInputMessageMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
    content?: SortOrder
    promptId?: SortOrder
    order?: SortOrder
  }

  export type PromptInputMessageSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type PromptResponseCountOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    promptId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptResponseAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
  }

  export type PromptResponseMaxOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    promptId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptResponseMinOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
    text?: SortOrder
    promptId?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
    createdAt?: SortOrder
  }

  export type PromptResponseSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    totalTokens?: SortOrder
    responseTime?: SortOrder
    estimatedCost?: SortOrder
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

  export type PromptInputMessageCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput> | PromptInputMessageCreateWithoutPromptInput[] | PromptInputMessageUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptInputMessageCreateOrConnectWithoutPromptInput | PromptInputMessageCreateOrConnectWithoutPromptInput[]
    createMany?: PromptInputMessageCreateManyPromptInputEnvelope
    connect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
  }

  export type PromptResponseCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type PromptInputMessageUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput> | PromptInputMessageCreateWithoutPromptInput[] | PromptInputMessageUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptInputMessageCreateOrConnectWithoutPromptInput | PromptInputMessageCreateOrConnectWithoutPromptInput[]
    createMany?: PromptInputMessageCreateManyPromptInputEnvelope
    connect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
  }

  export type PromptResponseUncheckedCreateNestedManyWithoutPromptInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromptInputMessageUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput> | PromptInputMessageCreateWithoutPromptInput[] | PromptInputMessageUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptInputMessageCreateOrConnectWithoutPromptInput | PromptInputMessageCreateOrConnectWithoutPromptInput[]
    upsert?: PromptInputMessageUpsertWithWhereUniqueWithoutPromptInput | PromptInputMessageUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptInputMessageCreateManyPromptInputEnvelope
    set?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    disconnect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    delete?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    connect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    update?: PromptInputMessageUpdateWithWhereUniqueWithoutPromptInput | PromptInputMessageUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptInputMessageUpdateManyWithWhereWithoutPromptInput | PromptInputMessageUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptInputMessageScalarWhereInput | PromptInputMessageScalarWhereInput[]
  }

  export type PromptResponseUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutPromptInput | PromptResponseUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutPromptInput | PromptResponseUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutPromptInput | PromptResponseUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type PromptInputMessageUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput> | PromptInputMessageCreateWithoutPromptInput[] | PromptInputMessageUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptInputMessageCreateOrConnectWithoutPromptInput | PromptInputMessageCreateOrConnectWithoutPromptInput[]
    upsert?: PromptInputMessageUpsertWithWhereUniqueWithoutPromptInput | PromptInputMessageUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptInputMessageCreateManyPromptInputEnvelope
    set?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    disconnect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    delete?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    connect?: PromptInputMessageWhereUniqueInput | PromptInputMessageWhereUniqueInput[]
    update?: PromptInputMessageUpdateWithWhereUniqueWithoutPromptInput | PromptInputMessageUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptInputMessageUpdateManyWithWhereWithoutPromptInput | PromptInputMessageUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptInputMessageScalarWhereInput | PromptInputMessageScalarWhereInput[]
  }

  export type PromptResponseUncheckedUpdateManyWithoutPromptNestedInput = {
    create?: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput> | PromptResponseCreateWithoutPromptInput[] | PromptResponseUncheckedCreateWithoutPromptInput[]
    connectOrCreate?: PromptResponseCreateOrConnectWithoutPromptInput | PromptResponseCreateOrConnectWithoutPromptInput[]
    upsert?: PromptResponseUpsertWithWhereUniqueWithoutPromptInput | PromptResponseUpsertWithWhereUniqueWithoutPromptInput[]
    createMany?: PromptResponseCreateManyPromptInputEnvelope
    set?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    disconnect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    delete?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    connect?: PromptResponseWhereUniqueInput | PromptResponseWhereUniqueInput[]
    update?: PromptResponseUpdateWithWhereUniqueWithoutPromptInput | PromptResponseUpdateWithWhereUniqueWithoutPromptInput[]
    updateMany?: PromptResponseUpdateManyWithWhereWithoutPromptInput | PromptResponseUpdateManyWithWhereWithoutPromptInput[]
    deleteMany?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
  }

  export type PromptCreateNestedOneWithoutMessagesInput = {
    create?: XOR<PromptCreateWithoutMessagesInput, PromptUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutMessagesInput
    connect?: PromptWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromptUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<PromptCreateWithoutMessagesInput, PromptUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutMessagesInput
    upsert?: PromptUpsertWithoutMessagesInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutMessagesInput, PromptUpdateWithoutMessagesInput>, PromptUncheckedUpdateWithoutMessagesInput>
  }

  export type PromptCreateNestedOneWithoutResponsesInput = {
    create?: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutResponsesInput
    connect?: PromptWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PromptUpdateOneRequiredWithoutResponsesNestedInput = {
    create?: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    connectOrCreate?: PromptCreateOrConnectWithoutResponsesInput
    upsert?: PromptUpsertWithoutResponsesInput
    connect?: PromptWhereUniqueInput
    update?: XOR<XOR<PromptUpdateToOneWithWhereWithoutResponsesInput, PromptUpdateWithoutResponsesInput>, PromptUncheckedUpdateWithoutResponsesInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type PromptInputMessageCreateWithoutPromptInput = {
    id?: string
    role: string
    content: string
    order: number
  }

  export type PromptInputMessageUncheckedCreateWithoutPromptInput = {
    id?: string
    role: string
    content: string
    order: number
  }

  export type PromptInputMessageCreateOrConnectWithoutPromptInput = {
    where: PromptInputMessageWhereUniqueInput
    create: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput>
  }

  export type PromptInputMessageCreateManyPromptInputEnvelope = {
    data: PromptInputMessageCreateManyPromptInput | PromptInputMessageCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type PromptResponseCreateWithoutPromptInput = {
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

  export type PromptResponseUncheckedCreateWithoutPromptInput = {
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

  export type PromptResponseCreateOrConnectWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    create: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput>
  }

  export type PromptResponseCreateManyPromptInputEnvelope = {
    data: PromptResponseCreateManyPromptInput | PromptResponseCreateManyPromptInput[]
    skipDuplicates?: boolean
  }

  export type PromptInputMessageUpsertWithWhereUniqueWithoutPromptInput = {
    where: PromptInputMessageWhereUniqueInput
    update: XOR<PromptInputMessageUpdateWithoutPromptInput, PromptInputMessageUncheckedUpdateWithoutPromptInput>
    create: XOR<PromptInputMessageCreateWithoutPromptInput, PromptInputMessageUncheckedCreateWithoutPromptInput>
  }

  export type PromptInputMessageUpdateWithWhereUniqueWithoutPromptInput = {
    where: PromptInputMessageWhereUniqueInput
    data: XOR<PromptInputMessageUpdateWithoutPromptInput, PromptInputMessageUncheckedUpdateWithoutPromptInput>
  }

  export type PromptInputMessageUpdateManyWithWhereWithoutPromptInput = {
    where: PromptInputMessageScalarWhereInput
    data: XOR<PromptInputMessageUpdateManyMutationInput, PromptInputMessageUncheckedUpdateManyWithoutPromptInput>
  }

  export type PromptInputMessageScalarWhereInput = {
    AND?: PromptInputMessageScalarWhereInput | PromptInputMessageScalarWhereInput[]
    OR?: PromptInputMessageScalarWhereInput[]
    NOT?: PromptInputMessageScalarWhereInput | PromptInputMessageScalarWhereInput[]
    id?: StringFilter<"PromptInputMessage"> | string
    role?: StringFilter<"PromptInputMessage"> | string
    content?: StringFilter<"PromptInputMessage"> | string
    promptId?: StringFilter<"PromptInputMessage"> | string
    order?: IntFilter<"PromptInputMessage"> | number
  }

  export type PromptResponseUpsertWithWhereUniqueWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    update: XOR<PromptResponseUpdateWithoutPromptInput, PromptResponseUncheckedUpdateWithoutPromptInput>
    create: XOR<PromptResponseCreateWithoutPromptInput, PromptResponseUncheckedCreateWithoutPromptInput>
  }

  export type PromptResponseUpdateWithWhereUniqueWithoutPromptInput = {
    where: PromptResponseWhereUniqueInput
    data: XOR<PromptResponseUpdateWithoutPromptInput, PromptResponseUncheckedUpdateWithoutPromptInput>
  }

  export type PromptResponseUpdateManyWithWhereWithoutPromptInput = {
    where: PromptResponseScalarWhereInput
    data: XOR<PromptResponseUpdateManyMutationInput, PromptResponseUncheckedUpdateManyWithoutPromptInput>
  }

  export type PromptResponseScalarWhereInput = {
    AND?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    OR?: PromptResponseScalarWhereInput[]
    NOT?: PromptResponseScalarWhereInput | PromptResponseScalarWhereInput[]
    id?: StringFilter<"PromptResponse"> | string
    modelId?: StringFilter<"PromptResponse"> | string
    text?: StringFilter<"PromptResponse"> | string
    promptId?: StringFilter<"PromptResponse"> | string
    promptTokens?: IntFilter<"PromptResponse"> | number
    completionTokens?: IntFilter<"PromptResponse"> | number
    totalTokens?: IntFilter<"PromptResponse"> | number
    responseTime?: FloatFilter<"PromptResponse"> | number
    estimatedCost?: FloatFilter<"PromptResponse"> | number
    createdAt?: DateTimeFilter<"PromptResponse"> | Date | string
  }

  export type PromptCreateWithoutMessagesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    responses?: PromptResponseCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutMessagesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    responses?: PromptResponseUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutMessagesInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutMessagesInput, PromptUncheckedCreateWithoutMessagesInput>
  }

  export type PromptUpsertWithoutMessagesInput = {
    update: XOR<PromptUpdateWithoutMessagesInput, PromptUncheckedUpdateWithoutMessagesInput>
    create: XOR<PromptCreateWithoutMessagesInput, PromptUncheckedCreateWithoutMessagesInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutMessagesInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutMessagesInput, PromptUncheckedUpdateWithoutMessagesInput>
  }

  export type PromptUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    responses?: PromptResponseUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    responses?: PromptResponseUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    messages?: PromptInputMessageCreateNestedManyWithoutPromptInput
  }

  export type PromptUncheckedCreateWithoutResponsesInput = {
    id?: string
    prompt: string
    timestamp?: Date | string
    temperature?: number | null
    maxTokens?: number | null
    topP?: number | null
    frequencyPenalty?: number | null
    presencePenalty?: number | null
    messages?: PromptInputMessageUncheckedCreateNestedManyWithoutPromptInput
  }

  export type PromptCreateOrConnectWithoutResponsesInput = {
    where: PromptWhereUniqueInput
    create: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
  }

  export type PromptUpsertWithoutResponsesInput = {
    update: XOR<PromptUpdateWithoutResponsesInput, PromptUncheckedUpdateWithoutResponsesInput>
    create: XOR<PromptCreateWithoutResponsesInput, PromptUncheckedCreateWithoutResponsesInput>
    where?: PromptWhereInput
  }

  export type PromptUpdateToOneWithWhereWithoutResponsesInput = {
    where?: PromptWhereInput
    data: XOR<PromptUpdateWithoutResponsesInput, PromptUncheckedUpdateWithoutResponsesInput>
  }

  export type PromptUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    messages?: PromptInputMessageUpdateManyWithoutPromptNestedInput
  }

  export type PromptUncheckedUpdateWithoutResponsesInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    temperature?: NullableFloatFieldUpdateOperationsInput | number | null
    maxTokens?: NullableIntFieldUpdateOperationsInput | number | null
    topP?: NullableFloatFieldUpdateOperationsInput | number | null
    frequencyPenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    presencePenalty?: NullableFloatFieldUpdateOperationsInput | number | null
    messages?: PromptInputMessageUncheckedUpdateManyWithoutPromptNestedInput
  }

  export type PromptInputMessageCreateManyPromptInput = {
    id?: string
    role: string
    content: string
    order: number
  }

  export type PromptResponseCreateManyPromptInput = {
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

  export type PromptInputMessageUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptInputMessageUncheckedUpdateWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptInputMessageUncheckedUpdateManyWithoutPromptInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type PromptResponseUpdateWithoutPromptInput = {
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

  export type PromptResponseUncheckedUpdateWithoutPromptInput = {
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

  export type PromptResponseUncheckedUpdateManyWithoutPromptInput = {
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