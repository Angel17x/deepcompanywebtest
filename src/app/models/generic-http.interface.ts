export interface GenericHttp<T> {
    results: T | null
    pages: number | null
    records: number | null
    current: number | null
    filter: string | null
    error: string | null
  }
  