import { BaseLocationHook } from 'wouter-preact'
import { useCallback, useEffect, useState } from 'preact/hooks'

function getHashPath() {
  const [hash, token] = window.location.hash
    .substring(2)
    .replace('%23', '#')
    .split('?token=')

  const [path, anchor] = hash.split('#')

  return {
    anchor,
    path,
    token,
  }
}

const currentLocation = () =>
  getHashPath().path ? `/${getHashPath().path}` : '/'

const useHashLocation: BaseLocationHook = () => {
  const [location, setLocation] = useState(currentLocation())

  useEffect(() => {
    const handler = () => setLocation(currentLocation())

    window.addEventListener('hashchange', handler)
    window.addEventListener('popstate', handler)
    window.addEventListener('pushState', handler)
    return () => {
      window.removeEventListener('hashchange', handler)
      window.removeEventListener('popstate', handler)
      window.removeEventListener('pushState', handler)
    }
  }, [])

  const navigate = useCallback((to: string) => (window.location.hash = to), [])
  return [location, navigate]
}

export default useHashLocation
