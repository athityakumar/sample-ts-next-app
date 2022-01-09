import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export const getLink = function(path: string): string {
    return `${publicRuntimeConfig.pagePrefix}${path}${publicRuntimeConfig.pageSuffix}`;
}

export default function() {
    return <></>
}