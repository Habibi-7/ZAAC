import type {
  CounterData,
  HeatmapDataPoint,
  Link,
  LinkCheckResponse,
  LinkCheckTarget,
  LogEvent,
  ViewDataPoint,
} from '@/types'

export interface MockAPIOptions {
  method?: string
  query?: Record<string, unknown>
  body?: unknown
  responseType?: string
}

interface ImportResultItem {
  index: number
  slug: string
  url: string
}

interface ImportResult {
  success: number
  skipped: number
  failed: number
  successItems: ImportResultItem[]
  skippedItems: ImportResultItem[]
  failedItems: (ImportResultItem & { reason: string })[]
}

const LINKS_STORAGE_KEY = 'SinkMockLinks'

const seedLinks: Link[] = [
  {
    id: 'demo-sink',
    url: 'https://sink.cool',
    slug: 'sink',
    comment: 'Product landing page',
    createdAt: 1717200000,
    updatedAt: 1717200000,
    title: 'Sink',
    description: 'A fast link shortener dashboard UI.',
  },
  {
    id: 'demo-docs',
    url: 'https://vuejs.org',
    slug: 'vue-docs',
    comment: 'Vue documentation',
    createdAt: 1717800000,
    updatedAt: 1717800000,
    title: 'Workers Docs',
    description: 'Reference material for edge runtime deployments.',
  },
  {
    id: 'demo-analytics',
    url: 'https://example.com/campaign?utm_source=newsletter',
    slug: 'spring-campaign',
    comment: 'Marketing campaign',
    createdAt: 1718400000,
    updatedAt: 1718400000,
    title: 'Spring Campaign',
    description: 'Example campaign link with UTM parameters.',
  },
  {
    id: 'demo-dashboard',
    url: 'https://nuxt.com',
    slug: 'nuxt',
    comment: 'Framework docs',
    createdAt: 1719000000,
    updatedAt: 1719000000,
    title: 'Nuxt',
    description: 'The Intuitive Vue Framework.',
  },
]

const countries = ['US', 'DE', 'GB', 'FR', 'JP', 'BR', 'IN', 'CA', 'AU', 'SG']
const cities = ['New York', 'Berlin', 'London', 'Paris', 'Tokyo', 'Sao Paulo', 'Mumbai', 'Toronto', 'Sydney', 'Singapore']
const browsers = ['Chrome', 'Safari', 'Firefox', 'Edge', 'Arc']
const oses = ['macOS', 'Windows', 'iOS', 'Android', 'Linux']

function clone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value)) as T
}

function wait(ms = 120) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

function hash(value: string) {
  return Array.from(value).reduce((sum, char) => sum + char.charCodeAt(0), 0)
}

function createId(prefix = 'mock') {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function createSlug(url: string) {
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '')
    return hostname.split('.')[0]
      ?.replace(/[^a-z0-9]+/gi, '-')
      .replace(/^-|-$/g, '')
      .toLowerCase() || 'demo-link'
  }
  catch {
    return 'demo-link'
  }
}

function getLinks(): Link[] {
  if (!import.meta.client)
    return clone(seedLinks)

  const stored = localStorage.getItem(LINKS_STORAGE_KEY)
  if (!stored) {
    localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(seedLinks))
    return clone(seedLinks)
  }

  try {
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : clone(seedLinks)
  }
  catch {
    return clone(seedLinks)
  }
}

function saveLinks(links: Link[]) {
  if (import.meta.client)
    localStorage.setItem(LINKS_STORAGE_KEY, JSON.stringify(links))
}

function parseRequest(api: string, options?: MockAPIOptions) {
  const url = new URL(api, 'https://sink-ui.local')
  const query: Record<string, string> = {}

  url.searchParams.forEach((value, key) => {
    query[key] = value
  })

  for (const [key, value] of Object.entries(options?.query ?? {})) {
    if (value !== undefined && value !== null && value !== '')
      query[key] = String(value)
  }

  return {
    path: url.pathname,
    query,
    method: (options?.method ?? 'GET').toUpperCase(),
    body: options?.body,
  }
}

function getBodyRecord(body: unknown): Record<string, unknown> {
  return body && typeof body === 'object' && !(body instanceof FormData)
    ? body as Record<string, unknown>
    : {}
}

function getCounter(seed: string): CounterData {
  const base = hash(seed)
  return {
    visits: 1200 + base * 7,
    visitors: 420 + base * 3,
    referers: 24 + base % 80,
  }
}

