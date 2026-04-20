
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
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model MediaFile
 * 
 */
export type MediaFile = $Result.DefaultSelection<Prisma.$MediaFilePayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model ZKProofJob
 * 
 */
export type ZKProofJob = $Result.DefaultSelection<Prisma.$ZKProofJobPayload>
/**
 * Model UsageMeter
 * 
 */
export type UsageMeter = $Result.DefaultSelection<Prisma.$UsageMeterPayload>
/**
 * Model BlockchainAnchor
 * 
 */
export type BlockchainAnchor = $Result.DefaultSelection<Prisma.$BlockchainAnchorPayload>
/**
 * Model DeviceMedia
 * 
 */
export type DeviceMedia = $Result.DefaultSelection<Prisma.$DeviceMediaPayload>
/**
 * Model MediaVerification
 * 
 */
export type MediaVerification = $Result.DefaultSelection<Prisma.$MediaVerificationPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Devices
 * const devices = await prisma.device.findMany()
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
   * // Fetch zero or more Devices
   * const devices = await prisma.device.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs>;

  /**
   * `prisma.mediaFile`: Exposes CRUD operations for the **MediaFile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaFiles
    * const mediaFiles = await prisma.mediaFile.findMany()
    * ```
    */
  get mediaFile(): Prisma.MediaFileDelegate<ExtArgs>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs>;

  /**
   * `prisma.zKProofJob`: Exposes CRUD operations for the **ZKProofJob** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ZKProofJobs
    * const zKProofJobs = await prisma.zKProofJob.findMany()
    * ```
    */
  get zKProofJob(): Prisma.ZKProofJobDelegate<ExtArgs>;

  /**
   * `prisma.usageMeter`: Exposes CRUD operations for the **UsageMeter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UsageMeters
    * const usageMeters = await prisma.usageMeter.findMany()
    * ```
    */
  get usageMeter(): Prisma.UsageMeterDelegate<ExtArgs>;

  /**
   * `prisma.blockchainAnchor`: Exposes CRUD operations for the **BlockchainAnchor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockchainAnchors
    * const blockchainAnchors = await prisma.blockchainAnchor.findMany()
    * ```
    */
  get blockchainAnchor(): Prisma.BlockchainAnchorDelegate<ExtArgs>;

  /**
   * `prisma.deviceMedia`: Exposes CRUD operations for the **DeviceMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeviceMedias
    * const deviceMedias = await prisma.deviceMedia.findMany()
    * ```
    */
  get deviceMedia(): Prisma.DeviceMediaDelegate<ExtArgs>;

  /**
   * `prisma.mediaVerification`: Exposes CRUD operations for the **MediaVerification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MediaVerifications
    * const mediaVerifications = await prisma.mediaVerification.findMany()
    * ```
    */
  get mediaVerification(): Prisma.MediaVerificationDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Device: 'Device',
    MediaFile: 'MediaFile',
    Verification: 'Verification',
    ZKProofJob: 'ZKProofJob',
    UsageMeter: 'UsageMeter',
    BlockchainAnchor: 'BlockchainAnchor',
    DeviceMedia: 'DeviceMedia',
    MediaVerification: 'MediaVerification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "device" | "mediaFile" | "verification" | "zKProofJob" | "usageMeter" | "blockchainAnchor" | "deviceMedia" | "mediaVerification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      MediaFile: {
        payload: Prisma.$MediaFilePayload<ExtArgs>
        fields: Prisma.MediaFileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaFileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaFileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findFirst: {
            args: Prisma.MediaFileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaFileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          findMany: {
            args: Prisma.MediaFileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          create: {
            args: Prisma.MediaFileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          createMany: {
            args: Prisma.MediaFileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaFileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>[]
          }
          delete: {
            args: Prisma.MediaFileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          update: {
            args: Prisma.MediaFileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          deleteMany: {
            args: Prisma.MediaFileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaFileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaFileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaFilePayload>
          }
          aggregate: {
            args: Prisma.MediaFileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaFile>
          }
          groupBy: {
            args: Prisma.MediaFileGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaFileGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaFileCountArgs<ExtArgs>
            result: $Utils.Optional<MediaFileCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      ZKProofJob: {
        payload: Prisma.$ZKProofJobPayload<ExtArgs>
        fields: Prisma.ZKProofJobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ZKProofJobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ZKProofJobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          findFirst: {
            args: Prisma.ZKProofJobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ZKProofJobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          findMany: {
            args: Prisma.ZKProofJobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>[]
          }
          create: {
            args: Prisma.ZKProofJobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          createMany: {
            args: Prisma.ZKProofJobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ZKProofJobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>[]
          }
          delete: {
            args: Prisma.ZKProofJobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          update: {
            args: Prisma.ZKProofJobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          deleteMany: {
            args: Prisma.ZKProofJobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ZKProofJobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ZKProofJobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ZKProofJobPayload>
          }
          aggregate: {
            args: Prisma.ZKProofJobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateZKProofJob>
          }
          groupBy: {
            args: Prisma.ZKProofJobGroupByArgs<ExtArgs>
            result: $Utils.Optional<ZKProofJobGroupByOutputType>[]
          }
          count: {
            args: Prisma.ZKProofJobCountArgs<ExtArgs>
            result: $Utils.Optional<ZKProofJobCountAggregateOutputType> | number
          }
        }
      }
      UsageMeter: {
        payload: Prisma.$UsageMeterPayload<ExtArgs>
        fields: Prisma.UsageMeterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsageMeterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsageMeterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          findFirst: {
            args: Prisma.UsageMeterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsageMeterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          findMany: {
            args: Prisma.UsageMeterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>[]
          }
          create: {
            args: Prisma.UsageMeterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          createMany: {
            args: Prisma.UsageMeterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsageMeterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>[]
          }
          delete: {
            args: Prisma.UsageMeterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          update: {
            args: Prisma.UsageMeterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          deleteMany: {
            args: Prisma.UsageMeterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsageMeterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsageMeterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsageMeterPayload>
          }
          aggregate: {
            args: Prisma.UsageMeterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsageMeter>
          }
          groupBy: {
            args: Prisma.UsageMeterGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsageMeterGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsageMeterCountArgs<ExtArgs>
            result: $Utils.Optional<UsageMeterCountAggregateOutputType> | number
          }
        }
      }
      BlockchainAnchor: {
        payload: Prisma.$BlockchainAnchorPayload<ExtArgs>
        fields: Prisma.BlockchainAnchorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockchainAnchorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockchainAnchorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          findFirst: {
            args: Prisma.BlockchainAnchorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockchainAnchorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          findMany: {
            args: Prisma.BlockchainAnchorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>[]
          }
          create: {
            args: Prisma.BlockchainAnchorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          createMany: {
            args: Prisma.BlockchainAnchorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlockchainAnchorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>[]
          }
          delete: {
            args: Prisma.BlockchainAnchorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          update: {
            args: Prisma.BlockchainAnchorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          deleteMany: {
            args: Prisma.BlockchainAnchorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlockchainAnchorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BlockchainAnchorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlockchainAnchorPayload>
          }
          aggregate: {
            args: Prisma.BlockchainAnchorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlockchainAnchor>
          }
          groupBy: {
            args: Prisma.BlockchainAnchorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlockchainAnchorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockchainAnchorCountArgs<ExtArgs>
            result: $Utils.Optional<BlockchainAnchorCountAggregateOutputType> | number
          }
        }
      }
      DeviceMedia: {
        payload: Prisma.$DeviceMediaPayload<ExtArgs>
        fields: Prisma.DeviceMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          findFirst: {
            args: Prisma.DeviceMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          findMany: {
            args: Prisma.DeviceMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>[]
          }
          create: {
            args: Prisma.DeviceMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          createMany: {
            args: Prisma.DeviceMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>[]
          }
          delete: {
            args: Prisma.DeviceMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          update: {
            args: Prisma.DeviceMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          deleteMany: {
            args: Prisma.DeviceMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DeviceMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeviceMediaPayload>
          }
          aggregate: {
            args: Prisma.DeviceMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeviceMedia>
          }
          groupBy: {
            args: Prisma.DeviceMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceMediaCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceMediaCountAggregateOutputType> | number
          }
        }
      }
      MediaVerification: {
        payload: Prisma.$MediaVerificationPayload<ExtArgs>
        fields: Prisma.MediaVerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MediaVerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MediaVerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          findFirst: {
            args: Prisma.MediaVerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MediaVerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          findMany: {
            args: Prisma.MediaVerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>[]
          }
          create: {
            args: Prisma.MediaVerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          createMany: {
            args: Prisma.MediaVerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MediaVerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>[]
          }
          delete: {
            args: Prisma.MediaVerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          update: {
            args: Prisma.MediaVerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          deleteMany: {
            args: Prisma.MediaVerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MediaVerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MediaVerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MediaVerificationPayload>
          }
          aggregate: {
            args: Prisma.MediaVerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMediaVerification>
          }
          groupBy: {
            args: Prisma.MediaVerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MediaVerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MediaVerificationCountArgs<ExtArgs>
            result: $Utils.Optional<MediaVerificationCountAggregateOutputType> | number
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
   * Count Type DeviceCountOutputType
   */

  export type DeviceCountOutputType = {
    usage_meters: number
    media_files: number
    verifications: number
    zk_proof_jobs: number
    blockchain_anchors: number
    device_media: number
    media_verifications: number
  }

  export type DeviceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usage_meters?: boolean | DeviceCountOutputTypeCountUsage_metersArgs
    media_files?: boolean | DeviceCountOutputTypeCountMedia_filesArgs
    verifications?: boolean | DeviceCountOutputTypeCountVerificationsArgs
    zk_proof_jobs?: boolean | DeviceCountOutputTypeCountZk_proof_jobsArgs
    blockchain_anchors?: boolean | DeviceCountOutputTypeCountBlockchain_anchorsArgs
    device_media?: boolean | DeviceCountOutputTypeCountDevice_mediaArgs
    media_verifications?: boolean | DeviceCountOutputTypeCountMedia_verificationsArgs
  }

  // Custom InputTypes
  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceCountOutputType
     */
    select?: DeviceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountUsage_metersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMeterWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountMedia_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFileWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountVerificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountZk_proof_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZKProofJobWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountBlockchain_anchorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockchainAnchorWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountDevice_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceMediaWhereInput
  }

  /**
   * DeviceCountOutputType without action
   */
  export type DeviceCountOutputTypeCountMedia_verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaVerificationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceMinAggregateOutputType = {
    device_id: string | null
    tpm_serial: string | null
    name: string | null
    device_name: string | null
    device_type: string | null
    os_version: string | null
    app_version: string | null
    tpm_public_key: string | null
    api_key_hash: string | null
    registration_ip: string | null
    user_agent: string | null
    attestation_key: string | null
    verified_at: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    last_activity_at: Date | null
  }

  export type DeviceMaxAggregateOutputType = {
    device_id: string | null
    tpm_serial: string | null
    name: string | null
    device_name: string | null
    device_type: string | null
    os_version: string | null
    app_version: string | null
    tpm_public_key: string | null
    api_key_hash: string | null
    registration_ip: string | null
    user_agent: string | null
    attestation_key: string | null
    verified_at: Date | null
    status: string | null
    created_at: Date | null
    updated_at: Date | null
    last_activity_at: Date | null
  }

  export type DeviceCountAggregateOutputType = {
    device_id: number
    tpm_serial: number
    name: number
    device_name: number
    device_type: number
    os_version: number
    app_version: number
    tpm_public_key: number
    api_key_hash: number
    registration_ip: number
    user_agent: number
    attestation_key: number
    verified_at: number
    status: number
    metadata: number
    created_at: number
    updated_at: number
    last_activity_at: number
    _all: number
  }


  export type DeviceMinAggregateInputType = {
    device_id?: true
    tpm_serial?: true
    name?: true
    device_name?: true
    device_type?: true
    os_version?: true
    app_version?: true
    tpm_public_key?: true
    api_key_hash?: true
    registration_ip?: true
    user_agent?: true
    attestation_key?: true
    verified_at?: true
    status?: true
    created_at?: true
    updated_at?: true
    last_activity_at?: true
  }

  export type DeviceMaxAggregateInputType = {
    device_id?: true
    tpm_serial?: true
    name?: true
    device_name?: true
    device_type?: true
    os_version?: true
    app_version?: true
    tpm_public_key?: true
    api_key_hash?: true
    registration_ip?: true
    user_agent?: true
    attestation_key?: true
    verified_at?: true
    status?: true
    created_at?: true
    updated_at?: true
    last_activity_at?: true
  }

  export type DeviceCountAggregateInputType = {
    device_id?: true
    tpm_serial?: true
    name?: true
    device_name?: true
    device_type?: true
    os_version?: true
    app_version?: true
    tpm_public_key?: true
    api_key_hash?: true
    registration_ip?: true
    user_agent?: true
    attestation_key?: true
    verified_at?: true
    status?: true
    metadata?: true
    created_at?: true
    updated_at?: true
    last_activity_at?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    device_id: string
    tpm_serial: string | null
    name: string | null
    device_name: string | null
    device_type: string | null
    os_version: string | null
    app_version: string | null
    tpm_public_key: string
    api_key_hash: string | null
    registration_ip: string | null
    user_agent: string | null
    attestation_key: string | null
    verified_at: Date | null
    status: string | null
    metadata: JsonValue | null
    created_at: Date
    updated_at: Date
    last_activity_at: Date | null
    _count: DeviceCountAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    tpm_serial?: boolean
    name?: boolean
    device_name?: boolean
    device_type?: boolean
    os_version?: boolean
    app_version?: boolean
    tpm_public_key?: boolean
    api_key_hash?: boolean
    registration_ip?: boolean
    user_agent?: boolean
    attestation_key?: boolean
    verified_at?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_activity_at?: boolean
    usage_meters?: boolean | Device$usage_metersArgs<ExtArgs>
    media_files?: boolean | Device$media_filesArgs<ExtArgs>
    verifications?: boolean | Device$verificationsArgs<ExtArgs>
    zk_proof_jobs?: boolean | Device$zk_proof_jobsArgs<ExtArgs>
    blockchain_anchors?: boolean | Device$blockchain_anchorsArgs<ExtArgs>
    device_media?: boolean | Device$device_mediaArgs<ExtArgs>
    media_verifications?: boolean | Device$media_verificationsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    device_id?: boolean
    tpm_serial?: boolean
    name?: boolean
    device_name?: boolean
    device_type?: boolean
    os_version?: boolean
    app_version?: boolean
    tpm_public_key?: boolean
    api_key_hash?: boolean
    registration_ip?: boolean
    user_agent?: boolean
    attestation_key?: boolean
    verified_at?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_activity_at?: boolean
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    device_id?: boolean
    tpm_serial?: boolean
    name?: boolean
    device_name?: boolean
    device_type?: boolean
    os_version?: boolean
    app_version?: boolean
    tpm_public_key?: boolean
    api_key_hash?: boolean
    registration_ip?: boolean
    user_agent?: boolean
    attestation_key?: boolean
    verified_at?: boolean
    status?: boolean
    metadata?: boolean
    created_at?: boolean
    updated_at?: boolean
    last_activity_at?: boolean
  }

  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usage_meters?: boolean | Device$usage_metersArgs<ExtArgs>
    media_files?: boolean | Device$media_filesArgs<ExtArgs>
    verifications?: boolean | Device$verificationsArgs<ExtArgs>
    zk_proof_jobs?: boolean | Device$zk_proof_jobsArgs<ExtArgs>
    blockchain_anchors?: boolean | Device$blockchain_anchorsArgs<ExtArgs>
    device_media?: boolean | Device$device_mediaArgs<ExtArgs>
    media_verifications?: boolean | Device$media_verificationsArgs<ExtArgs>
    _count?: boolean | DeviceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      usage_meters: Prisma.$UsageMeterPayload<ExtArgs>[]
      media_files: Prisma.$MediaFilePayload<ExtArgs>[]
      verifications: Prisma.$VerificationPayload<ExtArgs>[]
      zk_proof_jobs: Prisma.$ZKProofJobPayload<ExtArgs>[]
      blockchain_anchors: Prisma.$BlockchainAnchorPayload<ExtArgs>[]
      device_media: Prisma.$DeviceMediaPayload<ExtArgs>[]
      media_verifications: Prisma.$MediaVerificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      device_id: string
      tpm_serial: string | null
      name: string | null
      device_name: string | null
      device_type: string | null
      os_version: string | null
      app_version: string | null
      tpm_public_key: string
      api_key_hash: string | null
      registration_ip: string | null
      user_agent: string | null
      attestation_key: string | null
      verified_at: Date | null
      status: string | null
      metadata: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
      last_activity_at: Date | null
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `device_id`
     * const deviceWithDevice_idOnly = await prisma.device.findMany({ select: { device_id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `device_id`
     * const deviceWithDevice_idOnly = await prisma.device.createManyAndReturn({ 
     *   select: { device_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
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
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usage_meters<T extends Device$usage_metersArgs<ExtArgs> = {}>(args?: Subset<T, Device$usage_metersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findMany"> | Null>
    media_files<T extends Device$media_filesArgs<ExtArgs> = {}>(args?: Subset<T, Device$media_filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findMany"> | Null>
    verifications<T extends Device$verificationsArgs<ExtArgs> = {}>(args?: Subset<T, Device$verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany"> | Null>
    zk_proof_jobs<T extends Device$zk_proof_jobsArgs<ExtArgs> = {}>(args?: Subset<T, Device$zk_proof_jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findMany"> | Null>
    blockchain_anchors<T extends Device$blockchain_anchorsArgs<ExtArgs> = {}>(args?: Subset<T, Device$blockchain_anchorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findMany"> | Null>
    device_media<T extends Device$device_mediaArgs<ExtArgs> = {}>(args?: Subset<T, Device$device_mediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findMany"> | Null>
    media_verifications<T extends Device$media_verificationsArgs<ExtArgs> = {}>(args?: Subset<T, Device$media_verificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Device model
   */ 
  interface DeviceFieldRefs {
    readonly device_id: FieldRef<"Device", 'String'>
    readonly tpm_serial: FieldRef<"Device", 'String'>
    readonly name: FieldRef<"Device", 'String'>
    readonly device_name: FieldRef<"Device", 'String'>
    readonly device_type: FieldRef<"Device", 'String'>
    readonly os_version: FieldRef<"Device", 'String'>
    readonly app_version: FieldRef<"Device", 'String'>
    readonly tpm_public_key: FieldRef<"Device", 'String'>
    readonly api_key_hash: FieldRef<"Device", 'String'>
    readonly registration_ip: FieldRef<"Device", 'String'>
    readonly user_agent: FieldRef<"Device", 'String'>
    readonly attestation_key: FieldRef<"Device", 'String'>
    readonly verified_at: FieldRef<"Device", 'DateTime'>
    readonly status: FieldRef<"Device", 'String'>
    readonly metadata: FieldRef<"Device", 'Json'>
    readonly created_at: FieldRef<"Device", 'DateTime'>
    readonly updated_at: FieldRef<"Device", 'DateTime'>
    readonly last_activity_at: FieldRef<"Device", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
  }

  /**
   * Device.usage_meters
   */
  export type Device$usage_metersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    where?: UsageMeterWhereInput
    orderBy?: UsageMeterOrderByWithRelationInput | UsageMeterOrderByWithRelationInput[]
    cursor?: UsageMeterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsageMeterScalarFieldEnum | UsageMeterScalarFieldEnum[]
  }

  /**
   * Device.media_files
   */
  export type Device$media_filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    where?: MediaFileWhereInput
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    cursor?: MediaFileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * Device.verifications
   */
  export type Device$verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    cursor?: VerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Device.zk_proof_jobs
   */
  export type Device$zk_proof_jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    where?: ZKProofJobWhereInput
    orderBy?: ZKProofJobOrderByWithRelationInput | ZKProofJobOrderByWithRelationInput[]
    cursor?: ZKProofJobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ZKProofJobScalarFieldEnum | ZKProofJobScalarFieldEnum[]
  }

  /**
   * Device.blockchain_anchors
   */
  export type Device$blockchain_anchorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    where?: BlockchainAnchorWhereInput
    orderBy?: BlockchainAnchorOrderByWithRelationInput | BlockchainAnchorOrderByWithRelationInput[]
    cursor?: BlockchainAnchorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BlockchainAnchorScalarFieldEnum | BlockchainAnchorScalarFieldEnum[]
  }

  /**
   * Device.device_media
   */
  export type Device$device_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    where?: DeviceMediaWhereInput
    orderBy?: DeviceMediaOrderByWithRelationInput | DeviceMediaOrderByWithRelationInput[]
    cursor?: DeviceMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceMediaScalarFieldEnum | DeviceMediaScalarFieldEnum[]
  }

  /**
   * Device.media_verifications
   */
  export type Device$media_verificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    where?: MediaVerificationWhereInput
    orderBy?: MediaVerificationOrderByWithRelationInput | MediaVerificationOrderByWithRelationInput[]
    cursor?: MediaVerificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MediaVerificationScalarFieldEnum | MediaVerificationScalarFieldEnum[]
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model MediaFile
   */

  export type AggregateMediaFile = {
    _count: MediaFileCountAggregateOutputType | null
    _avg: MediaFileAvgAggregateOutputType | null
    _sum: MediaFileSumAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  export type MediaFileAvgAggregateOutputType = {
    file_size: number | null
  }

  export type MediaFileSumAggregateOutputType = {
    file_size: bigint | null
  }

  export type MediaFileMinAggregateOutputType = {
    media_id: string | null
    device_id: string | null
    media_type: string | null
    file_name: string | null
    file_hash: string | null
    ipfs_hash: string | null
    file_size: bigint | null
    storage_path: string | null
    signature_verified: boolean | null
    uploaded_at: Date | null
  }

  export type MediaFileMaxAggregateOutputType = {
    media_id: string | null
    device_id: string | null
    media_type: string | null
    file_name: string | null
    file_hash: string | null
    ipfs_hash: string | null
    file_size: bigint | null
    storage_path: string | null
    signature_verified: boolean | null
    uploaded_at: Date | null
  }

  export type MediaFileCountAggregateOutputType = {
    media_id: number
    device_id: number
    media_type: number
    file_name: number
    file_hash: number
    ipfs_hash: number
    file_size: number
    storage_path: number
    signature_verified: number
    uploaded_at: number
    _all: number
  }


  export type MediaFileAvgAggregateInputType = {
    file_size?: true
  }

  export type MediaFileSumAggregateInputType = {
    file_size?: true
  }

  export type MediaFileMinAggregateInputType = {
    media_id?: true
    device_id?: true
    media_type?: true
    file_name?: true
    file_hash?: true
    ipfs_hash?: true
    file_size?: true
    storage_path?: true
    signature_verified?: true
    uploaded_at?: true
  }

  export type MediaFileMaxAggregateInputType = {
    media_id?: true
    device_id?: true
    media_type?: true
    file_name?: true
    file_hash?: true
    ipfs_hash?: true
    file_size?: true
    storage_path?: true
    signature_verified?: true
    uploaded_at?: true
  }

  export type MediaFileCountAggregateInputType = {
    media_id?: true
    device_id?: true
    media_type?: true
    file_name?: true
    file_hash?: true
    ipfs_hash?: true
    file_size?: true
    storage_path?: true
    signature_verified?: true
    uploaded_at?: true
    _all?: true
  }

  export type MediaFileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFile to aggregate.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaFiles
    **/
    _count?: true | MediaFileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MediaFileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MediaFileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaFileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaFileMaxAggregateInputType
  }

  export type GetMediaFileAggregateType<T extends MediaFileAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaFile[P]>
      : GetScalarType<T[P], AggregateMediaFile[P]>
  }




  export type MediaFileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaFileWhereInput
    orderBy?: MediaFileOrderByWithAggregationInput | MediaFileOrderByWithAggregationInput[]
    by: MediaFileScalarFieldEnum[] | MediaFileScalarFieldEnum
    having?: MediaFileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaFileCountAggregateInputType | true
    _avg?: MediaFileAvgAggregateInputType
    _sum?: MediaFileSumAggregateInputType
    _min?: MediaFileMinAggregateInputType
    _max?: MediaFileMaxAggregateInputType
  }

  export type MediaFileGroupByOutputType = {
    media_id: string
    device_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash: string | null
    file_size: bigint
    storage_path: string | null
    signature_verified: boolean
    uploaded_at: Date
    _count: MediaFileCountAggregateOutputType | null
    _avg: MediaFileAvgAggregateOutputType | null
    _sum: MediaFileSumAggregateOutputType | null
    _min: MediaFileMinAggregateOutputType | null
    _max: MediaFileMaxAggregateOutputType | null
  }

  type GetMediaFileGroupByPayload<T extends MediaFileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaFileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaFileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
            : GetScalarType<T[P], MediaFileGroupByOutputType[P]>
        }
      >
    >


  export type MediaFileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    device_id?: boolean
    media_type?: boolean
    file_name?: boolean
    file_hash?: boolean
    ipfs_hash?: boolean
    file_size?: boolean
    storage_path?: boolean
    signature_verified?: boolean
    uploaded_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFile"]>

  export type MediaFileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    media_id?: boolean
    device_id?: boolean
    media_type?: boolean
    file_name?: boolean
    file_hash?: boolean
    ipfs_hash?: boolean
    file_size?: boolean
    storage_path?: boolean
    signature_verified?: boolean
    uploaded_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaFile"]>

  export type MediaFileSelectScalar = {
    media_id?: boolean
    device_id?: boolean
    media_type?: boolean
    file_name?: boolean
    file_hash?: boolean
    ipfs_hash?: boolean
    file_size?: boolean
    storage_path?: boolean
    signature_verified?: boolean
    uploaded_at?: boolean
  }

  export type MediaFileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type MediaFileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $MediaFilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaFile"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      media_id: string
      device_id: string
      media_type: string
      file_name: string
      file_hash: string
      ipfs_hash: string | null
      file_size: bigint
      storage_path: string | null
      signature_verified: boolean
      uploaded_at: Date
    }, ExtArgs["result"]["mediaFile"]>
    composites: {}
  }

  type MediaFileGetPayload<S extends boolean | null | undefined | MediaFileDefaultArgs> = $Result.GetResult<Prisma.$MediaFilePayload, S>

  type MediaFileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaFileFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaFileCountAggregateInputType | true
    }

  export interface MediaFileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaFile'], meta: { name: 'MediaFile' } }
    /**
     * Find zero or one MediaFile that matches the filter.
     * @param {MediaFileFindUniqueArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaFileFindUniqueArgs>(args: SelectSubset<T, MediaFileFindUniqueArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediaFile that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaFileFindUniqueOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaFileFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaFileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediaFile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaFileFindFirstArgs>(args?: SelectSubset<T, MediaFileFindFirstArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediaFile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindFirstOrThrowArgs} args - Arguments to find a MediaFile
     * @example
     * // Get one MediaFile
     * const mediaFile = await prisma.mediaFile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaFileFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaFileFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediaFiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany()
     * 
     * // Get first 10 MediaFiles
     * const mediaFiles = await prisma.mediaFile.findMany({ take: 10 })
     * 
     * // Only select the `media_id`
     * const mediaFileWithMedia_idOnly = await prisma.mediaFile.findMany({ select: { media_id: true } })
     * 
     */
    findMany<T extends MediaFileFindManyArgs>(args?: SelectSubset<T, MediaFileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediaFile.
     * @param {MediaFileCreateArgs} args - Arguments to create a MediaFile.
     * @example
     * // Create one MediaFile
     * const MediaFile = await prisma.mediaFile.create({
     *   data: {
     *     // ... data to create a MediaFile
     *   }
     * })
     * 
     */
    create<T extends MediaFileCreateArgs>(args: SelectSubset<T, MediaFileCreateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediaFiles.
     * @param {MediaFileCreateManyArgs} args - Arguments to create many MediaFiles.
     * @example
     * // Create many MediaFiles
     * const mediaFile = await prisma.mediaFile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaFileCreateManyArgs>(args?: SelectSubset<T, MediaFileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaFiles and returns the data saved in the database.
     * @param {MediaFileCreateManyAndReturnArgs} args - Arguments to create many MediaFiles.
     * @example
     * // Create many MediaFiles
     * const mediaFile = await prisma.mediaFile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaFiles and only return the `media_id`
     * const mediaFileWithMedia_idOnly = await prisma.mediaFile.createManyAndReturn({ 
     *   select: { media_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaFileCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaFileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MediaFile.
     * @param {MediaFileDeleteArgs} args - Arguments to delete one MediaFile.
     * @example
     * // Delete one MediaFile
     * const MediaFile = await prisma.mediaFile.delete({
     *   where: {
     *     // ... filter to delete one MediaFile
     *   }
     * })
     * 
     */
    delete<T extends MediaFileDeleteArgs>(args: SelectSubset<T, MediaFileDeleteArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediaFile.
     * @param {MediaFileUpdateArgs} args - Arguments to update one MediaFile.
     * @example
     * // Update one MediaFile
     * const mediaFile = await prisma.mediaFile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaFileUpdateArgs>(args: SelectSubset<T, MediaFileUpdateArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediaFiles.
     * @param {MediaFileDeleteManyArgs} args - Arguments to filter MediaFiles to delete.
     * @example
     * // Delete a few MediaFiles
     * const { count } = await prisma.mediaFile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaFileDeleteManyArgs>(args?: SelectSubset<T, MediaFileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaFiles
     * const mediaFile = await prisma.mediaFile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaFileUpdateManyArgs>(args: SelectSubset<T, MediaFileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaFile.
     * @param {MediaFileUpsertArgs} args - Arguments to update or create a MediaFile.
     * @example
     * // Update or create a MediaFile
     * const mediaFile = await prisma.mediaFile.upsert({
     *   create: {
     *     // ... data to create a MediaFile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaFile we want to update
     *   }
     * })
     */
    upsert<T extends MediaFileUpsertArgs>(args: SelectSubset<T, MediaFileUpsertArgs<ExtArgs>>): Prisma__MediaFileClient<$Result.GetResult<Prisma.$MediaFilePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediaFiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileCountArgs} args - Arguments to filter MediaFiles to count.
     * @example
     * // Count the number of MediaFiles
     * const count = await prisma.mediaFile.count({
     *   where: {
     *     // ... the filter for the MediaFiles we want to count
     *   }
     * })
    **/
    count<T extends MediaFileCountArgs>(
      args?: Subset<T, MediaFileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaFileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaFileAggregateArgs>(args: Subset<T, MediaFileAggregateArgs>): Prisma.PrismaPromise<GetMediaFileAggregateType<T>>

    /**
     * Group by MediaFile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaFileGroupByArgs} args - Group by arguments.
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
      T extends MediaFileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaFileGroupByArgs['orderBy'] }
        : { orderBy?: MediaFileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaFileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaFile model
   */
  readonly fields: MediaFileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaFile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaFileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MediaFile model
   */ 
  interface MediaFileFieldRefs {
    readonly media_id: FieldRef<"MediaFile", 'String'>
    readonly device_id: FieldRef<"MediaFile", 'String'>
    readonly media_type: FieldRef<"MediaFile", 'String'>
    readonly file_name: FieldRef<"MediaFile", 'String'>
    readonly file_hash: FieldRef<"MediaFile", 'String'>
    readonly ipfs_hash: FieldRef<"MediaFile", 'String'>
    readonly file_size: FieldRef<"MediaFile", 'BigInt'>
    readonly storage_path: FieldRef<"MediaFile", 'String'>
    readonly signature_verified: FieldRef<"MediaFile", 'Boolean'>
    readonly uploaded_at: FieldRef<"MediaFile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MediaFile findUnique
   */
  export type MediaFileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findUniqueOrThrow
   */
  export type MediaFileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile findFirst
   */
  export type MediaFileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findFirstOrThrow
   */
  export type MediaFileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFile to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaFiles.
     */
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile findMany
   */
  export type MediaFileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter, which MediaFiles to fetch.
     */
    where?: MediaFileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaFiles to fetch.
     */
    orderBy?: MediaFileOrderByWithRelationInput | MediaFileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaFiles.
     */
    cursor?: MediaFileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaFiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaFiles.
     */
    skip?: number
    distinct?: MediaFileScalarFieldEnum | MediaFileScalarFieldEnum[]
  }

  /**
   * MediaFile create
   */
  export type MediaFileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaFile.
     */
    data: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
  }

  /**
   * MediaFile createMany
   */
  export type MediaFileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaFiles.
     */
    data: MediaFileCreateManyInput | MediaFileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaFile createManyAndReturn
   */
  export type MediaFileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MediaFiles.
     */
    data: MediaFileCreateManyInput | MediaFileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaFile update
   */
  export type MediaFileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaFile.
     */
    data: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
    /**
     * Choose, which MediaFile to update.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile updateMany
   */
  export type MediaFileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaFiles.
     */
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyInput>
    /**
     * Filter which MediaFiles to update
     */
    where?: MediaFileWhereInput
  }

  /**
   * MediaFile upsert
   */
  export type MediaFileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaFile to update in case it exists.
     */
    where: MediaFileWhereUniqueInput
    /**
     * In case the MediaFile found by the `where` argument doesn't exist, create a new MediaFile with this data.
     */
    create: XOR<MediaFileCreateInput, MediaFileUncheckedCreateInput>
    /**
     * In case the MediaFile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaFileUpdateInput, MediaFileUncheckedUpdateInput>
  }

  /**
   * MediaFile delete
   */
  export type MediaFileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
    /**
     * Filter which MediaFile to delete.
     */
    where: MediaFileWhereUniqueInput
  }

  /**
   * MediaFile deleteMany
   */
  export type MediaFileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaFiles to delete
     */
    where?: MediaFileWhereInput
  }

  /**
   * MediaFile without action
   */
  export type MediaFileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaFile
     */
    select?: MediaFileSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaFileInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    verification_id: string | null
    device_id: string | null
    media_id: string | null
    status: string | null
    proof_data: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    verification_id: string | null
    device_id: string | null
    media_id: string | null
    status: string | null
    proof_data: string | null
    created_at: Date | null
    completed_at: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    verification_id: number
    device_id: number
    media_id: number
    status: number
    proof_data: number
    created_at: number
    completed_at: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    verification_id?: true
    device_id?: true
    media_id?: true
    status?: true
    proof_data?: true
    created_at?: true
    completed_at?: true
  }

  export type VerificationMaxAggregateInputType = {
    verification_id?: true
    device_id?: true
    media_id?: true
    status?: true
    proof_data?: true
    created_at?: true
    completed_at?: true
  }

  export type VerificationCountAggregateInputType = {
    verification_id?: true
    device_id?: true
    media_id?: true
    status?: true
    proof_data?: true
    created_at?: true
    completed_at?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    verification_id: string
    device_id: string
    media_id: string | null
    status: string
    proof_data: string | null
    created_at: Date
    completed_at: Date | null
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    verification_id?: boolean
    device_id?: boolean
    media_id?: boolean
    status?: boolean
    proof_data?: boolean
    created_at?: boolean
    completed_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    verification_id?: boolean
    device_id?: boolean
    media_id?: boolean
    status?: boolean
    proof_data?: boolean
    created_at?: boolean
    completed_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    verification_id?: boolean
    device_id?: boolean
    media_id?: boolean
    status?: boolean
    proof_data?: boolean
    created_at?: boolean
    completed_at?: boolean
  }

  export type VerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type VerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      verification_id: string
      device_id: string
      media_id: string | null
      status: string
      proof_data: string | null
      created_at: Date
      completed_at: Date | null
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `verification_id`
     * const verificationWithVerification_idOnly = await prisma.verification.findMany({ select: { verification_id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `verification_id`
     * const verificationWithVerification_idOnly = await prisma.verification.createManyAndReturn({ 
     *   select: { verification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
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
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Verification model
   */ 
  interface VerificationFieldRefs {
    readonly verification_id: FieldRef<"Verification", 'String'>
    readonly device_id: FieldRef<"Verification", 'String'>
    readonly media_id: FieldRef<"Verification", 'String'>
    readonly status: FieldRef<"Verification", 'String'>
    readonly proof_data: FieldRef<"Verification", 'String'>
    readonly created_at: FieldRef<"Verification", 'DateTime'>
    readonly completed_at: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationInclude<ExtArgs> | null
  }


  /**
   * Model ZKProofJob
   */

  export type AggregateZKProofJob = {
    _count: ZKProofJobCountAggregateOutputType | null
    _min: ZKProofJobMinAggregateOutputType | null
    _max: ZKProofJobMaxAggregateOutputType | null
  }

  export type ZKProofJobMinAggregateOutputType = {
    proof_id: string | null
    device_id: string | null
    media_hash: string | null
    proof_type: string | null
    attestation_data: string | null
    status: string | null
    proof_data: Buffer | null
    proof_hash: string | null
    completed_at: Date | null
    error_message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ZKProofJobMaxAggregateOutputType = {
    proof_id: string | null
    device_id: string | null
    media_hash: string | null
    proof_type: string | null
    attestation_data: string | null
    status: string | null
    proof_data: Buffer | null
    proof_hash: string | null
    completed_at: Date | null
    error_message: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ZKProofJobCountAggregateOutputType = {
    proof_id: number
    device_id: number
    media_hash: number
    proof_type: number
    attestation_data: number
    status: number
    proof_data: number
    proof_hash: number
    completed_at: number
    error_message: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ZKProofJobMinAggregateInputType = {
    proof_id?: true
    device_id?: true
    media_hash?: true
    proof_type?: true
    attestation_data?: true
    status?: true
    proof_data?: true
    proof_hash?: true
    completed_at?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type ZKProofJobMaxAggregateInputType = {
    proof_id?: true
    device_id?: true
    media_hash?: true
    proof_type?: true
    attestation_data?: true
    status?: true
    proof_data?: true
    proof_hash?: true
    completed_at?: true
    error_message?: true
    created_at?: true
    updated_at?: true
  }

  export type ZKProofJobCountAggregateInputType = {
    proof_id?: true
    device_id?: true
    media_hash?: true
    proof_type?: true
    attestation_data?: true
    status?: true
    proof_data?: true
    proof_hash?: true
    completed_at?: true
    error_message?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ZKProofJobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZKProofJob to aggregate.
     */
    where?: ZKProofJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProofJobs to fetch.
     */
    orderBy?: ZKProofJobOrderByWithRelationInput | ZKProofJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ZKProofJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProofJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProofJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ZKProofJobs
    **/
    _count?: true | ZKProofJobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ZKProofJobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ZKProofJobMaxAggregateInputType
  }

  export type GetZKProofJobAggregateType<T extends ZKProofJobAggregateArgs> = {
        [P in keyof T & keyof AggregateZKProofJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateZKProofJob[P]>
      : GetScalarType<T[P], AggregateZKProofJob[P]>
  }




  export type ZKProofJobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ZKProofJobWhereInput
    orderBy?: ZKProofJobOrderByWithAggregationInput | ZKProofJobOrderByWithAggregationInput[]
    by: ZKProofJobScalarFieldEnum[] | ZKProofJobScalarFieldEnum
    having?: ZKProofJobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ZKProofJobCountAggregateInputType | true
    _min?: ZKProofJobMinAggregateInputType
    _max?: ZKProofJobMaxAggregateInputType
  }

  export type ZKProofJobGroupByOutputType = {
    proof_id: string
    device_id: string
    media_hash: string | null
    proof_type: string
    attestation_data: string | null
    status: string
    proof_data: Buffer | null
    proof_hash: string | null
    completed_at: Date | null
    error_message: string | null
    created_at: Date
    updated_at: Date
    _count: ZKProofJobCountAggregateOutputType | null
    _min: ZKProofJobMinAggregateOutputType | null
    _max: ZKProofJobMaxAggregateOutputType | null
  }

  type GetZKProofJobGroupByPayload<T extends ZKProofJobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ZKProofJobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ZKProofJobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ZKProofJobGroupByOutputType[P]>
            : GetScalarType<T[P], ZKProofJobGroupByOutputType[P]>
        }
      >
    >


  export type ZKProofJobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    proof_id?: boolean
    device_id?: boolean
    media_hash?: boolean
    proof_type?: boolean
    attestation_data?: boolean
    status?: boolean
    proof_data?: boolean
    proof_hash?: boolean
    completed_at?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zKProofJob"]>

  export type ZKProofJobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    proof_id?: boolean
    device_id?: boolean
    media_hash?: boolean
    proof_type?: boolean
    attestation_data?: boolean
    status?: boolean
    proof_data?: boolean
    proof_hash?: boolean
    completed_at?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["zKProofJob"]>

  export type ZKProofJobSelectScalar = {
    proof_id?: boolean
    device_id?: boolean
    media_hash?: boolean
    proof_type?: boolean
    attestation_data?: boolean
    status?: boolean
    proof_data?: boolean
    proof_hash?: boolean
    completed_at?: boolean
    error_message?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ZKProofJobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type ZKProofJobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $ZKProofJobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ZKProofJob"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      proof_id: string
      device_id: string
      media_hash: string | null
      proof_type: string
      attestation_data: string | null
      status: string
      proof_data: Buffer | null
      proof_hash: string | null
      completed_at: Date | null
      error_message: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["zKProofJob"]>
    composites: {}
  }

  type ZKProofJobGetPayload<S extends boolean | null | undefined | ZKProofJobDefaultArgs> = $Result.GetResult<Prisma.$ZKProofJobPayload, S>

  type ZKProofJobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ZKProofJobFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ZKProofJobCountAggregateInputType | true
    }

  export interface ZKProofJobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ZKProofJob'], meta: { name: 'ZKProofJob' } }
    /**
     * Find zero or one ZKProofJob that matches the filter.
     * @param {ZKProofJobFindUniqueArgs} args - Arguments to find a ZKProofJob
     * @example
     * // Get one ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ZKProofJobFindUniqueArgs>(args: SelectSubset<T, ZKProofJobFindUniqueArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ZKProofJob that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ZKProofJobFindUniqueOrThrowArgs} args - Arguments to find a ZKProofJob
     * @example
     * // Get one ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ZKProofJobFindUniqueOrThrowArgs>(args: SelectSubset<T, ZKProofJobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ZKProofJob that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobFindFirstArgs} args - Arguments to find a ZKProofJob
     * @example
     * // Get one ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ZKProofJobFindFirstArgs>(args?: SelectSubset<T, ZKProofJobFindFirstArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ZKProofJob that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobFindFirstOrThrowArgs} args - Arguments to find a ZKProofJob
     * @example
     * // Get one ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ZKProofJobFindFirstOrThrowArgs>(args?: SelectSubset<T, ZKProofJobFindFirstOrThrowArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ZKProofJobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ZKProofJobs
     * const zKProofJobs = await prisma.zKProofJob.findMany()
     * 
     * // Get first 10 ZKProofJobs
     * const zKProofJobs = await prisma.zKProofJob.findMany({ take: 10 })
     * 
     * // Only select the `proof_id`
     * const zKProofJobWithProof_idOnly = await prisma.zKProofJob.findMany({ select: { proof_id: true } })
     * 
     */
    findMany<T extends ZKProofJobFindManyArgs>(args?: SelectSubset<T, ZKProofJobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ZKProofJob.
     * @param {ZKProofJobCreateArgs} args - Arguments to create a ZKProofJob.
     * @example
     * // Create one ZKProofJob
     * const ZKProofJob = await prisma.zKProofJob.create({
     *   data: {
     *     // ... data to create a ZKProofJob
     *   }
     * })
     * 
     */
    create<T extends ZKProofJobCreateArgs>(args: SelectSubset<T, ZKProofJobCreateArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ZKProofJobs.
     * @param {ZKProofJobCreateManyArgs} args - Arguments to create many ZKProofJobs.
     * @example
     * // Create many ZKProofJobs
     * const zKProofJob = await prisma.zKProofJob.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ZKProofJobCreateManyArgs>(args?: SelectSubset<T, ZKProofJobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ZKProofJobs and returns the data saved in the database.
     * @param {ZKProofJobCreateManyAndReturnArgs} args - Arguments to create many ZKProofJobs.
     * @example
     * // Create many ZKProofJobs
     * const zKProofJob = await prisma.zKProofJob.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ZKProofJobs and only return the `proof_id`
     * const zKProofJobWithProof_idOnly = await prisma.zKProofJob.createManyAndReturn({ 
     *   select: { proof_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ZKProofJobCreateManyAndReturnArgs>(args?: SelectSubset<T, ZKProofJobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ZKProofJob.
     * @param {ZKProofJobDeleteArgs} args - Arguments to delete one ZKProofJob.
     * @example
     * // Delete one ZKProofJob
     * const ZKProofJob = await prisma.zKProofJob.delete({
     *   where: {
     *     // ... filter to delete one ZKProofJob
     *   }
     * })
     * 
     */
    delete<T extends ZKProofJobDeleteArgs>(args: SelectSubset<T, ZKProofJobDeleteArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ZKProofJob.
     * @param {ZKProofJobUpdateArgs} args - Arguments to update one ZKProofJob.
     * @example
     * // Update one ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ZKProofJobUpdateArgs>(args: SelectSubset<T, ZKProofJobUpdateArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ZKProofJobs.
     * @param {ZKProofJobDeleteManyArgs} args - Arguments to filter ZKProofJobs to delete.
     * @example
     * // Delete a few ZKProofJobs
     * const { count } = await prisma.zKProofJob.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ZKProofJobDeleteManyArgs>(args?: SelectSubset<T, ZKProofJobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ZKProofJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ZKProofJobs
     * const zKProofJob = await prisma.zKProofJob.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ZKProofJobUpdateManyArgs>(args: SelectSubset<T, ZKProofJobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ZKProofJob.
     * @param {ZKProofJobUpsertArgs} args - Arguments to update or create a ZKProofJob.
     * @example
     * // Update or create a ZKProofJob
     * const zKProofJob = await prisma.zKProofJob.upsert({
     *   create: {
     *     // ... data to create a ZKProofJob
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ZKProofJob we want to update
     *   }
     * })
     */
    upsert<T extends ZKProofJobUpsertArgs>(args: SelectSubset<T, ZKProofJobUpsertArgs<ExtArgs>>): Prisma__ZKProofJobClient<$Result.GetResult<Prisma.$ZKProofJobPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ZKProofJobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobCountArgs} args - Arguments to filter ZKProofJobs to count.
     * @example
     * // Count the number of ZKProofJobs
     * const count = await prisma.zKProofJob.count({
     *   where: {
     *     // ... the filter for the ZKProofJobs we want to count
     *   }
     * })
    **/
    count<T extends ZKProofJobCountArgs>(
      args?: Subset<T, ZKProofJobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ZKProofJobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ZKProofJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ZKProofJobAggregateArgs>(args: Subset<T, ZKProofJobAggregateArgs>): Prisma.PrismaPromise<GetZKProofJobAggregateType<T>>

    /**
     * Group by ZKProofJob.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ZKProofJobGroupByArgs} args - Group by arguments.
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
      T extends ZKProofJobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ZKProofJobGroupByArgs['orderBy'] }
        : { orderBy?: ZKProofJobGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ZKProofJobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZKProofJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ZKProofJob model
   */
  readonly fields: ZKProofJobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ZKProofJob.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ZKProofJobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ZKProofJob model
   */ 
  interface ZKProofJobFieldRefs {
    readonly proof_id: FieldRef<"ZKProofJob", 'String'>
    readonly device_id: FieldRef<"ZKProofJob", 'String'>
    readonly media_hash: FieldRef<"ZKProofJob", 'String'>
    readonly proof_type: FieldRef<"ZKProofJob", 'String'>
    readonly attestation_data: FieldRef<"ZKProofJob", 'String'>
    readonly status: FieldRef<"ZKProofJob", 'String'>
    readonly proof_data: FieldRef<"ZKProofJob", 'Bytes'>
    readonly proof_hash: FieldRef<"ZKProofJob", 'String'>
    readonly completed_at: FieldRef<"ZKProofJob", 'DateTime'>
    readonly error_message: FieldRef<"ZKProofJob", 'String'>
    readonly created_at: FieldRef<"ZKProofJob", 'DateTime'>
    readonly updated_at: FieldRef<"ZKProofJob", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ZKProofJob findUnique
   */
  export type ZKProofJobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter, which ZKProofJob to fetch.
     */
    where: ZKProofJobWhereUniqueInput
  }

  /**
   * ZKProofJob findUniqueOrThrow
   */
  export type ZKProofJobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter, which ZKProofJob to fetch.
     */
    where: ZKProofJobWhereUniqueInput
  }

  /**
   * ZKProofJob findFirst
   */
  export type ZKProofJobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter, which ZKProofJob to fetch.
     */
    where?: ZKProofJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProofJobs to fetch.
     */
    orderBy?: ZKProofJobOrderByWithRelationInput | ZKProofJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZKProofJobs.
     */
    cursor?: ZKProofJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProofJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProofJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZKProofJobs.
     */
    distinct?: ZKProofJobScalarFieldEnum | ZKProofJobScalarFieldEnum[]
  }

  /**
   * ZKProofJob findFirstOrThrow
   */
  export type ZKProofJobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter, which ZKProofJob to fetch.
     */
    where?: ZKProofJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProofJobs to fetch.
     */
    orderBy?: ZKProofJobOrderByWithRelationInput | ZKProofJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ZKProofJobs.
     */
    cursor?: ZKProofJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProofJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProofJobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ZKProofJobs.
     */
    distinct?: ZKProofJobScalarFieldEnum | ZKProofJobScalarFieldEnum[]
  }

  /**
   * ZKProofJob findMany
   */
  export type ZKProofJobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter, which ZKProofJobs to fetch.
     */
    where?: ZKProofJobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ZKProofJobs to fetch.
     */
    orderBy?: ZKProofJobOrderByWithRelationInput | ZKProofJobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ZKProofJobs.
     */
    cursor?: ZKProofJobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ZKProofJobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ZKProofJobs.
     */
    skip?: number
    distinct?: ZKProofJobScalarFieldEnum | ZKProofJobScalarFieldEnum[]
  }

  /**
   * ZKProofJob create
   */
  export type ZKProofJobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * The data needed to create a ZKProofJob.
     */
    data: XOR<ZKProofJobCreateInput, ZKProofJobUncheckedCreateInput>
  }

  /**
   * ZKProofJob createMany
   */
  export type ZKProofJobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ZKProofJobs.
     */
    data: ZKProofJobCreateManyInput | ZKProofJobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ZKProofJob createManyAndReturn
   */
  export type ZKProofJobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ZKProofJobs.
     */
    data: ZKProofJobCreateManyInput | ZKProofJobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ZKProofJob update
   */
  export type ZKProofJobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * The data needed to update a ZKProofJob.
     */
    data: XOR<ZKProofJobUpdateInput, ZKProofJobUncheckedUpdateInput>
    /**
     * Choose, which ZKProofJob to update.
     */
    where: ZKProofJobWhereUniqueInput
  }

  /**
   * ZKProofJob updateMany
   */
  export type ZKProofJobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ZKProofJobs.
     */
    data: XOR<ZKProofJobUpdateManyMutationInput, ZKProofJobUncheckedUpdateManyInput>
    /**
     * Filter which ZKProofJobs to update
     */
    where?: ZKProofJobWhereInput
  }

  /**
   * ZKProofJob upsert
   */
  export type ZKProofJobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * The filter to search for the ZKProofJob to update in case it exists.
     */
    where: ZKProofJobWhereUniqueInput
    /**
     * In case the ZKProofJob found by the `where` argument doesn't exist, create a new ZKProofJob with this data.
     */
    create: XOR<ZKProofJobCreateInput, ZKProofJobUncheckedCreateInput>
    /**
     * In case the ZKProofJob was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ZKProofJobUpdateInput, ZKProofJobUncheckedUpdateInput>
  }

  /**
   * ZKProofJob delete
   */
  export type ZKProofJobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
    /**
     * Filter which ZKProofJob to delete.
     */
    where: ZKProofJobWhereUniqueInput
  }

  /**
   * ZKProofJob deleteMany
   */
  export type ZKProofJobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ZKProofJobs to delete
     */
    where?: ZKProofJobWhereInput
  }

  /**
   * ZKProofJob without action
   */
  export type ZKProofJobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ZKProofJob
     */
    select?: ZKProofJobSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ZKProofJobInclude<ExtArgs> | null
  }


  /**
   * Model UsageMeter
   */

  export type AggregateUsageMeter = {
    _count: UsageMeterCountAggregateOutputType | null
    _avg: UsageMeterAvgAggregateOutputType | null
    _sum: UsageMeterSumAggregateOutputType | null
    _min: UsageMeterMinAggregateOutputType | null
    _max: UsageMeterMaxAggregateOutputType | null
  }

  export type UsageMeterAvgAggregateOutputType = {
    value: number | null
  }

  export type UsageMeterSumAggregateOutputType = {
    value: bigint | null
  }

  export type UsageMeterMinAggregateOutputType = {
    id: string | null
    device_id: string | null
    metric: string | null
    value: bigint | null
    period_start: Date | null
    period_end: Date | null
  }

  export type UsageMeterMaxAggregateOutputType = {
    id: string | null
    device_id: string | null
    metric: string | null
    value: bigint | null
    period_start: Date | null
    period_end: Date | null
  }

  export type UsageMeterCountAggregateOutputType = {
    id: number
    device_id: number
    metric: number
    value: number
    period_start: number
    period_end: number
    _all: number
  }


  export type UsageMeterAvgAggregateInputType = {
    value?: true
  }

  export type UsageMeterSumAggregateInputType = {
    value?: true
  }

  export type UsageMeterMinAggregateInputType = {
    id?: true
    device_id?: true
    metric?: true
    value?: true
    period_start?: true
    period_end?: true
  }

  export type UsageMeterMaxAggregateInputType = {
    id?: true
    device_id?: true
    metric?: true
    value?: true
    period_start?: true
    period_end?: true
  }

  export type UsageMeterCountAggregateInputType = {
    id?: true
    device_id?: true
    metric?: true
    value?: true
    period_start?: true
    period_end?: true
    _all?: true
  }

  export type UsageMeterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMeter to aggregate.
     */
    where?: UsageMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMeters to fetch.
     */
    orderBy?: UsageMeterOrderByWithRelationInput | UsageMeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsageMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UsageMeters
    **/
    _count?: true | UsageMeterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsageMeterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsageMeterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsageMeterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsageMeterMaxAggregateInputType
  }

  export type GetUsageMeterAggregateType<T extends UsageMeterAggregateArgs> = {
        [P in keyof T & keyof AggregateUsageMeter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsageMeter[P]>
      : GetScalarType<T[P], AggregateUsageMeter[P]>
  }




  export type UsageMeterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsageMeterWhereInput
    orderBy?: UsageMeterOrderByWithAggregationInput | UsageMeterOrderByWithAggregationInput[]
    by: UsageMeterScalarFieldEnum[] | UsageMeterScalarFieldEnum
    having?: UsageMeterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsageMeterCountAggregateInputType | true
    _avg?: UsageMeterAvgAggregateInputType
    _sum?: UsageMeterSumAggregateInputType
    _min?: UsageMeterMinAggregateInputType
    _max?: UsageMeterMaxAggregateInputType
  }

  export type UsageMeterGroupByOutputType = {
    id: string
    device_id: string
    metric: string
    value: bigint
    period_start: Date
    period_end: Date | null
    _count: UsageMeterCountAggregateOutputType | null
    _avg: UsageMeterAvgAggregateOutputType | null
    _sum: UsageMeterSumAggregateOutputType | null
    _min: UsageMeterMinAggregateOutputType | null
    _max: UsageMeterMaxAggregateOutputType | null
  }

  type GetUsageMeterGroupByPayload<T extends UsageMeterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsageMeterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsageMeterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsageMeterGroupByOutputType[P]>
            : GetScalarType<T[P], UsageMeterGroupByOutputType[P]>
        }
      >
    >


  export type UsageMeterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    metric?: boolean
    value?: boolean
    period_start?: boolean
    period_end?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMeter"]>

  export type UsageMeterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    metric?: boolean
    value?: boolean
    period_start?: boolean
    period_end?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usageMeter"]>

  export type UsageMeterSelectScalar = {
    id?: boolean
    device_id?: boolean
    metric?: boolean
    value?: boolean
    period_start?: boolean
    period_end?: boolean
  }

  export type UsageMeterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type UsageMeterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $UsageMeterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UsageMeter"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device_id: string
      metric: string
      value: bigint
      period_start: Date
      period_end: Date | null
    }, ExtArgs["result"]["usageMeter"]>
    composites: {}
  }

  type UsageMeterGetPayload<S extends boolean | null | undefined | UsageMeterDefaultArgs> = $Result.GetResult<Prisma.$UsageMeterPayload, S>

  type UsageMeterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsageMeterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsageMeterCountAggregateInputType | true
    }

  export interface UsageMeterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UsageMeter'], meta: { name: 'UsageMeter' } }
    /**
     * Find zero or one UsageMeter that matches the filter.
     * @param {UsageMeterFindUniqueArgs} args - Arguments to find a UsageMeter
     * @example
     * // Get one UsageMeter
     * const usageMeter = await prisma.usageMeter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsageMeterFindUniqueArgs>(args: SelectSubset<T, UsageMeterFindUniqueArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UsageMeter that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UsageMeterFindUniqueOrThrowArgs} args - Arguments to find a UsageMeter
     * @example
     * // Get one UsageMeter
     * const usageMeter = await prisma.usageMeter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsageMeterFindUniqueOrThrowArgs>(args: SelectSubset<T, UsageMeterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UsageMeter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterFindFirstArgs} args - Arguments to find a UsageMeter
     * @example
     * // Get one UsageMeter
     * const usageMeter = await prisma.usageMeter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsageMeterFindFirstArgs>(args?: SelectSubset<T, UsageMeterFindFirstArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UsageMeter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterFindFirstOrThrowArgs} args - Arguments to find a UsageMeter
     * @example
     * // Get one UsageMeter
     * const usageMeter = await prisma.usageMeter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsageMeterFindFirstOrThrowArgs>(args?: SelectSubset<T, UsageMeterFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UsageMeters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UsageMeters
     * const usageMeters = await prisma.usageMeter.findMany()
     * 
     * // Get first 10 UsageMeters
     * const usageMeters = await prisma.usageMeter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usageMeterWithIdOnly = await prisma.usageMeter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsageMeterFindManyArgs>(args?: SelectSubset<T, UsageMeterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UsageMeter.
     * @param {UsageMeterCreateArgs} args - Arguments to create a UsageMeter.
     * @example
     * // Create one UsageMeter
     * const UsageMeter = await prisma.usageMeter.create({
     *   data: {
     *     // ... data to create a UsageMeter
     *   }
     * })
     * 
     */
    create<T extends UsageMeterCreateArgs>(args: SelectSubset<T, UsageMeterCreateArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UsageMeters.
     * @param {UsageMeterCreateManyArgs} args - Arguments to create many UsageMeters.
     * @example
     * // Create many UsageMeters
     * const usageMeter = await prisma.usageMeter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsageMeterCreateManyArgs>(args?: SelectSubset<T, UsageMeterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UsageMeters and returns the data saved in the database.
     * @param {UsageMeterCreateManyAndReturnArgs} args - Arguments to create many UsageMeters.
     * @example
     * // Create many UsageMeters
     * const usageMeter = await prisma.usageMeter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UsageMeters and only return the `id`
     * const usageMeterWithIdOnly = await prisma.usageMeter.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsageMeterCreateManyAndReturnArgs>(args?: SelectSubset<T, UsageMeterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UsageMeter.
     * @param {UsageMeterDeleteArgs} args - Arguments to delete one UsageMeter.
     * @example
     * // Delete one UsageMeter
     * const UsageMeter = await prisma.usageMeter.delete({
     *   where: {
     *     // ... filter to delete one UsageMeter
     *   }
     * })
     * 
     */
    delete<T extends UsageMeterDeleteArgs>(args: SelectSubset<T, UsageMeterDeleteArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UsageMeter.
     * @param {UsageMeterUpdateArgs} args - Arguments to update one UsageMeter.
     * @example
     * // Update one UsageMeter
     * const usageMeter = await prisma.usageMeter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsageMeterUpdateArgs>(args: SelectSubset<T, UsageMeterUpdateArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UsageMeters.
     * @param {UsageMeterDeleteManyArgs} args - Arguments to filter UsageMeters to delete.
     * @example
     * // Delete a few UsageMeters
     * const { count } = await prisma.usageMeter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsageMeterDeleteManyArgs>(args?: SelectSubset<T, UsageMeterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UsageMeters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UsageMeters
     * const usageMeter = await prisma.usageMeter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsageMeterUpdateManyArgs>(args: SelectSubset<T, UsageMeterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UsageMeter.
     * @param {UsageMeterUpsertArgs} args - Arguments to update or create a UsageMeter.
     * @example
     * // Update or create a UsageMeter
     * const usageMeter = await prisma.usageMeter.upsert({
     *   create: {
     *     // ... data to create a UsageMeter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UsageMeter we want to update
     *   }
     * })
     */
    upsert<T extends UsageMeterUpsertArgs>(args: SelectSubset<T, UsageMeterUpsertArgs<ExtArgs>>): Prisma__UsageMeterClient<$Result.GetResult<Prisma.$UsageMeterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UsageMeters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterCountArgs} args - Arguments to filter UsageMeters to count.
     * @example
     * // Count the number of UsageMeters
     * const count = await prisma.usageMeter.count({
     *   where: {
     *     // ... the filter for the UsageMeters we want to count
     *   }
     * })
    **/
    count<T extends UsageMeterCountArgs>(
      args?: Subset<T, UsageMeterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsageMeterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UsageMeter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsageMeterAggregateArgs>(args: Subset<T, UsageMeterAggregateArgs>): Prisma.PrismaPromise<GetUsageMeterAggregateType<T>>

    /**
     * Group by UsageMeter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsageMeterGroupByArgs} args - Group by arguments.
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
      T extends UsageMeterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsageMeterGroupByArgs['orderBy'] }
        : { orderBy?: UsageMeterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsageMeterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsageMeterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UsageMeter model
   */
  readonly fields: UsageMeterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UsageMeter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsageMeterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the UsageMeter model
   */ 
  interface UsageMeterFieldRefs {
    readonly id: FieldRef<"UsageMeter", 'String'>
    readonly device_id: FieldRef<"UsageMeter", 'String'>
    readonly metric: FieldRef<"UsageMeter", 'String'>
    readonly value: FieldRef<"UsageMeter", 'BigInt'>
    readonly period_start: FieldRef<"UsageMeter", 'DateTime'>
    readonly period_end: FieldRef<"UsageMeter", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UsageMeter findUnique
   */
  export type UsageMeterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter, which UsageMeter to fetch.
     */
    where: UsageMeterWhereUniqueInput
  }

  /**
   * UsageMeter findUniqueOrThrow
   */
  export type UsageMeterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter, which UsageMeter to fetch.
     */
    where: UsageMeterWhereUniqueInput
  }

  /**
   * UsageMeter findFirst
   */
  export type UsageMeterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter, which UsageMeter to fetch.
     */
    where?: UsageMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMeters to fetch.
     */
    orderBy?: UsageMeterOrderByWithRelationInput | UsageMeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMeters.
     */
    cursor?: UsageMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMeters.
     */
    distinct?: UsageMeterScalarFieldEnum | UsageMeterScalarFieldEnum[]
  }

  /**
   * UsageMeter findFirstOrThrow
   */
  export type UsageMeterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter, which UsageMeter to fetch.
     */
    where?: UsageMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMeters to fetch.
     */
    orderBy?: UsageMeterOrderByWithRelationInput | UsageMeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UsageMeters.
     */
    cursor?: UsageMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMeters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UsageMeters.
     */
    distinct?: UsageMeterScalarFieldEnum | UsageMeterScalarFieldEnum[]
  }

  /**
   * UsageMeter findMany
   */
  export type UsageMeterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter, which UsageMeters to fetch.
     */
    where?: UsageMeterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UsageMeters to fetch.
     */
    orderBy?: UsageMeterOrderByWithRelationInput | UsageMeterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UsageMeters.
     */
    cursor?: UsageMeterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UsageMeters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UsageMeters.
     */
    skip?: number
    distinct?: UsageMeterScalarFieldEnum | UsageMeterScalarFieldEnum[]
  }

  /**
   * UsageMeter create
   */
  export type UsageMeterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * The data needed to create a UsageMeter.
     */
    data: XOR<UsageMeterCreateInput, UsageMeterUncheckedCreateInput>
  }

  /**
   * UsageMeter createMany
   */
  export type UsageMeterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UsageMeters.
     */
    data: UsageMeterCreateManyInput | UsageMeterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UsageMeter createManyAndReturn
   */
  export type UsageMeterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UsageMeters.
     */
    data: UsageMeterCreateManyInput | UsageMeterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UsageMeter update
   */
  export type UsageMeterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * The data needed to update a UsageMeter.
     */
    data: XOR<UsageMeterUpdateInput, UsageMeterUncheckedUpdateInput>
    /**
     * Choose, which UsageMeter to update.
     */
    where: UsageMeterWhereUniqueInput
  }

  /**
   * UsageMeter updateMany
   */
  export type UsageMeterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UsageMeters.
     */
    data: XOR<UsageMeterUpdateManyMutationInput, UsageMeterUncheckedUpdateManyInput>
    /**
     * Filter which UsageMeters to update
     */
    where?: UsageMeterWhereInput
  }

  /**
   * UsageMeter upsert
   */
  export type UsageMeterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * The filter to search for the UsageMeter to update in case it exists.
     */
    where: UsageMeterWhereUniqueInput
    /**
     * In case the UsageMeter found by the `where` argument doesn't exist, create a new UsageMeter with this data.
     */
    create: XOR<UsageMeterCreateInput, UsageMeterUncheckedCreateInput>
    /**
     * In case the UsageMeter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsageMeterUpdateInput, UsageMeterUncheckedUpdateInput>
  }

  /**
   * UsageMeter delete
   */
  export type UsageMeterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
    /**
     * Filter which UsageMeter to delete.
     */
    where: UsageMeterWhereUniqueInput
  }

  /**
   * UsageMeter deleteMany
   */
  export type UsageMeterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UsageMeters to delete
     */
    where?: UsageMeterWhereInput
  }

  /**
   * UsageMeter without action
   */
  export type UsageMeterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsageMeter
     */
    select?: UsageMeterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsageMeterInclude<ExtArgs> | null
  }


  /**
   * Model BlockchainAnchor
   */

  export type AggregateBlockchainAnchor = {
    _count: BlockchainAnchorCountAggregateOutputType | null
    _min: BlockchainAnchorMinAggregateOutputType | null
    _max: BlockchainAnchorMaxAggregateOutputType | null
  }

  export type BlockchainAnchorMinAggregateOutputType = {
    anchor_id: string | null
    device_id: string | null
    proof_id: string | null
    proof_hash: string | null
    arweave_tx_id: string | null
    arweave_status: string | null
    solana_tx_sig: string | null
    solana_status: string | null
    anchored_at: Date | null
    updated_at: Date | null
  }

  export type BlockchainAnchorMaxAggregateOutputType = {
    anchor_id: string | null
    device_id: string | null
    proof_id: string | null
    proof_hash: string | null
    arweave_tx_id: string | null
    arweave_status: string | null
    solana_tx_sig: string | null
    solana_status: string | null
    anchored_at: Date | null
    updated_at: Date | null
  }

  export type BlockchainAnchorCountAggregateOutputType = {
    anchor_id: number
    device_id: number
    proof_id: number
    proof_hash: number
    arweave_tx_id: number
    arweave_status: number
    solana_tx_sig: number
    solana_status: number
    anchored_at: number
    updated_at: number
    _all: number
  }


  export type BlockchainAnchorMinAggregateInputType = {
    anchor_id?: true
    device_id?: true
    proof_id?: true
    proof_hash?: true
    arweave_tx_id?: true
    arweave_status?: true
    solana_tx_sig?: true
    solana_status?: true
    anchored_at?: true
    updated_at?: true
  }

  export type BlockchainAnchorMaxAggregateInputType = {
    anchor_id?: true
    device_id?: true
    proof_id?: true
    proof_hash?: true
    arweave_tx_id?: true
    arweave_status?: true
    solana_tx_sig?: true
    solana_status?: true
    anchored_at?: true
    updated_at?: true
  }

  export type BlockchainAnchorCountAggregateInputType = {
    anchor_id?: true
    device_id?: true
    proof_id?: true
    proof_hash?: true
    arweave_tx_id?: true
    arweave_status?: true
    solana_tx_sig?: true
    solana_status?: true
    anchored_at?: true
    updated_at?: true
    _all?: true
  }

  export type BlockchainAnchorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockchainAnchor to aggregate.
     */
    where?: BlockchainAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainAnchors to fetch.
     */
    orderBy?: BlockchainAnchorOrderByWithRelationInput | BlockchainAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockchainAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockchainAnchors
    **/
    _count?: true | BlockchainAnchorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockchainAnchorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockchainAnchorMaxAggregateInputType
  }

  export type GetBlockchainAnchorAggregateType<T extends BlockchainAnchorAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockchainAnchor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockchainAnchor[P]>
      : GetScalarType<T[P], AggregateBlockchainAnchor[P]>
  }




  export type BlockchainAnchorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlockchainAnchorWhereInput
    orderBy?: BlockchainAnchorOrderByWithAggregationInput | BlockchainAnchorOrderByWithAggregationInput[]
    by: BlockchainAnchorScalarFieldEnum[] | BlockchainAnchorScalarFieldEnum
    having?: BlockchainAnchorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockchainAnchorCountAggregateInputType | true
    _min?: BlockchainAnchorMinAggregateInputType
    _max?: BlockchainAnchorMaxAggregateInputType
  }

  export type BlockchainAnchorGroupByOutputType = {
    anchor_id: string
    device_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id: string | null
    arweave_status: string | null
    solana_tx_sig: string | null
    solana_status: string | null
    anchored_at: Date
    updated_at: Date
    _count: BlockchainAnchorCountAggregateOutputType | null
    _min: BlockchainAnchorMinAggregateOutputType | null
    _max: BlockchainAnchorMaxAggregateOutputType | null
  }

  type GetBlockchainAnchorGroupByPayload<T extends BlockchainAnchorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockchainAnchorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockchainAnchorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockchainAnchorGroupByOutputType[P]>
            : GetScalarType<T[P], BlockchainAnchorGroupByOutputType[P]>
        }
      >
    >


  export type BlockchainAnchorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anchor_id?: boolean
    device_id?: boolean
    proof_id?: boolean
    proof_hash?: boolean
    arweave_tx_id?: boolean
    arweave_status?: boolean
    solana_tx_sig?: boolean
    solana_status?: boolean
    anchored_at?: boolean
    updated_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockchainAnchor"]>

  export type BlockchainAnchorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    anchor_id?: boolean
    device_id?: boolean
    proof_id?: boolean
    proof_hash?: boolean
    arweave_tx_id?: boolean
    arweave_status?: boolean
    solana_tx_sig?: boolean
    solana_status?: boolean
    anchored_at?: boolean
    updated_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["blockchainAnchor"]>

  export type BlockchainAnchorSelectScalar = {
    anchor_id?: boolean
    device_id?: boolean
    proof_id?: boolean
    proof_hash?: boolean
    arweave_tx_id?: boolean
    arweave_status?: boolean
    solana_tx_sig?: boolean
    solana_status?: boolean
    anchored_at?: boolean
    updated_at?: boolean
  }

  export type BlockchainAnchorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type BlockchainAnchorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $BlockchainAnchorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BlockchainAnchor"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      anchor_id: string
      device_id: string
      proof_id: string
      proof_hash: string
      arweave_tx_id: string | null
      arweave_status: string | null
      solana_tx_sig: string | null
      solana_status: string | null
      anchored_at: Date
      updated_at: Date
    }, ExtArgs["result"]["blockchainAnchor"]>
    composites: {}
  }

  type BlockchainAnchorGetPayload<S extends boolean | null | undefined | BlockchainAnchorDefaultArgs> = $Result.GetResult<Prisma.$BlockchainAnchorPayload, S>

  type BlockchainAnchorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BlockchainAnchorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BlockchainAnchorCountAggregateInputType | true
    }

  export interface BlockchainAnchorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockchainAnchor'], meta: { name: 'BlockchainAnchor' } }
    /**
     * Find zero or one BlockchainAnchor that matches the filter.
     * @param {BlockchainAnchorFindUniqueArgs} args - Arguments to find a BlockchainAnchor
     * @example
     * // Get one BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlockchainAnchorFindUniqueArgs>(args: SelectSubset<T, BlockchainAnchorFindUniqueArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BlockchainAnchor that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BlockchainAnchorFindUniqueOrThrowArgs} args - Arguments to find a BlockchainAnchor
     * @example
     * // Get one BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlockchainAnchorFindUniqueOrThrowArgs>(args: SelectSubset<T, BlockchainAnchorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BlockchainAnchor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorFindFirstArgs} args - Arguments to find a BlockchainAnchor
     * @example
     * // Get one BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlockchainAnchorFindFirstArgs>(args?: SelectSubset<T, BlockchainAnchorFindFirstArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BlockchainAnchor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorFindFirstOrThrowArgs} args - Arguments to find a BlockchainAnchor
     * @example
     * // Get one BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlockchainAnchorFindFirstOrThrowArgs>(args?: SelectSubset<T, BlockchainAnchorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BlockchainAnchors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockchainAnchors
     * const blockchainAnchors = await prisma.blockchainAnchor.findMany()
     * 
     * // Get first 10 BlockchainAnchors
     * const blockchainAnchors = await prisma.blockchainAnchor.findMany({ take: 10 })
     * 
     * // Only select the `anchor_id`
     * const blockchainAnchorWithAnchor_idOnly = await prisma.blockchainAnchor.findMany({ select: { anchor_id: true } })
     * 
     */
    findMany<T extends BlockchainAnchorFindManyArgs>(args?: SelectSubset<T, BlockchainAnchorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BlockchainAnchor.
     * @param {BlockchainAnchorCreateArgs} args - Arguments to create a BlockchainAnchor.
     * @example
     * // Create one BlockchainAnchor
     * const BlockchainAnchor = await prisma.blockchainAnchor.create({
     *   data: {
     *     // ... data to create a BlockchainAnchor
     *   }
     * })
     * 
     */
    create<T extends BlockchainAnchorCreateArgs>(args: SelectSubset<T, BlockchainAnchorCreateArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BlockchainAnchors.
     * @param {BlockchainAnchorCreateManyArgs} args - Arguments to create many BlockchainAnchors.
     * @example
     * // Create many BlockchainAnchors
     * const blockchainAnchor = await prisma.blockchainAnchor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlockchainAnchorCreateManyArgs>(args?: SelectSubset<T, BlockchainAnchorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BlockchainAnchors and returns the data saved in the database.
     * @param {BlockchainAnchorCreateManyAndReturnArgs} args - Arguments to create many BlockchainAnchors.
     * @example
     * // Create many BlockchainAnchors
     * const blockchainAnchor = await prisma.blockchainAnchor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BlockchainAnchors and only return the `anchor_id`
     * const blockchainAnchorWithAnchor_idOnly = await prisma.blockchainAnchor.createManyAndReturn({ 
     *   select: { anchor_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlockchainAnchorCreateManyAndReturnArgs>(args?: SelectSubset<T, BlockchainAnchorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BlockchainAnchor.
     * @param {BlockchainAnchorDeleteArgs} args - Arguments to delete one BlockchainAnchor.
     * @example
     * // Delete one BlockchainAnchor
     * const BlockchainAnchor = await prisma.blockchainAnchor.delete({
     *   where: {
     *     // ... filter to delete one BlockchainAnchor
     *   }
     * })
     * 
     */
    delete<T extends BlockchainAnchorDeleteArgs>(args: SelectSubset<T, BlockchainAnchorDeleteArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BlockchainAnchor.
     * @param {BlockchainAnchorUpdateArgs} args - Arguments to update one BlockchainAnchor.
     * @example
     * // Update one BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlockchainAnchorUpdateArgs>(args: SelectSubset<T, BlockchainAnchorUpdateArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BlockchainAnchors.
     * @param {BlockchainAnchorDeleteManyArgs} args - Arguments to filter BlockchainAnchors to delete.
     * @example
     * // Delete a few BlockchainAnchors
     * const { count } = await prisma.blockchainAnchor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlockchainAnchorDeleteManyArgs>(args?: SelectSubset<T, BlockchainAnchorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockchainAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockchainAnchors
     * const blockchainAnchor = await prisma.blockchainAnchor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlockchainAnchorUpdateManyArgs>(args: SelectSubset<T, BlockchainAnchorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockchainAnchor.
     * @param {BlockchainAnchorUpsertArgs} args - Arguments to update or create a BlockchainAnchor.
     * @example
     * // Update or create a BlockchainAnchor
     * const blockchainAnchor = await prisma.blockchainAnchor.upsert({
     *   create: {
     *     // ... data to create a BlockchainAnchor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockchainAnchor we want to update
     *   }
     * })
     */
    upsert<T extends BlockchainAnchorUpsertArgs>(args: SelectSubset<T, BlockchainAnchorUpsertArgs<ExtArgs>>): Prisma__BlockchainAnchorClient<$Result.GetResult<Prisma.$BlockchainAnchorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BlockchainAnchors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorCountArgs} args - Arguments to filter BlockchainAnchors to count.
     * @example
     * // Count the number of BlockchainAnchors
     * const count = await prisma.blockchainAnchor.count({
     *   where: {
     *     // ... the filter for the BlockchainAnchors we want to count
     *   }
     * })
    **/
    count<T extends BlockchainAnchorCountArgs>(
      args?: Subset<T, BlockchainAnchorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockchainAnchorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockchainAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlockchainAnchorAggregateArgs>(args: Subset<T, BlockchainAnchorAggregateArgs>): Prisma.PrismaPromise<GetBlockchainAnchorAggregateType<T>>

    /**
     * Group by BlockchainAnchor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockchainAnchorGroupByArgs} args - Group by arguments.
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
      T extends BlockchainAnchorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockchainAnchorGroupByArgs['orderBy'] }
        : { orderBy?: BlockchainAnchorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlockchainAnchorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockchainAnchorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockchainAnchor model
   */
  readonly fields: BlockchainAnchorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockchainAnchor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockchainAnchorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BlockchainAnchor model
   */ 
  interface BlockchainAnchorFieldRefs {
    readonly anchor_id: FieldRef<"BlockchainAnchor", 'String'>
    readonly device_id: FieldRef<"BlockchainAnchor", 'String'>
    readonly proof_id: FieldRef<"BlockchainAnchor", 'String'>
    readonly proof_hash: FieldRef<"BlockchainAnchor", 'String'>
    readonly arweave_tx_id: FieldRef<"BlockchainAnchor", 'String'>
    readonly arweave_status: FieldRef<"BlockchainAnchor", 'String'>
    readonly solana_tx_sig: FieldRef<"BlockchainAnchor", 'String'>
    readonly solana_status: FieldRef<"BlockchainAnchor", 'String'>
    readonly anchored_at: FieldRef<"BlockchainAnchor", 'DateTime'>
    readonly updated_at: FieldRef<"BlockchainAnchor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BlockchainAnchor findUnique
   */
  export type BlockchainAnchorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainAnchor to fetch.
     */
    where: BlockchainAnchorWhereUniqueInput
  }

  /**
   * BlockchainAnchor findUniqueOrThrow
   */
  export type BlockchainAnchorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainAnchor to fetch.
     */
    where: BlockchainAnchorWhereUniqueInput
  }

  /**
   * BlockchainAnchor findFirst
   */
  export type BlockchainAnchorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainAnchor to fetch.
     */
    where?: BlockchainAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainAnchors to fetch.
     */
    orderBy?: BlockchainAnchorOrderByWithRelationInput | BlockchainAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockchainAnchors.
     */
    cursor?: BlockchainAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockchainAnchors.
     */
    distinct?: BlockchainAnchorScalarFieldEnum | BlockchainAnchorScalarFieldEnum[]
  }

  /**
   * BlockchainAnchor findFirstOrThrow
   */
  export type BlockchainAnchorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainAnchor to fetch.
     */
    where?: BlockchainAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainAnchors to fetch.
     */
    orderBy?: BlockchainAnchorOrderByWithRelationInput | BlockchainAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockchainAnchors.
     */
    cursor?: BlockchainAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainAnchors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockchainAnchors.
     */
    distinct?: BlockchainAnchorScalarFieldEnum | BlockchainAnchorScalarFieldEnum[]
  }

  /**
   * BlockchainAnchor findMany
   */
  export type BlockchainAnchorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter, which BlockchainAnchors to fetch.
     */
    where?: BlockchainAnchorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockchainAnchors to fetch.
     */
    orderBy?: BlockchainAnchorOrderByWithRelationInput | BlockchainAnchorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockchainAnchors.
     */
    cursor?: BlockchainAnchorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockchainAnchors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockchainAnchors.
     */
    skip?: number
    distinct?: BlockchainAnchorScalarFieldEnum | BlockchainAnchorScalarFieldEnum[]
  }

  /**
   * BlockchainAnchor create
   */
  export type BlockchainAnchorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * The data needed to create a BlockchainAnchor.
     */
    data: XOR<BlockchainAnchorCreateInput, BlockchainAnchorUncheckedCreateInput>
  }

  /**
   * BlockchainAnchor createMany
   */
  export type BlockchainAnchorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockchainAnchors.
     */
    data: BlockchainAnchorCreateManyInput | BlockchainAnchorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BlockchainAnchor createManyAndReturn
   */
  export type BlockchainAnchorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BlockchainAnchors.
     */
    data: BlockchainAnchorCreateManyInput | BlockchainAnchorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BlockchainAnchor update
   */
  export type BlockchainAnchorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * The data needed to update a BlockchainAnchor.
     */
    data: XOR<BlockchainAnchorUpdateInput, BlockchainAnchorUncheckedUpdateInput>
    /**
     * Choose, which BlockchainAnchor to update.
     */
    where: BlockchainAnchorWhereUniqueInput
  }

  /**
   * BlockchainAnchor updateMany
   */
  export type BlockchainAnchorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockchainAnchors.
     */
    data: XOR<BlockchainAnchorUpdateManyMutationInput, BlockchainAnchorUncheckedUpdateManyInput>
    /**
     * Filter which BlockchainAnchors to update
     */
    where?: BlockchainAnchorWhereInput
  }

  /**
   * BlockchainAnchor upsert
   */
  export type BlockchainAnchorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * The filter to search for the BlockchainAnchor to update in case it exists.
     */
    where: BlockchainAnchorWhereUniqueInput
    /**
     * In case the BlockchainAnchor found by the `where` argument doesn't exist, create a new BlockchainAnchor with this data.
     */
    create: XOR<BlockchainAnchorCreateInput, BlockchainAnchorUncheckedCreateInput>
    /**
     * In case the BlockchainAnchor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockchainAnchorUpdateInput, BlockchainAnchorUncheckedUpdateInput>
  }

  /**
   * BlockchainAnchor delete
   */
  export type BlockchainAnchorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
    /**
     * Filter which BlockchainAnchor to delete.
     */
    where: BlockchainAnchorWhereUniqueInput
  }

  /**
   * BlockchainAnchor deleteMany
   */
  export type BlockchainAnchorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockchainAnchors to delete
     */
    where?: BlockchainAnchorWhereInput
  }

  /**
   * BlockchainAnchor without action
   */
  export type BlockchainAnchorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockchainAnchor
     */
    select?: BlockchainAnchorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BlockchainAnchorInclude<ExtArgs> | null
  }


  /**
   * Model DeviceMedia
   */

  export type AggregateDeviceMedia = {
    _count: DeviceMediaCountAggregateOutputType | null
    _avg: DeviceMediaAvgAggregateOutputType | null
    _sum: DeviceMediaSumAggregateOutputType | null
    _min: DeviceMediaMinAggregateOutputType | null
    _max: DeviceMediaMaxAggregateOutputType | null
  }

  export type DeviceMediaAvgAggregateOutputType = {
    size: number | null
  }

  export type DeviceMediaSumAggregateOutputType = {
    size: bigint | null
  }

  export type DeviceMediaMinAggregateOutputType = {
    id: string | null
    device_id: string | null
    file_path: string | null
    hash: string | null
    size: bigint | null
    mime_type: string | null
    uploaded_at: Date | null
  }

  export type DeviceMediaMaxAggregateOutputType = {
    id: string | null
    device_id: string | null
    file_path: string | null
    hash: string | null
    size: bigint | null
    mime_type: string | null
    uploaded_at: Date | null
  }

  export type DeviceMediaCountAggregateOutputType = {
    id: number
    device_id: number
    file_path: number
    hash: number
    size: number
    mime_type: number
    uploaded_at: number
    _all: number
  }


  export type DeviceMediaAvgAggregateInputType = {
    size?: true
  }

  export type DeviceMediaSumAggregateInputType = {
    size?: true
  }

  export type DeviceMediaMinAggregateInputType = {
    id?: true
    device_id?: true
    file_path?: true
    hash?: true
    size?: true
    mime_type?: true
    uploaded_at?: true
  }

  export type DeviceMediaMaxAggregateInputType = {
    id?: true
    device_id?: true
    file_path?: true
    hash?: true
    size?: true
    mime_type?: true
    uploaded_at?: true
  }

  export type DeviceMediaCountAggregateInputType = {
    id?: true
    device_id?: true
    file_path?: true
    hash?: true
    size?: true
    mime_type?: true
    uploaded_at?: true
    _all?: true
  }

  export type DeviceMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceMedia to aggregate.
     */
    where?: DeviceMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceMedias to fetch.
     */
    orderBy?: DeviceMediaOrderByWithRelationInput | DeviceMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeviceMedias
    **/
    _count?: true | DeviceMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceMediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceMediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMediaMaxAggregateInputType
  }

  export type GetDeviceMediaAggregateType<T extends DeviceMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateDeviceMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeviceMedia[P]>
      : GetScalarType<T[P], AggregateDeviceMedia[P]>
  }




  export type DeviceMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceMediaWhereInput
    orderBy?: DeviceMediaOrderByWithAggregationInput | DeviceMediaOrderByWithAggregationInput[]
    by: DeviceMediaScalarFieldEnum[] | DeviceMediaScalarFieldEnum
    having?: DeviceMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceMediaCountAggregateInputType | true
    _avg?: DeviceMediaAvgAggregateInputType
    _sum?: DeviceMediaSumAggregateInputType
    _min?: DeviceMediaMinAggregateInputType
    _max?: DeviceMediaMaxAggregateInputType
  }

  export type DeviceMediaGroupByOutputType = {
    id: string
    device_id: string
    file_path: string
    hash: string
    size: bigint
    mime_type: string
    uploaded_at: Date
    _count: DeviceMediaCountAggregateOutputType | null
    _avg: DeviceMediaAvgAggregateOutputType | null
    _sum: DeviceMediaSumAggregateOutputType | null
    _min: DeviceMediaMinAggregateOutputType | null
    _max: DeviceMediaMaxAggregateOutputType | null
  }

  type GetDeviceMediaGroupByPayload<T extends DeviceMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceMediaGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceMediaGroupByOutputType[P]>
        }
      >
    >


  export type DeviceMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    file_path?: boolean
    hash?: boolean
    size?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceMedia"]>

  export type DeviceMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    file_path?: boolean
    hash?: boolean
    size?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deviceMedia"]>

  export type DeviceMediaSelectScalar = {
    id?: boolean
    device_id?: boolean
    file_path?: boolean
    hash?: boolean
    size?: boolean
    mime_type?: boolean
    uploaded_at?: boolean
  }

  export type DeviceMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type DeviceMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $DeviceMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeviceMedia"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device_id: string
      file_path: string
      hash: string
      size: bigint
      mime_type: string
      uploaded_at: Date
    }, ExtArgs["result"]["deviceMedia"]>
    composites: {}
  }

  type DeviceMediaGetPayload<S extends boolean | null | undefined | DeviceMediaDefaultArgs> = $Result.GetResult<Prisma.$DeviceMediaPayload, S>

  type DeviceMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DeviceMediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DeviceMediaCountAggregateInputType | true
    }

  export interface DeviceMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeviceMedia'], meta: { name: 'DeviceMedia' } }
    /**
     * Find zero or one DeviceMedia that matches the filter.
     * @param {DeviceMediaFindUniqueArgs} args - Arguments to find a DeviceMedia
     * @example
     * // Get one DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceMediaFindUniqueArgs>(args: SelectSubset<T, DeviceMediaFindUniqueArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DeviceMedia that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DeviceMediaFindUniqueOrThrowArgs} args - Arguments to find a DeviceMedia
     * @example
     * // Get one DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DeviceMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaFindFirstArgs} args - Arguments to find a DeviceMedia
     * @example
     * // Get one DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceMediaFindFirstArgs>(args?: SelectSubset<T, DeviceMediaFindFirstArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DeviceMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaFindFirstOrThrowArgs} args - Arguments to find a DeviceMedia
     * @example
     * // Get one DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DeviceMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeviceMedias
     * const deviceMedias = await prisma.deviceMedia.findMany()
     * 
     * // Get first 10 DeviceMedias
     * const deviceMedias = await prisma.deviceMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceMediaWithIdOnly = await prisma.deviceMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceMediaFindManyArgs>(args?: SelectSubset<T, DeviceMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DeviceMedia.
     * @param {DeviceMediaCreateArgs} args - Arguments to create a DeviceMedia.
     * @example
     * // Create one DeviceMedia
     * const DeviceMedia = await prisma.deviceMedia.create({
     *   data: {
     *     // ... data to create a DeviceMedia
     *   }
     * })
     * 
     */
    create<T extends DeviceMediaCreateArgs>(args: SelectSubset<T, DeviceMediaCreateArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DeviceMedias.
     * @param {DeviceMediaCreateManyArgs} args - Arguments to create many DeviceMedias.
     * @example
     * // Create many DeviceMedias
     * const deviceMedia = await prisma.deviceMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceMediaCreateManyArgs>(args?: SelectSubset<T, DeviceMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeviceMedias and returns the data saved in the database.
     * @param {DeviceMediaCreateManyAndReturnArgs} args - Arguments to create many DeviceMedias.
     * @example
     * // Create many DeviceMedias
     * const deviceMedia = await prisma.deviceMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeviceMedias and only return the `id`
     * const deviceMediaWithIdOnly = await prisma.deviceMedia.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DeviceMedia.
     * @param {DeviceMediaDeleteArgs} args - Arguments to delete one DeviceMedia.
     * @example
     * // Delete one DeviceMedia
     * const DeviceMedia = await prisma.deviceMedia.delete({
     *   where: {
     *     // ... filter to delete one DeviceMedia
     *   }
     * })
     * 
     */
    delete<T extends DeviceMediaDeleteArgs>(args: SelectSubset<T, DeviceMediaDeleteArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DeviceMedia.
     * @param {DeviceMediaUpdateArgs} args - Arguments to update one DeviceMedia.
     * @example
     * // Update one DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceMediaUpdateArgs>(args: SelectSubset<T, DeviceMediaUpdateArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DeviceMedias.
     * @param {DeviceMediaDeleteManyArgs} args - Arguments to filter DeviceMedias to delete.
     * @example
     * // Delete a few DeviceMedias
     * const { count } = await prisma.deviceMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceMediaDeleteManyArgs>(args?: SelectSubset<T, DeviceMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeviceMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeviceMedias
     * const deviceMedia = await prisma.deviceMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceMediaUpdateManyArgs>(args: SelectSubset<T, DeviceMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DeviceMedia.
     * @param {DeviceMediaUpsertArgs} args - Arguments to update or create a DeviceMedia.
     * @example
     * // Update or create a DeviceMedia
     * const deviceMedia = await prisma.deviceMedia.upsert({
     *   create: {
     *     // ... data to create a DeviceMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeviceMedia we want to update
     *   }
     * })
     */
    upsert<T extends DeviceMediaUpsertArgs>(args: SelectSubset<T, DeviceMediaUpsertArgs<ExtArgs>>): Prisma__DeviceMediaClient<$Result.GetResult<Prisma.$DeviceMediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DeviceMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaCountArgs} args - Arguments to filter DeviceMedias to count.
     * @example
     * // Count the number of DeviceMedias
     * const count = await prisma.deviceMedia.count({
     *   where: {
     *     // ... the filter for the DeviceMedias we want to count
     *   }
     * })
    **/
    count<T extends DeviceMediaCountArgs>(
      args?: Subset<T, DeviceMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeviceMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DeviceMediaAggregateArgs>(args: Subset<T, DeviceMediaAggregateArgs>): Prisma.PrismaPromise<GetDeviceMediaAggregateType<T>>

    /**
     * Group by DeviceMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceMediaGroupByArgs} args - Group by arguments.
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
      T extends DeviceMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceMediaGroupByArgs['orderBy'] }
        : { orderBy?: DeviceMediaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DeviceMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeviceMedia model
   */
  readonly fields: DeviceMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeviceMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the DeviceMedia model
   */ 
  interface DeviceMediaFieldRefs {
    readonly id: FieldRef<"DeviceMedia", 'String'>
    readonly device_id: FieldRef<"DeviceMedia", 'String'>
    readonly file_path: FieldRef<"DeviceMedia", 'String'>
    readonly hash: FieldRef<"DeviceMedia", 'String'>
    readonly size: FieldRef<"DeviceMedia", 'BigInt'>
    readonly mime_type: FieldRef<"DeviceMedia", 'String'>
    readonly uploaded_at: FieldRef<"DeviceMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DeviceMedia findUnique
   */
  export type DeviceMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter, which DeviceMedia to fetch.
     */
    where: DeviceMediaWhereUniqueInput
  }

  /**
   * DeviceMedia findUniqueOrThrow
   */
  export type DeviceMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter, which DeviceMedia to fetch.
     */
    where: DeviceMediaWhereUniqueInput
  }

  /**
   * DeviceMedia findFirst
   */
  export type DeviceMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter, which DeviceMedia to fetch.
     */
    where?: DeviceMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceMedias to fetch.
     */
    orderBy?: DeviceMediaOrderByWithRelationInput | DeviceMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceMedias.
     */
    cursor?: DeviceMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceMedias.
     */
    distinct?: DeviceMediaScalarFieldEnum | DeviceMediaScalarFieldEnum[]
  }

  /**
   * DeviceMedia findFirstOrThrow
   */
  export type DeviceMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter, which DeviceMedia to fetch.
     */
    where?: DeviceMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceMedias to fetch.
     */
    orderBy?: DeviceMediaOrderByWithRelationInput | DeviceMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeviceMedias.
     */
    cursor?: DeviceMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeviceMedias.
     */
    distinct?: DeviceMediaScalarFieldEnum | DeviceMediaScalarFieldEnum[]
  }

  /**
   * DeviceMedia findMany
   */
  export type DeviceMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter, which DeviceMedias to fetch.
     */
    where?: DeviceMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeviceMedias to fetch.
     */
    orderBy?: DeviceMediaOrderByWithRelationInput | DeviceMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeviceMedias.
     */
    cursor?: DeviceMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeviceMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeviceMedias.
     */
    skip?: number
    distinct?: DeviceMediaScalarFieldEnum | DeviceMediaScalarFieldEnum[]
  }

  /**
   * DeviceMedia create
   */
  export type DeviceMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a DeviceMedia.
     */
    data: XOR<DeviceMediaCreateInput, DeviceMediaUncheckedCreateInput>
  }

  /**
   * DeviceMedia createMany
   */
  export type DeviceMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeviceMedias.
     */
    data: DeviceMediaCreateManyInput | DeviceMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeviceMedia createManyAndReturn
   */
  export type DeviceMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DeviceMedias.
     */
    data: DeviceMediaCreateManyInput | DeviceMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeviceMedia update
   */
  export type DeviceMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a DeviceMedia.
     */
    data: XOR<DeviceMediaUpdateInput, DeviceMediaUncheckedUpdateInput>
    /**
     * Choose, which DeviceMedia to update.
     */
    where: DeviceMediaWhereUniqueInput
  }

  /**
   * DeviceMedia updateMany
   */
  export type DeviceMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeviceMedias.
     */
    data: XOR<DeviceMediaUpdateManyMutationInput, DeviceMediaUncheckedUpdateManyInput>
    /**
     * Filter which DeviceMedias to update
     */
    where?: DeviceMediaWhereInput
  }

  /**
   * DeviceMedia upsert
   */
  export type DeviceMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the DeviceMedia to update in case it exists.
     */
    where: DeviceMediaWhereUniqueInput
    /**
     * In case the DeviceMedia found by the `where` argument doesn't exist, create a new DeviceMedia with this data.
     */
    create: XOR<DeviceMediaCreateInput, DeviceMediaUncheckedCreateInput>
    /**
     * In case the DeviceMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceMediaUpdateInput, DeviceMediaUncheckedUpdateInput>
  }

  /**
   * DeviceMedia delete
   */
  export type DeviceMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
    /**
     * Filter which DeviceMedia to delete.
     */
    where: DeviceMediaWhereUniqueInput
  }

  /**
   * DeviceMedia deleteMany
   */
  export type DeviceMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeviceMedias to delete
     */
    where?: DeviceMediaWhereInput
  }

  /**
   * DeviceMedia without action
   */
  export type DeviceMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeviceMedia
     */
    select?: DeviceMediaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceMediaInclude<ExtArgs> | null
  }


  /**
   * Model MediaVerification
   */

  export type AggregateMediaVerification = {
    _count: MediaVerificationCountAggregateOutputType | null
    _min: MediaVerificationMinAggregateOutputType | null
    _max: MediaVerificationMaxAggregateOutputType | null
  }

  export type MediaVerificationMinAggregateOutputType = {
    id: string | null
    device_id: string | null
    media_hash: string | null
    signature: string | null
    verified_at: Date | null
  }

  export type MediaVerificationMaxAggregateOutputType = {
    id: string | null
    device_id: string | null
    media_hash: string | null
    signature: string | null
    verified_at: Date | null
  }

  export type MediaVerificationCountAggregateOutputType = {
    id: number
    device_id: number
    media_hash: number
    signature: number
    verified_at: number
    metadata: number
    _all: number
  }


  export type MediaVerificationMinAggregateInputType = {
    id?: true
    device_id?: true
    media_hash?: true
    signature?: true
    verified_at?: true
  }

  export type MediaVerificationMaxAggregateInputType = {
    id?: true
    device_id?: true
    media_hash?: true
    signature?: true
    verified_at?: true
  }

  export type MediaVerificationCountAggregateInputType = {
    id?: true
    device_id?: true
    media_hash?: true
    signature?: true
    verified_at?: true
    metadata?: true
    _all?: true
  }

  export type MediaVerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaVerification to aggregate.
     */
    where?: MediaVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaVerifications to fetch.
     */
    orderBy?: MediaVerificationOrderByWithRelationInput | MediaVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MediaVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MediaVerifications
    **/
    _count?: true | MediaVerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MediaVerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MediaVerificationMaxAggregateInputType
  }

  export type GetMediaVerificationAggregateType<T extends MediaVerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateMediaVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMediaVerification[P]>
      : GetScalarType<T[P], AggregateMediaVerification[P]>
  }




  export type MediaVerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MediaVerificationWhereInput
    orderBy?: MediaVerificationOrderByWithAggregationInput | MediaVerificationOrderByWithAggregationInput[]
    by: MediaVerificationScalarFieldEnum[] | MediaVerificationScalarFieldEnum
    having?: MediaVerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MediaVerificationCountAggregateInputType | true
    _min?: MediaVerificationMinAggregateInputType
    _max?: MediaVerificationMaxAggregateInputType
  }

  export type MediaVerificationGroupByOutputType = {
    id: string
    device_id: string
    media_hash: string
    signature: string
    verified_at: Date
    metadata: JsonValue | null
    _count: MediaVerificationCountAggregateOutputType | null
    _min: MediaVerificationMinAggregateOutputType | null
    _max: MediaVerificationMaxAggregateOutputType | null
  }

  type GetMediaVerificationGroupByPayload<T extends MediaVerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MediaVerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MediaVerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MediaVerificationGroupByOutputType[P]>
            : GetScalarType<T[P], MediaVerificationGroupByOutputType[P]>
        }
      >
    >


  export type MediaVerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    media_hash?: boolean
    signature?: boolean
    verified_at?: boolean
    metadata?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaVerification"]>

  export type MediaVerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    device_id?: boolean
    media_hash?: boolean
    signature?: boolean
    verified_at?: boolean
    metadata?: boolean
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mediaVerification"]>

  export type MediaVerificationSelectScalar = {
    id?: boolean
    device_id?: boolean
    media_hash?: boolean
    signature?: boolean
    verified_at?: boolean
    metadata?: boolean
  }

  export type MediaVerificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }
  export type MediaVerificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    device?: boolean | DeviceDefaultArgs<ExtArgs>
  }

  export type $MediaVerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MediaVerification"
    objects: {
      device: Prisma.$DevicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      device_id: string
      media_hash: string
      signature: string
      verified_at: Date
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["mediaVerification"]>
    composites: {}
  }

  type MediaVerificationGetPayload<S extends boolean | null | undefined | MediaVerificationDefaultArgs> = $Result.GetResult<Prisma.$MediaVerificationPayload, S>

  type MediaVerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MediaVerificationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MediaVerificationCountAggregateInputType | true
    }

  export interface MediaVerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MediaVerification'], meta: { name: 'MediaVerification' } }
    /**
     * Find zero or one MediaVerification that matches the filter.
     * @param {MediaVerificationFindUniqueArgs} args - Arguments to find a MediaVerification
     * @example
     * // Get one MediaVerification
     * const mediaVerification = await prisma.mediaVerification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MediaVerificationFindUniqueArgs>(args: SelectSubset<T, MediaVerificationFindUniqueArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MediaVerification that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MediaVerificationFindUniqueOrThrowArgs} args - Arguments to find a MediaVerification
     * @example
     * // Get one MediaVerification
     * const mediaVerification = await prisma.mediaVerification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MediaVerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, MediaVerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MediaVerification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationFindFirstArgs} args - Arguments to find a MediaVerification
     * @example
     * // Get one MediaVerification
     * const mediaVerification = await prisma.mediaVerification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MediaVerificationFindFirstArgs>(args?: SelectSubset<T, MediaVerificationFindFirstArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MediaVerification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationFindFirstOrThrowArgs} args - Arguments to find a MediaVerification
     * @example
     * // Get one MediaVerification
     * const mediaVerification = await prisma.mediaVerification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MediaVerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, MediaVerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MediaVerifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MediaVerifications
     * const mediaVerifications = await prisma.mediaVerification.findMany()
     * 
     * // Get first 10 MediaVerifications
     * const mediaVerifications = await prisma.mediaVerification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mediaVerificationWithIdOnly = await prisma.mediaVerification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MediaVerificationFindManyArgs>(args?: SelectSubset<T, MediaVerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MediaVerification.
     * @param {MediaVerificationCreateArgs} args - Arguments to create a MediaVerification.
     * @example
     * // Create one MediaVerification
     * const MediaVerification = await prisma.mediaVerification.create({
     *   data: {
     *     // ... data to create a MediaVerification
     *   }
     * })
     * 
     */
    create<T extends MediaVerificationCreateArgs>(args: SelectSubset<T, MediaVerificationCreateArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MediaVerifications.
     * @param {MediaVerificationCreateManyArgs} args - Arguments to create many MediaVerifications.
     * @example
     * // Create many MediaVerifications
     * const mediaVerification = await prisma.mediaVerification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MediaVerificationCreateManyArgs>(args?: SelectSubset<T, MediaVerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MediaVerifications and returns the data saved in the database.
     * @param {MediaVerificationCreateManyAndReturnArgs} args - Arguments to create many MediaVerifications.
     * @example
     * // Create many MediaVerifications
     * const mediaVerification = await prisma.mediaVerification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MediaVerifications and only return the `id`
     * const mediaVerificationWithIdOnly = await prisma.mediaVerification.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MediaVerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, MediaVerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MediaVerification.
     * @param {MediaVerificationDeleteArgs} args - Arguments to delete one MediaVerification.
     * @example
     * // Delete one MediaVerification
     * const MediaVerification = await prisma.mediaVerification.delete({
     *   where: {
     *     // ... filter to delete one MediaVerification
     *   }
     * })
     * 
     */
    delete<T extends MediaVerificationDeleteArgs>(args: SelectSubset<T, MediaVerificationDeleteArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MediaVerification.
     * @param {MediaVerificationUpdateArgs} args - Arguments to update one MediaVerification.
     * @example
     * // Update one MediaVerification
     * const mediaVerification = await prisma.mediaVerification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MediaVerificationUpdateArgs>(args: SelectSubset<T, MediaVerificationUpdateArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MediaVerifications.
     * @param {MediaVerificationDeleteManyArgs} args - Arguments to filter MediaVerifications to delete.
     * @example
     * // Delete a few MediaVerifications
     * const { count } = await prisma.mediaVerification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MediaVerificationDeleteManyArgs>(args?: SelectSubset<T, MediaVerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MediaVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MediaVerifications
     * const mediaVerification = await prisma.mediaVerification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MediaVerificationUpdateManyArgs>(args: SelectSubset<T, MediaVerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MediaVerification.
     * @param {MediaVerificationUpsertArgs} args - Arguments to update or create a MediaVerification.
     * @example
     * // Update or create a MediaVerification
     * const mediaVerification = await prisma.mediaVerification.upsert({
     *   create: {
     *     // ... data to create a MediaVerification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MediaVerification we want to update
     *   }
     * })
     */
    upsert<T extends MediaVerificationUpsertArgs>(args: SelectSubset<T, MediaVerificationUpsertArgs<ExtArgs>>): Prisma__MediaVerificationClient<$Result.GetResult<Prisma.$MediaVerificationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MediaVerifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationCountArgs} args - Arguments to filter MediaVerifications to count.
     * @example
     * // Count the number of MediaVerifications
     * const count = await prisma.mediaVerification.count({
     *   where: {
     *     // ... the filter for the MediaVerifications we want to count
     *   }
     * })
    **/
    count<T extends MediaVerificationCountArgs>(
      args?: Subset<T, MediaVerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MediaVerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MediaVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MediaVerificationAggregateArgs>(args: Subset<T, MediaVerificationAggregateArgs>): Prisma.PrismaPromise<GetMediaVerificationAggregateType<T>>

    /**
     * Group by MediaVerification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MediaVerificationGroupByArgs} args - Group by arguments.
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
      T extends MediaVerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MediaVerificationGroupByArgs['orderBy'] }
        : { orderBy?: MediaVerificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MediaVerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MediaVerification model
   */
  readonly fields: MediaVerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MediaVerification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MediaVerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    device<T extends DeviceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DeviceDefaultArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MediaVerification model
   */ 
  interface MediaVerificationFieldRefs {
    readonly id: FieldRef<"MediaVerification", 'String'>
    readonly device_id: FieldRef<"MediaVerification", 'String'>
    readonly media_hash: FieldRef<"MediaVerification", 'String'>
    readonly signature: FieldRef<"MediaVerification", 'String'>
    readonly verified_at: FieldRef<"MediaVerification", 'DateTime'>
    readonly metadata: FieldRef<"MediaVerification", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * MediaVerification findUnique
   */
  export type MediaVerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MediaVerification to fetch.
     */
    where: MediaVerificationWhereUniqueInput
  }

  /**
   * MediaVerification findUniqueOrThrow
   */
  export type MediaVerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MediaVerification to fetch.
     */
    where: MediaVerificationWhereUniqueInput
  }

  /**
   * MediaVerification findFirst
   */
  export type MediaVerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MediaVerification to fetch.
     */
    where?: MediaVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaVerifications to fetch.
     */
    orderBy?: MediaVerificationOrderByWithRelationInput | MediaVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaVerifications.
     */
    cursor?: MediaVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaVerifications.
     */
    distinct?: MediaVerificationScalarFieldEnum | MediaVerificationScalarFieldEnum[]
  }

  /**
   * MediaVerification findFirstOrThrow
   */
  export type MediaVerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MediaVerification to fetch.
     */
    where?: MediaVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaVerifications to fetch.
     */
    orderBy?: MediaVerificationOrderByWithRelationInput | MediaVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MediaVerifications.
     */
    cursor?: MediaVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaVerifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MediaVerifications.
     */
    distinct?: MediaVerificationScalarFieldEnum | MediaVerificationScalarFieldEnum[]
  }

  /**
   * MediaVerification findMany
   */
  export type MediaVerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter, which MediaVerifications to fetch.
     */
    where?: MediaVerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MediaVerifications to fetch.
     */
    orderBy?: MediaVerificationOrderByWithRelationInput | MediaVerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MediaVerifications.
     */
    cursor?: MediaVerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MediaVerifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MediaVerifications.
     */
    skip?: number
    distinct?: MediaVerificationScalarFieldEnum | MediaVerificationScalarFieldEnum[]
  }

  /**
   * MediaVerification create
   */
  export type MediaVerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * The data needed to create a MediaVerification.
     */
    data: XOR<MediaVerificationCreateInput, MediaVerificationUncheckedCreateInput>
  }

  /**
   * MediaVerification createMany
   */
  export type MediaVerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MediaVerifications.
     */
    data: MediaVerificationCreateManyInput | MediaVerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MediaVerification createManyAndReturn
   */
  export type MediaVerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MediaVerifications.
     */
    data: MediaVerificationCreateManyInput | MediaVerificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MediaVerification update
   */
  export type MediaVerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * The data needed to update a MediaVerification.
     */
    data: XOR<MediaVerificationUpdateInput, MediaVerificationUncheckedUpdateInput>
    /**
     * Choose, which MediaVerification to update.
     */
    where: MediaVerificationWhereUniqueInput
  }

  /**
   * MediaVerification updateMany
   */
  export type MediaVerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MediaVerifications.
     */
    data: XOR<MediaVerificationUpdateManyMutationInput, MediaVerificationUncheckedUpdateManyInput>
    /**
     * Filter which MediaVerifications to update
     */
    where?: MediaVerificationWhereInput
  }

  /**
   * MediaVerification upsert
   */
  export type MediaVerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * The filter to search for the MediaVerification to update in case it exists.
     */
    where: MediaVerificationWhereUniqueInput
    /**
     * In case the MediaVerification found by the `where` argument doesn't exist, create a new MediaVerification with this data.
     */
    create: XOR<MediaVerificationCreateInput, MediaVerificationUncheckedCreateInput>
    /**
     * In case the MediaVerification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MediaVerificationUpdateInput, MediaVerificationUncheckedUpdateInput>
  }

  /**
   * MediaVerification delete
   */
  export type MediaVerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
    /**
     * Filter which MediaVerification to delete.
     */
    where: MediaVerificationWhereUniqueInput
  }

  /**
   * MediaVerification deleteMany
   */
  export type MediaVerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MediaVerifications to delete
     */
    where?: MediaVerificationWhereInput
  }

  /**
   * MediaVerification without action
   */
  export type MediaVerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MediaVerification
     */
    select?: MediaVerificationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MediaVerificationInclude<ExtArgs> | null
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


  export const DeviceScalarFieldEnum: {
    device_id: 'device_id',
    tpm_serial: 'tpm_serial',
    name: 'name',
    device_name: 'device_name',
    device_type: 'device_type',
    os_version: 'os_version',
    app_version: 'app_version',
    tpm_public_key: 'tpm_public_key',
    api_key_hash: 'api_key_hash',
    registration_ip: 'registration_ip',
    user_agent: 'user_agent',
    attestation_key: 'attestation_key',
    verified_at: 'verified_at',
    status: 'status',
    metadata: 'metadata',
    created_at: 'created_at',
    updated_at: 'updated_at',
    last_activity_at: 'last_activity_at'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const MediaFileScalarFieldEnum: {
    media_id: 'media_id',
    device_id: 'device_id',
    media_type: 'media_type',
    file_name: 'file_name',
    file_hash: 'file_hash',
    ipfs_hash: 'ipfs_hash',
    file_size: 'file_size',
    storage_path: 'storage_path',
    signature_verified: 'signature_verified',
    uploaded_at: 'uploaded_at'
  };

  export type MediaFileScalarFieldEnum = (typeof MediaFileScalarFieldEnum)[keyof typeof MediaFileScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    verification_id: 'verification_id',
    device_id: 'device_id',
    media_id: 'media_id',
    status: 'status',
    proof_data: 'proof_data',
    created_at: 'created_at',
    completed_at: 'completed_at'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const ZKProofJobScalarFieldEnum: {
    proof_id: 'proof_id',
    device_id: 'device_id',
    media_hash: 'media_hash',
    proof_type: 'proof_type',
    attestation_data: 'attestation_data',
    status: 'status',
    proof_data: 'proof_data',
    proof_hash: 'proof_hash',
    completed_at: 'completed_at',
    error_message: 'error_message',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ZKProofJobScalarFieldEnum = (typeof ZKProofJobScalarFieldEnum)[keyof typeof ZKProofJobScalarFieldEnum]


  export const UsageMeterScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    metric: 'metric',
    value: 'value',
    period_start: 'period_start',
    period_end: 'period_end'
  };

  export type UsageMeterScalarFieldEnum = (typeof UsageMeterScalarFieldEnum)[keyof typeof UsageMeterScalarFieldEnum]


  export const BlockchainAnchorScalarFieldEnum: {
    anchor_id: 'anchor_id',
    device_id: 'device_id',
    proof_id: 'proof_id',
    proof_hash: 'proof_hash',
    arweave_tx_id: 'arweave_tx_id',
    arweave_status: 'arweave_status',
    solana_tx_sig: 'solana_tx_sig',
    solana_status: 'solana_status',
    anchored_at: 'anchored_at',
    updated_at: 'updated_at'
  };

  export type BlockchainAnchorScalarFieldEnum = (typeof BlockchainAnchorScalarFieldEnum)[keyof typeof BlockchainAnchorScalarFieldEnum]


  export const DeviceMediaScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    file_path: 'file_path',
    hash: 'hash',
    size: 'size',
    mime_type: 'mime_type',
    uploaded_at: 'uploaded_at'
  };

  export type DeviceMediaScalarFieldEnum = (typeof DeviceMediaScalarFieldEnum)[keyof typeof DeviceMediaScalarFieldEnum]


  export const MediaVerificationScalarFieldEnum: {
    id: 'id',
    device_id: 'device_id',
    media_hash: 'media_hash',
    signature: 'signature',
    verified_at: 'verified_at',
    metadata: 'metadata'
  };

  export type MediaVerificationScalarFieldEnum = (typeof MediaVerificationScalarFieldEnum)[keyof typeof MediaVerificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


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


  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    device_id?: StringFilter<"Device"> | string
    tpm_serial?: StringNullableFilter<"Device"> | string | null
    name?: StringNullableFilter<"Device"> | string | null
    device_name?: StringNullableFilter<"Device"> | string | null
    device_type?: StringNullableFilter<"Device"> | string | null
    os_version?: StringNullableFilter<"Device"> | string | null
    app_version?: StringNullableFilter<"Device"> | string | null
    tpm_public_key?: StringFilter<"Device"> | string
    api_key_hash?: StringNullableFilter<"Device"> | string | null
    registration_ip?: StringNullableFilter<"Device"> | string | null
    user_agent?: StringNullableFilter<"Device"> | string | null
    attestation_key?: StringNullableFilter<"Device"> | string | null
    verified_at?: DateTimeNullableFilter<"Device"> | Date | string | null
    status?: StringNullableFilter<"Device"> | string | null
    metadata?: JsonNullableFilter<"Device">
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    last_activity_at?: DateTimeNullableFilter<"Device"> | Date | string | null
    usage_meters?: UsageMeterListRelationFilter
    media_files?: MediaFileListRelationFilter
    verifications?: VerificationListRelationFilter
    zk_proof_jobs?: ZKProofJobListRelationFilter
    blockchain_anchors?: BlockchainAnchorListRelationFilter
    device_media?: DeviceMediaListRelationFilter
    media_verifications?: MediaVerificationListRelationFilter
  }

  export type DeviceOrderByWithRelationInput = {
    device_id?: SortOrder
    tpm_serial?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    device_name?: SortOrderInput | SortOrder
    device_type?: SortOrderInput | SortOrder
    os_version?: SortOrderInput | SortOrder
    app_version?: SortOrderInput | SortOrder
    tpm_public_key?: SortOrder
    api_key_hash?: SortOrderInput | SortOrder
    registration_ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    attestation_key?: SortOrderInput | SortOrder
    verified_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_activity_at?: SortOrderInput | SortOrder
    usage_meters?: UsageMeterOrderByRelationAggregateInput
    media_files?: MediaFileOrderByRelationAggregateInput
    verifications?: VerificationOrderByRelationAggregateInput
    zk_proof_jobs?: ZKProofJobOrderByRelationAggregateInput
    blockchain_anchors?: BlockchainAnchorOrderByRelationAggregateInput
    device_media?: DeviceMediaOrderByRelationAggregateInput
    media_verifications?: MediaVerificationOrderByRelationAggregateInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    device_id?: string
    tpm_serial?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    name?: StringNullableFilter<"Device"> | string | null
    device_name?: StringNullableFilter<"Device"> | string | null
    device_type?: StringNullableFilter<"Device"> | string | null
    os_version?: StringNullableFilter<"Device"> | string | null
    app_version?: StringNullableFilter<"Device"> | string | null
    tpm_public_key?: StringFilter<"Device"> | string
    api_key_hash?: StringNullableFilter<"Device"> | string | null
    registration_ip?: StringNullableFilter<"Device"> | string | null
    user_agent?: StringNullableFilter<"Device"> | string | null
    attestation_key?: StringNullableFilter<"Device"> | string | null
    verified_at?: DateTimeNullableFilter<"Device"> | Date | string | null
    status?: StringNullableFilter<"Device"> | string | null
    metadata?: JsonNullableFilter<"Device">
    created_at?: DateTimeFilter<"Device"> | Date | string
    updated_at?: DateTimeFilter<"Device"> | Date | string
    last_activity_at?: DateTimeNullableFilter<"Device"> | Date | string | null
    usage_meters?: UsageMeterListRelationFilter
    media_files?: MediaFileListRelationFilter
    verifications?: VerificationListRelationFilter
    zk_proof_jobs?: ZKProofJobListRelationFilter
    blockchain_anchors?: BlockchainAnchorListRelationFilter
    device_media?: DeviceMediaListRelationFilter
    media_verifications?: MediaVerificationListRelationFilter
  }, "device_id" | "tpm_serial">

  export type DeviceOrderByWithAggregationInput = {
    device_id?: SortOrder
    tpm_serial?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    device_name?: SortOrderInput | SortOrder
    device_type?: SortOrderInput | SortOrder
    os_version?: SortOrderInput | SortOrder
    app_version?: SortOrderInput | SortOrder
    tpm_public_key?: SortOrder
    api_key_hash?: SortOrderInput | SortOrder
    registration_ip?: SortOrderInput | SortOrder
    user_agent?: SortOrderInput | SortOrder
    attestation_key?: SortOrderInput | SortOrder
    verified_at?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_activity_at?: SortOrderInput | SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    device_id?: StringWithAggregatesFilter<"Device"> | string
    tpm_serial?: StringNullableWithAggregatesFilter<"Device"> | string | null
    name?: StringNullableWithAggregatesFilter<"Device"> | string | null
    device_name?: StringNullableWithAggregatesFilter<"Device"> | string | null
    device_type?: StringNullableWithAggregatesFilter<"Device"> | string | null
    os_version?: StringNullableWithAggregatesFilter<"Device"> | string | null
    app_version?: StringNullableWithAggregatesFilter<"Device"> | string | null
    tpm_public_key?: StringWithAggregatesFilter<"Device"> | string
    api_key_hash?: StringNullableWithAggregatesFilter<"Device"> | string | null
    registration_ip?: StringNullableWithAggregatesFilter<"Device"> | string | null
    user_agent?: StringNullableWithAggregatesFilter<"Device"> | string | null
    attestation_key?: StringNullableWithAggregatesFilter<"Device"> | string | null
    verified_at?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
    status?: StringNullableWithAggregatesFilter<"Device"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Device">
    created_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    last_activity_at?: DateTimeNullableWithAggregatesFilter<"Device"> | Date | string | null
  }

  export type MediaFileWhereInput = {
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    media_id?: StringFilter<"MediaFile"> | string
    device_id?: StringFilter<"MediaFile"> | string
    media_type?: StringFilter<"MediaFile"> | string
    file_name?: StringFilter<"MediaFile"> | string
    file_hash?: StringFilter<"MediaFile"> | string
    ipfs_hash?: StringNullableFilter<"MediaFile"> | string | null
    file_size?: BigIntFilter<"MediaFile"> | bigint | number
    storage_path?: StringNullableFilter<"MediaFile"> | string | null
    signature_verified?: BoolFilter<"MediaFile"> | boolean
    uploaded_at?: DateTimeFilter<"MediaFile"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type MediaFileOrderByWithRelationInput = {
    media_id?: SortOrder
    device_id?: SortOrder
    media_type?: SortOrder
    file_name?: SortOrder
    file_hash?: SortOrder
    ipfs_hash?: SortOrderInput | SortOrder
    file_size?: SortOrder
    storage_path?: SortOrderInput | SortOrder
    signature_verified?: SortOrder
    uploaded_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type MediaFileWhereUniqueInput = Prisma.AtLeast<{
    media_id?: string
    file_hash?: string
    AND?: MediaFileWhereInput | MediaFileWhereInput[]
    OR?: MediaFileWhereInput[]
    NOT?: MediaFileWhereInput | MediaFileWhereInput[]
    device_id?: StringFilter<"MediaFile"> | string
    media_type?: StringFilter<"MediaFile"> | string
    file_name?: StringFilter<"MediaFile"> | string
    ipfs_hash?: StringNullableFilter<"MediaFile"> | string | null
    file_size?: BigIntFilter<"MediaFile"> | bigint | number
    storage_path?: StringNullableFilter<"MediaFile"> | string | null
    signature_verified?: BoolFilter<"MediaFile"> | boolean
    uploaded_at?: DateTimeFilter<"MediaFile"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "media_id" | "file_hash">

  export type MediaFileOrderByWithAggregationInput = {
    media_id?: SortOrder
    device_id?: SortOrder
    media_type?: SortOrder
    file_name?: SortOrder
    file_hash?: SortOrder
    ipfs_hash?: SortOrderInput | SortOrder
    file_size?: SortOrder
    storage_path?: SortOrderInput | SortOrder
    signature_verified?: SortOrder
    uploaded_at?: SortOrder
    _count?: MediaFileCountOrderByAggregateInput
    _avg?: MediaFileAvgOrderByAggregateInput
    _max?: MediaFileMaxOrderByAggregateInput
    _min?: MediaFileMinOrderByAggregateInput
    _sum?: MediaFileSumOrderByAggregateInput
  }

  export type MediaFileScalarWhereWithAggregatesInput = {
    AND?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    OR?: MediaFileScalarWhereWithAggregatesInput[]
    NOT?: MediaFileScalarWhereWithAggregatesInput | MediaFileScalarWhereWithAggregatesInput[]
    media_id?: StringWithAggregatesFilter<"MediaFile"> | string
    device_id?: StringWithAggregatesFilter<"MediaFile"> | string
    media_type?: StringWithAggregatesFilter<"MediaFile"> | string
    file_name?: StringWithAggregatesFilter<"MediaFile"> | string
    file_hash?: StringWithAggregatesFilter<"MediaFile"> | string
    ipfs_hash?: StringNullableWithAggregatesFilter<"MediaFile"> | string | null
    file_size?: BigIntWithAggregatesFilter<"MediaFile"> | bigint | number
    storage_path?: StringNullableWithAggregatesFilter<"MediaFile"> | string | null
    signature_verified?: BoolWithAggregatesFilter<"MediaFile"> | boolean
    uploaded_at?: DateTimeWithAggregatesFilter<"MediaFile"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    verification_id?: StringFilter<"Verification"> | string
    device_id?: StringFilter<"Verification"> | string
    media_id?: StringNullableFilter<"Verification"> | string | null
    status?: StringFilter<"Verification"> | string
    proof_data?: StringNullableFilter<"Verification"> | string | null
    created_at?: DateTimeFilter<"Verification"> | Date | string
    completed_at?: DateTimeNullableFilter<"Verification"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type VerificationOrderByWithRelationInput = {
    verification_id?: SortOrder
    device_id?: SortOrder
    media_id?: SortOrderInput | SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    verification_id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    device_id?: StringFilter<"Verification"> | string
    media_id?: StringNullableFilter<"Verification"> | string | null
    status?: StringFilter<"Verification"> | string
    proof_data?: StringNullableFilter<"Verification"> | string | null
    created_at?: DateTimeFilter<"Verification"> | Date | string
    completed_at?: DateTimeNullableFilter<"Verification"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "verification_id">

  export type VerificationOrderByWithAggregationInput = {
    verification_id?: SortOrder
    device_id?: SortOrder
    media_id?: SortOrderInput | SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    created_at?: SortOrder
    completed_at?: SortOrderInput | SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    verification_id?: StringWithAggregatesFilter<"Verification"> | string
    device_id?: StringWithAggregatesFilter<"Verification"> | string
    media_id?: StringNullableWithAggregatesFilter<"Verification"> | string | null
    status?: StringWithAggregatesFilter<"Verification"> | string
    proof_data?: StringNullableWithAggregatesFilter<"Verification"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
    completed_at?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
  }

  export type ZKProofJobWhereInput = {
    AND?: ZKProofJobWhereInput | ZKProofJobWhereInput[]
    OR?: ZKProofJobWhereInput[]
    NOT?: ZKProofJobWhereInput | ZKProofJobWhereInput[]
    proof_id?: StringFilter<"ZKProofJob"> | string
    device_id?: StringFilter<"ZKProofJob"> | string
    media_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    proof_type?: StringFilter<"ZKProofJob"> | string
    attestation_data?: StringNullableFilter<"ZKProofJob"> | string | null
    status?: StringFilter<"ZKProofJob"> | string
    proof_data?: BytesNullableFilter<"ZKProofJob"> | Buffer | null
    proof_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    completed_at?: DateTimeNullableFilter<"ZKProofJob"> | Date | string | null
    error_message?: StringNullableFilter<"ZKProofJob"> | string | null
    created_at?: DateTimeFilter<"ZKProofJob"> | Date | string
    updated_at?: DateTimeFilter<"ZKProofJob"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type ZKProofJobOrderByWithRelationInput = {
    proof_id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrderInput | SortOrder
    proof_type?: SortOrder
    attestation_data?: SortOrderInput | SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    proof_hash?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type ZKProofJobWhereUniqueInput = Prisma.AtLeast<{
    proof_id?: string
    AND?: ZKProofJobWhereInput | ZKProofJobWhereInput[]
    OR?: ZKProofJobWhereInput[]
    NOT?: ZKProofJobWhereInput | ZKProofJobWhereInput[]
    device_id?: StringFilter<"ZKProofJob"> | string
    media_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    proof_type?: StringFilter<"ZKProofJob"> | string
    attestation_data?: StringNullableFilter<"ZKProofJob"> | string | null
    status?: StringFilter<"ZKProofJob"> | string
    proof_data?: BytesNullableFilter<"ZKProofJob"> | Buffer | null
    proof_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    completed_at?: DateTimeNullableFilter<"ZKProofJob"> | Date | string | null
    error_message?: StringNullableFilter<"ZKProofJob"> | string | null
    created_at?: DateTimeFilter<"ZKProofJob"> | Date | string
    updated_at?: DateTimeFilter<"ZKProofJob"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "proof_id">

  export type ZKProofJobOrderByWithAggregationInput = {
    proof_id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrderInput | SortOrder
    proof_type?: SortOrder
    attestation_data?: SortOrderInput | SortOrder
    status?: SortOrder
    proof_data?: SortOrderInput | SortOrder
    proof_hash?: SortOrderInput | SortOrder
    completed_at?: SortOrderInput | SortOrder
    error_message?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ZKProofJobCountOrderByAggregateInput
    _max?: ZKProofJobMaxOrderByAggregateInput
    _min?: ZKProofJobMinOrderByAggregateInput
  }

  export type ZKProofJobScalarWhereWithAggregatesInput = {
    AND?: ZKProofJobScalarWhereWithAggregatesInput | ZKProofJobScalarWhereWithAggregatesInput[]
    OR?: ZKProofJobScalarWhereWithAggregatesInput[]
    NOT?: ZKProofJobScalarWhereWithAggregatesInput | ZKProofJobScalarWhereWithAggregatesInput[]
    proof_id?: StringWithAggregatesFilter<"ZKProofJob"> | string
    device_id?: StringWithAggregatesFilter<"ZKProofJob"> | string
    media_hash?: StringNullableWithAggregatesFilter<"ZKProofJob"> | string | null
    proof_type?: StringWithAggregatesFilter<"ZKProofJob"> | string
    attestation_data?: StringNullableWithAggregatesFilter<"ZKProofJob"> | string | null
    status?: StringWithAggregatesFilter<"ZKProofJob"> | string
    proof_data?: BytesNullableWithAggregatesFilter<"ZKProofJob"> | Buffer | null
    proof_hash?: StringNullableWithAggregatesFilter<"ZKProofJob"> | string | null
    completed_at?: DateTimeNullableWithAggregatesFilter<"ZKProofJob"> | Date | string | null
    error_message?: StringNullableWithAggregatesFilter<"ZKProofJob"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"ZKProofJob"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ZKProofJob"> | Date | string
  }

  export type UsageMeterWhereInput = {
    AND?: UsageMeterWhereInput | UsageMeterWhereInput[]
    OR?: UsageMeterWhereInput[]
    NOT?: UsageMeterWhereInput | UsageMeterWhereInput[]
    id?: StringFilter<"UsageMeter"> | string
    device_id?: StringFilter<"UsageMeter"> | string
    metric?: StringFilter<"UsageMeter"> | string
    value?: BigIntFilter<"UsageMeter"> | bigint | number
    period_start?: DateTimeFilter<"UsageMeter"> | Date | string
    period_end?: DateTimeNullableFilter<"UsageMeter"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type UsageMeterOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type UsageMeterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    device_id_metric_period_start?: UsageMeterDevice_idMetricPeriod_startCompoundUniqueInput
    AND?: UsageMeterWhereInput | UsageMeterWhereInput[]
    OR?: UsageMeterWhereInput[]
    NOT?: UsageMeterWhereInput | UsageMeterWhereInput[]
    device_id?: StringFilter<"UsageMeter"> | string
    metric?: StringFilter<"UsageMeter"> | string
    value?: BigIntFilter<"UsageMeter"> | bigint | number
    period_start?: DateTimeFilter<"UsageMeter"> | Date | string
    period_end?: DateTimeNullableFilter<"UsageMeter"> | Date | string | null
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "id" | "device_id_metric_period_start">

  export type UsageMeterOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrderInput | SortOrder
    _count?: UsageMeterCountOrderByAggregateInput
    _avg?: UsageMeterAvgOrderByAggregateInput
    _max?: UsageMeterMaxOrderByAggregateInput
    _min?: UsageMeterMinOrderByAggregateInput
    _sum?: UsageMeterSumOrderByAggregateInput
  }

  export type UsageMeterScalarWhereWithAggregatesInput = {
    AND?: UsageMeterScalarWhereWithAggregatesInput | UsageMeterScalarWhereWithAggregatesInput[]
    OR?: UsageMeterScalarWhereWithAggregatesInput[]
    NOT?: UsageMeterScalarWhereWithAggregatesInput | UsageMeterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UsageMeter"> | string
    device_id?: StringWithAggregatesFilter<"UsageMeter"> | string
    metric?: StringWithAggregatesFilter<"UsageMeter"> | string
    value?: BigIntWithAggregatesFilter<"UsageMeter"> | bigint | number
    period_start?: DateTimeWithAggregatesFilter<"UsageMeter"> | Date | string
    period_end?: DateTimeNullableWithAggregatesFilter<"UsageMeter"> | Date | string | null
  }

  export type BlockchainAnchorWhereInput = {
    AND?: BlockchainAnchorWhereInput | BlockchainAnchorWhereInput[]
    OR?: BlockchainAnchorWhereInput[]
    NOT?: BlockchainAnchorWhereInput | BlockchainAnchorWhereInput[]
    anchor_id?: StringFilter<"BlockchainAnchor"> | string
    device_id?: StringFilter<"BlockchainAnchor"> | string
    proof_id?: StringFilter<"BlockchainAnchor"> | string
    proof_hash?: StringFilter<"BlockchainAnchor"> | string
    arweave_tx_id?: StringNullableFilter<"BlockchainAnchor"> | string | null
    arweave_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_tx_sig?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    anchored_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
    updated_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type BlockchainAnchorOrderByWithRelationInput = {
    anchor_id?: SortOrder
    device_id?: SortOrder
    proof_id?: SortOrder
    proof_hash?: SortOrder
    arweave_tx_id?: SortOrderInput | SortOrder
    arweave_status?: SortOrderInput | SortOrder
    solana_tx_sig?: SortOrderInput | SortOrder
    solana_status?: SortOrderInput | SortOrder
    anchored_at?: SortOrder
    updated_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type BlockchainAnchorWhereUniqueInput = Prisma.AtLeast<{
    anchor_id?: string
    AND?: BlockchainAnchorWhereInput | BlockchainAnchorWhereInput[]
    OR?: BlockchainAnchorWhereInput[]
    NOT?: BlockchainAnchorWhereInput | BlockchainAnchorWhereInput[]
    device_id?: StringFilter<"BlockchainAnchor"> | string
    proof_id?: StringFilter<"BlockchainAnchor"> | string
    proof_hash?: StringFilter<"BlockchainAnchor"> | string
    arweave_tx_id?: StringNullableFilter<"BlockchainAnchor"> | string | null
    arweave_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_tx_sig?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    anchored_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
    updated_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "anchor_id">

  export type BlockchainAnchorOrderByWithAggregationInput = {
    anchor_id?: SortOrder
    device_id?: SortOrder
    proof_id?: SortOrder
    proof_hash?: SortOrder
    arweave_tx_id?: SortOrderInput | SortOrder
    arweave_status?: SortOrderInput | SortOrder
    solana_tx_sig?: SortOrderInput | SortOrder
    solana_status?: SortOrderInput | SortOrder
    anchored_at?: SortOrder
    updated_at?: SortOrder
    _count?: BlockchainAnchorCountOrderByAggregateInput
    _max?: BlockchainAnchorMaxOrderByAggregateInput
    _min?: BlockchainAnchorMinOrderByAggregateInput
  }

  export type BlockchainAnchorScalarWhereWithAggregatesInput = {
    AND?: BlockchainAnchorScalarWhereWithAggregatesInput | BlockchainAnchorScalarWhereWithAggregatesInput[]
    OR?: BlockchainAnchorScalarWhereWithAggregatesInput[]
    NOT?: BlockchainAnchorScalarWhereWithAggregatesInput | BlockchainAnchorScalarWhereWithAggregatesInput[]
    anchor_id?: StringWithAggregatesFilter<"BlockchainAnchor"> | string
    device_id?: StringWithAggregatesFilter<"BlockchainAnchor"> | string
    proof_id?: StringWithAggregatesFilter<"BlockchainAnchor"> | string
    proof_hash?: StringWithAggregatesFilter<"BlockchainAnchor"> | string
    arweave_tx_id?: StringNullableWithAggregatesFilter<"BlockchainAnchor"> | string | null
    arweave_status?: StringNullableWithAggregatesFilter<"BlockchainAnchor"> | string | null
    solana_tx_sig?: StringNullableWithAggregatesFilter<"BlockchainAnchor"> | string | null
    solana_status?: StringNullableWithAggregatesFilter<"BlockchainAnchor"> | string | null
    anchored_at?: DateTimeWithAggregatesFilter<"BlockchainAnchor"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"BlockchainAnchor"> | Date | string
  }

  export type DeviceMediaWhereInput = {
    AND?: DeviceMediaWhereInput | DeviceMediaWhereInput[]
    OR?: DeviceMediaWhereInput[]
    NOT?: DeviceMediaWhereInput | DeviceMediaWhereInput[]
    id?: StringFilter<"DeviceMedia"> | string
    device_id?: StringFilter<"DeviceMedia"> | string
    file_path?: StringFilter<"DeviceMedia"> | string
    hash?: StringFilter<"DeviceMedia"> | string
    size?: BigIntFilter<"DeviceMedia"> | bigint | number
    mime_type?: StringFilter<"DeviceMedia"> | string
    uploaded_at?: DateTimeFilter<"DeviceMedia"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type DeviceMediaOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    file_path?: SortOrder
    hash?: SortOrder
    size?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type DeviceMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceMediaWhereInput | DeviceMediaWhereInput[]
    OR?: DeviceMediaWhereInput[]
    NOT?: DeviceMediaWhereInput | DeviceMediaWhereInput[]
    device_id?: StringFilter<"DeviceMedia"> | string
    file_path?: StringFilter<"DeviceMedia"> | string
    hash?: StringFilter<"DeviceMedia"> | string
    size?: BigIntFilter<"DeviceMedia"> | bigint | number
    mime_type?: StringFilter<"DeviceMedia"> | string
    uploaded_at?: DateTimeFilter<"DeviceMedia"> | Date | string
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "id">

  export type DeviceMediaOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    file_path?: SortOrder
    hash?: SortOrder
    size?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
    _count?: DeviceMediaCountOrderByAggregateInput
    _avg?: DeviceMediaAvgOrderByAggregateInput
    _max?: DeviceMediaMaxOrderByAggregateInput
    _min?: DeviceMediaMinOrderByAggregateInput
    _sum?: DeviceMediaSumOrderByAggregateInput
  }

  export type DeviceMediaScalarWhereWithAggregatesInput = {
    AND?: DeviceMediaScalarWhereWithAggregatesInput | DeviceMediaScalarWhereWithAggregatesInput[]
    OR?: DeviceMediaScalarWhereWithAggregatesInput[]
    NOT?: DeviceMediaScalarWhereWithAggregatesInput | DeviceMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeviceMedia"> | string
    device_id?: StringWithAggregatesFilter<"DeviceMedia"> | string
    file_path?: StringWithAggregatesFilter<"DeviceMedia"> | string
    hash?: StringWithAggregatesFilter<"DeviceMedia"> | string
    size?: BigIntWithAggregatesFilter<"DeviceMedia"> | bigint | number
    mime_type?: StringWithAggregatesFilter<"DeviceMedia"> | string
    uploaded_at?: DateTimeWithAggregatesFilter<"DeviceMedia"> | Date | string
  }

  export type MediaVerificationWhereInput = {
    AND?: MediaVerificationWhereInput | MediaVerificationWhereInput[]
    OR?: MediaVerificationWhereInput[]
    NOT?: MediaVerificationWhereInput | MediaVerificationWhereInput[]
    id?: StringFilter<"MediaVerification"> | string
    device_id?: StringFilter<"MediaVerification"> | string
    media_hash?: StringFilter<"MediaVerification"> | string
    signature?: StringFilter<"MediaVerification"> | string
    verified_at?: DateTimeFilter<"MediaVerification"> | Date | string
    metadata?: JsonNullableFilter<"MediaVerification">
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }

  export type MediaVerificationOrderByWithRelationInput = {
    id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    signature?: SortOrder
    verified_at?: SortOrder
    metadata?: SortOrderInput | SortOrder
    device?: DeviceOrderByWithRelationInput
  }

  export type MediaVerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    media_hash?: string
    AND?: MediaVerificationWhereInput | MediaVerificationWhereInput[]
    OR?: MediaVerificationWhereInput[]
    NOT?: MediaVerificationWhereInput | MediaVerificationWhereInput[]
    device_id?: StringFilter<"MediaVerification"> | string
    signature?: StringFilter<"MediaVerification"> | string
    verified_at?: DateTimeFilter<"MediaVerification"> | Date | string
    metadata?: JsonNullableFilter<"MediaVerification">
    device?: XOR<DeviceRelationFilter, DeviceWhereInput>
  }, "id" | "media_hash">

  export type MediaVerificationOrderByWithAggregationInput = {
    id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    signature?: SortOrder
    verified_at?: SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: MediaVerificationCountOrderByAggregateInput
    _max?: MediaVerificationMaxOrderByAggregateInput
    _min?: MediaVerificationMinOrderByAggregateInput
  }

  export type MediaVerificationScalarWhereWithAggregatesInput = {
    AND?: MediaVerificationScalarWhereWithAggregatesInput | MediaVerificationScalarWhereWithAggregatesInput[]
    OR?: MediaVerificationScalarWhereWithAggregatesInput[]
    NOT?: MediaVerificationScalarWhereWithAggregatesInput | MediaVerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MediaVerification"> | string
    device_id?: StringWithAggregatesFilter<"MediaVerification"> | string
    media_hash?: StringWithAggregatesFilter<"MediaVerification"> | string
    signature?: StringWithAggregatesFilter<"MediaVerification"> | string
    verified_at?: DateTimeWithAggregatesFilter<"MediaVerification"> | Date | string
    metadata?: JsonNullableWithAggregatesFilter<"MediaVerification">
  }

  export type DeviceCreateInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUpdateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateManyInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
  }

  export type DeviceUpdateManyMutationInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeviceUncheckedUpdateManyInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MediaFileCreateInput = {
    media_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
    device: DeviceCreateNestedOneWithoutMedia_filesInput
  }

  export type MediaFileUncheckedCreateInput = {
    media_id: string
    device_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
  }

  export type MediaFileUpdateInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutMedia_filesNestedInput
  }

  export type MediaFileUncheckedUpdateInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileCreateManyInput = {
    media_id: string
    device_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
  }

  export type MediaFileUpdateManyMutationInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileUncheckedUpdateManyInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    verification_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
    device: DeviceCreateNestedOneWithoutVerificationsInput
  }

  export type VerificationUncheckedCreateInput = {
    verification_id: string
    device_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type VerificationUpdateInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutVerificationsNestedInput
  }

  export type VerificationUncheckedUpdateInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationCreateManyInput = {
    verification_id: string
    device_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type VerificationUpdateManyMutationInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ZKProofJobCreateInput = {
    proof_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    device: DeviceCreateNestedOneWithoutZk_proof_jobsInput
  }

  export type ZKProofJobUncheckedCreateInput = {
    proof_id: string
    device_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ZKProofJobUpdateInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutZk_proof_jobsNestedInput
  }

  export type ZKProofJobUncheckedUpdateInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKProofJobCreateManyInput = {
    proof_id: string
    device_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ZKProofJobUpdateManyMutationInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKProofJobUncheckedUpdateManyInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsageMeterCreateInput = {
    id?: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
    device: DeviceCreateNestedOneWithoutUsage_metersInput
  }

  export type UsageMeterUncheckedCreateInput = {
    id?: string
    device_id: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
  }

  export type UsageMeterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    device?: DeviceUpdateOneRequiredWithoutUsage_metersNestedInput
  }

  export type UsageMeterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsageMeterCreateManyInput = {
    id?: string
    device_id: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
  }

  export type UsageMeterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsageMeterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BlockchainAnchorCreateInput = {
    anchor_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
    device: DeviceCreateNestedOneWithoutBlockchain_anchorsInput
  }

  export type BlockchainAnchorUncheckedCreateInput = {
    anchor_id: string
    device_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
  }

  export type BlockchainAnchorUpdateInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutBlockchain_anchorsNestedInput
  }

  export type BlockchainAnchorUncheckedUpdateInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainAnchorCreateManyInput = {
    anchor_id: string
    device_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
  }

  export type BlockchainAnchorUpdateManyMutationInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainAnchorUncheckedUpdateManyInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaCreateInput = {
    id?: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
    device: DeviceCreateNestedOneWithoutDevice_mediaInput
  }

  export type DeviceMediaUncheckedCreateInput = {
    id?: string
    device_id: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
  }

  export type DeviceMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    device?: DeviceUpdateOneRequiredWithoutDevice_mediaNestedInput
  }

  export type DeviceMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaCreateManyInput = {
    id?: string
    device_id: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
  }

  export type DeviceMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaVerificationCreateInput = {
    id?: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    device: DeviceCreateNestedOneWithoutMedia_verificationsInput
  }

  export type MediaVerificationUncheckedCreateInput = {
    id?: string
    device_id: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    device?: DeviceUpdateOneRequiredWithoutMedia_verificationsNestedInput
  }

  export type MediaVerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationCreateManyInput = {
    id?: string
    device_id: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    device_id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UsageMeterListRelationFilter = {
    every?: UsageMeterWhereInput
    some?: UsageMeterWhereInput
    none?: UsageMeterWhereInput
  }

  export type MediaFileListRelationFilter = {
    every?: MediaFileWhereInput
    some?: MediaFileWhereInput
    none?: MediaFileWhereInput
  }

  export type VerificationListRelationFilter = {
    every?: VerificationWhereInput
    some?: VerificationWhereInput
    none?: VerificationWhereInput
  }

  export type ZKProofJobListRelationFilter = {
    every?: ZKProofJobWhereInput
    some?: ZKProofJobWhereInput
    none?: ZKProofJobWhereInput
  }

  export type BlockchainAnchorListRelationFilter = {
    every?: BlockchainAnchorWhereInput
    some?: BlockchainAnchorWhereInput
    none?: BlockchainAnchorWhereInput
  }

  export type DeviceMediaListRelationFilter = {
    every?: DeviceMediaWhereInput
    some?: DeviceMediaWhereInput
    none?: DeviceMediaWhereInput
  }

  export type MediaVerificationListRelationFilter = {
    every?: MediaVerificationWhereInput
    some?: MediaVerificationWhereInput
    none?: MediaVerificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsageMeterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaFileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ZKProofJobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BlockchainAnchorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MediaVerificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceCountOrderByAggregateInput = {
    device_id?: SortOrder
    tpm_serial?: SortOrder
    name?: SortOrder
    device_name?: SortOrder
    device_type?: SortOrder
    os_version?: SortOrder
    app_version?: SortOrder
    tpm_public_key?: SortOrder
    api_key_hash?: SortOrder
    registration_ip?: SortOrder
    user_agent?: SortOrder
    attestation_key?: SortOrder
    verified_at?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_activity_at?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    device_id?: SortOrder
    tpm_serial?: SortOrder
    name?: SortOrder
    device_name?: SortOrder
    device_type?: SortOrder
    os_version?: SortOrder
    app_version?: SortOrder
    tpm_public_key?: SortOrder
    api_key_hash?: SortOrder
    registration_ip?: SortOrder
    user_agent?: SortOrder
    attestation_key?: SortOrder
    verified_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_activity_at?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    device_id?: SortOrder
    tpm_serial?: SortOrder
    name?: SortOrder
    device_name?: SortOrder
    device_type?: SortOrder
    os_version?: SortOrder
    app_version?: SortOrder
    tpm_public_key?: SortOrder
    api_key_hash?: SortOrder
    registration_ip?: SortOrder
    user_agent?: SortOrder
    attestation_key?: SortOrder
    verified_at?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    last_activity_at?: SortOrder
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DeviceRelationFilter = {
    is?: DeviceWhereInput
    isNot?: DeviceWhereInput
  }

  export type MediaFileCountOrderByAggregateInput = {
    media_id?: SortOrder
    device_id?: SortOrder
    media_type?: SortOrder
    file_name?: SortOrder
    file_hash?: SortOrder
    ipfs_hash?: SortOrder
    file_size?: SortOrder
    storage_path?: SortOrder
    signature_verified?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaFileAvgOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type MediaFileMaxOrderByAggregateInput = {
    media_id?: SortOrder
    device_id?: SortOrder
    media_type?: SortOrder
    file_name?: SortOrder
    file_hash?: SortOrder
    ipfs_hash?: SortOrder
    file_size?: SortOrder
    storage_path?: SortOrder
    signature_verified?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaFileMinOrderByAggregateInput = {
    media_id?: SortOrder
    device_id?: SortOrder
    media_type?: SortOrder
    file_name?: SortOrder
    file_hash?: SortOrder
    ipfs_hash?: SortOrder
    file_size?: SortOrder
    storage_path?: SortOrder
    signature_verified?: SortOrder
    uploaded_at?: SortOrder
  }

  export type MediaFileSumOrderByAggregateInput = {
    file_size?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VerificationCountOrderByAggregateInput = {
    verification_id?: SortOrder
    device_id?: SortOrder
    media_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    verification_id?: SortOrder
    device_id?: SortOrder
    media_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    verification_id?: SortOrder
    device_id?: SortOrder
    media_id?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    created_at?: SortOrder
    completed_at?: SortOrder
  }

  export type BytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type ZKProofJobCountOrderByAggregateInput = {
    proof_id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    proof_type?: SortOrder
    attestation_data?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    proof_hash?: SortOrder
    completed_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ZKProofJobMaxOrderByAggregateInput = {
    proof_id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    proof_type?: SortOrder
    attestation_data?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    proof_hash?: SortOrder
    completed_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ZKProofJobMinOrderByAggregateInput = {
    proof_id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    proof_type?: SortOrder
    attestation_data?: SortOrder
    status?: SortOrder
    proof_data?: SortOrder
    proof_hash?: SortOrder
    completed_at?: SortOrder
    error_message?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type UsageMeterDevice_idMetricPeriod_startCompoundUniqueInput = {
    device_id: string
    metric: string
    period_start: Date | string
  }

  export type UsageMeterCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
  }

  export type UsageMeterAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type UsageMeterMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
  }

  export type UsageMeterMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    metric?: SortOrder
    value?: SortOrder
    period_start?: SortOrder
    period_end?: SortOrder
  }

  export type UsageMeterSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type BlockchainAnchorCountOrderByAggregateInput = {
    anchor_id?: SortOrder
    device_id?: SortOrder
    proof_id?: SortOrder
    proof_hash?: SortOrder
    arweave_tx_id?: SortOrder
    arweave_status?: SortOrder
    solana_tx_sig?: SortOrder
    solana_status?: SortOrder
    anchored_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlockchainAnchorMaxOrderByAggregateInput = {
    anchor_id?: SortOrder
    device_id?: SortOrder
    proof_id?: SortOrder
    proof_hash?: SortOrder
    arweave_tx_id?: SortOrder
    arweave_status?: SortOrder
    solana_tx_sig?: SortOrder
    solana_status?: SortOrder
    anchored_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BlockchainAnchorMinOrderByAggregateInput = {
    anchor_id?: SortOrder
    device_id?: SortOrder
    proof_id?: SortOrder
    proof_hash?: SortOrder
    arweave_tx_id?: SortOrder
    arweave_status?: SortOrder
    solana_tx_sig?: SortOrder
    solana_status?: SortOrder
    anchored_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DeviceMediaCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    file_path?: SortOrder
    hash?: SortOrder
    size?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DeviceMediaAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type DeviceMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    file_path?: SortOrder
    hash?: SortOrder
    size?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DeviceMediaMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    file_path?: SortOrder
    hash?: SortOrder
    size?: SortOrder
    mime_type?: SortOrder
    uploaded_at?: SortOrder
  }

  export type DeviceMediaSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type MediaVerificationCountOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    signature?: SortOrder
    verified_at?: SortOrder
    metadata?: SortOrder
  }

  export type MediaVerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    signature?: SortOrder
    verified_at?: SortOrder
  }

  export type MediaVerificationMinOrderByAggregateInput = {
    id?: SortOrder
    device_id?: SortOrder
    media_hash?: SortOrder
    signature?: SortOrder
    verified_at?: SortOrder
  }

  export type UsageMeterCreateNestedManyWithoutDeviceInput = {
    create?: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput> | UsageMeterCreateWithoutDeviceInput[] | UsageMeterUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UsageMeterCreateOrConnectWithoutDeviceInput | UsageMeterCreateOrConnectWithoutDeviceInput[]
    createMany?: UsageMeterCreateManyDeviceInputEnvelope
    connect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
  }

  export type MediaFileCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput> | MediaFileCreateWithoutDeviceInput[] | MediaFileUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutDeviceInput | MediaFileCreateOrConnectWithoutDeviceInput[]
    createMany?: MediaFileCreateManyDeviceInputEnvelope
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
  }

  export type VerificationCreateNestedManyWithoutDeviceInput = {
    create?: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput> | VerificationCreateWithoutDeviceInput[] | VerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutDeviceInput | VerificationCreateOrConnectWithoutDeviceInput[]
    createMany?: VerificationCreateManyDeviceInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type ZKProofJobCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput> | ZKProofJobCreateWithoutDeviceInput[] | ZKProofJobUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ZKProofJobCreateOrConnectWithoutDeviceInput | ZKProofJobCreateOrConnectWithoutDeviceInput[]
    createMany?: ZKProofJobCreateManyDeviceInputEnvelope
    connect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
  }

  export type BlockchainAnchorCreateNestedManyWithoutDeviceInput = {
    create?: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput> | BlockchainAnchorCreateWithoutDeviceInput[] | BlockchainAnchorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BlockchainAnchorCreateOrConnectWithoutDeviceInput | BlockchainAnchorCreateOrConnectWithoutDeviceInput[]
    createMany?: BlockchainAnchorCreateManyDeviceInputEnvelope
    connect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
  }

  export type DeviceMediaCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput> | DeviceMediaCreateWithoutDeviceInput[] | DeviceMediaUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceMediaCreateOrConnectWithoutDeviceInput | DeviceMediaCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceMediaCreateManyDeviceInputEnvelope
    connect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
  }

  export type MediaVerificationCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput> | MediaVerificationCreateWithoutDeviceInput[] | MediaVerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaVerificationCreateOrConnectWithoutDeviceInput | MediaVerificationCreateOrConnectWithoutDeviceInput[]
    createMany?: MediaVerificationCreateManyDeviceInputEnvelope
    connect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
  }

  export type UsageMeterUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput> | UsageMeterCreateWithoutDeviceInput[] | UsageMeterUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UsageMeterCreateOrConnectWithoutDeviceInput | UsageMeterCreateOrConnectWithoutDeviceInput[]
    createMany?: UsageMeterCreateManyDeviceInputEnvelope
    connect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
  }

  export type MediaFileUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput> | MediaFileCreateWithoutDeviceInput[] | MediaFileUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutDeviceInput | MediaFileCreateOrConnectWithoutDeviceInput[]
    createMany?: MediaFileCreateManyDeviceInputEnvelope
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
  }

  export type VerificationUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput> | VerificationCreateWithoutDeviceInput[] | VerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutDeviceInput | VerificationCreateOrConnectWithoutDeviceInput[]
    createMany?: VerificationCreateManyDeviceInputEnvelope
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
  }

  export type ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput> | ZKProofJobCreateWithoutDeviceInput[] | ZKProofJobUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ZKProofJobCreateOrConnectWithoutDeviceInput | ZKProofJobCreateOrConnectWithoutDeviceInput[]
    createMany?: ZKProofJobCreateManyDeviceInputEnvelope
    connect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
  }

  export type BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput> | BlockchainAnchorCreateWithoutDeviceInput[] | BlockchainAnchorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BlockchainAnchorCreateOrConnectWithoutDeviceInput | BlockchainAnchorCreateOrConnectWithoutDeviceInput[]
    createMany?: BlockchainAnchorCreateManyDeviceInputEnvelope
    connect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
  }

  export type DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput> | DeviceMediaCreateWithoutDeviceInput[] | DeviceMediaUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceMediaCreateOrConnectWithoutDeviceInput | DeviceMediaCreateOrConnectWithoutDeviceInput[]
    createMany?: DeviceMediaCreateManyDeviceInputEnvelope
    connect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
  }

  export type MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput = {
    create?: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput> | MediaVerificationCreateWithoutDeviceInput[] | MediaVerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaVerificationCreateOrConnectWithoutDeviceInput | MediaVerificationCreateOrConnectWithoutDeviceInput[]
    createMany?: MediaVerificationCreateManyDeviceInputEnvelope
    connect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsageMeterUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput> | UsageMeterCreateWithoutDeviceInput[] | UsageMeterUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UsageMeterCreateOrConnectWithoutDeviceInput | UsageMeterCreateOrConnectWithoutDeviceInput[]
    upsert?: UsageMeterUpsertWithWhereUniqueWithoutDeviceInput | UsageMeterUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: UsageMeterCreateManyDeviceInputEnvelope
    set?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    disconnect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    delete?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    connect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    update?: UsageMeterUpdateWithWhereUniqueWithoutDeviceInput | UsageMeterUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: UsageMeterUpdateManyWithWhereWithoutDeviceInput | UsageMeterUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: UsageMeterScalarWhereInput | UsageMeterScalarWhereInput[]
  }

  export type MediaFileUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput> | MediaFileCreateWithoutDeviceInput[] | MediaFileUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutDeviceInput | MediaFileCreateOrConnectWithoutDeviceInput[]
    upsert?: MediaFileUpsertWithWhereUniqueWithoutDeviceInput | MediaFileUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MediaFileCreateManyDeviceInputEnvelope
    set?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    disconnect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    delete?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    update?: MediaFileUpdateWithWhereUniqueWithoutDeviceInput | MediaFileUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MediaFileUpdateManyWithWhereWithoutDeviceInput | MediaFileUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
  }

  export type VerificationUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput> | VerificationCreateWithoutDeviceInput[] | VerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutDeviceInput | VerificationCreateOrConnectWithoutDeviceInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutDeviceInput | VerificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: VerificationCreateManyDeviceInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutDeviceInput | VerificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutDeviceInput | VerificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type ZKProofJobUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput> | ZKProofJobCreateWithoutDeviceInput[] | ZKProofJobUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ZKProofJobCreateOrConnectWithoutDeviceInput | ZKProofJobCreateOrConnectWithoutDeviceInput[]
    upsert?: ZKProofJobUpsertWithWhereUniqueWithoutDeviceInput | ZKProofJobUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ZKProofJobCreateManyDeviceInputEnvelope
    set?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    disconnect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    delete?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    connect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    update?: ZKProofJobUpdateWithWhereUniqueWithoutDeviceInput | ZKProofJobUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ZKProofJobUpdateManyWithWhereWithoutDeviceInput | ZKProofJobUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ZKProofJobScalarWhereInput | ZKProofJobScalarWhereInput[]
  }

  export type BlockchainAnchorUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput> | BlockchainAnchorCreateWithoutDeviceInput[] | BlockchainAnchorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BlockchainAnchorCreateOrConnectWithoutDeviceInput | BlockchainAnchorCreateOrConnectWithoutDeviceInput[]
    upsert?: BlockchainAnchorUpsertWithWhereUniqueWithoutDeviceInput | BlockchainAnchorUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: BlockchainAnchorCreateManyDeviceInputEnvelope
    set?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    disconnect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    delete?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    connect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    update?: BlockchainAnchorUpdateWithWhereUniqueWithoutDeviceInput | BlockchainAnchorUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: BlockchainAnchorUpdateManyWithWhereWithoutDeviceInput | BlockchainAnchorUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: BlockchainAnchorScalarWhereInput | BlockchainAnchorScalarWhereInput[]
  }

  export type DeviceMediaUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput> | DeviceMediaCreateWithoutDeviceInput[] | DeviceMediaUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceMediaCreateOrConnectWithoutDeviceInput | DeviceMediaCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceMediaUpsertWithWhereUniqueWithoutDeviceInput | DeviceMediaUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceMediaCreateManyDeviceInputEnvelope
    set?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    disconnect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    delete?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    connect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    update?: DeviceMediaUpdateWithWhereUniqueWithoutDeviceInput | DeviceMediaUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceMediaUpdateManyWithWhereWithoutDeviceInput | DeviceMediaUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceMediaScalarWhereInput | DeviceMediaScalarWhereInput[]
  }

  export type MediaVerificationUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput> | MediaVerificationCreateWithoutDeviceInput[] | MediaVerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaVerificationCreateOrConnectWithoutDeviceInput | MediaVerificationCreateOrConnectWithoutDeviceInput[]
    upsert?: MediaVerificationUpsertWithWhereUniqueWithoutDeviceInput | MediaVerificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MediaVerificationCreateManyDeviceInputEnvelope
    set?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    disconnect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    delete?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    connect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    update?: MediaVerificationUpdateWithWhereUniqueWithoutDeviceInput | MediaVerificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MediaVerificationUpdateManyWithWhereWithoutDeviceInput | MediaVerificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MediaVerificationScalarWhereInput | MediaVerificationScalarWhereInput[]
  }

  export type UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput> | UsageMeterCreateWithoutDeviceInput[] | UsageMeterUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: UsageMeterCreateOrConnectWithoutDeviceInput | UsageMeterCreateOrConnectWithoutDeviceInput[]
    upsert?: UsageMeterUpsertWithWhereUniqueWithoutDeviceInput | UsageMeterUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: UsageMeterCreateManyDeviceInputEnvelope
    set?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    disconnect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    delete?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    connect?: UsageMeterWhereUniqueInput | UsageMeterWhereUniqueInput[]
    update?: UsageMeterUpdateWithWhereUniqueWithoutDeviceInput | UsageMeterUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: UsageMeterUpdateManyWithWhereWithoutDeviceInput | UsageMeterUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: UsageMeterScalarWhereInput | UsageMeterScalarWhereInput[]
  }

  export type MediaFileUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput> | MediaFileCreateWithoutDeviceInput[] | MediaFileUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaFileCreateOrConnectWithoutDeviceInput | MediaFileCreateOrConnectWithoutDeviceInput[]
    upsert?: MediaFileUpsertWithWhereUniqueWithoutDeviceInput | MediaFileUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MediaFileCreateManyDeviceInputEnvelope
    set?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    disconnect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    delete?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    connect?: MediaFileWhereUniqueInput | MediaFileWhereUniqueInput[]
    update?: MediaFileUpdateWithWhereUniqueWithoutDeviceInput | MediaFileUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MediaFileUpdateManyWithWhereWithoutDeviceInput | MediaFileUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
  }

  export type VerificationUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput> | VerificationCreateWithoutDeviceInput[] | VerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: VerificationCreateOrConnectWithoutDeviceInput | VerificationCreateOrConnectWithoutDeviceInput[]
    upsert?: VerificationUpsertWithWhereUniqueWithoutDeviceInput | VerificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: VerificationCreateManyDeviceInputEnvelope
    set?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    disconnect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    delete?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    connect?: VerificationWhereUniqueInput | VerificationWhereUniqueInput[]
    update?: VerificationUpdateWithWhereUniqueWithoutDeviceInput | VerificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: VerificationUpdateManyWithWhereWithoutDeviceInput | VerificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
  }

  export type ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput> | ZKProofJobCreateWithoutDeviceInput[] | ZKProofJobUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: ZKProofJobCreateOrConnectWithoutDeviceInput | ZKProofJobCreateOrConnectWithoutDeviceInput[]
    upsert?: ZKProofJobUpsertWithWhereUniqueWithoutDeviceInput | ZKProofJobUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: ZKProofJobCreateManyDeviceInputEnvelope
    set?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    disconnect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    delete?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    connect?: ZKProofJobWhereUniqueInput | ZKProofJobWhereUniqueInput[]
    update?: ZKProofJobUpdateWithWhereUniqueWithoutDeviceInput | ZKProofJobUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: ZKProofJobUpdateManyWithWhereWithoutDeviceInput | ZKProofJobUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: ZKProofJobScalarWhereInput | ZKProofJobScalarWhereInput[]
  }

  export type BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput> | BlockchainAnchorCreateWithoutDeviceInput[] | BlockchainAnchorUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: BlockchainAnchorCreateOrConnectWithoutDeviceInput | BlockchainAnchorCreateOrConnectWithoutDeviceInput[]
    upsert?: BlockchainAnchorUpsertWithWhereUniqueWithoutDeviceInput | BlockchainAnchorUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: BlockchainAnchorCreateManyDeviceInputEnvelope
    set?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    disconnect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    delete?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    connect?: BlockchainAnchorWhereUniqueInput | BlockchainAnchorWhereUniqueInput[]
    update?: BlockchainAnchorUpdateWithWhereUniqueWithoutDeviceInput | BlockchainAnchorUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: BlockchainAnchorUpdateManyWithWhereWithoutDeviceInput | BlockchainAnchorUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: BlockchainAnchorScalarWhereInput | BlockchainAnchorScalarWhereInput[]
  }

  export type DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput> | DeviceMediaCreateWithoutDeviceInput[] | DeviceMediaUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: DeviceMediaCreateOrConnectWithoutDeviceInput | DeviceMediaCreateOrConnectWithoutDeviceInput[]
    upsert?: DeviceMediaUpsertWithWhereUniqueWithoutDeviceInput | DeviceMediaUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: DeviceMediaCreateManyDeviceInputEnvelope
    set?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    disconnect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    delete?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    connect?: DeviceMediaWhereUniqueInput | DeviceMediaWhereUniqueInput[]
    update?: DeviceMediaUpdateWithWhereUniqueWithoutDeviceInput | DeviceMediaUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: DeviceMediaUpdateManyWithWhereWithoutDeviceInput | DeviceMediaUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: DeviceMediaScalarWhereInput | DeviceMediaScalarWhereInput[]
  }

  export type MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput = {
    create?: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput> | MediaVerificationCreateWithoutDeviceInput[] | MediaVerificationUncheckedCreateWithoutDeviceInput[]
    connectOrCreate?: MediaVerificationCreateOrConnectWithoutDeviceInput | MediaVerificationCreateOrConnectWithoutDeviceInput[]
    upsert?: MediaVerificationUpsertWithWhereUniqueWithoutDeviceInput | MediaVerificationUpsertWithWhereUniqueWithoutDeviceInput[]
    createMany?: MediaVerificationCreateManyDeviceInputEnvelope
    set?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    disconnect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    delete?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    connect?: MediaVerificationWhereUniqueInput | MediaVerificationWhereUniqueInput[]
    update?: MediaVerificationUpdateWithWhereUniqueWithoutDeviceInput | MediaVerificationUpdateWithWhereUniqueWithoutDeviceInput[]
    updateMany?: MediaVerificationUpdateManyWithWhereWithoutDeviceInput | MediaVerificationUpdateManyWithWhereWithoutDeviceInput[]
    deleteMany?: MediaVerificationScalarWhereInput | MediaVerificationScalarWhereInput[]
  }

  export type DeviceCreateNestedOneWithoutMedia_filesInput = {
    create?: XOR<DeviceCreateWithoutMedia_filesInput, DeviceUncheckedCreateWithoutMedia_filesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMedia_filesInput
    connect?: DeviceWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DeviceUpdateOneRequiredWithoutMedia_filesNestedInput = {
    create?: XOR<DeviceCreateWithoutMedia_filesInput, DeviceUncheckedCreateWithoutMedia_filesInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMedia_filesInput
    upsert?: DeviceUpsertWithoutMedia_filesInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutMedia_filesInput, DeviceUpdateWithoutMedia_filesInput>, DeviceUncheckedUpdateWithoutMedia_filesInput>
  }

  export type DeviceCreateNestedOneWithoutVerificationsInput = {
    create?: XOR<DeviceCreateWithoutVerificationsInput, DeviceUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutVerificationsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutVerificationsNestedInput = {
    create?: XOR<DeviceCreateWithoutVerificationsInput, DeviceUncheckedCreateWithoutVerificationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutVerificationsInput
    upsert?: DeviceUpsertWithoutVerificationsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutVerificationsInput, DeviceUpdateWithoutVerificationsInput>, DeviceUncheckedUpdateWithoutVerificationsInput>
  }

  export type DeviceCreateNestedOneWithoutZk_proof_jobsInput = {
    create?: XOR<DeviceCreateWithoutZk_proof_jobsInput, DeviceUncheckedCreateWithoutZk_proof_jobsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutZk_proof_jobsInput
    connect?: DeviceWhereUniqueInput
  }

  export type NullableBytesFieldUpdateOperationsInput = {
    set?: Buffer | null
  }

  export type DeviceUpdateOneRequiredWithoutZk_proof_jobsNestedInput = {
    create?: XOR<DeviceCreateWithoutZk_proof_jobsInput, DeviceUncheckedCreateWithoutZk_proof_jobsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutZk_proof_jobsInput
    upsert?: DeviceUpsertWithoutZk_proof_jobsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutZk_proof_jobsInput, DeviceUpdateWithoutZk_proof_jobsInput>, DeviceUncheckedUpdateWithoutZk_proof_jobsInput>
  }

  export type DeviceCreateNestedOneWithoutUsage_metersInput = {
    create?: XOR<DeviceCreateWithoutUsage_metersInput, DeviceUncheckedCreateWithoutUsage_metersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutUsage_metersInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutUsage_metersNestedInput = {
    create?: XOR<DeviceCreateWithoutUsage_metersInput, DeviceUncheckedCreateWithoutUsage_metersInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutUsage_metersInput
    upsert?: DeviceUpsertWithoutUsage_metersInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutUsage_metersInput, DeviceUpdateWithoutUsage_metersInput>, DeviceUncheckedUpdateWithoutUsage_metersInput>
  }

  export type DeviceCreateNestedOneWithoutBlockchain_anchorsInput = {
    create?: XOR<DeviceCreateWithoutBlockchain_anchorsInput, DeviceUncheckedCreateWithoutBlockchain_anchorsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutBlockchain_anchorsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutBlockchain_anchorsNestedInput = {
    create?: XOR<DeviceCreateWithoutBlockchain_anchorsInput, DeviceUncheckedCreateWithoutBlockchain_anchorsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutBlockchain_anchorsInput
    upsert?: DeviceUpsertWithoutBlockchain_anchorsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutBlockchain_anchorsInput, DeviceUpdateWithoutBlockchain_anchorsInput>, DeviceUncheckedUpdateWithoutBlockchain_anchorsInput>
  }

  export type DeviceCreateNestedOneWithoutDevice_mediaInput = {
    create?: XOR<DeviceCreateWithoutDevice_mediaInput, DeviceUncheckedCreateWithoutDevice_mediaInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDevice_mediaInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutDevice_mediaNestedInput = {
    create?: XOR<DeviceCreateWithoutDevice_mediaInput, DeviceUncheckedCreateWithoutDevice_mediaInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutDevice_mediaInput
    upsert?: DeviceUpsertWithoutDevice_mediaInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutDevice_mediaInput, DeviceUpdateWithoutDevice_mediaInput>, DeviceUncheckedUpdateWithoutDevice_mediaInput>
  }

  export type DeviceCreateNestedOneWithoutMedia_verificationsInput = {
    create?: XOR<DeviceCreateWithoutMedia_verificationsInput, DeviceUncheckedCreateWithoutMedia_verificationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMedia_verificationsInput
    connect?: DeviceWhereUniqueInput
  }

  export type DeviceUpdateOneRequiredWithoutMedia_verificationsNestedInput = {
    create?: XOR<DeviceCreateWithoutMedia_verificationsInput, DeviceUncheckedCreateWithoutMedia_verificationsInput>
    connectOrCreate?: DeviceCreateOrConnectWithoutMedia_verificationsInput
    upsert?: DeviceUpsertWithoutMedia_verificationsInput
    connect?: DeviceWhereUniqueInput
    update?: XOR<XOR<DeviceUpdateToOneWithWhereWithoutMedia_verificationsInput, DeviceUpdateWithoutMedia_verificationsInput>, DeviceUncheckedUpdateWithoutMedia_verificationsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedBytesNullableFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableFilter<$PrismaModel> | Buffer | null
  }

  export type NestedBytesNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Buffer | BytesFieldRefInput<$PrismaModel> | null
    in?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    notIn?: Buffer[] | ListBytesFieldRefInput<$PrismaModel> | null
    not?: NestedBytesNullableWithAggregatesFilter<$PrismaModel> | Buffer | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBytesNullableFilter<$PrismaModel>
    _max?: NestedBytesNullableFilter<$PrismaModel>
  }

  export type UsageMeterCreateWithoutDeviceInput = {
    id?: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
  }

  export type UsageMeterUncheckedCreateWithoutDeviceInput = {
    id?: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
  }

  export type UsageMeterCreateOrConnectWithoutDeviceInput = {
    where: UsageMeterWhereUniqueInput
    create: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput>
  }

  export type UsageMeterCreateManyDeviceInputEnvelope = {
    data: UsageMeterCreateManyDeviceInput | UsageMeterCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type MediaFileCreateWithoutDeviceInput = {
    media_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
  }

  export type MediaFileUncheckedCreateWithoutDeviceInput = {
    media_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
  }

  export type MediaFileCreateOrConnectWithoutDeviceInput = {
    where: MediaFileWhereUniqueInput
    create: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput>
  }

  export type MediaFileCreateManyDeviceInputEnvelope = {
    data: MediaFileCreateManyDeviceInput | MediaFileCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type VerificationCreateWithoutDeviceInput = {
    verification_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type VerificationUncheckedCreateWithoutDeviceInput = {
    verification_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type VerificationCreateOrConnectWithoutDeviceInput = {
    where: VerificationWhereUniqueInput
    create: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput>
  }

  export type VerificationCreateManyDeviceInputEnvelope = {
    data: VerificationCreateManyDeviceInput | VerificationCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type ZKProofJobCreateWithoutDeviceInput = {
    proof_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ZKProofJobUncheckedCreateWithoutDeviceInput = {
    proof_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ZKProofJobCreateOrConnectWithoutDeviceInput = {
    where: ZKProofJobWhereUniqueInput
    create: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput>
  }

  export type ZKProofJobCreateManyDeviceInputEnvelope = {
    data: ZKProofJobCreateManyDeviceInput | ZKProofJobCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type BlockchainAnchorCreateWithoutDeviceInput = {
    anchor_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
  }

  export type BlockchainAnchorUncheckedCreateWithoutDeviceInput = {
    anchor_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
  }

  export type BlockchainAnchorCreateOrConnectWithoutDeviceInput = {
    where: BlockchainAnchorWhereUniqueInput
    create: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput>
  }

  export type BlockchainAnchorCreateManyDeviceInputEnvelope = {
    data: BlockchainAnchorCreateManyDeviceInput | BlockchainAnchorCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type DeviceMediaCreateWithoutDeviceInput = {
    id?: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
  }

  export type DeviceMediaUncheckedCreateWithoutDeviceInput = {
    id?: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
  }

  export type DeviceMediaCreateOrConnectWithoutDeviceInput = {
    where: DeviceMediaWhereUniqueInput
    create: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceMediaCreateManyDeviceInputEnvelope = {
    data: DeviceMediaCreateManyDeviceInput | DeviceMediaCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type MediaVerificationCreateWithoutDeviceInput = {
    id?: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUncheckedCreateWithoutDeviceInput = {
    id?: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationCreateOrConnectWithoutDeviceInput = {
    where: MediaVerificationWhereUniqueInput
    create: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput>
  }

  export type MediaVerificationCreateManyDeviceInputEnvelope = {
    data: MediaVerificationCreateManyDeviceInput | MediaVerificationCreateManyDeviceInput[]
    skipDuplicates?: boolean
  }

  export type UsageMeterUpsertWithWhereUniqueWithoutDeviceInput = {
    where: UsageMeterWhereUniqueInput
    update: XOR<UsageMeterUpdateWithoutDeviceInput, UsageMeterUncheckedUpdateWithoutDeviceInput>
    create: XOR<UsageMeterCreateWithoutDeviceInput, UsageMeterUncheckedCreateWithoutDeviceInput>
  }

  export type UsageMeterUpdateWithWhereUniqueWithoutDeviceInput = {
    where: UsageMeterWhereUniqueInput
    data: XOR<UsageMeterUpdateWithoutDeviceInput, UsageMeterUncheckedUpdateWithoutDeviceInput>
  }

  export type UsageMeterUpdateManyWithWhereWithoutDeviceInput = {
    where: UsageMeterScalarWhereInput
    data: XOR<UsageMeterUpdateManyMutationInput, UsageMeterUncheckedUpdateManyWithoutDeviceInput>
  }

  export type UsageMeterScalarWhereInput = {
    AND?: UsageMeterScalarWhereInput | UsageMeterScalarWhereInput[]
    OR?: UsageMeterScalarWhereInput[]
    NOT?: UsageMeterScalarWhereInput | UsageMeterScalarWhereInput[]
    id?: StringFilter<"UsageMeter"> | string
    device_id?: StringFilter<"UsageMeter"> | string
    metric?: StringFilter<"UsageMeter"> | string
    value?: BigIntFilter<"UsageMeter"> | bigint | number
    period_start?: DateTimeFilter<"UsageMeter"> | Date | string
    period_end?: DateTimeNullableFilter<"UsageMeter"> | Date | string | null
  }

  export type MediaFileUpsertWithWhereUniqueWithoutDeviceInput = {
    where: MediaFileWhereUniqueInput
    update: XOR<MediaFileUpdateWithoutDeviceInput, MediaFileUncheckedUpdateWithoutDeviceInput>
    create: XOR<MediaFileCreateWithoutDeviceInput, MediaFileUncheckedCreateWithoutDeviceInput>
  }

  export type MediaFileUpdateWithWhereUniqueWithoutDeviceInput = {
    where: MediaFileWhereUniqueInput
    data: XOR<MediaFileUpdateWithoutDeviceInput, MediaFileUncheckedUpdateWithoutDeviceInput>
  }

  export type MediaFileUpdateManyWithWhereWithoutDeviceInput = {
    where: MediaFileScalarWhereInput
    data: XOR<MediaFileUpdateManyMutationInput, MediaFileUncheckedUpdateManyWithoutDeviceInput>
  }

  export type MediaFileScalarWhereInput = {
    AND?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
    OR?: MediaFileScalarWhereInput[]
    NOT?: MediaFileScalarWhereInput | MediaFileScalarWhereInput[]
    media_id?: StringFilter<"MediaFile"> | string
    device_id?: StringFilter<"MediaFile"> | string
    media_type?: StringFilter<"MediaFile"> | string
    file_name?: StringFilter<"MediaFile"> | string
    file_hash?: StringFilter<"MediaFile"> | string
    ipfs_hash?: StringNullableFilter<"MediaFile"> | string | null
    file_size?: BigIntFilter<"MediaFile"> | bigint | number
    storage_path?: StringNullableFilter<"MediaFile"> | string | null
    signature_verified?: BoolFilter<"MediaFile"> | boolean
    uploaded_at?: DateTimeFilter<"MediaFile"> | Date | string
  }

  export type VerificationUpsertWithWhereUniqueWithoutDeviceInput = {
    where: VerificationWhereUniqueInput
    update: XOR<VerificationUpdateWithoutDeviceInput, VerificationUncheckedUpdateWithoutDeviceInput>
    create: XOR<VerificationCreateWithoutDeviceInput, VerificationUncheckedCreateWithoutDeviceInput>
  }

  export type VerificationUpdateWithWhereUniqueWithoutDeviceInput = {
    where: VerificationWhereUniqueInput
    data: XOR<VerificationUpdateWithoutDeviceInput, VerificationUncheckedUpdateWithoutDeviceInput>
  }

  export type VerificationUpdateManyWithWhereWithoutDeviceInput = {
    where: VerificationScalarWhereInput
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyWithoutDeviceInput>
  }

  export type VerificationScalarWhereInput = {
    AND?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    OR?: VerificationScalarWhereInput[]
    NOT?: VerificationScalarWhereInput | VerificationScalarWhereInput[]
    verification_id?: StringFilter<"Verification"> | string
    device_id?: StringFilter<"Verification"> | string
    media_id?: StringNullableFilter<"Verification"> | string | null
    status?: StringFilter<"Verification"> | string
    proof_data?: StringNullableFilter<"Verification"> | string | null
    created_at?: DateTimeFilter<"Verification"> | Date | string
    completed_at?: DateTimeNullableFilter<"Verification"> | Date | string | null
  }

  export type ZKProofJobUpsertWithWhereUniqueWithoutDeviceInput = {
    where: ZKProofJobWhereUniqueInput
    update: XOR<ZKProofJobUpdateWithoutDeviceInput, ZKProofJobUncheckedUpdateWithoutDeviceInput>
    create: XOR<ZKProofJobCreateWithoutDeviceInput, ZKProofJobUncheckedCreateWithoutDeviceInput>
  }

  export type ZKProofJobUpdateWithWhereUniqueWithoutDeviceInput = {
    where: ZKProofJobWhereUniqueInput
    data: XOR<ZKProofJobUpdateWithoutDeviceInput, ZKProofJobUncheckedUpdateWithoutDeviceInput>
  }

  export type ZKProofJobUpdateManyWithWhereWithoutDeviceInput = {
    where: ZKProofJobScalarWhereInput
    data: XOR<ZKProofJobUpdateManyMutationInput, ZKProofJobUncheckedUpdateManyWithoutDeviceInput>
  }

  export type ZKProofJobScalarWhereInput = {
    AND?: ZKProofJobScalarWhereInput | ZKProofJobScalarWhereInput[]
    OR?: ZKProofJobScalarWhereInput[]
    NOT?: ZKProofJobScalarWhereInput | ZKProofJobScalarWhereInput[]
    proof_id?: StringFilter<"ZKProofJob"> | string
    device_id?: StringFilter<"ZKProofJob"> | string
    media_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    proof_type?: StringFilter<"ZKProofJob"> | string
    attestation_data?: StringNullableFilter<"ZKProofJob"> | string | null
    status?: StringFilter<"ZKProofJob"> | string
    proof_data?: BytesNullableFilter<"ZKProofJob"> | Buffer | null
    proof_hash?: StringNullableFilter<"ZKProofJob"> | string | null
    completed_at?: DateTimeNullableFilter<"ZKProofJob"> | Date | string | null
    error_message?: StringNullableFilter<"ZKProofJob"> | string | null
    created_at?: DateTimeFilter<"ZKProofJob"> | Date | string
    updated_at?: DateTimeFilter<"ZKProofJob"> | Date | string
  }

  export type BlockchainAnchorUpsertWithWhereUniqueWithoutDeviceInput = {
    where: BlockchainAnchorWhereUniqueInput
    update: XOR<BlockchainAnchorUpdateWithoutDeviceInput, BlockchainAnchorUncheckedUpdateWithoutDeviceInput>
    create: XOR<BlockchainAnchorCreateWithoutDeviceInput, BlockchainAnchorUncheckedCreateWithoutDeviceInput>
  }

  export type BlockchainAnchorUpdateWithWhereUniqueWithoutDeviceInput = {
    where: BlockchainAnchorWhereUniqueInput
    data: XOR<BlockchainAnchorUpdateWithoutDeviceInput, BlockchainAnchorUncheckedUpdateWithoutDeviceInput>
  }

  export type BlockchainAnchorUpdateManyWithWhereWithoutDeviceInput = {
    where: BlockchainAnchorScalarWhereInput
    data: XOR<BlockchainAnchorUpdateManyMutationInput, BlockchainAnchorUncheckedUpdateManyWithoutDeviceInput>
  }

  export type BlockchainAnchorScalarWhereInput = {
    AND?: BlockchainAnchorScalarWhereInput | BlockchainAnchorScalarWhereInput[]
    OR?: BlockchainAnchorScalarWhereInput[]
    NOT?: BlockchainAnchorScalarWhereInput | BlockchainAnchorScalarWhereInput[]
    anchor_id?: StringFilter<"BlockchainAnchor"> | string
    device_id?: StringFilter<"BlockchainAnchor"> | string
    proof_id?: StringFilter<"BlockchainAnchor"> | string
    proof_hash?: StringFilter<"BlockchainAnchor"> | string
    arweave_tx_id?: StringNullableFilter<"BlockchainAnchor"> | string | null
    arweave_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_tx_sig?: StringNullableFilter<"BlockchainAnchor"> | string | null
    solana_status?: StringNullableFilter<"BlockchainAnchor"> | string | null
    anchored_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
    updated_at?: DateTimeFilter<"BlockchainAnchor"> | Date | string
  }

  export type DeviceMediaUpsertWithWhereUniqueWithoutDeviceInput = {
    where: DeviceMediaWhereUniqueInput
    update: XOR<DeviceMediaUpdateWithoutDeviceInput, DeviceMediaUncheckedUpdateWithoutDeviceInput>
    create: XOR<DeviceMediaCreateWithoutDeviceInput, DeviceMediaUncheckedCreateWithoutDeviceInput>
  }

  export type DeviceMediaUpdateWithWhereUniqueWithoutDeviceInput = {
    where: DeviceMediaWhereUniqueInput
    data: XOR<DeviceMediaUpdateWithoutDeviceInput, DeviceMediaUncheckedUpdateWithoutDeviceInput>
  }

  export type DeviceMediaUpdateManyWithWhereWithoutDeviceInput = {
    where: DeviceMediaScalarWhereInput
    data: XOR<DeviceMediaUpdateManyMutationInput, DeviceMediaUncheckedUpdateManyWithoutDeviceInput>
  }

  export type DeviceMediaScalarWhereInput = {
    AND?: DeviceMediaScalarWhereInput | DeviceMediaScalarWhereInput[]
    OR?: DeviceMediaScalarWhereInput[]
    NOT?: DeviceMediaScalarWhereInput | DeviceMediaScalarWhereInput[]
    id?: StringFilter<"DeviceMedia"> | string
    device_id?: StringFilter<"DeviceMedia"> | string
    file_path?: StringFilter<"DeviceMedia"> | string
    hash?: StringFilter<"DeviceMedia"> | string
    size?: BigIntFilter<"DeviceMedia"> | bigint | number
    mime_type?: StringFilter<"DeviceMedia"> | string
    uploaded_at?: DateTimeFilter<"DeviceMedia"> | Date | string
  }

  export type MediaVerificationUpsertWithWhereUniqueWithoutDeviceInput = {
    where: MediaVerificationWhereUniqueInput
    update: XOR<MediaVerificationUpdateWithoutDeviceInput, MediaVerificationUncheckedUpdateWithoutDeviceInput>
    create: XOR<MediaVerificationCreateWithoutDeviceInput, MediaVerificationUncheckedCreateWithoutDeviceInput>
  }

  export type MediaVerificationUpdateWithWhereUniqueWithoutDeviceInput = {
    where: MediaVerificationWhereUniqueInput
    data: XOR<MediaVerificationUpdateWithoutDeviceInput, MediaVerificationUncheckedUpdateWithoutDeviceInput>
  }

  export type MediaVerificationUpdateManyWithWhereWithoutDeviceInput = {
    where: MediaVerificationScalarWhereInput
    data: XOR<MediaVerificationUpdateManyMutationInput, MediaVerificationUncheckedUpdateManyWithoutDeviceInput>
  }

  export type MediaVerificationScalarWhereInput = {
    AND?: MediaVerificationScalarWhereInput | MediaVerificationScalarWhereInput[]
    OR?: MediaVerificationScalarWhereInput[]
    NOT?: MediaVerificationScalarWhereInput | MediaVerificationScalarWhereInput[]
    id?: StringFilter<"MediaVerification"> | string
    device_id?: StringFilter<"MediaVerification"> | string
    media_hash?: StringFilter<"MediaVerification"> | string
    signature?: StringFilter<"MediaVerification"> | string
    verified_at?: DateTimeFilter<"MediaVerification"> | Date | string
    metadata?: JsonNullableFilter<"MediaVerification">
  }

  export type DeviceCreateWithoutMedia_filesInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutMedia_filesInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutMedia_filesInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutMedia_filesInput, DeviceUncheckedCreateWithoutMedia_filesInput>
  }

  export type DeviceUpsertWithoutMedia_filesInput = {
    update: XOR<DeviceUpdateWithoutMedia_filesInput, DeviceUncheckedUpdateWithoutMedia_filesInput>
    create: XOR<DeviceCreateWithoutMedia_filesInput, DeviceUncheckedCreateWithoutMedia_filesInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutMedia_filesInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutMedia_filesInput, DeviceUncheckedUpdateWithoutMedia_filesInput>
  }

  export type DeviceUpdateWithoutMedia_filesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutMedia_filesInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutVerificationsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutVerificationsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutVerificationsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutVerificationsInput, DeviceUncheckedCreateWithoutVerificationsInput>
  }

  export type DeviceUpsertWithoutVerificationsInput = {
    update: XOR<DeviceUpdateWithoutVerificationsInput, DeviceUncheckedUpdateWithoutVerificationsInput>
    create: XOR<DeviceCreateWithoutVerificationsInput, DeviceUncheckedCreateWithoutVerificationsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutVerificationsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutVerificationsInput, DeviceUncheckedUpdateWithoutVerificationsInput>
  }

  export type DeviceUpdateWithoutVerificationsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutVerificationsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutZk_proof_jobsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutZk_proof_jobsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutZk_proof_jobsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutZk_proof_jobsInput, DeviceUncheckedCreateWithoutZk_proof_jobsInput>
  }

  export type DeviceUpsertWithoutZk_proof_jobsInput = {
    update: XOR<DeviceUpdateWithoutZk_proof_jobsInput, DeviceUncheckedUpdateWithoutZk_proof_jobsInput>
    create: XOR<DeviceCreateWithoutZk_proof_jobsInput, DeviceUncheckedCreateWithoutZk_proof_jobsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutZk_proof_jobsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutZk_proof_jobsInput, DeviceUncheckedUpdateWithoutZk_proof_jobsInput>
  }

  export type DeviceUpdateWithoutZk_proof_jobsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutZk_proof_jobsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutUsage_metersInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutUsage_metersInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutUsage_metersInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUsage_metersInput, DeviceUncheckedCreateWithoutUsage_metersInput>
  }

  export type DeviceUpsertWithoutUsage_metersInput = {
    update: XOR<DeviceUpdateWithoutUsage_metersInput, DeviceUncheckedUpdateWithoutUsage_metersInput>
    create: XOR<DeviceCreateWithoutUsage_metersInput, DeviceUncheckedCreateWithoutUsage_metersInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutUsage_metersInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutUsage_metersInput, DeviceUncheckedUpdateWithoutUsage_metersInput>
  }

  export type DeviceUpdateWithoutUsage_metersInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutUsage_metersInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutBlockchain_anchorsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutBlockchain_anchorsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutBlockchain_anchorsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutBlockchain_anchorsInput, DeviceUncheckedCreateWithoutBlockchain_anchorsInput>
  }

  export type DeviceUpsertWithoutBlockchain_anchorsInput = {
    update: XOR<DeviceUpdateWithoutBlockchain_anchorsInput, DeviceUncheckedUpdateWithoutBlockchain_anchorsInput>
    create: XOR<DeviceCreateWithoutBlockchain_anchorsInput, DeviceUncheckedCreateWithoutBlockchain_anchorsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutBlockchain_anchorsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutBlockchain_anchorsInput, DeviceUncheckedUpdateWithoutBlockchain_anchorsInput>
  }

  export type DeviceUpdateWithoutBlockchain_anchorsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutBlockchain_anchorsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutDevice_mediaInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutDevice_mediaInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    media_verifications?: MediaVerificationUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutDevice_mediaInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutDevice_mediaInput, DeviceUncheckedCreateWithoutDevice_mediaInput>
  }

  export type DeviceUpsertWithoutDevice_mediaInput = {
    update: XOR<DeviceUpdateWithoutDevice_mediaInput, DeviceUncheckedUpdateWithoutDevice_mediaInput>
    create: XOR<DeviceCreateWithoutDevice_mediaInput, DeviceUncheckedCreateWithoutDevice_mediaInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutDevice_mediaInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutDevice_mediaInput, DeviceUncheckedUpdateWithoutDevice_mediaInput>
  }

  export type DeviceUpdateWithoutDevice_mediaInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutDevice_mediaInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    media_verifications?: MediaVerificationUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceCreateWithoutMedia_verificationsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileCreateNestedManyWithoutDeviceInput
    verifications?: VerificationCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaCreateNestedManyWithoutDeviceInput
  }

  export type DeviceUncheckedCreateWithoutMedia_verificationsInput = {
    device_id: string
    tpm_serial?: string | null
    name?: string | null
    device_name?: string | null
    device_type?: string | null
    os_version?: string | null
    app_version?: string | null
    tpm_public_key: string
    api_key_hash?: string | null
    registration_ip?: string | null
    user_agent?: string | null
    attestation_key?: string | null
    verified_at?: Date | string | null
    status?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    last_activity_at?: Date | string | null
    usage_meters?: UsageMeterUncheckedCreateNestedManyWithoutDeviceInput
    media_files?: MediaFileUncheckedCreateNestedManyWithoutDeviceInput
    verifications?: VerificationUncheckedCreateNestedManyWithoutDeviceInput
    zk_proof_jobs?: ZKProofJobUncheckedCreateNestedManyWithoutDeviceInput
    blockchain_anchors?: BlockchainAnchorUncheckedCreateNestedManyWithoutDeviceInput
    device_media?: DeviceMediaUncheckedCreateNestedManyWithoutDeviceInput
  }

  export type DeviceCreateOrConnectWithoutMedia_verificationsInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutMedia_verificationsInput, DeviceUncheckedCreateWithoutMedia_verificationsInput>
  }

  export type DeviceUpsertWithoutMedia_verificationsInput = {
    update: XOR<DeviceUpdateWithoutMedia_verificationsInput, DeviceUncheckedUpdateWithoutMedia_verificationsInput>
    create: XOR<DeviceCreateWithoutMedia_verificationsInput, DeviceUncheckedCreateWithoutMedia_verificationsInput>
    where?: DeviceWhereInput
  }

  export type DeviceUpdateToOneWithWhereWithoutMedia_verificationsInput = {
    where?: DeviceWhereInput
    data: XOR<DeviceUpdateWithoutMedia_verificationsInput, DeviceUncheckedUpdateWithoutMedia_verificationsInput>
  }

  export type DeviceUpdateWithoutMedia_verificationsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUpdateManyWithoutDeviceNestedInput
  }

  export type DeviceUncheckedUpdateWithoutMedia_verificationsInput = {
    device_id?: StringFieldUpdateOperationsInput | string
    tpm_serial?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    device_name?: NullableStringFieldUpdateOperationsInput | string | null
    device_type?: NullableStringFieldUpdateOperationsInput | string | null
    os_version?: NullableStringFieldUpdateOperationsInput | string | null
    app_version?: NullableStringFieldUpdateOperationsInput | string | null
    tpm_public_key?: StringFieldUpdateOperationsInput | string
    api_key_hash?: NullableStringFieldUpdateOperationsInput | string | null
    registration_ip?: NullableStringFieldUpdateOperationsInput | string | null
    user_agent?: NullableStringFieldUpdateOperationsInput | string | null
    attestation_key?: NullableStringFieldUpdateOperationsInput | string | null
    verified_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_activity_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usage_meters?: UsageMeterUncheckedUpdateManyWithoutDeviceNestedInput
    media_files?: MediaFileUncheckedUpdateManyWithoutDeviceNestedInput
    verifications?: VerificationUncheckedUpdateManyWithoutDeviceNestedInput
    zk_proof_jobs?: ZKProofJobUncheckedUpdateManyWithoutDeviceNestedInput
    blockchain_anchors?: BlockchainAnchorUncheckedUpdateManyWithoutDeviceNestedInput
    device_media?: DeviceMediaUncheckedUpdateManyWithoutDeviceNestedInput
  }

  export type UsageMeterCreateManyDeviceInput = {
    id?: string
    metric: string
    value?: bigint | number
    period_start?: Date | string
    period_end?: Date | string | null
  }

  export type MediaFileCreateManyDeviceInput = {
    media_id: string
    media_type: string
    file_name: string
    file_hash: string
    ipfs_hash?: string | null
    file_size: bigint | number
    storage_path?: string | null
    signature_verified?: boolean
    uploaded_at?: Date | string
  }

  export type VerificationCreateManyDeviceInput = {
    verification_id: string
    media_id?: string | null
    status: string
    proof_data?: string | null
    created_at?: Date | string
    completed_at?: Date | string | null
  }

  export type ZKProofJobCreateManyDeviceInput = {
    proof_id: string
    media_hash?: string | null
    proof_type: string
    attestation_data?: string | null
    status?: string
    proof_data?: Buffer | null
    proof_hash?: string | null
    completed_at?: Date | string | null
    error_message?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type BlockchainAnchorCreateManyDeviceInput = {
    anchor_id: string
    proof_id: string
    proof_hash: string
    arweave_tx_id?: string | null
    arweave_status?: string | null
    solana_tx_sig?: string | null
    solana_status?: string | null
    anchored_at?: Date | string
    updated_at?: Date | string
  }

  export type DeviceMediaCreateManyDeviceInput = {
    id?: string
    file_path: string
    hash: string
    size: bigint | number
    mime_type: string
    uploaded_at?: Date | string
  }

  export type MediaVerificationCreateManyDeviceInput = {
    id?: string
    media_hash: string
    signature: string
    verified_at?: Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UsageMeterUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsageMeterUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsageMeterUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    metric?: StringFieldUpdateOperationsInput | string
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    period_start?: DateTimeFieldUpdateOperationsInput | Date | string
    period_end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MediaFileUpdateWithoutDeviceInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileUncheckedUpdateWithoutDeviceInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaFileUncheckedUpdateManyWithoutDeviceInput = {
    media_id?: StringFieldUpdateOperationsInput | string
    media_type?: StringFieldUpdateOperationsInput | string
    file_name?: StringFieldUpdateOperationsInput | string
    file_hash?: StringFieldUpdateOperationsInput | string
    ipfs_hash?: NullableStringFieldUpdateOperationsInput | string | null
    file_size?: BigIntFieldUpdateOperationsInput | bigint | number
    storage_path?: NullableStringFieldUpdateOperationsInput | string | null
    signature_verified?: BoolFieldUpdateOperationsInput | boolean
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUpdateWithoutDeviceInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateWithoutDeviceInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VerificationUncheckedUpdateManyWithoutDeviceInput = {
    verification_id?: StringFieldUpdateOperationsInput | string
    media_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ZKProofJobUpdateWithoutDeviceInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKProofJobUncheckedUpdateWithoutDeviceInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ZKProofJobUncheckedUpdateManyWithoutDeviceInput = {
    proof_id?: StringFieldUpdateOperationsInput | string
    media_hash?: NullableStringFieldUpdateOperationsInput | string | null
    proof_type?: StringFieldUpdateOperationsInput | string
    attestation_data?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    proof_data?: NullableBytesFieldUpdateOperationsInput | Buffer | null
    proof_hash?: NullableStringFieldUpdateOperationsInput | string | null
    completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    error_message?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainAnchorUpdateWithoutDeviceInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainAnchorUncheckedUpdateWithoutDeviceInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlockchainAnchorUncheckedUpdateManyWithoutDeviceInput = {
    anchor_id?: StringFieldUpdateOperationsInput | string
    proof_id?: StringFieldUpdateOperationsInput | string
    proof_hash?: StringFieldUpdateOperationsInput | string
    arweave_tx_id?: NullableStringFieldUpdateOperationsInput | string | null
    arweave_status?: NullableStringFieldUpdateOperationsInput | string | null
    solana_tx_sig?: NullableStringFieldUpdateOperationsInput | string | null
    solana_status?: NullableStringFieldUpdateOperationsInput | string | null
    anchored_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceMediaUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    file_path?: StringFieldUpdateOperationsInput | string
    hash?: StringFieldUpdateOperationsInput | string
    size?: BigIntFieldUpdateOperationsInput | bigint | number
    mime_type?: StringFieldUpdateOperationsInput | string
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MediaVerificationUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUncheckedUpdateWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type MediaVerificationUncheckedUpdateManyWithoutDeviceInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_hash?: StringFieldUpdateOperationsInput | string
    signature?: StringFieldUpdateOperationsInput | string
    verified_at?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use DeviceCountOutputTypeDefaultArgs instead
     */
    export type DeviceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceDefaultArgs instead
     */
    export type DeviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaFileDefaultArgs instead
     */
    export type MediaFileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaFileDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationDefaultArgs instead
     */
    export type VerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VerificationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ZKProofJobDefaultArgs instead
     */
    export type ZKProofJobArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ZKProofJobDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsageMeterDefaultArgs instead
     */
    export type UsageMeterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsageMeterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockchainAnchorDefaultArgs instead
     */
    export type BlockchainAnchorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BlockchainAnchorDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DeviceMediaDefaultArgs instead
     */
    export type DeviceMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DeviceMediaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MediaVerificationDefaultArgs instead
     */
    export type MediaVerificationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MediaVerificationDefaultArgs<ExtArgs>

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