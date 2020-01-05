import React from 'react'
import Loadable from 'react-loadable';

const loadings = () => <div>Loding....</div>

export default (loader, loading = loadings) => {
    return Loadable({
        loader,
        loading
    })
}