function getMetricNames(type: string, links: Link[]) {
  const metrics: Record<string, string[]> = {
    country: countries,
    region: ['California', 'Bavaria', 'England', 'Ile-de-France', 'Tokyo'],
    city: cities,
    referer: ['Direct', 'Google', 'GitHub', 'Twitter', 'Product Hunt', 'Newsletter'],
    slug: links.map(link => link.slug),
    language: ['en-US', 'de-DE', 'fr-FR', 'ja-JP', 'pt-BR'],
    timezone: ['America/New_York', 'Europe/Berlin', 'Europe/London', 'Asia/Tokyo'],
    device: ['Desktop', 'Mobile', 'Tablet'],
    deviceType: ['desktop', 'mobile', 'tablet'],
    os: oses,
    browser: browsers,
    browserType: ['Blink', 'WebKit', 'Gecko'],
  }

  return metrics[type] ?? metrics.referer ?? []
}

function createViews(unit = 'day'): ViewDataPoint[] {
  const length = unit === 'minute' ? 24 : unit === 'hour' ? 24 : 14
  const now = Date.now()
  const step = unit === 'minute' ? 60_000 : unit === 'hour' ? 3_600_000 : 86_400_000

  return Array.from({ length }, (_, index) => {
    const date = new Date(now - (length - index - 1) * step)
    const visits = 80 + Math.round(Math.sin(index / 2) * 24) + index * 4
    return {
      time: unit === 'day'
        ? date.toISOString().slice(0, 10)
        : date.toISOString().slice(0, 16).replace('T', ' '),
      visits,
      visitors: Math.max(12, Math.round(visits * 0.62)),
    }
  })
}

function createHeatmap(): HeatmapDataPoint[] {
  const data: HeatmapDataPoint[] = []
  for (let weekday = 1; weekday <= 7; weekday++) {
    for (let hour = 0; hour < 24; hour++) {
      const workday = weekday <= 5 ? 1.2 : 0.7
      const activeHour = hour >= 8 && hour <= 18 ? 1.4 : 0.45
      const visits = Math.round((weekday * 9 + hour * 3) * workday * activeHour)
      data.push({
        weekday,
        hour,
        visits,
        visitors: Math.round(visits * 0.58),
      })
    }
  }
  return data
}

function createLogs(links: Link[]): LogEvent[] {
  const now = Math.floor(Date.now() / 1000)
  return Array.from({ length: 18 }, (_, index) => {
    const country = countries[index % countries.length]!
    return {
      id: `event-${index}`,
      slug: links[index % links.length]?.slug ?? 'sink',
      os: oses[index % oses.length],
      browser: browsers[index % browsers.length],
      country,
      city: cities[index % cities.length],
      latitude: 48 + Math.sin(index) * 35,
      longitude: 8 + Math.cos(index) * 90,
      COLO: ['SFO', 'FRA', 'LHR', 'NRT', 'GRU'][index % 5],
      timestamp: now - index * 95,
    }
  })
}

function createLinkFromBody(body: Record<string, unknown>, existing?: Link): Link {
  const now = Math.floor(Date.now() / 1000)
  const url = String(body.url ?? existing?.url ?? 'https://example.com')
  const slug = String(body.slug ?? existing?.slug ?? createSlug(url))
  return {
    ...existing,
    id: existing?.id ?? createId('link'),
    url,
    slug,
    comment: body.comment as string | undefined,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    expiration: body.expiration as number | undefined,
    title: body.title as string | undefined,
    description: body.description as string | undefined,
    image: body.image as string | undefined,
    apple: body.apple as string | undefined,
    google: body.google as string | undefined,
    cloaking: body.cloaking as boolean | undefined,
    redirectWithQuery: body.redirectWithQuery as boolean | undefined,
    password: body.password as string | undefined,
    unsafe: body.unsafe as boolean | undefined,
    geo: body.geo as Record<string, string> | undefined,
  }
}

