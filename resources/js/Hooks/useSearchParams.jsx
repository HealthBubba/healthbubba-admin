import React from 'react'

export default function useSearchParams() {

    const url = new URLSearchParams(window.location.search)
    return Object.fromEntries(url.entries())
}
