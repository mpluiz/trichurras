export interface Storage {
  set: (key: string, value: any) => void
  get: (key: string) => any
  remove: (key: string) => void
  clear: () => void
}

export class StorageClient implements Storage {
  set(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get(key: string): any {
    const item = localStorage.getItem(key)
    if (item) return JSON.parse(item)
    return null
  }

  remove(key: string): void {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}