export async function handleMockAPI<T = unknown>(api: string, options?: MockAPIOptions): Promise<T> {
  await wait()

  const { path, query, body } = parseRequest(api, options)
  const links = getLinks()
  const response = (value: unknown) => clone(value) as T

  if (path === '/api/verify')
    return response({ ok: true })

  if (path === '/api/location')
    return response({ latitude: 40.7128, longitude: -74.006 })

  if (path === '/api/backup')
    return response({ ok: true })

  if (path === '/api/link/list') {
    const limit = Number(query.limit || 24)
    const offset = Number(query.cursor || 0)
    const page = links.slice(offset, offset + limit)
    const next = offset + page.length
    return response({
      links: page,
      cursor: String(next),
      list_complete: next >= links.length,
    })
  }

  if (path === '/api/link/search')
    return response(links)

  if (path === '/api/link/query') {
    const link = links.find(item => item.slug === query.slug) ?? links[0]
    return response(link)
  }

  if (path === '/api/link/create') {
    const link = createLinkFromBody(getBodyRecord(body))
    saveLinks([link, ...links])
    return response({ link })
  }

  if (path === '/api/link/edit') {
    const bodyRecord = getBodyRecord(body)
    const index = links.findIndex(item => item.slug === bodyRecord.slug)
    const link = createLinkFromBody(bodyRecord, links[index])
    if (index >= 0)
      links[index] = link
    else
      links.unshift(link)
    saveLinks(links)
    return response({ link })
  }

  if (path === '/api/link/delete') {
    const slug = String(getBodyRecord(body).slug ?? '')
    saveLinks(links.filter(link => link.slug !== slug))
    return response({ ok: true })
  }

  if (path === '/api/link/ai')
    return response({ slug: createSlug(query.url ?? '') })

  if (path === '/api/link/og-ai')
    return response({ title: 'Generated preview title', description: 'Mock OpenGraph description for the UI preview.' })

  if (path === '/api/upload/image')
    return response({ url: 'https://placehold.co/1200x630/png' })

  if (path === '/api/link/export') {
    return response({
      version: '1.0',
      exportedAt: new Date().toISOString(),
      count: links.length,
      links,
      cursor: '',
      list_complete: true,
    })
  }

  if (path === '/api/link/import') {
    const batch = Array.isArray(getBodyRecord(body).links) ? getBodyRecord(body).links as Record<string, unknown>[] : []
    const result: ImportResult = {
      success: 0,
      skipped: 0,
      failed: 0,
      successItems: [],
      skippedItems: [],
      failedItems: [],
    }
    const nextLinks = [...links]
    batch.forEach((item, index) => {
      const link = createLinkFromBody(item)
      if (nextLinks.some(existing => existing.slug === link.slug)) {
        result.skipped++
        result.skippedItems.push({ index, slug: link.slug, url: link.url })
        return
      }
      nextLinks.push(link)
      result.success++
      result.successItems.push({ index, slug: link.slug, url: link.url })
    })
    saveLinks(nextLinks)
    return response(result)
  }

  if (path === '/api/link/check') {
    const batch = Array.isArray(getBodyRecord(body).links) ? getBodyRecord(body).links as LinkCheckTarget[] : []
    const result: LinkCheckResponse = {
      results: batch.map((link, index) => ({
        ...link,
        status: index % 5 === 0 ? 404 : 200,
        ok: index % 5 !== 0,
        duration: 80 + index * 17,
        checkedAt: new Date().toISOString(),
        error: index % 5 === 0 ? 'Mock broken link' : undefined,
      })),
    }
    return response(result)
  }

  if (path === '/api/stats/counters') {
    const ids = query.id?.split(',').filter(Boolean) ?? []
    const data = ids.length
      ? ids.map(id => ({ id, ...getCounter(id) }))
      : [getCounter(query.slug ?? 'all')]
    return response({ data })
  }

  if (path === '/api/stats/views')
    return response({ data: createViews(query.unit) })

  if (path === '/api/stats/heatmap')
    return response({ data: createHeatmap() })

  if (path === '/api/stats/metrics') {
    const names = getMetricNames(query.type ?? 'referer', links)
    return response({
      data: names.map((name, index) => ({
        name,
        count: Math.max(8, 240 - index * 17),
      })),
    })
  }

  if (path === '/api/stats/export') {
    const csv = [
      'slug,url,visits,visitors',
      ...links.map(link => `${link.slug},${link.url},${getCounter(link.id).visits},${getCounter(link.id).visitors}`),
    ].join('\n')
    return csv as T
  }

  if (path === '/api/logs/events')
    return response(createLogs(links))

  if (path === '/api/logs/locations') {
    return response({
      data: createLogs(links).map(log => ({
        latitude: log.latitude,
        longitude: log.longitude,
        count: 1 + hash(log.id) % 8,
      })),
    })
  }

  throw new Error(`Mock API route not implemented: ${path}`)
}
