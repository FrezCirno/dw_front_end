import request from '@/utils/request'

export function mysql_query(params) {
  return request({
    url: '/api/search/mysql',
    method: 'get',
    params
  })
}

export function mysql_sql(params) {
  return request({
    url: '/api/search/mysql/sql',
    method: 'get',
    params
  })
}

export function neo4j_query(params) {
  return request({
    url: '/api/search/mysql',
    method: 'get',
    params
  })
}

export function neo4j_close(params) {
  return request({
    url: '/api/search/neo4j/close',
    method: 'get',
    params
  })
}

export function neo4j_sql(params) {
  return request({
    url: '/api/search/neo4j/sql',
    method: 'get',
    params
  })
}
