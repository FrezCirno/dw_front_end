import request from '@/utils/request'

export function combine_any(params) {
  return request({
    url: '/api/combine/any',
    method: 'get',
    params
  })
}

export function combine_product(params) {
  return request({
    url: '/api/combine/product',
    method: 'get',
    params
  })
}

export function combine_movie(params) {
  return request({
    url: '/api/combine/movie',
    method: 'get',
    params
  })
}

export function mysql_product(params) {
  return request({
    url: '/api/mysql/product',
    method: 'get',
    params
  })
}

export function mysql_movie(params) {
  return request({
    url: '/api/mysql/movie',
    method: 'get',
    params
  })
}

export function mysql_any(params) {
  return request({
    url: '/api/mysql/any',
    method: 'get',
    params
  })
}

export function neo4j_product(params) {
  return request({
    url: '/api/mysql/product',
    method: 'get',
    params
  })
}

export function neo4j_relation(params) {
  return request({
    url: '/api/neo4j/relation',
    method: 'get',
    params
  })
}

export function neo4j_any(params) {
  return request({
    url: '/api/neo4j/any',
    method: 'get',
    params
  })
}

export function hive_any(params) {
  return request({
    url: '/api/hive/any',
    method: 'get',
    params
  })
}
